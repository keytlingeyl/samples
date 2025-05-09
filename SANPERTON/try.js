
$(document).ready(function(){
	update_amounts();
	$('.qty, .price').on('keyup keypress blur change'
	function(e){
		update_amounts();
	});
});
function update_amounts(){
	var sum = 0.0;
	$('#myTable > tbody>tr').each(function(){
		var qty = $(this).find('.qty').val();
		var price = $(this).find('.price').val();
		var amount = (qty*price)sum+=amount;
		$(this).find('.amount').text(''+amount);
	});
	$('.total').text(sum);
}

var incrementQty;
var decrementQty;
var plusBtn = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function(){
	var $n = $(this)
	.parent(".button-container")
	.find(".qty");
	$n.val(Number($n.val())+1);
	update_amounts();;
})

var decrementQty = minusBtn.click(function(){
	var $n = $(this)
	.parent(".button-container")
	.find(".qty");
	var QtyVal = Number($n.val())
	if(QtyVal>0);
		$n.val(QtyVal-1);
}
	update_amounts();
})



	var noti = document.querySelector('.cart-logo');
	var select = document.querySelector('.select');
	var button = document.querySelector('button');
	for(but of button)
	{
		but.addEventListener('click',(e)=>{
			var add = Number(noti.getAttribute('data-count')|| 0);;
			noti.setAttribute('data-count', add + 1);
			noti.classList.add('zero');
			
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Add to Cart";
			if (clone){
				noti.onclick =()=>{
					select.classList.toggle('display');
				}
			}
		})
	}
