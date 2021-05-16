function toggleCoffe(){
    var coffe = document.getElementById('coffe_list')
    if(coffe.style.display == "none"){
        coffe.style.display = "block"
    }else{
        coffe.style.display = "none"
    }
}

function toggleSalad(){
    var salad = document.getElementById("salad_list")
    console.log('salad')
    if(salad.style.display == "none"){
        salad.style.display = "block"
    }else{
        salad.style.display = "none"
    }
}

function toggleJuice(){
    var soda= document.getElementById("soda_list")
    console.log('JUICES')
    if(soda.style.display == "none"){
        soda.style.display = "block"
    }else{
        soda.style.display = "none"
    }
}

function toggleCookies(){
    var cookie = document.getElementById("cookie_list")
    console.log('cookie')
    if(cookie.style.display == "none"){
        cookie.style.display = "block"
    }else{
        cookie.style.display = "none"
    }
}

function insertInCart(){
    
}

function showCart(){
    if(window.localStorage.length === 0){
        alert('Корзина пуста !')
    }else{
        var cart = document.getElementById("shopping_cart")
        cart.innerText = window.localStorage.getItem('product_id')
    }
}