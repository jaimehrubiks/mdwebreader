var converter = new showdown.Converter();

$(document).ready(function(){
    console.log('Reader Loaded');

    $.ajax({
        url: "tree.html",
        cache: false,
        dataType: "html",
        success: function(data) {
            $(".index").html(data);
            clickSystem();
        }
    });

    $.ajax({
        url: "docs/readme.md",
        cache: false,
        dataType: "html",
        success: function(data) {
            $('.preview').first().html(converter.makeHtml(data));
        },
        error: function(){
            $('.preview').first().html(converter.makeHtml($('.loading').first().text()));
        }
    });

})

function clickSystem(){
    $("a").click(function(evt){
        evt.preventDefault();
        var url = evt.target.href
        $.ajax({
            url: url,
            cache: false,
            dataType: "html",
            success: function(data) {
                $('.preview').empty()
                if((/.html$/i).test(url)){
                    $('.preview').append('<iframe src="'+url+'"></iframe>')
                    $('#preview').removeClass('md');
                }
                else{
                    $('.preview').first().html(converter.makeHtml(data));
                    $('#preview').addClass('md');
                }
            }
        })
    })
}

