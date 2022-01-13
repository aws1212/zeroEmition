//Variables divs months
const divCount_january = document.getElementById('divCount_january');
const divCount_february = document.getElementById('divCount_february');
const divCount_march = document.getElementById('divCount_march');
const divCount_april = document.getElementById('divCount_april');
const divCount_may = document.getElementById('divCount_may');
const divCount_june = document.getElementById('divCount_june');
const divCount_july = document.getElementById('divCount_july');
const divCount_agoust = document.getElementById('divCount_agoust');
const divCount_september = document.getElementById('divCount_september');
const divCount_october = document.getElementById('divCount_october');
const divCount_november = document.getElementById('divCount_november');
const divCount_december = document.getElementById('divCount_december');

//Variable divs data month
const divCount_dataMonth = document.getElementById('divCount_dataMonth');

//Varibale labes data month
const lblNameMonth = document.getElementById('lblNameMonth');
const lblPriceMonth = document.getElementById('lblPriceMonth');

//Variable btn accept data month
const btnAcceptMonth = document.getElementById('btnAcceptMonth');

//Function div january
divCount_january.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Enero';
    lblPriceMonth.textContent = '$8388';
});

//Function div february
divCount_february.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Febrero';
    lblPriceMonth.textContent = '$8388';
});

//Function div march
divCount_march.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Marzo';
    lblPriceMonth.textContent = '$8388';
});

//Function div april
divCount_april.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Abril';
    lblPriceMonth.textContent = '$8388';
});

//Function div january
divCount_may.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Mayo';
    lblPriceMonth.textContent = '$8388';
});

//Function div june
divCount_june.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Junio';
    lblPriceMonth.textContent = '$8388';
});

//Function div july
divCount_july.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Julio';
    lblPriceMonth.textContent = '$8388';
});

//Function div agoust
divCount_agoust.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Agosto';
    lblPriceMonth.textContent = '$8388';
});

//Function div september
divCount_september.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Septiembre';
    lblPriceMonth.textContent = '$8388';
});

//Function div october
divCount_october.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Octubre';
    lblPriceMonth.textContent = '$8388';
});

//Function div November
divCount_november.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Noviembre';
    lblPriceMonth.textContent = '$8388';
});

//Function div december
divCount_december.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'flex';
    lblNameMonth.textContent = 'Diciembre';
    lblPriceMonth.textContent = '$8388';
});

//Function btn accept data month
btnAcceptMonth.addEventListener('click',()=>{
    divCount_dataMonth.style.display = 'none';
    lblNameMonth.textContent = '';
    lblPriceMonth.textContent = '';
});