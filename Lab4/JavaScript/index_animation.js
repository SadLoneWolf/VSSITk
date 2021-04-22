function mobileMenu(){

    var menu = document.getElementById('header_menu')
    console.log(document.getElementById('header_menu'))
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
    if(messages.length ===0){ e.preventDefault(); alert('Вы успешно подписались')}
})