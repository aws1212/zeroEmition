//Variable buttons click
const btn_ChangeImg = document.getElementById('btn_ChangeImg');

//Variable div images
const div_imgOne = document.querySelector('.div_imgOne');
const div_imgTwo = document.querySelector('.div_imgTwo');
const div_imgThree = document.getElementById('div_imgThree');

//Variables var buttons click
const btnTitle = document.getElementById('btnTitle');
const btnAbout = document.getElementById('btnAbout');
const btnWhy = document.getElementById('btnWhy');
const btnWant = document.getElementById('btnWant');
const btnProducts = document.getElementById('btnProducts');
const btnSession = document.getElementById('btnSession');
const btnbuyCar = document.getElementById('btnBuyCar');

//Variables divs var clicked
const divPrincipalImage = document.getElementById('divPrincipalImage');
const divAbout = document.getElementById('divAbout');
const divWhy = document.getElementById('divWhy');
const divWant = document.getElementById('divWant');
const divProducts = document.getElementById('divProducts');
const divSession = document.getElementById('divSession');
const divbuyCar = document.getElementById('buyCar');
const alertSession = document.getElementById('alertSession');

//Variable divDown Select buttons
const selectMenuDown = document.getElementById('selectMenuDown');

//Variable clickes Sessin start
const btnRegister = document.getElementById('btn_register');
const btnReturn = document.getElementById('btnReturn');

//Variable div register
const divRegister = document.getElementById('divRegister');

//Variable close variable
let open = false;

//Function close/open
const openfunction = (open)=>{
    if(open){
        div_imgOne.classList.add('divOpen');
        div_imgTwo.classList.add('divClose');

        div_imgOne.classList.remove('divClose');
        div_imgTwo.classList.remove('divOpen');
    }
    else{
        div_imgOne.classList.add('divClose');
        div_imgTwo.classList.add('divOpen');

        div_imgOne.classList.remove('divOpen');
        div_imgTwo.classList.remove('divClose');
    }
}

btn_ChangeImg.addEventListener('click',()=>{
    if(btn_ChangeImg.innerHTML == 'Convertir'){
        open = !open;
        openfunction(open);
        btn_ChangeImg.innerHTML = 'Acepto el cambio'
    }else{
        div_imgThree.style.display = 'flex';
        btn_ChangeImg.style.display = 'none';
    }

})

//Functions nav links clicked
const changePage = (btn)=>{
    if(btn === "btnTitle"){
        divMenuBar.style.display = 'none';
        divPrincipalImage.style.display = 'flex';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divRegister.style.display = 'none';
        divbuyCar.style.display = 'none';
    }
    else if(btn === "btnAbout"){
        divMenuBar.style.display = 'none';
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'flex';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divRegister.style.display = 'none';
        divbuyCar.style.display = 'none';
    }
    else if(btn === "btnWhy"){        
        divMenuBar.style.display = 'none';
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'flex';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divRegister.style.display = 'none';
        divbuyCar.style.display = 'none';
    }
    else if(btn === "btnWant"){
        divMenuBar.style.display = 'none';
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'flex';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divRegister.style.display = 'none';
        divbuyCar.style.display = 'none';
    }
    else if(btn === "btnProducts"){
        divMenuBar.style.display = 'none';
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'flex';
        divSession.style.display = 'none';
        divRegister.style.display = 'none';
        divbuyCar.style.display = 'none';
    }
    else if(btn === "btnSession"){
        divMenuBar.style.display = 'none';
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'flex';
        divRegister.style.display = 'none';
        divbuyCar.style.display = 'none';
    }
    else if(btn === "btnbuyCar"){
        divMenuBar.style.display = 'none';
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divRegister.style.display = 'none';
        divbuyCar.style.display = 'flex';
    }
}

//Function div Resgister
btnRegister.addEventListener('click',()=>{
    divPrincipalImage.style.display = 'none';
    divAbout.style.display = 'none';
    divWhy.style.display = 'none';
    divWant.style.display = 'none';
    divProducts.style.display = 'none';
    divSession.style.display = 'none';
    divRegister.style.display = 'flex';
    divbuyCar.style.display = 'none';
    selectMenuDown.style.display = 'none';
})
btnReturn.addEventListener('click',()=>{
    divPrincipalImage.style.display = 'none';
    divAbout.style.display = 'none';
    divWhy.style.display = 'none';
    divWant.style.display = 'none';
    divProducts.style.display = 'none';
    divSession.style.display = 'flex';
    divRegister.style.display = 'none';
    divbuyCar.style.display = 'none';
    selectMenuDown.style.display = 'flex';
})

//Variable alert session
let alertShow = false;

//Function check buyCar
function checkbuyCar(){
    let session = localStorage.getItem('session');
    if(session == 'true'){
        changePage('btnbuyCar');
    }
    else{
        alertSession.classList.add('animationAlert');
        setTimeout(() => {
            alertSession.classList.remove('animationAlert');
        }, 2500);
    }
}