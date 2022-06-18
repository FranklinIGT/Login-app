let urlLogin='https://franklinigt.github.io/login-app/';
let urlHome ='https://franklinigt.github.io/login-app/home';

/*Animation user-box */
let inputs= document.querySelectorAll('.user-box');
for (let i = 0; i < inputs.length; i++) {
    
    inputs[i].firstElementChild.addEventListener('focus',()=>{
        inputs[i].querySelector('label').classList.add('top')
        inputs[i].querySelector('.border').style.transform='scale(1)';
    });
    inputs[i].firstElementChild.addEventListener('blur',()=>{
        if(inputs[i].firstElementChild.value.length <= 0){
            inputs[i].querySelector('label').classList.remove('top')
            inputs[i].querySelector('.border').style.transform='scale(0)';
        }
    });
}
/*Animation user-b*/








/*login simulation redirect */

let url=window.location.href;
const redirect=(url)=>{

            const status= JSON.parse(localStorage.getItem('status'));
            console.log(url) 
            if(status.status!='active'){
                 return location.href = urlLogin;
                    
            }
 }
 if(url=== urlHome){
 redirect(url)
 let user=document.getElementById('User')
 let jsonUser=JSON.parse(localStorage.getItem('user'))
 user.innerHTML=` WELCOME ${jsonUser.username}`;
 } 
 if(url===urlLogin){
    const status= JSON.parse(localStorage.getItem('status'));
    if(status.status==='active' && url===urlLogin){
        location.href =urlHome;
    }
}


/*local store*/
if(url===urlLogin){
    
let username= document.getElementById('username')
let password = document.getElementById('password')
let submit=document.getElementById('button')




submit.addEventListener('click',(e)=>{
    logeo(e)
})
}
 function logeo(e){
    e.preventDefault;
    
    if (username.value.length===0) {
        alert('username not value');
        return;
    }
    if (password.value.length===0) {
        alert('password not value');
        return;
    }

    const user={
        username: username.value,
        password: password.value
    }
    username.value="";
    password.value=""
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('status',JSON.stringify({status:'active'}));
    console.log(user)
    location.href = urlHome;
}

let logout = document.getElementById('logout');
logout.addEventListener('click',(e)=>{
    e.preventDefault;
    location.href = urlLogin
    localStorage.setItem('status',JSON.stringify({status:'none'}));
    localstorage.removeItem('user')
    ;
})