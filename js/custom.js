// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "Dog-Pic-1.jpg", 
	 		 "Dog-Pic-2.jpg",
			 "Dog-Pic-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})