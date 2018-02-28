$(document).ready(function() {
  $(".submit-button").on("click", function() {
    var firstNum = +$(".firstInput").val();
    var secNum = +$(".secondInput").val();
    $("#total").text(firstNum + secNum);
  });
});
