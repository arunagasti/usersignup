const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const users = document.querySelector('#users');


myForm.addEventListener('submit' , onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === ''|| emailInput.value === '')
    {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all your details';
        setTimeout(()=>msg.remove(), 3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} :${emailInput.value}`));

        users.appendChild(li);

        //clearText
        nameInput.value = '';
        emailInput.value = '';
    } 
        
    
}
      
