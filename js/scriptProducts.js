//Variables data new product
const txtNameProduct = document.getElementById('txtNameProduct');
const txtDescriptProduct = document.getElementById('txtDescriptProduct');
const fileImgProduct = document.getElementById('fileImgProduct');
const txtPriceProduct = document.getElementById('txtPriceProduct');
const txtQuantityProduct = document.getElementById('txtQuantityProduct');

//Variable buttons new Product
const btnReturnInsertProduct = document.getElementById('btnReturnInsertProduct');
const btnAcceptInsertProduct = document.getElementById('btnAcceptInsertProduct');

//Variable confirm inserted product
const lblSuccessInsertProduct = document.getElementById('lblSuccessInsertProduct');

//Container divs products
const containerDivProducts = document.querySelector('.divProducts');

//variable img Product
let fileBaseImgProduct = null;

//Convert Base64 imageProduct
fileImgProduct.onchange = ()=>{
    let baseImgProduct = fileImgProduct.files[0];
    toBase64(baseImgProduct)
        .then(res =>{
            fileBaseImgProduct = res;
        })
        .catch(err =>{
            console.log(err);
        });
}

//Function insert new product
btnAcceptInsertProduct.addEventListener('click',()=>{
    if(txtNameProduct.value != '' && txtDescriptProduct.value != '' &&
    fileBaseImgProduct != null && txtPriceProduct.value != '' && txtQuantityProduct.value != ''){
        let jsonNewProduct = {
            'nameProduct': txtNameProduct.value,
            'descriptionProduct': txtDescriptProduct.value,
            'imgProduct': fileBaseImgProduct,
            'priceProduct': txtPriceProduct.value,
            'quantityProduct': txtQuantityProduct.value
        }
        fetch('http://localhost:5500/insertProduct',{
            method: 'POST',
            body: JSON.stringify(jsonNewProduct),
            headers: {'Content-type':'application/json'}
        }).then(res => res.json())
        .then(res =>{
            if(res.msg == 'Success'){
                lblSuccessInsertProduct.classList.add('animationLabelInsertProduct');
                setTimeout(() => {
                    lblSuccessInsertProduct.classList.remove('animationLabelInsertProduct');
                }, 2500);
                fileImgProduct.value = '';
                txtNameProduct.value = '';
                txtPriceProduct.value = '';
                txtDescriptProduct.value = '';
                txtQuantityProduct.value = '';
            }
        })
    }
})

//Function get product
const getProducts = ()=>{
    fetch('http://localhost:5500/getProducts')
    .then(res => res.json()
    .then(res => {
        if(res.length > 0){
            let elementFragment = document.createDocumentFragment();
            for(let i = 0; i < res.length; i++){
                let divElementProduct = document.createElement('DIV');
                divElementProduct.classList.add('productDiv');
                divElementProduct.innerHTML = ` 
                    <div class="div_imgProduct">
                        <div class="subdiv_imgProduct" 
                            style="background-image: url(${res[i].imgProduct})">
                        </div>
                    </div>
                    <div class="descriptProduct">
                        <div class="descript_TitleProduct">
                            <h2 class="lblTitleProduct">${res[i].nameProduct}</h2>
                            <p class="lblIdProduct">${res[i].idProduct}</p>
                        </div>
                        <div class="descript_DescriptProduct">
                            <p class="lblDescriptionProduct">
                                ${res[i].descriptionProduct}
                            </p>
                            <div class="div_priceProduct">
                                <div class="quantityProduct">
                                    <p class="lblQuantityProduct">Disponibles: </p>
                                    <p class="lblNumberQuantityProduct">${res[i].quantityProduct}</p>
                                </div>
                                <p class="lblSignalPrice">$</p>
                                <p class="lblNumberPrice">${res[i].priceProduct}</p>
                            </div>
                        </div>
                        <div class="descript_ButtonProduct">
                            <button class="btnDisabled" id="btnDisabled${i}">Inicie sesión para comprar</button>
                            <button class="btnsBuy btnBuy"  id="btnBuy${i}">Comprar</button>
                            <button class="btnsBuy btnAdd"  id="btnAdd${i}">Añadir</button>
                        </div>
                    </div>
                `;
                elementFragment.appendChild(divElementProduct);
            }
            containerDivProducts.appendChild(elementFragment);
            getBtnBuy();
        }
    }))
}
getProducts();