$('#save').on('click', function(){
    save_data();
})

function load_and_display(){
    var saved_settings = JSON.parse(localStorage.getItem('munpila_settings'));
    if(saved_settings){
        $("div#paths").html(Handlebars.compile($('#paths_tmpl').html())(saved_settings));
    } else {
        var fake_data = {paths: {suspicious:[], examined: [], appealed:[]}};
        $("div#paths").html(Handlebars.compile($('#paths_tmpl').html())(fake_data));
    }
}
function save_data(){
    var data = {paths: {suspicious:[], examined:[], appealed:[]}};
    $('div.path').each(function(){
        var inputs = $(this).find('input'),
            tmp = {title: inputs.eq(0).val(), path: inputs.eq(1).val(), list_number: inputs.eq(2).val()};
        console.log(tmp);
        if (tmp.path.length!=''){
            data.paths[$(this).closest('form').data('id')].push(tmp);
        }
    })
    // if (data.paths.suspicious.length || data.paths.examined.length || data.paths.appealed.length){
        var current_settings = JSON.parse(localStorage.getItem('munpila_settings'));
        if (current_settings){
            current_settings.paths.suspicious = data.paths.suspicious;
            current_settings.paths.examined = data.paths.examined;
            current_settings.paths.appealed = data.paths.appealed;
            localStorage.setItem('munpila_settings', JSON.stringify(current_settings));    
        } else {
            localStorage.setItem('munpila_settings', JSON.stringify(data));
        }
    // }
    load_and_display();
}

load_and_display();