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

function calculatePriceWithDiscount() {

  const price = parseInt(originalPriceD.value);
  const discount = parseInt(discounts.value);

  if(price == 0 || discount == 0 || isNaN(price) || isNaN(discount)) {

    return discountResult.innerText = `ERROR: El precio original y el descuento deben ser mayor a 0.`;

  } else if (discount >= 100) {
    
    discountResult.innerText = `El descuento no puede ser mayor o igual a 100.`;

  } else {

    const priceDiscount = priceWithDiscount(price, discount);
    return discountResult.innerText = `El precio con un descuento de ${discount}% es de: $${priceDiscount}.`;
  }
}


// COUPONS
const couponList = [
  { coupon: 'BASICO', discount: 15 },
  { coupon: 'PLATINO', discount: 30 },
  { coupon: 'DORADO', discount: 50 }
];

function calculatePriceWithCoupon() {


}

if(discountBtn) {

  discountBtn.addEventListener('click', calculatePriceWithDiscount);
}