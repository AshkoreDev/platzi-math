const originalPrice = document.getElementById('originalPrice');
const discounts = document.getElementById('discount');
const discountResult = document.getElementById('discountResult');
const discountBtn = document.getElementById('discountBtn');

function priceWithDiscount(price, discount) {

  const percentPriceWithDiscount = 100 - discount;
  return (price * percentPriceWithDiscount) / 100;
}

function CalculatePriceWithDiscount() {

  const price = parseInt(originalPrice.value);
  const discount = parseInt(discounts.value);

  if(price == 0 || discount == 0 || isNaN(price) || isNaN(discount)) {

    return discountResult.innerText = `ERROR: El precio original y el descuento deben ser mayor a 0.`;

  } else {

    const priceDiscount = priceWithDiscount(price, discount);
    return discountResult.innerText = `El precio con un descuento de ${discount}% es de: $${priceDiscount}.`;
  }
}

if(discountBtn) {

  discountBtn.addEventListener('click', CalculatePriceWithDiscount);
}