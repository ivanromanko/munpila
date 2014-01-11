chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    highlight(request.data);
  }
);


function highlight(data){
  var notification_ids_list = {},
      colors = {'suspicious': 'yellow', 'examined': 'PaleGreen', 'appealed': 'GoldenRod'},
      rus_names= {'suspicious': 'Подозрительно', 'examined': 'Проверено', 'appealed': 'Обжаловано'};
  $.each(data, function(){
    notification_ids_list[this.notification_id] = this;
  })
  console.log(notification_ids_list);
  $('td.descriptTenderTd').each(function(){
    var $this = $(this),
        $link = $this.find('a').eq(0),
        order_id_in_link = $link.prop('href').match(/notificationId=(\d+)/);
    if (order_id_in_link){
      order_id = order_id_in_link[1];
      if (order_id in notification_ids_list){
        $this.css('background-color',colors[notification_ids_list[order_id]['type']]);
        var list_of_links = $this.closest('table').next('div').find('ul'),
            new_li = $('<li></li>').html('<a></a>').css('background-color',colors[notification_ids_list[order_id]['type']]),
            a_in_li = new_li.find('a').eq(0);
        a_in_li.prop('href', notification_ids_list[order_id]['url']).text(rus_names[notification_ids_list[order_id]['type']]);
        new_li.html(new_li.html() + ' ' + notification_ids_list[order_id].list_number);
        list_of_links.append(new_li);
      }
    }
  })
}
