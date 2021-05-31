 const coffe = document.querySelector("#coffe_list")
 const salad = document.getElementById("salad_list")
 const cookie = document.getElementById("cookie_list")
 const soda= document.getElementById("soda_list")

window.onclick = function(){
   
}

function showCoffe(){
    if (coffe.className == "show"){
        coffe.className = " "
    }else{
        coffe.className = "show"
    }
    salad.className = " "
    cookie.className = " "
    soda.className = " "
}

function showSalad()
{
    if (salad.className == "show") {
        salad.className = " "
    } else {
        salad.className = "show"
    }
    coffe.className = " "
    cookie.className = " "
    soda.className = " "
}
function showJuice()
{
    if (soda.className == "show") {
        soda.className = " "
    } else {
        soda.className = "show"
    }
     coffe.className = " "
    salad.className = " "
    cookie.className = " "

}
function showCookie()
{
    if (cookie.className == "show") {
        cookie.className = " "
    } else {
        cookie.className = "show"
    }
     coffe.className = " "
    salad.className = " "
    soda.className = " "
}

function showCart(){
    if(window.localStorage.length === 0){
        alert('Корзина пуста !')
    }else{
alert('Заказ оформлен!')
    }
}
function mobileMenu(){

    var menu = document.getElementById('header_menu')
    if(menu.className == " "){
        menu.className = "mobile"
    }else{
        menu.className = " "
    }
}

// Working with cart
