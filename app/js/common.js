$(document).ready(function() {
	// $('.button-order').click(function() {
	// 	$('.button-order').addClass('none');
	// 	$('.counter').removeClass('none');
	// });

	// $('.counter__plus').click(function() {
	// 	$('.val').html() // +1
	// });

	// $('.counter__minus').click(function() {

	// 	if ($('.val').html() != '1') {
	// 		$('.val').html() // -1	
	// 	} else {
	// 		$('.button-order').removeClass('none');
	// 		$('.counter').addClass('none');	
	// 	}

	// });
	
	$('#btn-1').on("click", function() {
		if( $('#p-1').css('fill') == "rgb(70, 194, 198)"){
  			$('#p-1').css({ fill: '#dcdcdc' });
  			$('#p-2').css({ fill: '#46C2C6'});
  		}else{
  			$('#p-1').css({ fill: "#46C2C6" });
  			$('#p-2').css({ fill: '#dcdcdc'})
  		}    
	});
	
	$('#btn-2').on("click", function() {
		if( $('#p-2').css('fill') == "rgb(70, 194, 198)"){
  			$('#p-2').css({ fill: '#dcdcdc' });
  			$('#p-1').css({ fill: '#46C2C6'});
  		}else{
  			$('#p-2').css({ fill: "#46C2C6" });
  			$('#p-1').css({ fill: '#dcdcdc'})
  		}    
	});

	// $('#choose_city').click(function(){
 //        $('.choose_city__select-button').toggleClass('rotate_but');
 //        return false;
 //    });




});