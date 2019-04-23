
// Initially hides navigation bar.
// Becomes visible at a certain point.
$(document).ready(function(){
	$("nav").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('nav').fadeIn();
			} else {
				$('nav').fadeOut();
			}
		});
	});

	// Causes the "enter" button to have a smooth scroll to "About"
	$("#enter").click(function() {
		$('html,body').animate({
			scrollTop: ($("#about").offset().top + 40)}, 1000, "easeInOutExpo");
		});
});
