console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});