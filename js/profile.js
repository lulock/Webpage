$(function(){

    $('<div></div>')
        .attr('id','overlay')
        .css('opacity',.9)
        .hover(function(){
        $(this).addClass('active');
    }, function(){
        $(this).removeClass('active');
        setTimeout(function(){
            $('#overlay:not(.active)').slideUp();
        },200);
    }).appendTo('#profile-dash');

    $('a.more').click(function(){
        $('#overlay:not(:animated)')
            .addClass('active')
            .html('<p>Hey! My name is Leila and I am a computer scientist. My interests reach far and wide; you will find me dabbling with art, taking photos, running, or coding. Right now, I am super excited by 3D graphic art, so I have been learning a lot about it. My current CS focus is in graphics and animation, so if you would like to collaborate on something fun (games included), then hit me up on github or find me on linkedIn. Otherwise, this is a little peak into my world. Enjoy!</p>')
            .slideDown();
    });

});

$(window).on('load resize', function() {
    $('iframe[src*="embed.spotify.com"]').each( function() {
        $(this).css('width', $(this).parent().css('width'));
        $(this).attr('src', $(this).attr('src'));
        $(this).removeClass('loaded');

        $(this).on('load', function(){
            $(this).addClass('loaded');
        });
    });
    var width = $(window).width(); 

    if (width <768) {
        var height = $("#wrapper").height();
        $("#insta").height(height);
    } else {
        $("#insta").height(290);
    }
});