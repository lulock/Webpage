$('.toggle').click(function (event) {
    event.preventDefault();
    //var target = $(this).attr('href');
    //$(target).toggle('bounce', 600);
    var target = $(this).attr('href');


    var options = {
        duration: 500,
        easing: 'linear'
    };
    
    $( "div.indexTitle" ).replaceWith( "<div class =indexTitle>Welcome :)</div>" );
    
    $('.profile').animate({
        right: '100px'}, options).animate({
        left:'150%'}, options).fadeOut(500, function(){
        window.location = target;
        //location.reload(); 

    });
});