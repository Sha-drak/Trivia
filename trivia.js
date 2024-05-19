//Selecting the html elements to be used 
const score = document.querySelector('#sc');
const feedback = document.getElementById("fr-feedback");
const responseField = document.getElementById("fr-response");

// Set the initial score to zero
score.innerHTML = "0"; 

// Creating a function that will check answers for multiple choice questions
function checkAnswer(button, isCorrect, feedbackId){ //button = specifies the button pressed, isCorrect = checks if the button is correct, feedbackId = gives "correct" or "incorrect" feedback to the user
const feedback = document.getElementById(feedbackId);
  if (isCorrect) {
    button.style.backgroundColor = "green";
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    score.innerHTML = parseInt(score.innerHTML) + 1 ; 
  } 
  else {
    button.style.backgroundColor = "red";
    feedback.textContent = "Incorrect";
    feedback.style.color = "red";
    // set the button's background color back to original
    setTimeout(() => {
      button.style.backgroundColor = "";
      feedback.textContent = "";
    }, 1000);
  }
}

// Creating a function that will check answers for free response questions
function checkFreeResponse() {
  const userResponse = responseField.value.toLowerCase().trim(); //convert user input to lower case string
  if (userResponse === "pacific") {
    score.innerHTML = parseInt(score.innerHTML) + 1 ; 
    responseField.style.backgroundColor = "green";
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    responseField.style.backgroundColor = "red";
    feedback.textContent = "Incorrect";
    feedback.style.color = "red";
    setTimeout(() => {
      responseField.style.backgroundColor = "";
      feedback.textContent = "";
    }, 1000);
  }
}
