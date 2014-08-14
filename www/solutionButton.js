$(".exercise_solution_btn").each(function(index, value){ 
  $(value).click(function(){
    var id = $(value).attr("id");
    var inputId = id.replace("btn","code");
    var solution = $(value).val();
    $("#"+inputId).val(solution).change();
    
  })  
})