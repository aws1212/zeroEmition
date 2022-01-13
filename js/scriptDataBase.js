
//Variables data register
const nameClient = document.getElementById('name');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
//Variables button register
const btnConfirm = document.getElementById('btnConfirm');
//Variable div register/session
// const divRegister = document.getElementById('divRegister');
// const divSession = document.getElementById('divSession');


//Function click btn register
btnConfirm.addEventListener('click',()=>{
    if(nameClient.value != null && address.value != null % phone.value != null &&
        email.value != null && password.value != null && passwordConfirm.value
        != null){
            if(password.value == passwordConfirm.value){
                //Json send to server
                let jsonValue = {
                    "name": nameClient.value,
                    "address": address.value,
                    "phone": phone.value,
                    "email": email.value,
                    "password": password.value,
                    "passwordConfirm": passwordConfirm.value
                };
                try{
                    fetch("http://localhost:5500/newUser",{
                        method: "POST",
                        body: JSON.stringify(jsonValue),
                        headers: {"Content-type":"application/json"}
                    }).then(res => {
                        if (res.status == 200){
                            nameClient.value = "";
                            address.value = "";
                            phone.value = "";
                            email.value = "";
                            password.value = "";
                            passwordConfirm.value = "";
                            divSession.style.display = "flex";
                            divRegister.style.display = "none";
                            alert('Gracias por registrarse, puede iniciar sesión');
                        }
                        else if(res.status == 201){
                            console.log('Rellene los campos y coincida la contraseña')
                        }
                        else if(res.status == 300){
                            console.log('Usuario repetido');
                        }
                        else{
                            console.log('Error de servidor');
                        }
                    });
                }
                catch(err){
                    console.log(err);
                }
            }
            else{
                console.log('Las contraseñas no coinciden');
            }
    }
    else{
        console.log('Relleno todos los campos para continuar');
    }
})

