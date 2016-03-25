/**
 * Start presenting a learning unit  
 * 
 * @author Gerd Wagner
 * 
 * @param {string} luid  The id of the learning unit to be started.
 */
oa.ctrl.startLearningUnit = function( luid) {
  var lu = LearningUnit.getLearningUnitById( parseInt(luid));
  if (!lu) { 
    console.log("There is no LU with id = " + luid);
    return;
  }
  oa.view.showQuitButton();
  oa.view.fillLearningUnitHeader( lu);
  oa.view.fillLabels();
  oa.currentLearningUnit = lu;
  oa.learningUnitProblemCounter = 0;
  oa.correctAnswerCounter = 0;
  oa.currentExerciseNumber = 1;
  oa.ctrl.startExercise( lu.exercises[0]);
};
