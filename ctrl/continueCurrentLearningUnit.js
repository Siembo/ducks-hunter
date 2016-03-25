/**
 * Go on with current learning unit  
 * 
 * @author Gerd Wagner
 * 
 */
oa.ctrl.continueCurrentLearningUnit = function () {
  var cLU = oa.currentLearningUnit,
      rfName = oa.currentExercise.renderingForm.name,
      cleanUp = oa.view.rf[rfName].cleanUp;
  // clear the rf style of the body element
  document.body.classList.remove( rfName);
  // clean up if a cleanUp procedure has been defined 
  if (cleanUp) { cleanUp();}
  if (oa.currentExerciseNumber < cLU.exercises.length) {
    oa.currentExerciseNumber++;
    oa.currentExercise = cLU.exercises[oa.currentExerciseNumber-1];
    oa.ctrl.startExercise( oa.currentExercise);    
  } else {  // End of Learning Unit
    oa.view.resetScreen();
  }
};
