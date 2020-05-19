$("ul").on("click","li",function(){

  $(this).toggleClass("click");
});
// click on x to delete
 $("ul").on("click","span",function(event){
   $(this).parent().fadeOut(function(){
     $(this).remove();
   });
   event.stopPropagation();
 });
$("input[type='text'").keypress(function(event){
  if(event.which=== 13){

    var todo_list=$(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash'></i></span>" +todo_list+"</li>");
  }
});
$(".fa-plus").click(function(){
  $("input[type='text'").fadeToggle();
});
