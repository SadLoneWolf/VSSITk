$("document").ready(function(){

    $(".btn-primary").on("click",AddToCart);

   function AddToCart() {
       alert($(this).parent.find('h2').text())
   }
});