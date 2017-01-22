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
       .html('<p>Hey! My name is Leila and I am a computer scientist. I try to be creative, so my interests reach far and wide. You will find me dabbling with different things every so often. Right now, I am super excited by 3D graphic art, so I have been learning a lot about it. My current CS focus is in graphics and animation, so if you would like to collaborate on something fun (games included), then hit me up on e-mail or find me on github. Otherwise, this is a little peak into my world. Enjoy!</p>')
       .slideDown();
   });
 
});