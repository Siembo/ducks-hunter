/**
 * Invokes a render procedure for rendering the structure of the rendering form 
 * of the current exercise
 * 
 * @author Gerd Wagner
 */
oa.view.render = function () {
  var name = oa.currentExercise.renderingForm.name;
  // clear the renderBox
  document.getElementById("renderBox").innerHTML = "";
  switch (oa.currentExercise.renderingForm.mode) {
  case RenderingModeEL.individually:
    oa.view.rf[name].render( oa.currentProblem, oa.currentExercise.renderingFormParams);
    break;
  case RenderingModeEL.enbloc: 
    oa.view.rf[name].render( oa.currentProblems, oa.currentExercise.renderingFormParams);
    break;      
  }
};