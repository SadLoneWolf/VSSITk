$("document").ready(function(){

    $(".btn-primary").on("click",AddToCart);

   function AddToCart() {
  //  console.log($(this).parent().find("h2").html())

   let new_data = $(this).parent().find("h2").html() // То что сейчас нажали
    if(localStorage.getItem("item")==null){
        localStorage.setItem("item","[]")
    }
     var old_data = JSON.parse(localStorage.getItem("item"))  // Получаем старые данные в виде JSON 
        old_data.push(new_data) // Добавляем новую запись
        localStorage.setItem("item",JSON.stringify(old_data)) // Сохраняем изменения
   } 
});