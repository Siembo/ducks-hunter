/**
 * Standard event handler for clicking the "Submit"/"Continue" button
 * for rendering forms that render individual problems
 * 
 * @author Gerd Wagner
 */
oa.view.handleClickSubmitButtonEvents = function (e) {
  var userInputField = document.getElementById("askedFor"),
      submitButton = e.target,
      answerIsCorrect = false;
  if (userInputField.classList.contains("correct") ||
      userInputField.classList.contains("given")) {  // click continue event
    userInputField.classList.remove("correct");
    userInputField.classList.remove("given");
    submitButton.innerHTML = "?";
    oa.ctrl.continueCurrentExercise();
  } else {
    if (userInputField.value === "") {
      userInputField.value = oa.currentProblem.getCorrectAnswer();
      userInputField.classList.add("given");      
      submitButton.innerHTML = oa.view.continueSymbol;
      submitButton.focus();
      oa.view.showWorriedAri();
    } else {
      answerIsCorrect = (parseInt( userInputField.value) === oa.currentProblem.getCorrectAnswer());
      oa.ctrl.evaluateAnswer( answerIsCorrect);
      if (answerIsCorrect)  {
        submitButton.innerHTML = oa.view.continueSymbol;
        submitButton.focus();
        userInputField.classList.add("correct");
      } else {
        userInputField.classList.add("false");
        userInputField.focus();
      }
    }
  }
};
/**
 * Event handler for reseting the input field's class value on new user input 
 * 
 * @author Gerd Wagner
 */
oa.view.handleUserInputEvents = function (e) {
  e.target.classList.remove("correct");
  e.target.classList.remove("false");
};
/**
 * Event handler for pressing the Enter key
 * Maps the Enter key press event to a click submitButton event
 * 
 * @author Gerd Wagner
 */
oa.view.handleKeyPressEvents = function (e) {
 // var askedFor = document.getElementById("askedFor"),
  var  evt = {};
  if (e.keyCode === 13 /*&& e.target === askedFor */){
    evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window,
      0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.getElementById("submitButton").dispatchEvent(evt);
    e.preventDefault();
  }
};
