/* vARIABLE declare */
const basePrice = document.getElementById('best-price');
const memoryCostTotal = document.getElementById('memory-cost');
const storageCostTotal = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalAmount = document.getElementById('total-price');
const promoCode = document.getElementById('promo-code');
const discountPriceFirst = document.getElementById('discount-price');

/* Extra memory cost  */

document.getElementById('memory-eight').addEventListener('click', function () {
  memoryCostTotal.innerText = 0;
    totalCost()
})

document.getElementById('memory-sixteen').addEventListener('click', function () {
    memoryCostTotal.innerText = 180;
    totalCost()
})

// extra storage cost 

document.getElementById('storage-one').addEventListener('click', function () {
    storageCostTotal.innerText = 0;
    totalCost()
})
document.getElementById('storage-two').addEventListener('click', function () {
    storageCostTotal.innerText = 100;
    totalCost()
})
document.getElementById('storage-three').addEventListener('click', function () {
    storageCostTotal.innerText = 180;
    totalCost()
})

// extra delivery cost 

document.getElementById('delivery-free').addEventListener('click', function () {
    deliveryCost.innerText = 0;
    totalCost()
})
document.getElementById('delivery-paid').addEventListener('click', function () {
    
    deliveryCost.innerText = 20;
    totalCost()
})

// update total price 

function totalCost() {
    const bestPrice = parseFloat(basePrice.innerText);
    const extraMemoryCost = parseFloat(memoryCostTotal.innerText);
    const extraStorageCost = parseFloat(storageCostTotal.innerText);
    const expressDeliveryCost = parseFloat(deliveryCost.innerText);
    const typedCode = promoCode.value;
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + expressDeliveryCost;
    totalAmount.innerText = totalPrice;
    if (typedCode == 'stevekaku') {
        const discountPriceTotal = totalPrice * 20 / 100;
        discountPriceFirst.innerText = totalPrice - discountPriceTotal;
    }
    else {
        discountPriceFirst.innerText = totalPrice;
    }
    promoCode.value = '';
    return totalAmount;
}

// promo code apply 
// function promoApply() {
    
    
//     if (typedCode == 'stevekaku') {
//         const discountPriceTotal = totalAmount * 20 / 100;
//         discountPriceFirst.innerText = totalAmount - discountPriceTotal;
//     }
//     else {
//         discountPriceFirst.innerText = totalAmount;
//     }
    
// }

document.getElementById('promo-btn').addEventListener('click', function () {
    totalCost();
})