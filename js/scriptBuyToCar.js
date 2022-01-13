//Varibles buttons div add to car
const btnReturnQuantityBuyToCar = document.getElementById('btnReturnQuantityBuyToCar');
const btnAcceptQuantityBuyToCar = document.getElementById('btnAcceptQuantityBuyToCar');

//Variable quantity product
const lblInfoIdNewBuy = document.getElementById('lblInfoIdBuy');
const lblInfoImgNewBuy = document.getElementById('lblInfoImgBuy');
const lblNameProductNewBuyToCar = document.getElementById('lblNameProductBuyToCar');
const lblInfoDescriptNewBuy = document.getElementById('lblInfoDescriptBuy');
const lblInfoPriceNewBuy = document.getElementById('lblInfoPriceBuy');

//Variable buttons Down
const divMenuDownBuy = document.getElementById('selectMenuDown');

//Variable quantity product
const txtQuantityBuyToCar = document.getElementById('txtQuantityBuyToCar');

//Variable div buy to car
const divBuyToCar = document.getElementById('buyToCar');

//Variable warning quantity
const lblWarningLimitBuyQuantity = document.getElementById('lblWarningLimitBuyQuantity');

//Function accept to buy car
btnAcceptQuantityBuyToCar.addEventListener('click',()=>{
    if(txtQuantityBuyToCar.value != null){
        let jsonValue = {
            id: lblInfoIdNewBuy.textContent
        }
        fetch('http://localhost:5500/getQuantityProduct',{
            method: 'POST',
            body: JSON.stringify(jsonValue),
            headers: {"Content-type": "application/json"}
        }).then(response => response.json())
            .then(data => {
                if(data[0].quantityProduct > 0){
                    if(data[0].quantityProduct >= txtQuantityBuyToCar.value &&
                        txtQuantityBuyToCar.value > 0){
                        console.log('Enabled buy');
                    }
                    else{
                        lblWarningLimitBuyQuantity.classList.add('animationQuantity');
                        setTimeout(() => {
                            lblWarningLimitBuyQuantity.classList.remove('animationQuantity');
                            txtQuantityBuyToCar.value = '1';
                        }, 2500);
                    }
                }
            })
    }
})

//Function return add to car
btnReturnQuantityBuyToCar.addEventListener('click',()=>{
    divBuyToCar.style.display = 'none';
    divMenuDownBuy.style.display = 'flex';
    txtQuantityBuyToCar.value = '1';
})
