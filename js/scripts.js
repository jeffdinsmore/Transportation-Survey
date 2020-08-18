$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      const workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode.toUpperCase() + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      const funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode.toUpperCase() + "<br>");
    });
    $('#transportation_survey').hide();
  });
});