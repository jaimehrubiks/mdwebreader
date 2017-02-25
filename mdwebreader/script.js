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
        // $.get( url , function( data ) {
        //     $('.preview').first().html(converter.makeHtml( data ));
        // });
        $.ajax({
            url: url,
            cache: false,
            dataType: "html",
            success: function(data) {
                $('.preview').first().html(converter.makeHtml( data ));
            }
        })
    })
}

/*
function fixLinks(){
    $('a').each(function(){
        if($(this).attr('href').match(/\.md$/))
            $(this).attr('href','docs/' + $(this).attr('href'));
        else{
            $(this).addClass('disabledAnchor');
            //$(this).attr('href','null');
            //$(this).attr('disable');
        }
    })
}
$('.index').resizable({
    handles: 'n,w,s,e',
    minWidth: 200,
    maxWidth: 400
}); 
*/