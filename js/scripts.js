$(document).ready(function() {
  $("button").click(function() {
    var score = parseInt($("input:radio[name=operator1]:checked").val());
    score += parseInt($("input:radio[name=operator2]:checked").val());
    score += parseInt($("input:radio[name=operator3]:checked").val());
    score += parseInt($("input:radio[name=operator4]:checked").val());
    score += parseInt($("input:radio[name=operator5]:checked").val());

    var yourCharacter;
    if (score < 5) {
      yourCharacter = "The Worst One";
    } else if (score < 10) {
      yourCharacter = "The Okay One";
    } else if (score < 15) {
      yourCharacter = "The Pretty Good One";
    } else {
      yourCharacter = "The Greatest One";
    }
    $("#theanswer").text(yourCharacter);
    $(".hidden, #questionnaire").toggleClass("hidden");

  });
});
