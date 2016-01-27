$('.toggle').click(function (event) {
	event.preventDefault();
	var target = $(this).attr('href');
	$(target).toggle('bounce', 600);


	var options = {
      duration: 500,
      easing: 'linear'
   };
	$('.profile').animate({
		right: '100px'}, options).animate({
		opacity: 0.25,
		left:'150%'}, options).attr('disabled', true);
});