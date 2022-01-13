
//Variable buttons dataStore
const btnSendDataStore = document.getElementById('btnSendDataStore');
const btnReturnDataStore = document.getElementById('btnReturnDataStore');

//Variable file document input
let fileDataStore = null;

//Variable label success inserted
const labelSuccesInserted = document.getElementById('labelSuccessInfoStore');

//Variable text/file datastore
const filePresentationPhoto = document.getElementById('filePresentationPhoto');
const txtDataStoreAbout = document.getElementById('txtDataStoreAbout');
const txtDataStoreWantKnow = document.getElementById('txtDataStoreWantKnow');

//function to base64
const toBase64 = file => new Promise((resolve, reject) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
})

//function click btnPresentationPhoto
filePresentationPhoto.onchange = ()=>{
    let PresentationPhoto = filePresentationPhoto.files[0];
    toBase64(PresentationPhoto)
        .then(res =>{
            fileDataStore = res;
        })
        .catch(err =>{
            console.log(err);
        });
}

//click btnSend
let dataStoreImagePresentation = null;
let dataStoreAbout = null;
let dataStoreWantKnow = null;
btnSendDataStore.addEventListener('click',()=>{
    if(filePresentationPhoto.files[0] != null){
        dataStoreImagePresentation = fileDataStore;
    }
    if(txtDataStoreAbout.value != ''){
        dataStoreAbout = txtDataStoreAbout.value;
    }
    if(txtDataStoreWantKnow.value != ''){
        dataStoreWantKnow = txtDataStoreWantKnow.value;
    }
    else{
        
    }
    const jsonValue = {
        "imagePresentation": dataStoreImagePresentation,
        "aboutUs": dataStoreAbout,
        "wantKnow": dataStoreWantKnow
    }
    fetch("http://localhost:5500/saveDataStore",{
        method: "POST",
        body: JSON.stringify(jsonValue),
        headers: {"Content-type":"application/json"}
    }).then(res => {
        if (res.status == 400){
            console.log('Error de servidor');
        }
        else if(res.status == 201){
            console.log('Complete todos los campos');
        }
        else{
            labelSuccesInserted.classList.add('animationLabelSuccess');
            setTimeout(() => {
                labelSuccesInserted.classList.remove('animationLabelSuccess');
            }, 2500);
            filePresentationPhoto.value = '';
            txtDataStoreAbout.value = '';
            txtDataStoreWantKnow.value = '';
        }
    });
})