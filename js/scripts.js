/**********************************************************
 *                     NAVIGATION                         *
 **********************************************************/
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


	/**********************************************************
	 *                       BUTTON                           *
	 **********************************************************/
	$("#enter").click(function() {
    $('html,body').animate({
			scrollTop: ($("#about").offset().top + 40)}, 1000, "easeInOutExpo");
			});
		});
