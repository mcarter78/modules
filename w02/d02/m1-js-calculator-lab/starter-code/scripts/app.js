window.onload = function(){
  var alerts = document.getElementsByClassName("alert");
  alerts.forEach(alert, function(){
    alert.style.display = "none";
  });

  function setID (id){
    return document.getElementById(id);
  }

  function basicCalculator(){
    //basic calculator
    //what does it do?

    //get the input for #basic-num-1
    var num1 = document.getElementById('basic-num-1').value;
    //get the operator for #basic-operation.value
    var op = document.getElementById('basic-operation').value;
    //get the input for #basic-num-2
    var num2 = document.getElementById('basic-num-2').value;
    //assign answer to a variable
    var answer;

    var ansAlert = document.getElementById('basic-answer-alert');

    //how to achieve this

    //variables assigned to input 1 and 2
    //switch statement

    switch(op) {
    case "+": answer = Number(num1) + Number(num2);
    break;
    case "-": answer = num1 - num2;
    break;
    case "*": answer = num1 * num2;
    break;
    case "/": answer = num1 / num2;
    break;
  }
    //write 4 cases based on operator input value
    //if input is +, add input 1 and 2
    //assign added value to answer variable
    //change the text of #basic-answer-alert
    //to display answer variable
    ansAlert.innerHTML = answer;
  }


  //assign calculate button to a variable
  var calculateButton = document.getElementById('basic-calc');
  calculateButton.addEventListener("click", function(e){
    basicCalculator();
  });

function tripCalculator(){
  var distance = Number((setID("trip-distance")).value);
  var mpg = Number((setID("trip-mpg")).value);
  var cost = Number((setID("trip-cost")).value);
  var speed = Number((setID("trip-speed")).value);
  var answerAlert = setID("trip-answer-alert");
  console.log(distance, mpg, cost, speed);

  var answer;

  if(speed < 60){
    answer = distance / mpg * cost;
  }
  else if(speed > 60){
    answer = distance / (mpg - (speed - 60) * 2) * cost;
  }

  answerAlert.innerHTML = answer;

  }
  var tripButton = setID("trip-calc");
  tripButton.addEventListener("click", function(){
    tripCalculator();
  });
    //how to iterate on this

  function bmiCalculator(){
    var mass = (Number((setID("bmi-mass")).value)) * 2.20;
    var height = (Number((setID("bmi-height")).value)) * 39.37;
    var answerAlert = setID("bmi-answer-alert");
    var answer;
    //Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
    answer = mass / (height * height) * 703;
    answerAlert.innerHTML = answer;
  }
  var bmiButton = setID("bmi-calc");
  bmiButton.addEventListener("click", function(){
    bmiCalculator();
  });

  function mortgageCalculator(){
    var loan = Number(setID("mortgage-loan").value);
    var apr = Number(setID("mortgage-apr").value);
    var term = Number(setID("mortgage-term").value);
    var answerAlert = setID("mortgage-answer-alert");
    var answer;

    

    answerAlert.innerHTML = answer;
  }
  var mortgageButton = setID("mortgage-calc");
  mortgageButton.addEventListener("click", function(){
    mortgageCalculator();
  });
};
