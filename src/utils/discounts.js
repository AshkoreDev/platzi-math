const originalPriceD = document.getElementById('originalPriceD');
const discounts = document.getElementById('discount');
const discountBtn = document.getElementById('discountBtn');
const discountResult = document.getElementById('discountResult');

const originalPriceC = document.getElementById('originalPriceC');
const coupons = document.getElementById('coupons');
const couponBtn = document.getElementById('couponBtn');
const couponResult = document.getElementById('couponResult');

// DISCOUNTS
function priceWithDiscount(priceD, discount) {

  const percentPriceWithDiscount = 100 - discount;
  return (priceD * percentPriceWithDiscount) / 100;
}

function calculatePriceWithDiscount() {

  const priceD = parseInt(originalPriceD.value);
  const discount = parseInt(discounts.value);

  if(priceD == 0 || discount == 0 || isNaN(priceD) || isNaN(discount)) {

    return discountResult.innerText = `ERROR: El precio original y el descuento deben ser mayor a 0.`;

  } else if (discount >= 100) {
    
    discountResult.innerText = `El descuento no puede ser mayor o igual a 100.`;

  } else {

    const priceDiscount = priceWithDiscount(priceD, discount);
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

  const priceC = parseInt(originalPriceC.value);
  const newCoupon = coupons.value.toUpperCase() ;
  let discountCoupon = 0;

  if (!priceC || newCoupon == '') {

    couponResult.innerText = `Debes ingresar los datos requeridos.`;

  } else {

    couponList.forEach(item => {

      if (newCoupon == item.coupon) {
        
        discountCoupon = item.discount;
      }
    });

    if (discountCoupon == 0) {

      couponResult.innerText = `El cupón no es valido.`;

    } else {

      const totalPriceCoupon = (priceC * (100 - discountCoupon)) / 100;

      couponResult.innerText = `El precio con el cupón ${newCoupon} es de $${totalPriceCoupon}.`;
    }
  }

}

if(discountBtn || couponBtn) {

  discountBtn.addEventListener('click', calculatePriceWithDiscount);
  couponBtn.addEventListener('click', calculatePriceWithCoupon);
}