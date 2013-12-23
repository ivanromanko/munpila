chrome.browserAction.onClicked.addListener(function(){

  var sample_url = "https://docs.google.com/spreadsheet/pub?key=0Ar0A-n08O083dDA0UjhYSDJzYUxxcFNvRjQxclJOQkE&output=html",
      NUMBER_OF_LISTS = 18,
      key = sample_url.match(/key=(.*?)&/)[1],
      url_template = "https://spreadsheets.google.com/feeds/list/" + key + "/LIST_NUMBER/public/basic?alt=json",
      result = [],
      requests = [];
  
  for (var i = 1; i <= NUMBER_OF_LISTS; i++) {
    var url = url_template.replace('LIST_NUMBER', i),
        request = $.getJSON(url)
          .done(function(data){
            console.log(data);
            var response = data;
            if (response.feed.entry){
              $.each(response.feed.entry, function(){
                var title = this.title.$t,
                    link = this.content.$t.match(/notificationId=(\d+)/),
                    notification_id = link ? link[1]: null;
                if (notification_id){
                  result.push({title: title, notification_id: notification_id, list_number: i});
                }
              });
            }
          })
    requests.push(request);
  };
  $.when.apply($, requests).done(function(){
    console.log(result);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {data: result});
    });
  })
  
})

