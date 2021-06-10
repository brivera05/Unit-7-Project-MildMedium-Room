let counter = 0;

$(".submit").click(function(){
    
    let userAge = $(".age").val();
    console.log(userAge);
    
    let userFood = $(".food").val();
    console.log(userFood);
    
    $(".fullSentence").append("You are " + userAge);
    $(".fullSen").append("Your favorite food is " + userFood);
    
});