/**
 * @author Gerd Wagner
 * @constructor
 * @this {ArithmeticProblem}
 * @param {ArithmeticProblemType} type  
 * @param {array} operands  The list of operands, which are either integers, decimal numbers 
 *                          or fractions, depending on this.type.numberType.
 * @param {object} result  Either an integer, decimal number or fraction.
 * @param {array} operators  The list of operators, if not provided via type.operators 
 */
function ArithmeticProblem( type, operands, result, operators) {
  this.type = new ArithmeticProblemType();
  this.operands = []; 
  this.result = 0; 

  if (arguments.length > 0) { // constructor invocation with arguments
    this.setType( type);
    this.setOperands( operands);
    this.setResult( result);
    if (operators) this.setOperators( operators);
  }
}
ArithmeticProblem.prototype.setType = function (type) {
  if (!type) {
    throw new MandatoryValueConstraintViolation("No value provided for the parameter 'type'!"+
        " operands = "+ operands +" result = "+ result);
  } else if (typeof(type) !== "object") {
    throw new TypeConstraintViolation("The parameter 'type' must be an object!");
  } else if (!(type instanceof ArithmeticProblemType)) {
    throw new TypeConstraintViolation("The parameter 'type' must represent an instance of ArithmeticProblemType!");
  } else {
    this.type = type;
  }
};
ArithmeticProblem.prototype.setOperands = function (operands) {
  if (operands === null) {
    throw new MandatoryValueConstraintViolation("No value provided for the parameter 'operands'!");
  } else if (!Array.isArray( operands)) {
    throw new TypeConstraintViolation("The parameter 'operands' must be an array!");
  } else if (operands.length < 2) {
    throw new MandatoryValueConstraintViolation("The parameter 'operands' is an array with less than 2 elements!");
  } else {
    this.operands = operands;
  }
};
ArithmeticProblem.prototype.setOperand = function (i, operand) {
  if (i<0) {
    throw new OtherConstraintViolation("Negative array index!");
//  } else if (!util.isInteger( operand)) {
//    throw new TypeConstraintViolation("The operand must be an integer!");
  } else {
    this.operands[i] = operand;
  }
};
ArithmeticProblem.prototype.setResult = function (result) {
  if (this.type.specialProblemCategory) return;
  if (result === undefined) {
    throw new MandatoryValueConstraintViolation("No value provided for result! Operands: "+ JSON.stringify(this.operands));
//  } else if (typeof(result) !== "number") {
//    throw new TypeConstraintViolation("The value of result is not a number!");
  } else this.result = result;
};
ArithmeticProblem.prototype.setOperators = function ( operators) {
  if (!Array.isArray( operators)) {
    throw new TypeConstraintViolation(
        "The parameter 'operators' must be an array!", operators);
  } else if (operators.length === 0) {
    throw new MandatoryValueConstraintViolation(
        "The parameter 'operators' is an empty list!");
  } else {
    this.operators = operators;
  }
};

ArithmeticProblem.prototype.toString = function () {
  var displayTerm = "";
  if (!this.type) {  // untyped (ad-hoc) problem
    return JSON.stringify( this);  
  }
  switch (this.type.specialProblemCategory) {
  case SpecialProblemCategoryEL.SortingNumbers:
    displayTerm = JSON.stringify( this);
    break;
  case SpecialProblemCategoryEL.RecognizeNumber:
    displayTerm = JSON.stringify( this);
    break;
  case SpecialProblemCategoryEL.EquivalentFractions:
    displayTerm = JSON.stringify( this);
    break;
  case SpecialProblemCategoryEL.RecognizeMultiples:
    displayTerm = JSON.stringify( this);
    break;
  case SpecialProblemCategoryEL.MixedBinaryProblem:
    displayTerm = JSON.stringify( this.operands[0]) +" "+ util.operatorSymbols[ this.operators[0]-1] +" "+ 
        JSON.stringify( this.operands[1]);
    displayTerm = displayTerm +" = "+ JSON.stringify( this.result);  
    break;
  default:  // standard term structure
    displayTerm = JSON.stringify( this.operands[0]) +" "+ util.operatorSymbols[ this.type.operators[0]-1] +" "+ 
        JSON.stringify( this.operands[1]);
    for (var i=2; i < this.operands.length; i++) {
      displayTerm = displayTerm +" "+ util.operatorSymbols[ this.type.operators[i-1]-1] +" "+ 
          JSON.stringify( this.operands[i]); 
    }
    displayTerm = displayTerm +" = "+ JSON.stringify( this.result);  
  }    
  return displayTerm;
};
/**
 * Determine what is the correct answer to a problem
 * 
 * @author Gerd Wagner
 * @return {number} The correct answer to a problem.
 */
ArithmeticProblem.prototype.getCorrectAnswer = function () {
  var askedFor = this.type.askedFor;
  if (askedFor === 0) { return this.result; }
  else { return this.operands[ askedFor-1]; }
};
/**
 * Determine if a given problem is equal to this problem
 * 
 * @author Gerd Wagner
 * @param {ArithmeticProblem} ap  The second problem
 * @return {boolean} True if both problems are equal.
 */
ArithmeticProblem.prototype.equals = function (ap) {
  var isEqual = true;
  if (this.type === ap.type) {
    for (var i=0; i < ap.operands.length; i++) { 
      isEqual = isEqual && (this.operands[i] === ap.operands[i]);
    }
    return isEqual; 
  }
  else { return false; }
};
/**
 * Tests if a problem is included in a list of problems
 * 
 * @author Gerd Wagner
 * @return {boolean} 
 */
ArithmeticProblem.prototype.isIncludedIn = function (problems) {
  for (var i=0; i < problems.length; i++) { 
    if (this.equals( problems[i])) { return true; }
  }
  return false;
};
/**
 * Tests if a problem is a basic addition or multiplication problem.
 * 
 * @author Gerd Wagner
 * @return {boolean}  
 */
ArithmeticProblem.prototype.isBasicProblem = function () {
  if (this.operands.length === 2 &&
      (this.type.operators[0] === OperatorEL.plus || this.type.operators[0] === OperatorEL.times) &&
      this.operands[0] >= 0 && this.operands[0] <= 9 &&
      this.operands[1] >= 0 && this.operands[1] <= 9 &&
      this.type.numberType === NumberTypeEL.NonNegativeInteger &&
      (!this.type.specialProblemCategory) ) { 
    return true; 
  } else {
    return false;
  }
};
/**
 * Computes incorrect possible answers for an arithmetic problem.
 * 
 * @author Gerd Wagner
 * @return {array}  
 */
ArithmeticProblem.prototype.createPossibleAnswers = function (n) {
  var nmrOfPossAnsw = n || 5;  // the default number of possible answers is 5
  var min=0, max=0, possibleAnswersSelectionSet=[], possibleAnswers=[];
  var correctAnswer = this.getCorrectAnswer();
  var intervalHalfSize = Math.max( nmrOfPossAnsw, Math.floor( correctAnswer/10));
  if (this.type.numberType === NumberTypeEL.NonNegativeInteger) {
    if (this.operands.length === 2 && this.type.askedFor === 0) {
      switch (this.type.operators[0]) {
      case OperatorEL.plus:
        min = Math.max( correctAnswer - intervalHalfSize, Math.max( this.operands[0], this.operands[1]));
        max = correctAnswer + intervalHalfSize;
        break;
      case OperatorEL.minus:
        min = Math.max( correctAnswer - intervalHalfSize, 0);
        max = Math.min( correctAnswer + intervalHalfSize, this.operands[0]);
        break;
      default:
        min = Math.max( correctAnswer - intervalHalfSize, 0);
        max = correctAnswer + intervalHalfSize;
      }
    } else {
      min = Math.max( correctAnswer - intervalHalfSize, 0); 
      max = correctAnswer + intervalHalfSize;
    }
  } else {
    min = correctAnswer - intervalHalfSize; 
    max = correctAnswer + intervalHalfSize;
  }
  for (var i=min; i<=max; i++) {
    possibleAnswersSelectionSet[i-min] = i;
  }
  // remove correct answer
  possibleAnswersSelectionSet.splice( correctAnswer - min, 1);
  // choose possible answers at random
  for (var i=0; i < nmrOfPossAnsw-1; i++) { 
    var r = util.randomInt( 0, possibleAnswersSelectionSet.length-1);
    possibleAnswers[i] = possibleAnswersSelectionSet.splice( r, 1);
  }
  return possibleAnswers;
};
/**
 * Computes 4 (incorrect) possible answers around a given correct answer
 * 
 * @author Gerd Wagner
 * @return {array}  
 */
ArithmeticProblem.createPossibleAnswers = function (correctAnswer) {
  var min=0, max=0, possibleAnswersSelectionSet=[], possibleAnswers=[];
  var intervalHalfSize = Math.max( 5, Math.floor(correctAnswer/10));
  min = Math.max( correctAnswer - intervalHalfSize, 0); 
  max = correctAnswer + intervalHalfSize;  
  for (var i=min; i<=max; i++) {
    possibleAnswersSelectionSet[i-min] = i;
  }
  // remove correct answer
  possibleAnswersSelectionSet.splice( correctAnswer - min, 1);
  // choose 4 possible answers at random
  for (var i=0; i < 4; i++) { 
    var r = util.randomInt( 0, possibleAnswersSelectionSet.length-1);
    possibleAnswers[i] = possibleAnswersSelectionSet.splice( r, 1);
  }
  return possibleAnswers;
};
