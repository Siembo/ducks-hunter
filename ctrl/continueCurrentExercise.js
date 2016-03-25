/**
 * Continue current exercise if not yet finished
 * 
 * @author Gerd Wagner
 */
oa.ctrl.continueCurrentExercise = function() {
  var curEx = oa.currentExercise;
  oa.view.showSmilingAri();
  if (curEx.renderingForm.mode === RenderingModeEL.individually && 
      oa.exerciseProblemCounter < curEx.numberOfProblems) {
    oa.previousProblem = oa.currentProblem;
    oa.learningUnitProblemCounter++;
    oa.exerciseProblemCounter++;
    // generate new problem, avoid repetitions
    for (var i=1; i<4; i++) {  // try up through 3 times in case of repetitions
      oa.currentProblem = (curEx.isBasicExercise && oa.learner.grade > 0 && oa.learner.grade < 3) ? 
          curEx.generateBasicProblem() : curEx.problemType.generateProblem();
      if (!oa.currentProblem || !oa.currentProblem.equals( oa.previousProblem)) break; 
    }
    if (!oa.currentProblem) {
      console.log("Flawed problem type: %o", ae.problemType);
      oa.ctrl.continueCurrentLearningUnit();;
    } else {
      oa.attemptCounter = 1;
      oa.view.fill( oa.currentProblem, curEx.renderingForm);
    }
  } else {  // End of current exercise 
    oa.ctrl.continueCurrentLearningUnit();
  }
};
