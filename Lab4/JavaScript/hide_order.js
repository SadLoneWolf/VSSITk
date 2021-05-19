function toggleCoffe(){
    var coffe = document.getElementById('coffe_list')
    if(coffe.style.display == "none"){
        coffe.style.display = "flex"
    }else{
        coffe.style.display = "block"
        coffe.style.display = "none"
    }
}

function toggleSalad(){
    var salad = document.getElementById("salad_list")
    console.log('salad')
    if(salad.style.display == "none"){
        salad.style.display = "flex"
    }else{
        salad.style.display = "block"
        salad.style.display = "none"
    }
}

function toggleJuice(){
    var soda= document.getElementById("soda_list")
    console.log('JUICES')
    if(soda.style.display == "none"){
        soda.style.display = "flex"
    }else{
        soda.style.display = "block"
        soda.style.display = "none"
    }
}

function toggleCookies(){
    var cookie = document.getElementById("cookie_list")
    console.log('cookie')
    if(cookie.style.display == "none"){
        cookie.style.display = "flex"
    }else{
        cookie.style.display = "block"
        cookie.style.display = "none"
    }
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
        menu.style.display = "none"
    }else{
        menu.style.display = "flex"
    }
}

// Working with cart
