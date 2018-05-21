		$(document).ready()
// MAIN MENU EFFECT
		$('.card').mouseenter(function(){
				$(this).addClass('is-flipped');
		});

		$('.card').mouseleave(function(){
			var that = this;
				setTimeout(function(){
					$(that).removeClass('is-flipped');
				}, 500);
		});
		
// STORE PAGE
		$('.box').mouseover(function(){
		var bg = $(this).css('background-image');
			$('.box').css("background", "none");
			$('.store').css("background-image", bg);	
			$('.store').css("background-position", "center"); 
			$('.store').css("background-size", "cover");  
		});
		$('.box').mouseout(function(){		  
			$('.box').css('background', "");
			$('.store').css('background', '');		  
		});
// MODAL WINDOW
		$(".box").click(function(){
			$(".modal-content").fadeToggle("slow");
		});
		$(".box-wine-store").click(function(){
			$(".modal-content").fadeToggle("slow");
		});
		$(".close").click(function(){
			$(".modal-content").fadeOut("slow");
		});


// WINE HOVER IMG
		$('.box-wine-store').mouseover(function(){
		var bg = $(this).css('background-image');	  
			$('.box-wine-store').css("background", "none");
			$('.wine-club').css("background-image", bg);	  
		});
		$('.box-wine-store').mouseout(function(){		  
			$('.box-wine-store').css('background', "");
			$('.wine-club').css('background', '');		  
		});

	
			$(".color-menu-BG").fadeIn("slow");
			// $(".menu-eat").fadeIn("slow");



