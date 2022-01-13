//Variable btn login
const btnLogin = document.getElementById('btn_login');

//Variable data login
const emailText = document.getElementById('emailText');
const passwordText = document.getElementById('passwordText');

//Divs menu session
const linkSession = document.getElementById('btnSession');
const linkCloseSession = document.getElementById('btnCloseSession');

//Variable divQuantityProduct
const addToCar = document.getElementById('addToCar');
const buyToCar = document.getElementById('buyToCar');

//Variable buttons Down
const divSelectMenuDown = document.getElementById('selectMenuDown');

//Variable quantity product
const txtCurrentQuantityAddToCar = document.getElementById('txtQuantityAddToCar');
const txtCurrentQuantityBuyToCar = document.getElementById('txtQuantityBuyToCar');

//Variable txtNameProduct to QuantityProduct
const lblInfoId = document.getElementById('lblInfoId');
const lblInfoImg = document.getElementById('lblInfoImg');
const lblNameProductAddToCar = document.getElementById('lblNameProductAddToCar');
const lblInfoDescript = document.getElementById('lblInfoDescript');
const lblInfoPrice = document.getElementById('lblInfoPrice');

//Variable txtNameProduct to Buy QuantityProduct
const lblInfoIdBuy = document.getElementById('lblInfoIdBuy');
const lblInfoImgBuy = document.getElementById('lblInfoImgBuy');
const lblNameProductAddToCarBuy = document.getElementById('lblNameProductBuyToCar');
const lblInfoDescriptBuy = document.getElementById('lblInfoDescriptBuy');
const lblInfoPriceBuy = document.getElementById('lblInfoPriceBuy');

//Variable open session
let session = localStorage.getItem("session");

//Variables buttons buy
let btnDisabled = null;
let btnBuy = null;
let btnAdd = null;

//Get Btns Buy
function getBtnBuy(){
    btnDisabled = document.querySelectorAll('.btnDisabled');
    btnBuy = document.querySelectorAll('.btnBuy');
    btnAdd = document.querySelectorAll('.btnAdd');
    //Function btn buy
    if(btnBuy.length > 0){
        for(let i = 0; i < btnBuy.length; i++){
            btnBuy[i].addEventListener('click',(e)=>{
                //Give max to input Number
                let quantityCurrent = e.path[2].children[1].children[1].children[0].children[1].textContent;
                txtQuantityBuyToCar.max = quantityCurrent;
                if(txtCurrentQuantityBuyToCar .value < 0 ||
                    txtCurrentQuantityBuyToCar.value > quantityCurrent){
                        console.log('Valores fuera de limite');
                    }      
                else{
                    //Variables info product Current
                    let idProduct = e.path[2].querySelector('.descript_TitleProduct').querySelector('.lblIdProduct').textContent;
                    let imgProduct = e.path[3].children[0].children[0].attributes[1].value;
                    let nameProduct = e.path[2].querySelector('.descript_TitleProduct').querySelector('.lblTitleProduct').textContent;
                    let descriptProduct = e.path[2].children[1].children[0].innerText;
                    let priceProduct = e.path[2].children[1].children[1].children[2].innerText;
                    //Buy info product to Quantity Product
                    buyToCar.style.display = 'flex';
                    lblInfoIdBuy.textContent = idProduct;
                    lblInfoImgBuy.textContent = imgProduct;
                    lblNameProductAddToCarBuy.textContent = nameProduct;
                    lblInfoDescriptBuy.textContent = descriptProduct;
                    lblInfoPriceBuy.textContent = priceProduct;
                    divSelectMenuDown.style.display = 'none';
                }      
            })
        }
    }
    //Function btn add
    if(btnAdd.length > 0){
        for(let i = 0; i < btnAdd.length; i++){
            btnAdd[i].addEventListener('click',(e)=>{                
                //Give max to input Number
                let quantityCurrent = e.path[2].children[1].children[1].children[0].children[1].textContent;
                txtCurrentQuantityAddToCar.max = quantityCurrent;
                if(txtCurrentQuantityAddToCar.value < 0 ||
                    txtCurrentQuantityAddToCar.value > quantityCurrent){
                        console.log('Valores fuera del limite');
                    }
                else{
                    //Variables info product current
                    let idProduct = e.path[2].querySelector('.descript_TitleProduct').querySelector('.lblIdProduct').textContent;
                    let imgProduct = e.path[3].children[0].children[0].attributes[1].value;
                    let nameProduct = e.path[2].querySelector('.descript_TitleProduct').querySelector('.lblTitleProduct').textContent;
                    let descriptProduct = e.path[2].children[1].children[0].innerText;
                    let priceProduct = e.path[2].children[1].children[1].children[2].innerText;
                    //Add info product to Quantity Product
                    addToCar.style.display = 'flex';
                    lblInfoId.textContent = idProduct;
                    lblInfoImg.textContent = imgProduct;
                    lblNameProductAddToCar.textContent = nameProduct;
                    lblInfoDescript.textContent = descriptProduct;
                    lblInfoPrice.textContent = priceProduct;
                    divSelectMenuDown.style.display = 'none';
                }
            })
        }
    }
    checkSession();
}

//Function check session
function checkSession(){
    if(session == 'true'){
        linkSession.style.display = 'none';
        linkCloseSession.style.display = 'block';
        for(let i = 0; i < btnDisabled.length; i++){
            btnDisabled[i].style.display = 'none';
            btnBuy[i].style.display = 'block';
            btnAdd[i].style.display = 'block';
        }
    }
}

//Function login
btnLogin.addEventListener('click',()=>{
    let email = emailText.value;
    let password = passwordText.value;
    
    if(email != '' && password != ''){
        let jsonValueLogin = {
            email: email,
            password: password
        }
        try{
            fetch("http://localhost:5500/getLogin",{
                method: "POST",
                body: JSON.stringify(jsonValueLogin),
                headers: {"Content-type":"application/json"}
            }).then(res => res.json())
                .then(res => {
                    let session = localStorage.getItem("session");
                    if(session == 'false'){
                        let emailRes = res[0].email;
                        if( emailRes != null){
                            localStorage.setItem("session",'true');
                            localStorage.setItem("email", emailRes);
                            location.reload();
                        }
                    }                    
                })
        }
        catch(err){
            console.log(err);
        }
    }
    else{
        console.log('Inserte usuario y contraseña');
    }
})

//Function close session
linkCloseSession.addEventListener('click',()=>{
    localStorage.setItem("session",'false');
    localStorage.setItem("email", '');  
    linkSession.style.display = 'block';
    linkCloseSession.style.display = 'none';
    for(let i = 0; i < btnDisabled.length; i++){
        btnDisabled[i].style.display = 'block';
        btnBuy[i].style.display = 'none';
        btnAdd[i].style.display = 'none';
    }
    location.reload();
})