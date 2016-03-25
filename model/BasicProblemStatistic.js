/**
 * Defines the object type for the two lists basicAdditionStatistics 
 * and basicMultiplicationStatistics representing the extension of
 * basic problems.
 *
 * @author Gerd Wagner
 * @constructor
 * @this {BasicProblemStatistic}
 * @param {number} x  The first operand of the basic problem.
 * @param {number} y  The second operand of the basic problem.
 * @param {number} c  An integer counting the number of correct answers to the problem.
 */
function BasicProblemStatistic( x, y, c) {
  this.x = 0;
  this.y = 0;
  this.correctCounter = 0;
  if (arguments.length > 0) {
    this.setX( x); 
    this.setY( y); 
    this.setCorrectCounter( c); 
  }
}
BasicProblemStatistic.prototype.setX = function( x) {
  if (x === undefined) {
    throw new MandatoryValueConstraintViolation("A value for x must be provided!");
  } else if (!util.isNonNegativeInteger( x) || x > 9) {
    throw new TypeConstraintViolation("The value for x must be a non-negative integer smaller than 10!");
  } else {
    this.x = x;
  }
};
BasicProblemStatistic.prototype.setY = function( y) {
  if (y === undefined) {
    throw new MandatoryValueConstraintViolation("A value for y must be provided!");
  } else if (!util.isNonNegativeInteger( y) || y > 9) {
    throw new TypeConstraintViolation("The value for y must be a non-negative integer smaller than 10!");
  } else {
    this.y = y;
  }
};
BasicProblemStatistic.prototype.setCorrectCounter = function( c) {
  if (!c) { this.correctCounter = 0; }  // default
  else if (!util.isNonNegativeInteger( c)) {
    throw new TypeConstraintViolation("The value of c must be a non-negative integer!");
  } else {
    this.correctCounter = c;
  }
};
/**
 * Construct initial basic problem statistics array
 * (static method)
 *
 * @return {array}  An initial basic problem statisics array.
 */
BasicProblemStatistic.getInitialBasicProblemStatisics = function () {
  var basicProblemStatistics = new Array(100);
  for (var i=0; i < basicProblemStatistics.length; i++) {
    basicProblemStatistics[i] = new BasicProblemStatistic( Math.floor(i/10), i % 10, 0);
  }
  return basicProblemStatistics;
};
