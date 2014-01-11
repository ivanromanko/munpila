chrome.browserAction.onClicked.addListener(function(){
  var stored_paths = JSON.parse(localStorage.getItem('munpila_settings')).paths;
  if (!stored_paths){
    alert('Не удалось получить список подключённых документов. Проверьте настройки');
    return;
  }
  var result = [],
      requests = [];
  
  $.each(stored_paths, function(key, value){
    $.each(this, function(){
      var sample_url = this.path,
          url_title = this.title,
          document_key = sample_url.match(/key=(.*?)&/)[1],
          url_template = "https://spreadsheets.google.com/feeds/list/" + document_key + "/LIST_NUMBER/public/basic?alt=json";

      $.each(this.list_numbers, function(i){
        var url = url_template.replace('LIST_NUMBER', this),
            list_id = this-1,
            request = $.getJSON(url)
              .done(function(data){
                var response = data,
                    list_title = data.feed.title.$t;
                if (response.feed.entry){
                  $.each(response.feed.entry, function(){
                    var title = this.title.$t,
                        link = this.content.$t.match(/notificationId=(\d+)/),
                        notification_id = link ? link[1]: null;
                    if (notification_id){
                      result.push({title: title, notification_id: notification_id, list_number: list_title, type: key, url: sample_url+'&gid='+list_id});
                    }
                  });
                }
              })
              .fail(function(data){
                alert('Не удалось загрузить документ ' + url_title + ' ' + sample_url + ' Удалите его из настроек.');
              })
        requests.push(request);
      });

    })
  })
  
  $.when.apply($, requests).done(function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {data: result});
    });
  })
  
})