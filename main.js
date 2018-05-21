		$(document).ready(){
// MAIN MENU EFFECT
		$('.card').click(
			function(){
				$(this).toggleClass('is-flipped');
				$('.card').not(this).removeClass('is-flipped');
			}
			)
// STORE PAGE
		$('.box').mouseover(function(){
		var bg = $(this).css('background-image');	  
			$('.box').css("background", "none");
			$('.store').css("background-image", bg);	  
		});
		$('.box').mouseout(function(){		  
			$('.box').css('background', "");
			$('.store').css('background', '');		  
		});

		$(".box").click(function(){
			$(".divGalleryContent").toggle();
		});

// WINE HOVER IMG
		$('.boxWineStore').mouseover(function(){
		var bg = $(this).css('background-image');	  
			$('.boxWineStore').css("background", "none");
			$('.wine-club').css("background-image", bg);	  
		});
		$('.boxWineStore').mouseout(function(){		  
			$('.boxWineStore').css('background', "");
			$('.wine-club').css('background', '');		  
		});

		$(".boxWineStore").click(function(){
			$(".boxWineContent").toggle();
		});


		$('.close').click( function(){ 
					$(this).css('display', 'none'); 
					}
				);
			});
		});
}	