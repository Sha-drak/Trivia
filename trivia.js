//Selecting the html elements to be used
const score = document.querySelector("#sc");
const feedback = document.getElementById("fr-feedback");
const responseField = document.getElementById("fr-response");
const comment = document.querySelector('#comment h3');

 

// Set the initial score to zero
score.innerHTML = "0";

// Creating an array for positive feedbacks and select randomly from it
positive =["Kudos!","Great job","You got it","You're awesome!","Bravo!","Outstanding performance!"];
function getRandomFeedbackP() {
  comment.style.backgroundColor = 'green';
  var pComment = positive[Math.floor(Math.random() * positive.length)];
  comment.textContent = pComment;
  setTimeout(() => {
    comment.textContent = "";
  }, 1000);
}

// Creating an array for negative feedbacks and selecting randomnly from it
negative =['Oops!','Try Again!','Not Quite It','You Missed!','Give Another Shot',];
function getRandomFeedbackN() {
  comment.style.backgroundColor = 'red';
  var nComment = negative[Math.floor(Math.random() * negative.length)];
  comment.textContent = nComment;
  setTimeout(() => {
    comment.textContent = "";
  }, 1000);
}

// Creating a function that will check answers for multiple choice questions
function checkAnswer(button, isCorrect, feedbackId) {
  const feedback = document.getElementById(feedbackId);
  if (isCorrect) {
    button.style.backgroundColor = "green";
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    getRandomFeedbackP()
    score.innerHTML = parseInt(score.innerHTML) + 1;

  } else {
    button.style.backgroundColor = "red";
    feedback.textContent = "Incorrect";
    feedback.style.color = "red";
    getRandomFeedbackN()
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
    getRandomFeedbackP()
    score.innerHTML = parseInt(score.innerHTML) + 1;
    responseField.style.backgroundColor = "green";
    feedback.textContent = "Correct!";
    feedback.style.color = "green";

    // Turn input field red when input is wrong
  } else {
    getRandomFeedbackN()
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
