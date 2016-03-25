/**
 * Represents an exercise based on an arithmetic problem type. If this is
 * a basic addition or multiplication problem type, then problems are
 * selected from a pool that is extracted from the resp. statistics array.
 * Problems that have not (yet) been answered well are selected with a
 * higher probability. If the problem type is not basic, then operands
 * are selected at random.
 *
 * @author Gerd Wagner
 * @constructor
 * @this {ArithmeticExercise}
 * @param {ArithmeticProblemType} problemType  The underlying problem type.
 * @param {number} numberOfProblems  The number of problems to be solved in this exercise.
 * @param {RenderingForm} renderingForm  The rendering form that determines the rendering
 *        of problems; must be compatible with the problem type.
 */
function ArithmeticExercise( problemType, numberOfProblems, renderingForm, rfparams) {
  
  var problemTypeObj = new ArithmeticProblemType();
  
  if (oa.arithmeticProblemTypes.hasOwnProperty( problemType)) {
    problemTypeObj = oa.arithmeticProblemTypes[problemType];
  } else {
    console.log("There is no such problem type like " + problemType + "!");
  }
  
  this.problemType = new ArithmeticProblemType();
  this.numberOfProblems = 0;
  this.renderingForm = new RenderingForm();
  this.renderingFormParams = {};
  
  // derived in case of a basic problem type
  this.isBasicExercise = false;
  this.problemPool = [];
  
  if (arguments.length > 0) {
    // constructor invocation with arguments
    this.setProblemType( problemTypeObj);
    this.setNumberOfProblems( numberOfProblems);
    this.setRenderingForm( renderingForm);
    this.setRenderingFormParams( rfparams);
  }
};
ArithmeticExercise.prototype.setProblemType = function (problemType) {
  if (problemType === null || problemType === undefined) {
    throw new MandatoryValueConstraintViolation("No value provided for the parameter 'problemType'!");
  } else if (typeof (problemType) !== "object") {
    throw new TypeConstraintViolation("The parameter 'problemType' must be an object!");
  } else if (!(problemType instanceof ArithmeticProblemType)) {
    throw new TypeConstraintViolation("The parameter 'problemType' must represent an instance of ArithmeticProblemType!");
  } else {
    this.problemType = problemType;
  }
};
ArithmeticExercise.prototype.setNumberOfProblems = function (numberOfProblems) {
  if (numberOfProblems === undefined) {
    throw new MandatoryValueConstraintViolation("No value provided for numberOfProblems!");
  } else if (! util.isPositiveInteger(numberOfProblems)) {
    throw new TypeConstraintViolation("The value of numberOfProblems is not a positive integer!");
  } else this.numberOfProblems = numberOfProblems;
};
ArithmeticExercise.prototype.setRenderingForm = function (renderingForm) {
  if (renderingForm === null || renderingForm === undefined) {
    throw new MandatoryValueConstraintViolation("No value provided for the parameter 'renderingForm'!" + this.problemType.name);
  } else if (typeof (renderingForm) !== "object") {
    throw new TypeConstraintViolation("The parameter 'renderingForm' must be an object!");
  } else if (!(renderingForm instanceof RenderingForm)) {
    throw new TypeConstraintViolation("The parameter 'renderingForm' must represent an instance of ArithmeticProblemType!");
  } else {
    this.renderingForm = renderingForm;
  }
};
ArithmeticExercise.prototype.setRenderingFormParams = function (rfparams) {
  if (!rfparams) {
    return;
  } else if (typeof (rfparams) !== "object") {
    throw new TypeConstraintViolation("The parameter 'rfparams' must be an object!");
  } else {
    this.renderingFormParams = rfparams;
  }
};
/**
 * Get basic addition or multiplication statistics for generating a problem pool.
 *
 * @author Gerd Wagner
 */
ArithmeticExercise.prototype.getBasicProblemStatistics = function () {
  switch (this.problemType.operators[0]) {
  case OperatorEL.plus:
    return oa.basicAdditionStatistics;
  case OperatorEL.times:
    return oa.basicMultiplicationStatistics;
  };
};
/**
 * Generates a problem pool for basic addition or multiplication.
 *
 * @author Gerd Wagner
 */
ArithmeticExercise.prototype.generateProblemPool = function () {
  var xnr = this.problemType.numberRanges[1];
  var ynr = this.problemType.numberRanges[2];
  
  function isCompatibleProblem( element, index, array) {
    return xnr.lb <= element.x && element.x <= xnr.ub &&
        ynr.lb <= element.y && element.y <= ynr.ub;
  };
  
  this.problemPool = this.getBasicProblemStatistics().filter(isCompatibleProblem);
  this.problemPool.sort( function (p1, p2) {
    return p1.correctCounter - p2.correctCounter; // ascending correct-counters
  });
};
/**
 * Generates a basic addition or multiplication problem
 * by selecting a problem of the pool with decreasing probability.
 *
 * @author Gerd Wagner
 * @return {ArithmeticProblem}  The new basic problem.
 */
ArithmeticExercise.prototype.generateBasicProblem = function () {
  var operands =[];
  var a = 0, b = 0, x = 0, y = 0, res = 0, i = 0;
  var n = this.problemPool.length;
  // select a random integer from an interval defining the granularity of the choice space
  var r = util.randomInt(1, n *(n + 1) / 2);
  // map r to an index i of the problem pool such that the problems with a smaller
  // correct-answer count have a higher probability
  // checks if r is in the interval [1,n], with a probability of n/s, for i=k=0,
  // in the interval [n+1, n+n-1], with a probability of (n-1)/s, for i=k=1,
  // up through [s,s], or a probability of 1/s, for i=k=n where s = n*(n+1)/2
  for (var k = 0; k < n; k++) {
    a = b;
    b = b + (n - k);
    if (a < r && r <= b) {
      i = k;
      break;
    }
  };
  x = this.problemPool[i].x;
  y = this.problemPool[i].y;
  switch (this.problemType.operators[0]) {
  case OperatorEL.plus:
    res = x + y;
    break;
  case OperatorEL.times:
    res = x * y;
    break;
  };
  operands =[x, y];
  return new ArithmeticProblem( this.problemType, operands, res);
};
/**
 * Generate n basic addition or multiplication problems
 *
 * @author Gerd Wagner
 * @param {integer} n  The number of problems to be generated
 * @return {array(ArithmeticProblem)}  An array of problem objects.
 */
ArithmeticExercise.prototype.generateBasicProblems = function (n) {
  var problems =[];
  var ap = new ArithmeticProblem();
  for (var k = 0; k < n; k++) {
    do {
      ap = this.generateBasicProblem();
    }
    while (ap.isIncludedIn(problems));
    // prevent duplicate problems
    problems[k] = ap;
  }
  return problems;
};