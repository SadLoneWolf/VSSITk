
 const coffe = document.querySelector("#coffe_list")
 const salad = document.getElementById("salad_list")
 const cookie = document.getElementById("cookie_list")
 const soda= document.getElementById("soda_list")

function showCoffe(){
    console.log('coffe')
    coffe.classList.add("show")
    salad.classList.remove("show")
    cookie.classList.remove("show")
    soda.classList.remove("show")
}

function showSalad()
{
    console.log("salad")
    coffe.classList.remove("show")
    salad.classList.add("show")
    cookie.classList.remove("show")
    soda.classList.remove("show")
}
function showJuice()
{
    console.log("juice")
    coffe.classList.remove("show")
    salad.classList.remove("show")
    cookie.classList.remove("show")
    soda.classList.add("show")
}
function showCookie()
{
    console.log("cookie")
    coffe.classList.remove("show")
    salad.classList.remove("show")
    cookie.classList.add("show")
    soda.classList.remove("show")
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
    if(menu.style.display == "flex"){
    //    menu.style.display = "none"
    }else{
        menu.style.display = "flex"
    }
}

// Working with cart
