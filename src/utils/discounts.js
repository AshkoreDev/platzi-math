const originalPriceD = document.getElementById('originalPriceD');
const discounts = document.getElementById('discount');
const discountBtn = document.getElementById('discountBtn');
const discountResult = document.getElementById('discountResult');

const originalPriceC = document.getElementById('originalPriceC');
const coupons = document.getElementById('coupon');
const couponBtn = document.getElementById('couponBtn');
const couponResult = document.getElementById('couponResult');

// DISCOUNTS
function priceWithDiscount(price, discount) {

  const percentPriceWithDiscount = 100 - discount;
  return (price * percentPriceWithDiscount) / 100;
}

function CalculatePriceWithDiscount() {

  const price = parseInt(originalPriceD.value);
  const discount = parseInt(discounts.value);

  if(price == 0 || discount == 0 || isNaN(price) || isNaN(discount)) {

    return discountResult.innerText = `ERROR: El precio original y el descuento deben ser mayor a 0.`;

  } else {

    const priceDiscount = priceWithDiscount(price, discount);
    return discountResult.innerText = `El precio con un descuento de ${discount}% es de: $${priceDiscount}.`;
  }
}

// COUPONS

if(discountBtn) {

  discountBtn.addEventListener('click', CalculatePriceWithDiscount);
}