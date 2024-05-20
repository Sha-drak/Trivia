//Selecting the html elements to be used
const score = document.querySelector("#sc");
const feedback = document.getElementById("fr-feedback");
const responseField = document.getElementById("fr-response");
const comment = document.querySelector('#comment h3'); 

// Set the initial score to zero
score.innerHTML = "0";

// Creating an array for positive feedback
positive =['Kudos!','Great job','You got it','You make this look easy!','Bravo!',];

// Creating an array for negative feedback
negative =['Oops!','Try Again!','Not Quite It','You Missed!','Give Another Shot',];

// Creating a function that will check answers for multiple choice questions
function checkAnswer(button, isCorrect, feedbackId) {
  const feedback = document.getElementById(feedbackId);
  if (isCorrect) {
    button.style.backgroundColor = "green";
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    score.innerHTML = parseInt(score.innerHTML) + 1;
  } else {
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

  // Turn input field green when input is correct
  if (userResponse === "pacific") {
    score.innerHTML = parseInt(score.innerHTML) + 1;
    responseField.style.backgroundColor = "green";
    feedback.textContent = "Correct!";
    feedback.style.color = "green";

    // Turn input field red when input is wrong
  } else {
    responseField.style.backgroundColor = "red";
    feedback.textContent = "Incorrect";
    feedback.style.color = "red";

    // Set color back to default
    setTimeout(() => {
      responseField.style.backgroundColor = "";
      feedback.textContent = "";
    }, 1000);
  }
}
