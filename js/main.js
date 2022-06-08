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
/*Animation user-box */
