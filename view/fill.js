/**
 * Invokes a fill procedure for filling a given rendering type with problem contents 
 * 
 * @author Gerd Wagner
 * @param {ArithmeticProblem} ap  An arithmetic problem.
 */
oa.view.fill = function() {
  var name = oa.currentExercise.renderingForm.name;
  switch (oa.currentExercise.renderingForm.mode) {
  case RenderingModeEL.individually:
    document.getElementById("problemCounter").innerHTML = oa.learningUnitProblemCounter;
    oa.view.rf[name].fill( oa.currentProblem, oa.currentExercise.renderingFormParams);
    break;
  case RenderingModeEL.enbloc: 
    document.getElementById("problemCounter").innerHTML = 
      oa.learningUnitProblemCounter - oa.currentExercise.numberOfProblems + 1 +
      "-"+ oa.learningUnitProblemCounter;
    oa.view.rf[name].fill( oa.currentProblems, oa.currentExercise.renderingFormParams);
    break;      
  }
};