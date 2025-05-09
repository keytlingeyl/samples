let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');




if(document.readyState =='loading'){
	document.addEventListener('DOMContentLoaded', ready);
}
else{
	ready();
}

function ready(){
	//remove Items From Cart
	var removeCartButtons = document.getElementsByClassName('cart-remove');
	console.log(removeCartButtons);
	for (var i = 0; i < removeCartButtons.length; i++){
		var button = removeCartButtons[i];
	button.addEventListener('click', removeCartItem);
	}
}

//Remove Items From Cart
function removeCartItem(){
	var buttonClicked = event.target;
	buttonClicked.parentElement.parentElement.remove();
}