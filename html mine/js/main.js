		$(document).ready()
// MAIN MENU EFFECT
		$('.card').mouseover(
			function(){
				$(this).toggleClass('is-flipped');
				$('.card').not(this).removeClass('is-flipped');
			}
			);
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

		$(".box").click(function(){
			$(".div-gallery-content").toggle();
		});
		// var card = document.querySelector('.card');
		// card.addEventListener( 'mouseover', function() {
		// 	card.classList.toggle('is-flipped');
		// });

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

		$(".box-wine-store").click(function(){
			$(".box-wine-content").toggle();
		});


