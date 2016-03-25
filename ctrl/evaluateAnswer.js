/**
 * Evaluate the user's answer for standard individual problems 
 * 
 * @author Gerd Wagner
 * 
 * @param {number} answer  The user's answer.
 */
oa.ctrl.evaluateAnswer = function (answerIsCorrect, weight) {
  var percentageCorrect = 0,
      grade = oa.learner.grade;
  if (!weight) { weight = 1;}
  if (answerIsCorrect) {
    if (oa.attemptCounter <= 1) { 
      oa.correctAnswerCounter += weight;
      if (grade>0 && grade<3 && oa.currentProblem.isBasicProblem()) {
        i = oa.currentProblem.operands[0] * 10 + oa.currentProblem.operands[1];  
        oa.currentExercise.getBasicProblemStatistics()[i].correctCounter++;
      }
    }
    oa.view.showSuccessAnimation();
  } else {
    if (grade>0 && grade<3 && oa.currentProblem.isBasicProblem()) {
      i = oa.currentProblem.operands[0] * 10 + oa.currentProblem.operands[1];
      if (oa.currentExercise.getBasicProblemStatistics()[i].correctCounter > 0) {
        oa.currentExercise.getBasicProblemStatistics()[i].correctCounter--;
      }
    }
    oa.view.showDisappointedAri();
    oa.attemptCounter++;
  }
  percentageCorrect = (oa.learningUnitProblemCounter <= 0) ? 0 : 
      Math.floor( oa.correctAnswerCounter / oa.learningUnitProblemCounter * 100);
  oa.view.showPercentageCorrect( percentageCorrect);
};
/**
 * Evaluate the user's answer for standard fraction problems
 * 
 * @author Linda Eckardt
 * 
 * @param {array} answer  The user's answer.
 */
oa.ctrl.evaluateFraction = function( answer) {
  var percentageCorrect = 0,
      correct = oa.currentProblem.getCorrectAnswer(),
      result = false,
      reducible = false;
  // if needed, check for reducibility
  if (oa.currentProblem.type.reducedFractions) {
    for (var teiler = 2; teiler <= Math.min(answer[0],answer[1]); teiler++)
      if (answer[0] % teiler == 0 && answer[1] % teiler == 0) {
        reducible = true;  // divisor found
        break;
      }
  }
  if (!reducible && answer[0]/answer[1] === correct[0]/correct[1]) {
    result = true;
      if (oa.attemptCounter <= 1) { 
        oa.correctAnswerCounter += 1;
      }
      oa.view.showSmilingAri();
  }
  else {
      oa.view.showDisappointedAri();
      oa.attemptCounter += 1;
  }
  percentageCorrect = (oa.learningUnitProblemCounter<=0) ? 0 : Math.floor( oa.correctAnswerCounter / oa.learningUnitProblemCounter * 100);
  oa.view.showPercentageCorrect( percentageCorrect);  
  return result;
};