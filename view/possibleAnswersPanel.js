/**
 * Creating a possible answers panel and handling possible answer selection events  
 * 
 * @author Gerd Wagner
 */

/**
 * create a possible answers panel 
 */
oa.view.createPossAnswerPanel = function (n, clickPossAnswEvtHandler) {
  var possAnswElemsStr = "", possAnswElems = [],
      possAnswPanel = dom.createDiv("","possibleAnswers");
  if (!n || isNaN(n)) {
    // by default 5 possible answers 
    possAnswElemsStr = "<div></div><div></div><div></div><div></div><div></div>";      
  } else {
    for (var i=0; i<n; i++) {
      possAnswElemsStr = possAnswElemsStr + "<div></div>";
    }
  }
  possAnswPanel.innerHTML = possAnswElemsStr;
  possAnswElems = possAnswPanel.querySelectorAll("div");
  // register an event listener for handling click possible answer events
  clickPossAnswEvtHandler = clickPossAnswEvtHandler || oa.view.handleClickPossibleAnswerEvents;
  for (var i=0; i < possAnswElems.length; i++) {
    possAnswElems[i].addEventListener("click", clickPossAnswEvtHandler);
  }
  return possAnswPanel;
};
/**
 * create the continue button for multiple-choice answer handling 
 */
oa.view.createContinueButton = function (parentEl) {
  var el = dom.createButton("continueButton","blue", oa.view.continueSymbol);
  el.addEventListener("click", oa.view.handleClickContinueButtonEvents);
  // hide the button since it is only shown after a possible answer has been selected
  el.style.display = "none";
  parentEl.appendChild( el);
};
/**
 * render the possible answers in a possible answers panel
 */
oa.view.renderPossibleAnswers = function (possibleAnswPanel, possAnswers, correctAnsw) {
  var possAnswElems = possibleAnswPanel.querySelectorAll("div");
  var possAnswSel = [];
  // number of possible answers without correct answer
  var n = Math.min( possAnswElems.length-1, possAnswers.length);
  for (var i=0; i < n; i++) {
    possAnswSel[i] = possAnswers[i];
  }
  possAnswSel.push( correctAnsw);
  util.shuffle( possAnswSel);
  for (var i=0; i < n+1; i++) {
    possAnswElems[i].classList.remove("correct");
    possAnswElems[i].classList.remove("false");
    possAnswElems[i].innerHTML = possAnswSel[i];  
  }
  possibleAnswPanel.style.visibility = "visible";
};
/**
 * Event handler for clicking/touching a possible answer
 * in a single answer rendering form
 * 
 * @author Gerd Wagner
 */
oa.view.handleClickPossibleAnswerEvents = function (e) {
  var answerEl = e.currentTarget,  // the possible answer element (being the observer)
      answerIsCorrect = false,
      continueButton = null, 
      possAnswPanel = answerEl.parentNode,
      // the element that renders the value asked for
      askedFor = possAnswPanel.parentNode.querySelector(".askedFor") || 
                 possAnswPanel.parentNode.querySelector("#askedFor"),
      correctAnswer = askedFor.getAttribute("data-correctAnswer");

  askedFor.classList.remove("correct");
  askedFor.classList.remove("false");
  askedFor.innerHTML = answerEl.innerHTML;
  //*** to be adapted for fractions
  answerIsCorrect = (parseInt( answerEl.innerHTML) === parseInt( correctAnswer));
  
  oa.ctrl.evaluateAnswer( answerIsCorrect);
  if (answerIsCorrect)  {
    // show the continue button and hide the possible answers
    continueButton = document.getElementById("continueButton");
    continueButton.style.display = "inline";
    continueButton.focus();
    answerEl.classList.add("correct");
    askedFor.classList.add("correct");
    possAnswPanel.style.visibility = "hidden";
  } else {
    askedFor.classList.add("false");
    answerEl.classList.add("false");
  }
};
/**
 * Event handler for clicking/touching the continue button in the 
 * multi-choice possible answer mode
 * 
 * @author Gerd Wagner
 */
oa.view.handleClickContinueButtonEvents = function (e) {
  var askedForElements = document.getElementsByClassName("askedFor");
  // taking care of a single answer rendering form
  if (askedForElements.length === 0) {
    askedForElements[0] = document.getElementById("askedFor");
  }
  for (var i=0; i < askedForElements.length; i++) {
    askedForElements[i].classList.remove("correct");
    askedForElements[i].classList.remove("given");      
  } 
  e.target.style.display = "none";
  oa.ctrl.continueCurrentExercise();
};
