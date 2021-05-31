function mobileMenu(){

    var menu = document.getElementById('header_menu')
    if(menu.style.display == "block"){
        menu.style.display = "none"
    }else{
        menu.style.display = "block"
    }
}

const form = document.getElementById("sub_form")
const name = document.getElementById("Name")
const mail = document.getElementById("mail")
const error = document.getElementById('Error')
form.addEventListener('submit',(e)=>{
  
    let messages = []
    if(name.value === '' || name.value == null){
       messages.push('Ф.И.О необходимо !') 
    }
    if(mail.value ==='' || mail.value == null){
        messages.push ('Почта необходима!')
    }
    
    if(messages.length>0){
        e.preventDefault()
        error.innerText = messages.join(' \n')
    }
  
    //if(messages.length ===0){ e.preventDefault(); }
    if(Validate(mail.value)===false){
         e.preventDefault(); 
         return;
    } else {  alert('Вы успешно подписались');}
})

function Validate(inputText){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.match(mailformat)){
        return true;
    }else{
        alert("Неверный формат эллектроной почте!")
        return false;
    }
}