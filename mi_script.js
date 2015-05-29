$(window).scroll(function(){
	var prueba = $(this).scrollTop();
	// $("#kristina").text("scroll igual a " + prueba);
	if (prueba > 400) {
		$(".icono-social").addClass("scroll");
	}
		else if (prueba < 400) {
		$(".icono-social").removeClass("scroll");
	}
});

// <li id="kristina">Scroll igual a: href="#paquetes1">PAQUETES</a></li>