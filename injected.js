chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    highlight(request.data);
  }
);


function highlight(data){
  var notification_ids_list = {};
  $.each(data, function(){
    notification_ids_list[this.notification_id] = this;
  })

  $('td.descriptTenderTd').each(function(){
    var $this = $(this),
        $link = $this.find('a').eq(0),
        order_id_in_link = $link.prop('href').match(/notificationId=(\d+)/);
    if (order_id_in_link){
      order_id = order_id_in_link[1];
      if (order_id in notification_ids_list){
        $this.css('background-color','lightgreen');
        $this.find('dt').eq(0).append(
          '<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
          notification_ids_list[order_id].title + '&nbsp;&nbsp; Название листа:&nbsp;"'+ 
          notification_ids_list[order_id].list_number + '"' +
          '</span>'
        );
      }
    }
  })
}
