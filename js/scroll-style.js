$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if(scroll > 60) {
			$(".navbar-expand-lg").css("background" , "black");
		} else {
			$(".navbar-expand-lg").css("background" , "transparent");
		}

	})
})