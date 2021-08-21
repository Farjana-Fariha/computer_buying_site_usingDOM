function sendingInForm(tableField, featurePrices){
    const tablePrice = document.getElementById(tableField);
    const tablePriceAsText = tablePrice.innerText;
    const tablePriceAsNum = parseFloat(tablePriceAsText);
    tablePrice.innerText = featurePrices;
    // subtotal calculation
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = calculateSubPrice() + 1299;
    // total price showing
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = calculateSubPrice() + 1299;
}
// proccess for having prices 
function getPrices(fieldValue){
    const memoryPriceAsText = document.getElementById(fieldValue);
    const memoryPriceNum = parseFloat(memoryPriceAsText.innerText);
    return memoryPriceNum;
}
// all features prices calculate 
function calculateSubPrice(){
   const memoryPrice = getPrices('memory-price');
   const storagePrice = getPrices('storage-price');
   const deliveryPrice  = getPrices('delivery-charge');
   const subtotal = memoryPrice + storagePrice + deliveryPrice;
   return subtotal;
   
}
// function(){}
// memory 8GB Price 
document.getElementById('memory-8GB').addEventListener('click', function(){
    sendingInForm('memory-price',0);
});
// memory 16GB Price 
document.getElementById('memory-16GB').addEventListener('click', function(){
    sendingInForm('memory-price',180);
});
// 256GB SSD storage
document.getElementById('storage-256GB').addEventListener('click', function(){
   sendingInForm('storage-price',0);
 
});
// 512GB SSD storage
document.getElementById('storage-512GB').addEventListener('click', function(){
    sendingInForm('storage-price',100);
   
});
// 1TB SSD storage 
document.getElementById('storage-1TB').addEventListener('click', function(){
   sendingInForm('storage-price',180);
});
// for free delivery 
document.getElementById('free-delivery-btn').addEventListener('click', function(){
    sendingInForm('delivery-charge',0);
   ;
});
// for charged delivery
document.getElementById('charged-delivery-btn').addEventListener('click', function(){
    sendingInForm('delivery-charge',20);
});
//promo code discount checking
document.getElementById('promo-code-btn').addEventListener('click', function(){
    // calculation for discount 
    const newTotalPrice = document.getElementById('total-price');
    const newTotalPriceAsText = newTotalPrice.innerText;
    const newTotalPriceAsNum =parseFloat(newTotalPriceAsText);
    const discountPrice = newTotalPriceAsNum - (newTotalPriceAsNum * 0.2);
    // get promo code from input 
    const getPromoCode = document.getElementById('promo-code-input');
    //promo code validation
    if(getPromoCode.value === 'stevekaku'){
        newTotalPrice.innerText = discountPrice;
        document.getElementById("promo-code-btn").disabled = true;
        getPromoCode.value = '';
    }
    else{
        alert('Promo din not matched yet')
        getPromoCode.value = '';
    }
});