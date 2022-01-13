//Varibles buttons div add to car
const btnReturnQuantityAddToCar = document.getElementById('btnReturnQuantityAddToCar');
const btnAcceptQuantityAddToCar = document.getElementById('btnAcceptQuantityAddToCar');

//Variable quantity product
const lblInfoIdToNewCar = document.getElementById('lblInfoId');
const lblInfoImgToNewCar = document.getElementById('lblInfoImg');
const lblNameProductAddToCarToNewCar = document.getElementById('lblNameProductAddToCar');
const lblInfoDescriptToNewCar = document.getElementById('lblInfoDescript');
const lblInfoPriceToNewCar = document.getElementById('lblInfoPrice');

//Variable buttons Down
const divMenuDown = document.getElementById('selectMenuDown');

//Variable quantity product
const txtQuantityAddToCar = document.getElementById('txtQuantityAddToCar');

//Variable div container car
const listbuyCarPendient = document.getElementById('listbuyCarPendient');

//Variable div add to car
const divAddToCar = document.getElementById('addToCar');

//Document fragment to car
const  documentFragmentToCar = document.createDocumentFragment();

//Variable warning quantity
const lblWarningLimitAddQuantity = document.getElementById('lblWarningLimitAddQuantity');

//Function button accept add to car
btnAcceptQuantityAddToCar.addEventListener('click',()=>{
    if(txtQuantityAddToCar.value != ''){
        if(document.getElementById(lblInfoIdToNewCar.textContent)){
            console.log('El elemento ya existe');
        }
        else{
            let jsonValue = {
                id: lblInfoIdToNewCar.textContent
            }
            fetch('http://localhost:5500/getQuantityProduct',{
                method: 'POST',
                body: JSON.stringify(jsonValue),
                headers: {"Content-type": "application/json"}
            }).then(response => response.json())
                .then(data =>{
                    if(data[0].quantityProduct > 0){
                        if(data[0].quantityProduct >= txtQuantityAddToCar.value &&
                            txtQuantityAddToCar.value > 0){
                            const divNewProductCar = document.createElement('DIV');
                            divNewProductCar.classList.add('divPendients');
                            divNewProductCar.innerHTML = `
                                <div class="subdivPendient imgPendient">
                                    <div class="imgPendient-img" style="${lblInfoImgToNewCar.textContent}">
                                    </div>
                                </div>
                                <div class="subdivPendient descriptPendient">
                                    <div class="titleProductPendient">
                                        <h2>${lblNameProductAddToCarToNewCar.textContent}</h2>
                                        <button id="${lblInfoIdToNewCar.textContent}" class="btnDeletePendientProduct">X</button>
                                    </div>
                                    <div class="descriptProductPendient">
                                        <p>${lblInfoDescriptToNewCar.textContent}</p>
                                    </div>
                                    <div class="divQuantityProductBuy">
                                        <h3 class="h3QuantityLabel">Cantidad</h3>
                                        <h3 class="h3QuantityNumber">${txtQuantityAddToCar.value}</h3>
                                    </div>
                                    <div class="subdivPendient pricePendient">
                                        <h3 class="h3QuantityLabel">Precio</h3>
                                        <h3 class="h3PricePendient">${lblInfoPriceToNewCar.textContent}</h3>
                                    </div>
                                </div>
                            `;
                            listbuyCarPendient.appendChild(divNewProductCar);
                            deletePendientProduct();
                            getTotalPrice();
                            divAddToCar.style.display = 'none';
                            divMenuDown.style.display = 'flex';
                            txtQuantityAddToCar.value = '1';
                        }
                        lblWarningLimitAddQuantity.classList.add('animationQuantity');
                        setTimeout(() => {
                            lblWarningLimitAddQuantity.classList.remove('animationQuantity');
                            txtQuantityAddToCar.value = '1';
                        }, 2500);
                    }
                })
        }
    }
    else{
        console.log('Indique la cantidad');
    }
})

//Function return add to car
btnReturnQuantityAddToCar.addEventListener('click',()=>{
    divAddToCar.style.display = 'none';
    divMenuDown.style.display = 'flex';
    txtQuantityAddToCar.value = '1';
})