$('#save').on('click', function(){
    save_data();
})

function load_and_display(){
    var saved_settings = JSON.parse(localStorage.getItem('munpila_settings'));
    if(saved_settings){
        paths_number = saved_settings.paths.length;
        if (paths_number){
            $("div#paths").html(Handlebars.compile($('#paths_tmpl').html())(saved_settings));
            $("div#paths form").append(Handlebars.compile($('#one_path_tmpl').html())())
        }

    } else {
        var fake_data = {paths: [{path:'', title:''}]};
        $("div#paths").html(Handlebars.compile($('#paths_tmpl').html())(fake_data));
    }
}
function save_data(){
    var data = [];
    $('div.path').each(function(){
        var inputs = $(this).find('input');
        var tmp = {title: inputs.eq(0).val(), path: inputs.eq(1).val()};
        if (tmp.path.length){
            data.push(tmp);
        }
    })
    if (data.length){
        var current_settings = JSON.parse(localStorage.getItem('munpila_settings'));
        if (current_settings){
            current_settings.paths = data;
            localStorage.setItem('munpila_settings', JSON.stringify(current_settings));    
        } else {
            var tmp = {paths: data};
            localStorage.setItem('munpila_settings', JSON.stringify(tmp));    
        }
    }
    load_and_display();
}

load_and_display();