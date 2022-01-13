//Btns select dowm
const btnSelectLeft = document.getElementById('btnSelectLeft');
const btnSelectRight = document.getElementById('btnSelectRight');

//Actions btn select left
btnSelectLeft.addEventListener('click',()=>{
    if(divbuyCar.style.display != 'none'){
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'flex';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
    else if(divPrincipalImage.style.display != 'none'){
        if(session == 'true'){
            divPrincipalImage.style.display = 'none';
            divAbout.style.display = 'none';
            divWhy.style.display = 'none';
            divWant.style.display = 'none';
            divProducts.style.display = 'none';
            divSession.style.display = 'none';
            divbuyCar.style.display = 'flex';
            alertSession.style.display = 'none';
        }
        else{
            divPrincipalImage.style.display = 'none';
            divAbout.style.display = 'none';
            divWhy.style.display = 'none';
            divWant.style.display = 'none';
            divProducts.style.display = 'none';
            divSession.style.display = 'flex';
            divbuyCar.style.display = 'none';
            alertSession.style.display = 'none';
        }
    }
    else if(divSession.style.display != 'none'){
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'flex';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
    else if(divProducts.style.display != 'none'){
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'flex';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
    else if(divWant.style.display != 'none'){
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'flex';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
    else if(divWhy.style.display != 'none'){
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'flex';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
    else if(divAbout.style.display != 'none'){
        divPrincipalImage.style.display = 'flex';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
})

//Actions select right
btnSelectRight.addEventListener('click',()=>{
    if(divPrincipalImage.style.display != 'none'){
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'flex';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
    else if(divAbout.style.display != 'none'){
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'flex';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
    else if(divWhy.style.display != 'none'){
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'flex';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
    else if(divWant.style.display != 'none'){
        divPrincipalImage.style.display = 'none';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'flex';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
    else if(divProducts.style.display != 'none'){
        if(session == 'true'){
            divPrincipalImage.style.display = 'none';
            divAbout.style.display = 'none';
            divWhy.style.display = 'none';
            divWant.style.display = 'none';
            divProducts.style.display = 'none';
            divSession.style.display = 'none';
            divbuyCar.style.display = 'flex';
            alertSession.style.display = 'none';            
        }
        else{
            divPrincipalImage.style.display = 'none';
            divAbout.style.display = 'none';
            divWhy.style.display = 'none';
            divWant.style.display = 'none';
            divProducts.style.display = 'none';
            divSession.style.display = 'flex';
            divbuyCar.style.display = 'none';
            alertSession.style.display = 'none';
        }
    }
    else if(divSession.style.display != 'none'){
        divPrincipalImage.style.display = 'flex';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
    else if(divbuyCar.style.display != 'none'){
        divPrincipalImage.style.display = 'flex';
        divAbout.style.display = 'none';
        divWhy.style.display = 'none';
        divWant.style.display = 'none';
        divProducts.style.display = 'none';
        divSession.style.display = 'none';
        divbuyCar.style.display = 'none';
        alertSession.style.display = 'none';
    }
})