const btnNavMenu = document.getElementById('btnNavMenu');
const divMenuBar = document.getElementById('menuBar');

//Function var menu
btnNavMenu.addEventListener('click', ()=>{
    if(divMenuBar.style.display == 'flex'){
        divMenuBar.style.display = 'none';
    }
    else{
        divMenuBar.style.display = 'flex';
    }
})