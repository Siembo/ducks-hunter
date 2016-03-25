/**
 * Control a gun that can shoot ducks. At every stage, you get an arithmetic operation to solve.
 * Groups of flying ducks having numbers on their picture will show up on the screen. The target is 
 * to kill all the ducks that has numbers which are not the correct answer to the mathematics operation.
 * 
 * @author Mircea Diaconescu
 */
oa.rf.ducks = new RenderingForm(
  "ducks",
  // description
  "#ducks/001: Kill all the ducks with wrong answers.",
  RenderingModeEL.individually,
  // help text
  "#ducks/002: Hunt all the ducks with wrong answers to the current operation! Don't kill the duck with the correct answer!", 
  false,  // noEvaluation
  true,   // worksForTouchScreens
  true    // worksForIE9
);

/**
 * Test if the rendering form is applicable to a particular problem type
 * 
 * @param {ArithmeticProblemType} apt
 * @return {boolean} 
 * @TODO: write the correct condition to be checked for this method!
 * 
 * @author Mircea Diaconescu
 */
oa.rf.ducks.isApplicableTo = function ( apt) {
  return apt instanceof ArithmeticProblemType;
};


/**
 * Duck class, with alive status, speed and image.
 */
oa.rf.ducks.Duck = function () {
  this.alive = true;
  this.speed = Math.random()*2 + 1;
  this.queue = new createjs.LoadQueue( false, "media/img/");
  this.queue.loadManifest( [
    // image files
    {id: "swingUp", src: "duck1.png"},
    {id: "swingDown", src: "duck2.png"},
    {id: "duckDie", src: "duckDie.png"}
    ]);
};
oa.rf.ducks.Duck.prototype.getSpeed = function () {
  return this.speed;
};
oa.rf.ducks.Duck.prototype.swingUp = function () {
  return this.queue.getResult("swingUp");
};
oa.rf.ducks.Duck.prototype.swingDown = function () {
  return this.queue.getResult("swingDown");
};
oa.rf.ducks.Duck.prototype.beKilled = function () {
  this.alive = false;
  return this.queue.getResult("duckDie");
};

