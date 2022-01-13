//Variables divs action buttons
const insertProducts = document.getElementById('insertProducts');
const registerDataStore = document.getElementById('registerDataStore');
const pendientGiveProduct = document.getElementById('pendientGiveProduct');
const listDataMonth = document.getElementById('listDataMonth');

//Variable buttons div Admin
const btnAdmin_InfoStore = document.getElementById('btnAdmin_InfoStore');
const btnAdmin_Products = document.getElementById('btnAdmin_Products');
const btnAdmin_PendientList = document.getElementById('btnAdmin_PendientList');
const btnAdmin_dataMonth = document.getElementById('btnAdmin_dataMonth');

//Variables return divsAdmin
const btnReturnDataStoreAdmin = document.getElementById('btnReturnDataStore');
const btnReturnInsertProductAdmin = document.getElementById('btnReturnInsertProduct');
const btnReturnDataMonth = document.getElementById('btnReturnDataMonth');
const btnReturn_pendientGiveProduct = document.getElementById('btnReturn_pendientGiveProduct');

//Variable menuAdmin
const menuAdmin = document.getElementById('menuAdmin');

//Function button InfoStore
btnAdmin_InfoStore.addEventListener('click',()=>{
    registerDataStore.style.zIndex = '1000';
    registerDataStore.style.display = 'flex';
    menuAdmin.style.display = 'none';
});
//Function button Products
btnAdmin_Products.addEventListener('click',()=>{
    insertProducts.style.zIndex = '1000';
    insertProducts.style.display = 'flex';
    menuAdmin.style.display = 'none';
})
//Function button pendientGiveProduct
btnAdmin_PendientList.addEventListener('click',()=>{
    pendientGiveProduct.style.display = 'flex';
    menuAdmin.style.display = 'none';
});
//Function button listDataMonth
btnAdmin_dataMonth.addEventListener('click',()=>{
    listDataMonth.style.display = 'flex';
    menuAdmin.style.display = 'none';
});

//Function return InfoStore
btnReturnDataStoreAdmin.addEventListener('click',()=>{
    registerDataStore.style.zIndex = '0';
    registerDataStore.style.display = 'none';
    menuAdmin.style.display = 'flex';
});
//Function return Product
btnReturnInsertProductAdmin.addEventListener('click',()=>{
    insertProducts.style.zIndex = '0';
    insertProducts.style.display = 'none';
    menuAdmin.style.display = 'flex';
});
//Function return pendientGiveProduct
btnReturn_pendientGiveProduct.addEventListener('click',()=>{
    pendientGiveProduct.style.display = 'none'; 
    menuAdmin.style.display = 'flex';
});
//Function retunr dataMonth
btnReturnDataMonth.addEventListener('click',()=>{
    listDataMonth.style.display = 'none';
    menuAdmin.style.display = 'flex';
});