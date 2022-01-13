//Variable label total price
const totalPriceLabel = document.querySelector('.totalPriceNumber');

//Variable totalPrice
let priceTotal = 0;

//Function delete button
const deletePendientProduct = ()=>{
    
    //Variable button delete product 
    const btnDeletePendientProduct = document.querySelectorAll('.btnDeletePendientProduct');

    for(let i = 0; i < btnDeletePendientProduct.length; i++){
        btnDeletePendientProduct[i].addEventListener('click',(e)=>{
            const divH3Quantity = e.path[2].querySelector('.divQuantityProductBuy');
            const h3Quantity = divH3Quantity.querySelector('.h3QuantityNumber');
            let quantity = h3Quantity.textContent;
            
            if(quantity > 1){
                let newQuantity = quantity - 1;
                h3Quantity.textContent = newQuantity;
                removePriceTotalWithProduct(e);
            }
            else{
                e.path[3].remove();
                removePriceTotalWithProduct(e);
            }
        })
    }
}

//Function remove priceTotal with remove product
removePriceTotalWithProduct = function(btnRemove){
    let price = btnRemove.path[2].querySelector('.subdivPendient').querySelector('.h3PricePendient').textContent;
    priceTotal -= price;
    totalPriceLabel.textContent = priceTotal;
}

//Function get priceTotal
const getTotalPrice = function(){
    
    //Variable products
    const divsProduct = document.querySelectorAll('.divPendients');

    for (let i = 0; i < divsProduct.length; i++){
        const divRightProduct = divsProduct[i].children[1];
        let quantity = divRightProduct.querySelector('.divQuantityProductBuy').querySelector('.h3QuantityNumber').textContent;
        let price = divRightProduct.querySelector('.subdivPendient').querySelector('.h3PricePendient').textContent;
        let subPriceTotal = quantity * price;
        priceTotal += subPriceTotal;
    }
    totalPriceLabel.textContent = priceTotal;
}