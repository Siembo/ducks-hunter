/**
 * Start presenting an arithmetic exercise  
 * 
 * @author Gerd Wagner
 * 
 * @param {ArithmeticExercise} ae  An arithmetic exercise.
 */
oa.ctrl.startExercise = function( ae) {
  var rfName = ae.renderingForm.name;
  var rFisApplicable = ae.renderingForm.isApplicableTo( ae.problemType, ae.renderingFormParams);
  var problemGenerationFailed = false;
  oa.currentExercise = ae;
  if ( rFisApplicable &&
       (!oa.env.isTouchScreenDevice || ae.renderingForm.worksForTouchScreens) &&
       (!oa.env.isIE9 || ae.renderingForm.worksForIE9) 
     ) {
    // add the rf name as a body class
    document.body.classList.add( rfName);
    oa.view.fillExerciseHeader( ae);
    if (oa.currentExercise.renderingForm.helpText) { oa.view.showHelpButton();} 
    else { oa.view.hideHelpButton();}
    ae.isBasicExercise = ae.problemType.isBasicProblemType();
    if (ae.isBasicExercise) { ae.generateProblemPool(); }
    switch (ae.renderingForm.mode) {
    case RenderingModeEL.individually:
      oa.currentProblem = (ae.isBasicExercise) ? 
          ae.generateBasicProblem() : ae.problemType.generateProblem();
      if (!oa.currentProblem) {
        problemGenerationFailed = true;
      } else {
        if (!ae.renderingForm.noEvaluation) oa.learningUnitProblemCounter += 1;
        oa.exerciseProblemCounter = 1;
      }
      break;
    case RenderingModeEL.enbloc: 
      oa.currentProblems = (ae.isBasicExercise) ? 
          ae.generateBasicProblems( ae.numberOfProblems) : ae.problemType.generateProblems( ae.numberOfProblems);
      if (!oa.currentProblems) {
        problemGenerationFailed = true;
      } else {
        if (!ae.renderingForm.noEvaluation) oa.learningUnitProblemCounter += ae.numberOfProblems;
        oa.exerciseProblemCounter = 1;
      }
      break;      
    }
    if (problemGenerationFailed) {
      console.log("Flawed problem type: %o", ae.problemType);
      oa.ctrl.continueCurrentLearningUnit();;
    } else {
      oa.attemptCounter = 1;
      oa.view.render();
      oa.view.fill();
      if (ae.renderingForm.noEvaluation) { oa.view.hideEvaluationInfo();} 
      else { oa.view.showEvaluationInfo();}
      oa.view.showSmilingAri();
    }
  } else {
    if (!rFisApplicable) {
      console.log("Rendering form "+ ae.renderingForm.name +" is not applicable to problem type "+ ae.problemType.name);
    }
    oa.ctrl.continueCurrentLearningUnit();
  }
};
