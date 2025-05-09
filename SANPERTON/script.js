if (document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded')
}
else{
	ready()
}
function ready(){
	var removeCartItemButtons = document.getElementsByClassName('remove')
	for (var i = 0; i < removeCartItemButtons.length; i++){
		var button = removeCartItemButtons[i]
		button.addEventListener('click',removeCartItem)
	}
}
function removeCartItem(){
	var buttonClicked = event.target
		buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
		updateCartTotal()
}
function updateCartTotal() {
	var cartItemContainer = document.getElementsByClassName('cart-items')[0]
	var cartRows = cartItemContainer.getElementsByClassName('cart-row')
	var total = 0
	for (var i = 0; i < cartRows.length; i++) {
		var cartRow = cartRows[i]
		var priceElement = cartRow.getElementsByClassName('cart-price')[0]
		var quantityElement = cartRow.getElementsByClassName('quantity')[0]
		console.log(priceElement, quantityElement)
		var price = parseFloat(priceElement.innerText.replace('$', ''))
		var quantity = quantityElement.value
		total = total (price * quantity)
	}
	document.getElementsByClassName('cart-total-price')[0].innerText = '<' + total)
}
