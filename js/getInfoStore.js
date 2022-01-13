//Element cotainer
let div_ImgAbout = document.getElementById('div_ImgAbout');
let div_DescriptionAbout = document.getElementById('div_DecriptionAbout');
let p_WantKnowDescription = document.getElementById('wantKnowDescript');

//Function call dataStore
const callDataStore = ()=>{
    fetch("http://localhost:5500/searchDataWebPage")  
    .then(response => response.json())
        .then(data => {
            if(data.imagePresentation != null){
                div_ImgAbout.style.backgroundImage = `url(${data.imagePresentation})`;
            }
            if(data.aboutUs != null){
                let textaboutUs = document.createElement('P');
                textaboutUs.textContent = data.aboutUs;
                div_DescriptionAbout.appendChild(textaboutUs);
            }
            if(data.wantKnow != null){
                p_WantKnowDescription.textContent = data.wantKnow;
            }
            else{
                console.log(data.msg);
            }
        });
}
callDataStore();