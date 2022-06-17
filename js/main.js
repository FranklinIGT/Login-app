/*login simulation redirect */

let url=window.location.href;
const redirect=(url)=>{

            const status= JSON.parse(localStorage.getItem('status'));
            console.log(url) 
            if(status.status!='active'){
                 return location.href = `http://127.0.0.1:5500/`;
                    
            }
 }
 if(url==='http://127.0.0.1:5500/home.html'){
 redirect(url)
 let user=document.getElementById('User')
 let jsonUser=JSON.parse(localStorage.getItem('user'))
 user.innerHTML=` WELCOME ${jsonUser.username}`;
 } 
 if(url==='http://127.0.0.1:5500/'){
    const status= JSON.parse(localStorage.getItem('status'));
    if(status.status==='active' && url===`http://127.0.0.1:5500/`){
        location.href ='http://127.0.0.1:5500/home.html'
    }
}

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
/*local store*/
if(url==='http://127.0.0.1:5500/'){
    
let username= document.getElementById('username')
let password = document.getElementById('password')
let submit=document.getElementById('button')




submit.addEventListener('click',(e)=>{
    logeo(e)
})
}
 function logeo(e){
    e.preventDefault;
    const user={
        username: username.value,
        password: password.value
    }
    username.value="";
    password.value=""
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('status',JSON.stringify({status:'active'}));
    console.log(user)
    location.href = 'http://127.0.0.1:5500/home.html';
}

let logout = document.getElementById('logout');
logout.addEventListener('click',(e)=>{
    e.preventDefault;
    location.href = 'http://127.0.0.1:5500/'
    localStorage.setItem('status',JSON.stringify({status:'none'}));
    localstorage.removeItem('user')
    ;
})