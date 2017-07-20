
$(document).ready(function() {
	//скрытие кнопки заказать
	$('.order').on('click', function(e){
		$(this).css({
			display: 'none'
		});
	});
	//реализация счетчика +/-
	$('.counter_down').click(function () {
                var $input = $(this).parent().find('.counter_value_input');
                var count = parseInt($input.val()) - 1;
                // count = count < 0 ? 0 : count;
                $input.val(count);
                $input.change();
                return false;  
            });

    $('.counter_up').click(function () {
        var $input = $(this).parent().find('.counter_value_input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
	//перелючение вида товара
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
	// Поворот стрелки select
	$('select').on('click', clickRotate);
	var deg = 0;
	function clickRotate(e) {
		deg += 180;
		$('.choose_city__select-button').css({
			'transform' : 'rotate(' + deg + 'deg)'
		});
	}
});