OperatorEL = Object.defineProperties( {}, {
  plus: { value: 1, writable: false},
  minus: { value: 2, writable: false},
  times: { value: 3, writable: false},
  dividedBy: { value: 4, writable: false},
  MAX: { value: 4, writable: false}
 });
NumberTypeEL = Object.defineProperties( {}, {
  NonNegativeInteger: { value: 1, writable: false},
  Integer: { value: 2, writable: false},
  Decimal: { value: 3, writable: false},
  Fraction: { value: 4, writable: false},
  MAX: { value: 4, writable: false}
 });
NumDenomOrBothEL = Object.defineProperties( {}, {
  numerator: { value: 1, writable: false},
  denominator: { value: 2, writable: false},
  both: { value: 3, writable: false},
  MAX: { value: 3, writable: false}
 });
SpecialProblemCategoryEL = Object.defineProperties( {}, {
  SameDenominator: { value: 1, writable: false},
  DenominatorEqualsLCM: { value: 2, writable: false},
  SortingNumbers: { value: 3, writable: false},
  RecognizeNumber: { value: 4, writable: false},
  EquivalentFractions: { value: 5, writable: false},
  RecognizeMultiples: { value: 6, writable: false},
  MixedBinaryProblem: { value: 7, writable: false},
  MAX: { value: 7, writable: false}
 });
/**
 * Defines a type of arithmetic problems, where a standard problem type is given by a 
 * parenthesis-free term that is evaluated from left to right, which implies that addition 
 * or subtraction must not be followed by multiplication or division.
 * 
 * @author Gerd Wagner
 * @author Linda Eckardt
 * @constructor
 * @this {ArithmeticProblemType}
 * @param {string} name  The name of the arithmetic problem type.
 * @param {string}
 *          title
 * @param {number} numberType  The number type for operands (an integer between 1 and
 *          4 corresponding to NonNegativeInteger, Integer, Decimal, Fraction).
 * @param {array} numberRanges  An array of NumberRange objects.
 * @param {array} operators  An array of integers between 1 and 4 representing the
 *          operators plus, minus, times and dividedBy.
 * @param {number} askedFor  The part of the arithmetic problem that is asked for, i.e.
 *          the result, if its value is 0, or otherwise the nth operand, if its value is n.
 * @param {number} askedForNumDenomOrBoth  An enumeration value denoting the part of a fraction that is asked for.
 * @param {bool} reducedFractions  If true, then all fractions, including the answer, have to be reduced.
 * @param {number} specialProblemCategory  An enumeration value denoting a non-standard problem type 
 *          (such as SameDenominator, DenominatorEqualsLCM, SortingNumbers, EquivalentFractions, etc.)
 */
function ArithmeticProblemType(
    param1,
    title, 
    numberType, // { NonNegativeInteger, Integer, Decimal, Fraction }
    numberRanges, // Array of NumberRange objects
    operators, // Array of OperatorEL values
    askedFor,  // Integer [0, operators.length+1]
//    helpText,
    specialProblemCategory,  // enumeration
    askedForNumDenomOrBoth, // enumeration {1,2,3}
    reducedFractions,   // boolean
    mixedFractions   // boolean
    ) {
  this.name = "";
  this.title = "";
  this.numberType = 0;
  this.numberRanges = [];
  this.operators = [];
  this.askedFor = 0;
  //this.helpText = "";
  this.specialProblemCategory = 0;
  this.askedForNumDenomOrBoth = 0;
  this.reducedFractions = false;
  this.mixedFractions = false;

  if (arguments.length > 0) {
    if (arguments.length > 1) {
      this.setName( param1);
      this.setTitle( title);
      this.setNumberType( numberType);
      this.setNumberRanges( specialProblemCategory, numberRanges);
      this.setOperators( specialProblemCategory, operators);
      this.setAskedFor( askedFor);
      //this.setHelpText(helpText);
      this.setSpecialProblemCategory( specialProblemCategory);
      this.setAskedForNumDenomOrBoth( askedForNumDenomOrBoth);
      this.setReducedFractions( reducedFractions);
      this.setMixedFractions( mixedFractions);
    } else {  // only one argument being the parameters object
      if (param1.name) this.setName( param1.name);
      if (param1.title) this.setTitle( param1.title);
      if (param1.numberType) this.setNumberType( param1.numberType);
      if (param1.numberRanges) this.setNumberRanges( param1.specialProblemCategory, param1.numberRanges);
      if (param1.operators) this.setOperators( param1.specialProblemCategory, param1.operators);
      if (param1.askedFor) this.setAskedFor( param1.askedFor);
      if (param1.specialProblemCategory) this.setSpecialProblemCategory( param1.specialProblemCategory);
      if (param1.askedForNumDenomOrBoth) this.setAskedForNumDenomOrBoth( param1.askedForNumDenomOrBoth);
      if (param1.reducedFractions) this.setReducedFractions( param1.reducedFractions);
      if (param1.mixedFractions) this.setMixedFractions( param1.mixedFractions);
    }
  }
}
/**
 * Tests if an operators list represents an admissible sequence where
 * plus or minus must not be followed by times or divideBy.
 * 
 * @author Gerd Wagner
 * @return {boolean}
 */
ArithmeticProblemType.isAdmissibleOperatorSequence = function (operators) {
  var op1, op2;
  if (operators.length < 2) return true;
  for ( var i = 1; i <= operators.length - 1; i++) {
    op1 = operators[i - 1];
    op2 = operators[i];
    if ((op1 === OperatorEL.plus || op1 === OperatorEL.minus)
        && (op2 === OperatorEL.times || op2 === OperatorEL.divideBy)) {
      return false;
    }
  }
  return true;
};

// ========================= S E T T E R S =====================================

ArithmeticProblemType.prototype.setName = function (name) {
  if (name === undefined || name === "") {
    throw new MandatoryValueConstraintViolation("A value for the name must be provided!");
  } else if (typeof (name) !== "string") {
    throw new TypeConstraintViolation("The name must be a string!");
  } else {
    this.name = name;
  }
};
ArithmeticProblemType.prototype.setTitle = function (title) {
  if (title === undefined || title === "") {
    throw new MandatoryValueConstraintViolation(
        "A value for the title must be provided!");
  } else if (typeof (title) !== "string") {
    throw new TypeConstraintViolation("The title must be a string!");
  } else {
    this.title = title;
  }
};
ArithmeticProblemType.prototype.setNumberType = function (numberType) {
  if (numberType === undefined) {
    throw new MandatoryValueConstraintViolation(
        "No value provided for numberType!");
  } else if (!util.isPositiveInteger(numberType)) {
    throw new TypeConstraintViolation(
        "The value of numberType is not a positive integer!");
  } else if (numberType < 1 || numberType > 5) {
    throw new ValueRangeConstraintViolation(
        "The value of numberType must be between 1 and 5!");
  } else
    this.numberType = numberType;
};
/**
 * The numberRanges property normally contains a list of n+1 number ranges,
 * where n is the number of operands, such that numberRanges[0] is either null
 * or represents the result number range, and numberRanges[i] represents the
 * number range of the ith operand.
 * 
 * For the special problem category MixedBinaryProblem the numberRanges property
 * contains a list of up to four number range triples, such that numberRanges[i]
 * defines the three number ranges for a binary problem with an operator as specified 
 * in operators[i].  
 * 
 * @author Gerd Wagner
 */
ArithmeticProblemType.prototype.setNumberRanges = function (specialProblemCategory, numberRanges) {
  if (!numberRanges) {
    throw new MandatoryValueConstraintViolation("No value for the parameter 'numberRanges'!");
  } else if (!Array.isArray( numberRanges)) {
    throw new TypeConstraintViolation("The parameter 'numberRanges' must be an array!");
  } else if (numberRanges.length === 0) {
    throw new MandatoryValueConstraintViolation("The parameter 'numberRanges' is an empty list!");
  } else {
    for (var i=0; i < numberRanges.length; i++) {
      if (specialProblemCategory !== SpecialProblemCategoryEL.MixedBinaryProblem) {
        if (numberRanges[i] && !(numberRanges[i] instanceof NumberRange)) {
          this.numberRanges[i] = NumberRange.createInstanceFromAdHocObject( numberRanges[i]);
        } else {
          if (i>0 && !numberRanges[i]) {
            throw new MandatoryValueConstraintViolation("Number range "+ i +"is null!");          
          } else this.numberRanges[i] = numberRanges[i];        
        }        
      } else {  // MixedBinaryProblem
        if (!Array.isArray( numberRanges[i]) || numberRanges[i].length !== 3) {
          throw new TypeConstraintViolation("Number range "+ i +" is not a n.r. triple: "+ JSON.stringify( numberRanges[i]));                              
        } else {
          this.numberRanges[i] = [];
          for (var j=0; j < 3; j++) {          
            this.numberRanges[i][j] = NumberRange.createInstanceFromAdHocObject( numberRanges[i][j]);
          }
        }
      }
    }
  }
};
ArithmeticProblemType.prototype.setOperators = function ( specialProblemCategory, operators) {
  if (specialProblemCategory && 
      (specialProblemCategory === SpecialProblemCategoryEL.RecognizeNumber ||
      specialProblemCategory === SpecialProblemCategoryEL.SortingNumbers ||
      specialProblemCategory === SpecialProblemCategoryEL.EquivalentFractions ||
      specialProblemCategory === SpecialProblemCategoryEL.RecognizeMultiples)) 
    return;  // for these problem categories the parameter operators has no meaning
  if (!operators) {
    throw new MandatoryValueConstraintViolation(
        "No value provided for the parameter 'operators'!");
  } else if (!Array.isArray( operators)) {
    throw new TypeConstraintViolation(
        "The parameter 'operators' must be an array!", operators);
  } else if (operators.length === 0) {
    throw new MandatoryValueConstraintViolation(
        "The parameter 'operators' is an empty list!");
  } else if (specialProblemCategory !== SpecialProblemCategoryEL.MixedBinaryProblem && 
        !ArithmeticProblemType.isAdmissibleOperatorSequence(operators)) {
    throw new OtherConstraintViolation(
        "Plus or minus must not be followed by times or divideBy!", operators);
  } else {
    this.operators = operators;
  }
};
ArithmeticProblemType.prototype.setAskedFor = function (askedFor) {
  if (askedFor === undefined) {
    this.askedFor = 0;  // by default, ask for the result
  } else if (!util.isNonNegativeInteger(askedFor)) {
    throw new TypeConstraintViolation(
        "The value of askedFor must be a non-negative integer!");
  } else if (askedFor > this.operators.length+1) {
    throw new TypeConstraintViolation(
      "The value of askedFor must not be greater than the number of operands!");
  } else this.askedFor = askedFor;
};
ArithmeticProblemType.prototype.setSpecialProblemCategory = function (specialProblemCategory) {
  if (specialProblemCategory) {
    if (!util.isNonNegativeInteger( specialProblemCategory)) {
      throw new TypeConstraintViolation(
        "The value of specialProblemCategory must be a non-negative integer!");
    } else if ((specialProblemCategory < 1) || (specialProblemCategory > SpecialProblemCategoryEL.MAX)) {
      throw new TypeConstraintViolation(
        "The value of specialProblemCategory must be between 1 and 5!");
    } else this.specialProblemCategory = specialProblemCategory;
  }
};
ArithmeticProblemType.prototype.setAskedForNumDenomOrBoth = function (
    askedForNumDenomOrBoth) {
  if (askedForNumDenomOrBoth) {
    if (this.numberType === NumberTypeEL.Fraction) {
      if ((askedForNumDenomOrBoth < 1) || (askedForNumDenomOrBoth > 3)) {
        throw new TypeConstraintViolation("The value of askedForNumDenomOrBoth must be between 1 and 3!");
      } else this.askedForNumDenomOrBoth = askedForNumDenomOrBoth;
    } else throw new Exception("A value for askedForNumDenomOrBoth is only meaningful for number type Fraction!");
  }
};
ArithmeticProblemType.prototype.setReducedFractions = function (reducedFractions) {
  if (reducedFractions !== undefined && reducedFractions !== null) {
    if (this.numberType === NumberTypeEL.Fraction) {
      if ((reducedFractions != true) && (reducedFractions != false)) {
        throw new TypeConstraintViolation("The value of reducedFractions must be true or false!");
      } else this.reducedFractions = reducedFractions;
    } else throw new Exception("A value for reducedFractions is only meaningful for number type Fraction!");
  } 
};
ArithmeticProblemType.prototype.setMixedFractions = function (mixedFractions) {
  if (mixedFractions !== undefined && mixedFractions !== null) {
    if (this.numberType === NumberTypeEL.Fraction) {
      if ((mixedFractions != true) && (mixedFractions != false)) {
        throw new TypeConstraintViolation("The value of mixedFractions must be true or false!");
      } else this.mixedFractions = mixedFractions;
    } else throw new Exception("A value for mixedFractions is only meaningful for number type Fraction!");
  } 
};
ArithmeticProblemType.prototype.toString = function () {
  var displayTerm = "";
  switch (this.specialProblemCategory) {
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
    displayTerm = JSON.stringify( this);
    break;
  default:  // standard term structure
    displayTerm = this.numberRanges[1].toString() +" "+ 
        util.operatorSymbols[ this.operators[0]-1] +" "+ this.numberRanges[2].toString();
    for (var i=1; i < this.operators.length; i++) {
      displayTerm = displayTerm +" "+ util.operatorSymbols[ this.operators[i]-1] +" "+ 
          this.numberRanges[i+2].toString(); 
    }
    if (this.numberRanges[0]) {
      displayTerm = displayTerm +" = "+ this.numberRanges[0].toString();
    }
  }
  return displayTerm;
};
/**
 * Tests if problem type is a basic addition or multiplication problem type.
 * 
 * @author Gerd Wagner, Linda Eckardt
 * @return {boolean}
 */
ArithmeticProblemType.prototype.isBasicProblemType = function () {
  if (this.operators.length === 1
      && (this.operators[0] === OperatorEL.plus || this.operators[0] === OperatorEL.times)
      && this.numberType != NumberTypeEL.Fraction
      && this.numberRanges[1].lb >= 0 && this.numberRanges[1].ub <= 9
      && this.numberRanges[2].lb >= 0 && this.numberRanges[2].ub <= 9
      && (this.specialProblemCategory == null || this.specialProblemCategory == undefined)) {
    return true;
  } else {
    return false;
  }
};
/**
 * Generates an array of n new problem objects.
 * 
 * @author Gerd Wagner
 * @param {integer}
 *          n The number of problems to be generated
 * @return {array} The newly generated list of arithmetic problems.
 */
ArithmeticProblemType.prototype.generateProblems = function (n) {
  var problems = [], 
      previousProblemGenerationFailed = false,
      ap = null, i=0;
  for ( var k = 0; k < n; k++) {
    problems[k] = new ArithmeticProblem();
    i = 0;
    do {
      ap = this.generateProblem();
      i++;
      if (!ap) {
        if (previousProblemGenerationFailed) {
          break;
        } else {
          previousProblemGenerationFailed = true;
          continue;
        }
      }
    } while (i < 3 && ap.isIncludedIn( problems)); // prevent duplicate problems
    if (!ap) {
      problems = null; 
      break;
    } else {
      problems[k] = ap;
    }
  }
  return problems;
};
/**
 * Generates a new problem object based on ArithmeticProblemType.
 * 
 * @author Gerd Wagner
 * @return {ArithmeticProblem} The newly generated ArithmeticProblem object.
 */
ArithmeticProblemType.prototype.generateProblem = function () {
  var ap = new ArithmeticProblem();
  var operand=0;
  switch (this.specialProblemCategory) {
  case SpecialProblemCategoryEL.SortingNumbers: 
    ap = this.generateSortingNumbersProblem();
    break;
  case SpecialProblemCategoryEL.RecognizeMultiples: 
    ap = this.generateRecognizeMultiplesProblem();
    break;
  case SpecialProblemCategoryEL.MixedBinaryProblem: 
    ap = this.generateMixedBinaryProblem();
    break;
  default: 
    if (this.numberType === NumberTypeEL.Fraction) {
      // generate fraction problem
      if (this.specialProblemCategory === SpecialProblemCategoryEL.RecognizeNumber) {
        // generate a proper fraction
        var denom = util.randomInt(this.numberRanges[0].lbD, this.numberRanges[0].ubD);
        var num = util.randomInt(this.numberRanges[0].lb, denom);
        ap.setResult([num, denom]);
        ap.setOperands([[1, 1], [1, 1]]); // to keep the system[continueExercise] running ;) 
      } else if (this.specialProblemCategory === SpecialProblemCategoryEL.EquivalentFractions) {
        // generate equivalent fractions
        ap = this.generateFractionExtendAndReduceProblem();
      } else { // generate a complete fraction problem
        switch (this.operators[0]) {
        case OperatorEL.plus:
          ap = this.generateFractionAdditionProblem(this.numberRanges[1], // numberrange for first operand
          this.numberRanges[2], // number range for second operand
          this.numberRanges[0]); // number range for result (optional)
          break;
        case OperatorEL.minus: // create subtraction problem as addition problem and then invert
          ap = this.generateFractionSubtractionProblem(this.numberRanges[1], this.numberRanges[2], this.numberRanges[0]);
          break;
        case OperatorEL.times:
          ap = this.generateFractionMultiplicationProblem(this.numberRanges[1], // numberrange for first operand
          this.numberRanges[2], // number range for second operand
          this.numberRanges[0]); // number range for result (optional)
          break;
        case OperatorEL.dividedBy: // create division problem as multipl. problem
                                    // and then invert
          ap = this.generateFractionDivisionProblem(this.numberRanges[1], this.numberRanges[2], this.numberRanges[0]);
          break;
        }
        if (!ap) return null; // unsatisfiable problem
        // generate further operands in ap, if there are two or more operators
        for ( var i = 2; i <= this.operators.length; i++) {
          // log.debug("i = ",i, ap);
          switch (this.operators[i - 1]) {
          case OperatorEL.plus:
            operand = this.chooseSecondOperandForBinaryFractionAddition(ap.result, this.numberRanges[i + 1]);
            if (operand === undefined) return null; // unsatisfiable
            ap.setOperand(i, operand);
            ap.setResult(this.reduceFraction(this.extendFractionAdditionResult(ap.result, operand)));
            break;
          case OperatorEL.minus:
            var saveRnr = this.numberRanges[0];
            this.numberRanges[0] = this.numberRanges[1];
            operand = this.chooseSecondOperandForBinaryFractionAddition(ap.operands[0], this.numberRanges[i + 1]);
            this.numberRanges[0] = saveRnr;
            if (operand === undefined) return null; // unsatisfiable
            ap.setOperand(i, operand);
            ap.setOperand(0, this.reduceFraction(this.extendFractionAdditionResult(ap.operands[0], operand)));
            break;
          case OperatorEL.times:
            operand = this.chooseSecondOperandForFractionMultiplication(ap.result, this.numberRanges[i + 1]);
            if (operand === undefined) return null; // unsatisfiable
            if (this.specialProblemCategory == SpecialProblemCategoryEL.SameDenominator)
              operand[1] = ap.operands[i-1][1];
            ap.setOperand(i, operand);
            ap.setResult(this.reduceFraction(this.extendFractionMultiplicationResult(ap.result, operand)));
            break;
          case OperatorEL.dividedBy:
            operand = this.chooseSecondOperandForFractionDivision(ap.result, this.numberRanges[i + 1]);
            if (operand === undefined) return null; // unsatisfiable
            if (this.specialProblemCategory == SpecialProblemCategoryEL.SameDenominator)
              operand[1] = ap.operands[i-1][1];
            ap.setOperand(i, operand);
            ap.setResult(this.reduceFraction(this.extendFractionMultiplicationResult(ap.result, [operand[1], operand[0]])));
            break;
          }
        }
      }
    } else { // generate integer problem
      switch (this.operators[0]) {
      case OperatorEL.plus:
        ap = this.generateBinaryAdditionProblem();
        break;
      case OperatorEL.minus: 
        ap = this.generateBinarySubtractionProblem();
        break;
      case OperatorEL.times:
        ap = this.generateBinaryMultiplicationProblem();
        break;
      case OperatorEL.dividedBy: 
        ap = this.generateBinaryDivisionProblem();
        break;
      }
      if (!ap) {  // problem generation failed 
        console.log("Problem generation failure! Problem type: "+ this.toString());
        return null; 
      }
      // generate further operands in ap, if there are two or more operators
      for ( var i=2; i <= this.operators.length; i++) {
        // log.debug("i = ",i, ap);
        switch (this.operators[i-1]) {
        case OperatorEL.plus:
          operand = this.chooseSecondOperandForBinaryAddition( ap.result,
              this.numberRanges[i + 1]);
          if (operand === undefined) return null; // unsatisfiable
          ap.setOperand(i, operand);
          ap.setResult( ap.result + operand);
          break;
        case OperatorEL.minus:
          operand = this.chooseSecondOperandForSubtraction( ap.result,
              this.numberRanges[i + 1]);
          if (operand === undefined) return null; // unsatisfiable
          ap.setOperand(i, operand);
          ap.setResult( ap.result - operand);
          break;
        case OperatorEL.times:
          operand = this.chooseSecondOperandForBinaryMultiplication( ap.result,
              this.numberRanges[i + 1]);
          if (operand === undefined) return null; // unsatisfiable
          ap.setOperand(i, operand);
          ap.setResult( ap.result * operand);
          break;
        case OperatorEL.dividedBy:
          operand = this.chooseSecondOperandForDivision( ap.result,
              this.numberRanges[i + 1]);
          if (operand === undefined) return null; // unsatisfiable
          ap.setOperand(i, operand);
          ap.setResult( ap.result / operand);
          break;
        }
      }
    }
  }
  // set the type of the new problem to the given problem type
  ap.setType(this);  
  return ap;
};
/**
 * Generates a reduced fraction
 * 
 * @author Linda Eckardt
 * @param {Array}
 *          The fraction as an array with  two elements (numerator and denominator)
* @return {Array} The reduced fraction as an array with two elements (numerator and denominator)
 */
ArithmeticProblemType.prototype.reduceFraction = function (fraction) {
  //if a reduced problem is needed
  if (this.reducedFractions) {
    var a = Math.max(fraction[0], fraction[1]), b = Math.min(fraction[0], fraction[1]);
    while (b != 0) {
      temp = b;
      b = a % b;
      a = temp;
    }
    return [fraction[0] / a, fraction[1] / a];
  }
  return fraction;
};

/**
 * Generates a binary addition problem where the number ranges [x1,x2] for x, 
 * [y1,y2] for y and [s1,s2] for s define constraints that have to be satisfied. 
 * 
 * First the value for x is chosen from [x1,x2] if there is no sum number range. 
 * Otherwise it has to be chosen from the maximal subset of [x1,x2] that allows 
 * an admissible choice for y, so its choice has to satisfy the constraint 
 * s1-y2 <= x <= s2-y1. This leads to the following selection intervals: 
 * 1) choose x from [max( x1, s1-y2), min( x2, s2-y1)].
 * 2) choose y from [max( y1, s1-x), min( y2, s2-x)] for the given x,
 * 
 * @author Gerd Wagner
 * @param {NumberRange} summand1Nr  A NumberRange object for the first operand (x).
 * @param {NumberRange} summand2Nr  A NumberRange object for the second operand (y).
 * @param {NumberRange} sumNr  A NumberRange object for the resulting sum (optional).
 * @return {ArithmeticProblem}  The new addition problem.
 */
ArithmeticProblemType.prototype.generateBinaryAdditionProblem = function (summand1Nr, summand2Nr, sumNr) {
  var x=0, y=0, a=0, b=0, ap=null, emptyProblemType = new ArithmeticProblemType();
  if (arguments.length === 0) { // use default number ranges
    summand1Nr = this.numberRanges[1];
    summand2Nr = this.numberRanges[2];
    sumNr = this.numberRanges[0];
  }
  // choose first operand, x
  if (summand1Nr.lb === summand1Nr.ub) {
    x = summand1Nr.lb;
  } else if (!sumNr) { // no sum number range
    // choose x from [x1,x2]
    x = summand1Nr.getRandomChoice();
  } else {
    a = Math.max( summand1Nr.lb, sumNr.lb - summand2Nr.ub);
    b = Math.min( summand1Nr.ub, sumNr.ub - summand2Nr.lb);
    if (a > b) return null;   // unsatisfiable
    else x = (new NumberRange(a,b)).getRandomChoice();
  }
  // choose second operand, y
  y = this.chooseSecondOperandForBinaryAddition( x, summand2Nr, sumNr);
  if (y === undefined) {
    console.log("Generation of y (second summand) failed in generateBinaryAdditionProblem. x = " + 
        x +" Number range for y: "+ summand2Nr.toString());
    return null; // unsatisfiable
  }
  try {
    ap = new ArithmeticProblem( emptyProblemType, [x,y], x+y);
  } catch (e) {
    console.log( e.name +": "+ e.message);
  }  
  return ap;
};
/**
 * Choose the second operand y for a binary addition problem when the first
 * operand x and the number range [y1,y2] for y, and possibly [s1,s2] for the
 * sum, are given.
 * 
 * @author Gerd Wagner
 * @param {number} x  The first operand.
 * @param {NumberRange} ynr  A NumberRange object for the second operand (y).
 * @return {number} The second operand.
 */
ArithmeticProblemType.prototype.chooseSecondOperandForBinaryAddition = function (x,ynr,snr) {
  var y=0, a=0, b=0;
  if (ynr.lb === ynr.ub) {
    y = ynr.lb;
  } else if (!snr) { // no result number range
    y = ynr.getRandomChoice();
  } else {
    a = Math.max( ynr.lb, snr.lb - x);
    b = Math.min( ynr.ub, snr.ub - x);
    if (a > b) y = undefined; // unsatisfiable
    else {
      y = (new NumberRange(a,b)).getRandomChoice();
    }
  }
  return y;
};

/**
 * Create a subtraction problem minuend - subtrahend = difference
 * as an addition problem a/difference + b/subtrahend = c/minuend and then invert.
 * Use difference n.r. as summand1 n.r.
 * Use subtrahend n.r. as summand2 n.r.
 * Use minuend n.r. as sum n.r.
 * 
 * @author Gerd Wagner
 * @return {ArithmeticProblem}  The new subtraction problem.
 */
ArithmeticProblemType.prototype.generateBinarySubtractionProblem = function () {
  var ap=null, buffer=0, a1=0, a2=0;
  var minuendNr = this.numberRanges[1],
      subtrahendNr = this.numberRanges[2],
      differenceNr = this.numberRanges[0];
  var summand1Nr = differenceNr, 
      summand2Nr = subtrahendNr, 
      sumNr = minuendNr;
  if (!summand1Nr) {
    // compute n.r. for first summand, if difference n.r. is null
    // e.g. for [1,10]-[1,10] it is [0,9]
    a1 = minuendNr.lb - subtrahendNr.ub;
    a2 = minuendNr.ub - subtrahendNr.lb;
    if (this.numberType === NumberTypeEL.NonNegativeInteger) {
      a1 = Math.max( a1, 0);
      a2 = Math.max( a2, 0);
    } 
    summand1Nr = new NumberRange( a1, a2);
  }
  ap = this.generateBinaryAdditionProblem( summand1Nr, summand2Nr, sumNr);  
  if (!ap) {
    console.log("generateBinaryAdditionProblem has failed with ", 
        JSON.stringify( anr), JSON.stringify( bnr), JSON.stringify( cnr));
  } else {
    buffer = ap.result;
    ap.setResult( ap.operands[0]); // assign first summand to difference
    ap.setOperand( 1, ap.operands[1]); // assign second summand to subtrahend
    ap.setOperand( 0, buffer); // assign sum to minuend    
  }
  return ap;
};
/**
 * Choose the second operand y for a subtraction problem when the first operand
 * x and the number range [y1,y2] for y, and possibly [r1,r2] for the result,
 * are given. If there is a number range for the result, the constraint r1 <=
 * x-y <= r2 has to be satisfied. This leads to the following selection
 * procedure for y: select y such that max( y1, x-r2) <= y <= min( y2, x-r1)
 * 
 * @author Gerd Wagner
 * @param {number}
 *          x The first operand (the evaluation result of the left arithmetic
 *          term).
 * @param {NumberRange}
 *          ynr A NumberRange object for the second operand (y).
 * @return {number} The second operand.
 */
ArithmeticProblemType.prototype.chooseSecondOperandForSubtraction = function (x,ynr) {
  var rnr = this.numberRanges[0]; // number range of result (optional)
  var y = 0, a = 0, b = 0;
  if (ynr.lb === ynr.ub) {
    y = ynr.lb;
  } else if (!rnr) { // no result number range
    y = util.randomInt(ynr.lb, ynr.ub);
  } else {
    a = Math.max(ynr.lb, x - rnr.ub);
    b = Math.min(ynr.ub, x - rnr.lb);
    if (a > b) y = undefined; // unsatisfiable
    else y = util.randomInt(a, b);
  }
  return y;
};
/**
 * Generates a binary multiplication problem x*y = p. The number ranges [x1,x2]
 * for x, [y1,y2] for y and [p1,p2] for p define constraints that have to be
 * satisfied. 
 * 
 * First the value for x is chosen from [x1,x2] if there is no product number range. 
 * Otherwise it has to be chosen from the maximal subset of [x1,x2] that allows 
 * an admissible choice for y, so its choice has to satisfy the constraint 
 * ceil(p1/y2) <= x <= floor(p2/y1). This leads to the following selection intervals: 
 * 1) Choose x from [max(x1,ceil(p1/y2)), min(x2,floor(p2/y1))].
 * 2) Choose y from [max(y1,ceil(p1/x)), min(y2,floor(p2/x))] for the given x.
 * 
 * @author Gerd Wagner
 * @param {NumberRange} xnr  A NumberRange object for the first operand (x).
 * @param {NumberRange} ynr  A NumberRange object for the second operand (y).
 * @param {NumberRange} pnr  A NumberRange object for the result (optional).
 * @return {ArithmeticProblem}  The new addition problem.
 */
ArithmeticProblemType.prototype.generateBinaryMultiplicationProblem = function (xnr, ynr, pnr) {
  var x = 0, y = 0;
  var a = 0, b = 0;
  var emptyProblemType = new ArithmeticProblemType();
  if (arguments.length === 0) { // use default number ranges
    xnr = this.numberRanges[1];
    ynr = this.numberRanges[2];
    pnr = this.numberRanges[0];
  }
  // choose first operand
  if (xnr.lb === xnr.ub) {
    x = xnr.lb;
  } else if (!pnr) { // no product number range
    x = xnr.getRandomChoice();
  } else {
    a = Math.max( xnr.lb, Math.ceil( pnr.lb / ynr.ub));
    b = Math.min( xnr.ub, Math.floor( pnr.ub / ynr.lb));
    if (a > b) return null; // unsatisfiable
    x = (new NumberRange(a,b)).getRandomChoice();
  }
  // choose second operand
  y = this.chooseSecondOperandForBinaryMultiplication(x, ynr, pnr);
  if (y === undefined) return null; // unsatisfiable
  return new ArithmeticProblem( emptyProblemType, [x,y], x*y);
};

/**
 * Choose the second operand y for a binary multiplication problem when the
 * first operand x and the number range [y1,y2] for y, and possibly [r1,r2] for
 * the result, are given.
 * 
 * @author Gerd Wagner
 * @param {number}
 *          x The first operand (the evaluation result of the left arithmetic
 *          term).
 * @param {NumberRange}
 *          ynr A NumberRange object for the second operand (y).
 * @return {number} The second operand.
 */
ArithmeticProblemType.prototype.chooseSecondOperandForBinaryMultiplication = 
  function (x, ynr, rnr) {
  var y = 0, a = 0, b = 0;
  if (ynr.lb === ynr.ub) {
    y = ynr.lb;
  } else if (!rnr) { // no result number range
    y = ynr.getRandomChoice();
  } else {
    a = Math.max( ynr.lb, Math.ceil( rnr.lb / x));
    b = Math.min( ynr.ub, Math.floor( rnr.ub / x));
    if (a > b) y = undefined; // unsatisfiable
    else y = (new NumberRange(a,b)).getRandomChoice();
  }
  return y;
};

/**
 * Create a division problem xd:yd=zd as a multiplication problem xm*ym=zm 
 * and then invert by setting xd=zm, yd=xm and zd=ym
 * 
 * @author Gerd Wagner
 * @return {ArithmeticProblem}  The new division problem.
 */
ArithmeticProblemType.prototype.generateBinaryDivisionProblem = function () {
  var ap=null, buffer=0;
  var xmSelInt = new NumberRange();  // selection interval for xm
  // use number range of zd as selection interval for ym, if not null 
  var ymSelInt = this.numberRanges[0]; 
  if (!ymSelInt) {
    // compute n.r. of zd, if no n.r for zd is given
    // ceil( xd.lb / yd.ub) <= zd <= floor( xd.ub / yd.lb) 
    ymSelInt = new NumberRange(
        Math.ceil( this.numberRanges[1].lb / this.numberRanges[2].ub),
        Math.floor( this.numberRanges[1].ub / this.numberRanges[2].lb)
    );
  }
  //use n.r. of yd as selection interval for xm
  xmSelInt.setLb( Math.max( this.numberRanges[2].lb, 1));  // avoid 0 as dividend
  xmSelInt.setUb( this.numberRanges[2].ub);
  ap = this.generateBinaryMultiplicationProblem( xmSelInt, ymSelInt);
  buffer = ap.result;
  ap.setResult( ap.operands[1]); // zd = ym
  ap.setOperand(1, ap.operands[0]); // yd = xm
  ap.setOperand(0, buffer); // xd = zm
  return ap;
};
/**
 * Choose the second operand y for a binary division problem when the
 * first operand x and the number range [y1,y2] for y, and possibly [r1,r2] for
 * the result, are given.
 * 
 * @author Gerd Wagner
 * @param {number}
 *      x  The first operand (the evaluation result of the left arithmetic term).
 * @param {NumberRange} ynr  A NumberRange object for the second operand (y).
 * @return {number}  The second operand.
 */
ArithmeticProblemType.prototype.chooseSecondOperandForDivision = function (x, ynr) {
  var rnr = this.numberRanges[0];  // number range of result (optional)
  var y = 0, a = 0, b = 0;
  if (ynr.lb === ynr.ub) {
    y = ynr.lb;
  } else if (!rnr) {  // no result number range
    y = util.randomInt( ynr.lb, ynr.ub);
  } else {
    a = Math.max( ynr.lb, Math.floor( x / rnr.ub));
    b = Math.min( ynr.ub, Math.ceil( x / rnr.lb));
    if (a > b) y = undefined;  // unsatisfiable
    else y = util.randomInt(a, b);
  }
  return y;
};


ArithmeticProblemType.prototype.generateFractionExtendAndReduceProblem = function () {
  var numbers = [],
      range = this.numberRanges[0];
  
  // equivalent fractions
  while (numbers.length < oa.view.fractionExtendAndReduceCountCorrect) {
    newNumber = [util.randomInt(range.lb, range.ub/10), util.randomInt(range.lbD, range.ubD/10)];
    numbers = [newNumber];
    n = 1;
    while (!false) {
      n++;
      // multiple
      var num = [newNumber[0]*n, newNumber[1]*n];
      if (num[0] < range.ub && num[1] < range.ubD)
        numbers.push(num);
      else
        break;
      
      // reducable
      num = [newNumber[0]/n, newNumber[1]/n];
      if (newNumber[0] % n == 0 && newNumber[1] % n == 0 && num[0] > range.lb && num[1] > range.lbD) {
        numbers.push(num);
      };
    };
  }
  while (numbers.length > oa.view.fractionExtendAndReduceCountCorrect)
    numbers.splice(util.randomInt(0, numbers.length-1), 1);
  
  // unequal fractions
  while (numbers.length < oa.view.fractionExtendAndReduceCountAll) {
    newNumber = [util.randomInt(range.lb, range.ub), util.randomInt(range.lbD, range.ubD)];
    if (newNumber[0] / newNumber[1] != numbers[0][0] / numbers[0][1]) {
      var check = true;
      for (var i = 0; i < numbers.length; i++)
        if (newNumber[0] === numbers[i][0] && newNumber[1] === numbers[i][1])
          check = false;
      if (check)
        numbers.push(newNumber);
    }
  }
  var result = numbers[0];
  // mix order of generated fractions
  var mixedNumbers = [];
  while (numbers.length > 0) {
    var i = util.randomInt(0, numbers.length-1);
    mixedNumbers.push(numbers[i]);
    numbers.splice(i, 1);
  }
  ap = new ArithmeticProblem();
  ap.setOperands(mixedNumbers);
  ap.setResult(result);
  return ap;
};
/**
 * Generates a fraction addition
 * 
 * @author Linda Eckardt
 * @param {numberRange}
 *          xnr A NumberRange object for the first operand (x)
 * @param {numberRange}
 *          ynr A NumberRange object for the second operand (y).
 * @param {NumberRange}
 *          snr A NumberRange object for the resulting sum (optional).
 * @return {ArithmeticProblem} The new fraction addition problem as an ArithmeticProblem
 *         object.
 */
ArithmeticProblemType.prototype.generateFractionAdditionProblem = function (xnr,
    ynr, snr) {
  var ops = [];

  ops.push(this.chooseSecondOperandForBinaryFractionAddition(null, xnr)); // x
  ops.push(this.chooseSecondOperandForBinaryFractionAddition(ops[0], ynr)); // y
  var result = this.reduceFraction(this.extendFractionAdditionResult(ops[0], ops[1])); // result

  return new ArithmeticProblem(new ArithmeticProblemType(), ops, result);
};
/**
 * choose an operand for a fraction addition
 * 
 *@author Linda Eckardt
 */
ArithmeticProblemType.prototype.chooseSecondOperandForBinaryFractionAddition = function (
    x, ynr) {
  var rnr = this.numberRanges[0]; // number range of result (optional)
  var y = [ 0, 0 ];
  
  if (!rnr) { // without result nr
    switch (this.specialProblemCategory) {
    case SpecialProblemCategoryEL.SameDenominator:
      // denom
      if (x) {
        if ((x[1] < ynr.lbD || ynr.ubD < x[1]))
          // denom nr not matching
          return undefined;
        y[1] = x[1];
      } else
        // in case of first operand
        y[1] = util.randomInt(ynr.lbD, ynr.ubD);
      break;
      //denom
    case SpecialProblemCategoryEL.DenominatorEqualsLCM:  
      if (x) {
        var multis = [];
        // multis less than the denom of x
        for ( var i = ynr.lbD; i <= Math.min(x[1] - 1, ynr.ubD); i++)
          if (x[1] % i == 0)
            multis.push(i);
        // multis grater than the denom of x
        for ( var i = Math.max(x[1] + 1, ynr.lbD); i <= ynr.ubD; i++)
          if (i % x[1] == 0)
            multis.push(i);
        // no multiply denom found
        if (multis.length == 0)
          return undefined;
        // choose one multi randomly
        var rnd = util.randomInt(0, multis.length - 1);
        y[1] = multis[rnd];
      } else
        // in case of first operand
        y[1] = util.randomInt(ynr.lbD, ynr.ubD);
      break;
    default:
      // denom
      if (x) {
        var others = [];
        for ( var i = ynr.lbD; i <= ynr.ubD; i++)
          if (i != x[1] && !(i % x[1] == 0 || x[1] % i == 0))
            others.push(i);
        // no matching denom found
        if (others.length == 0) {
          return undefined;
        }
        // choose one other randomly
        y[1] = others[util.randomInt(0, others.length - 1)];
      } else
        // in case of first operand
        y[1] = util.randomInt(Math.max(ynr.lbD, 2), ynr.ubD);
      break;
    }
  } else { // with result nr
    switch (this.specialProblemCategory) {
    case SpecialProblemCategoryEL.SameDenominator:
      // denom
      if (x) {
        if (x[1] < ynr.lbD || ynr.ubD < x[1])
          // denom nr not matching
          return undefined;
        y[1] = x[1];
        // enum
        // adjust the upper bound referring to the estimating numberrange
        ynr.ub = Math.min(rnr.ub - x[0], ynr.ub);
        // cut off negative upper bound in case of too small result-nr
        if (ynr.ub < 1)
          ynr.ub = 1;
      } else
        // in case of first operand
        y[1] = util.randomInt(rnr.lbD, rnr.ubD);
      break;
    case SpecialProblemCategoryEL.DenominatorEqualsLCM:
      // denom
      if (x) {
        var multis = [];
        // multis less than the denom of x
        for ( var i = ynr.lbD; i <= Math.min(x[1] - 1, ynr.ubD); i++)
          if (x[1] % i == 0)
            multis.push(i);
        // multis grater than the denom of x
        for ( var i = Math.max(x[1] + 1, ynr.lbD); i <= Math.min(ynr.ubD,
            rnr.ubD); i++)
          if (i % x[1] == 0)
            multis.push(i);
        // no multiply denom found
        if (multis.length == 0)
          return undefined;

        // choose one multi randomly
        y[1] = multis[util.randomInt(0, multis.length - 1)];

        // enum
        // if this fraction will be extended
        if (y[1] < x[1]) {
          var factor = x[1] / y[1];
          ynr.ub = Math.min(ynr.ub, (rnr.ub - x[0]) / factor);
        } else {  // if the previous fraction will be extended
          var factor = y[1] / x[1];
          ynr.ub = Math.min(ynr.ub, rnr.ub - x[0] * factor);
        }
        // cut off negative upper bound in case of too small result-nr
        if (ynr.ub < 1)
          ynr.ub = 1;
      } else
        // in case of first operand
        y[1] = util.randomInt(Math.max(ynr.lbD, rnr.lbD), Math.min(ynr.ubD,
            rnr.ubD));
      break;
    default:
      // denom
      if (x) {
        var others = [];
        for ( var i = ynr.lbD; i <= Math.min(ynr.ubD, rnr.ubD / x[1]); i++)
          if (i != x[1] && !(i % x[1] == 0 || x[1] % i == 0))
            others.push(i);
        // no matching denom found
        if (others.length == 0)
          return undefined;

        // choose one other randomly
        y[1] = others[util.randomInt(0, others.length - 1)];

        // num
        ynr.ub = Math.min(ynr.ub, (rnr.ub - x[0] * y[1]) / x[1]);

        // cut off negative upper bound in case of too small result-nr
        if (ynr.ub < 1)
          ynr.ub = 1;
      } else
        // in case of first operand
        y[1] = util.randomInt(Math.max(Math.max(ynr.lbD, rnr.lbD), 2), Math
            .min(ynr.ubD, rnr.ubD));

      break;
    }
  }
  // enum
  if (this.reducedFractions) {
    maybeEnums = [ 1 ];
    for ( var i = ynr.lb; i <= ynr.ub; i++) {
      var reducible = false;
      for ( var teiler = 2; teiler <= Math.min(i, y[1]); teiler++)
        if (i % teiler == 0 && y[1] % teiler == 0) {
          // divisor found
          reducible = true;
          break;
        }
      if (!reducible)
        // remember irreducible enumerator
        maybeEnums.push(i);
    }
    // choose one randomly
    y[0] = maybeEnums[util.randomInt(0, maybeEnums.length - 1)];
  } else
    y[0] = util.randomInt(ynr.lb, ynr.ub);

  return y;
};

/**
 * extend the fraction addition result
 * 
 *@author Linda Eckardt
 */
ArithmeticProblemType.prototype.extendFractionAdditionResult = function (old_result,
    next_op) {
  var result = [];
  switch (this.specialProblemCategory) {
  case SpecialProblemCategoryEL.SameDenominator:
    result[0] = old_result[0] + next_op[0];
    result[1] = old_result[1];
    break;
  case SpecialProblemCategoryEL.DenominatorEqualsLCM:
    if (old_result[1] > next_op[1])
      result[0] = old_result[0] + next_op[0] * (old_result[1] / next_op[1]);
    else
      result[0] = old_result[0] * (next_op[1] / old_result[1]) + next_op[0];
    result[1] = Math.max(old_result[1], next_op[1]);
    break;
  default:
    result[0] = old_result[0] * next_op[1] + next_op[0] * old_result[1];
    result[1] = old_result[1] * next_op[1];
    break;
  }

  return result;
};
/**
 * Generates a fraction subtraction
 * 
 * @author Linda Eckardt
 * @param {numberRange} xnr  A NumberRange object for the first operand (x)
 * @param {numberRange} ynr  A NumberRange object for the second operand (y).
 * @param {NumberRange} snr  A NumberRange object for the resulting sum (optional).
 * @return {ArithmeticProblem}  The new fraction subtraction problem as an ArithmeticProblem object.
 */
ArithmeticProblemType.prototype.generateFractionSubtractionProblem = function (
    xnr, ynr, snr) {
  var ops = [];
  var one, two;

  // set rnr = the value of xnr
  this.numberRanges[0] = xnr;
  
  one = this.chooseSecondOperandForBinaryFractionAddition(null, snr);
  two = this.chooseSecondOperandForBinaryFractionAddition(one, ynr);
  
  if (one[1] > two[1]) { 
    ops.push(one); // x
    ops.push(two); // y
  } else {
    ops.push(two);
    ops.push(one);
  }
  
  // switch back numberranges
  this.numberRanges[0] = snr;
  
  var result = this.reduceFraction(this.extendFractionAdditionResult(ops[0], ops[1])); // result
  
  // swap first operand with result
  var temp = result;
  result = ops[0];
  ops[0] = temp;

  return new ArithmeticProblem(new ArithmeticProblemType(), ops, result);
};

ArithmeticProblemType.prototype.generateFractionMultiplicationProblem = function (xnr,
    ynr, snr) {
  var ops = [];

  ops.push(this.chooseSecondOperandForFractionMultiplication(null, xnr)); // x
  ops.push(this.chooseSecondOperandForFractionMultiplication(ops[0], ynr)); // y
  var result = this.reduceFraction(this.extendFractionMultiplicationResult(ops[0], ops[1])); // result

  return new ArithmeticProblem(new ArithmeticProblemType(), ops, result);
};

ArithmeticProblemType.prototype.chooseSecondOperandForFractionMultiplication = function (x, ynr) {
  var rnr = this.numberRanges[0]; // number range of result (optional)
  var y = [ 0, 0 ];
  
  if (!x) { // first operand
    y = [util.randomInt(ynr.lb, ynr.ub), util.randomInt(ynr.lbD, ynr.ubD)];
  } else { // further operands
    if (rnr) { // with result
      // denom
      y[1] = util.randomInt( Math.max(ynr.lbD, rnr.lbD / x[1]), Math.min(ynr.ubD, rnr.ubD / x[1]));
      if (y[1] == undefined) y[1] = 1;
      // num
      y[0] = util.randomInt(Math.max(ynr.lb, rnr.lb / x[0]), Math.min(ynr.ub, rnr.ub / x[0]));
      if (y[0] === undefined) y[0] = 1;      
    } else { // without result
      // denom
      y[1] = util.randomInt(ynr.lbD, ynr.ubD);
      // num
      y[0] = util.randomInt(ynr.lb, ynr.ub);
    }
  }  
  return this.reduceFraction(y);
};

ArithmeticProblemType.prototype.extendFractionMultiplicationResult = function (old_result, next_op) {
          // num                      // denom
  return [old_result[0] * next_op[0], old_result[1] * next_op[1]];
};

ArithmeticProblemType.prototype.generateFractionDivisionProblem = function (xnr, ynr, snr) {
  var ops = [];
  
  ops.push(this.chooseSecondOperandForFractionDivision(null, xnr)); // x
  ops.push(this.chooseSecondOperandForFractionDivision(ops[0], ynr)); // y
  var result = this.reduceFraction(this.extendFractionMultiplicationResult(ops[0], [ops[1][1], ops[1][0]])); // calculate result with swapped value

  return new ArithmeticProblem(new ArithmeticProblemType(), ops, result);
};

ArithmeticProblemType.prototype.chooseSecondOperandForFractionDivision = function (x, ynr) {
  var rnr = this.numberRanges[0]; // number range of result (optional)
  var y = [ 0, 0 ];
  
  if (!x) { // first operand
    y = [util.randomInt(ynr.lb, ynr.ub), util.randomInt(ynr.lbD, ynr.ubD)]; 
  } else { // further operands
    if (rnr) { // with result
      // denom
      y[1] = util.randomInt( Math.max( ynr.lbD, rnr.lb/x[0]), Math.min( ynr.ubD, rnr.ub/x[0]));
      if (y[1] == undefined) y[1] = 1;
      // num
      y[0] = util.randomInt( Math.max( ynr.lb, rnr.lbD/x[1]), Math.min( ynr.ub, rnr.ubD/x[1]));
      if (y[0] == undefined) y[0] = 1;      
    } else { // without result
      // denom
      y[1] = util.randomInt( ynr.lbD, ynr.ubD);
      // num
      y[0] = util.randomInt( ynr.lb, ynr.ub);
    }
  }  
  return this.reduceFraction(y);
};
/**
 * Tests if a problem type is a correct definition of the special problem category RecognizeMultiples.
 * This requires a number range defining the interval for selecting the product, a special problem category 
 * parameter factor2 defining the second (fixed) factor, and possibly another special problem category 
 * parameter defining an optional offset.
 * 
 * @author Gerd Wagner
 * @return {boolean}
 */
ArithmeticProblemType.prototype.isRecognizeMultiples = function () {
  var factor2=0, lb=0, ub=0, offset=0, nmrOfMultiples=0;
  if (this.specialProblemCategory !== SpecialProblemCategoryEL.RecognizeMultiples ||
      this.numberType !== NumberTypeEL.NonNegativeInteger ||
      this.numberRanges.length !== 1 ||
      !this.specialProblemCategoryParams) {
    return false;
  } 
  lb = this.numberRanges[0].lb;
  ub = this.numberRanges[0].ub;
  factor2 = this.specialProblemCategoryParams.factor2;
  offset = this.specialProblemCategoryParams.offset || 0;
  if (this.specialProblemCategoryParams.nmrOfMultiples) {
    nmrOfMultiples = this.specialProblemCategoryParams.nmrOfMultiples;
    if (!util.isPositiveInteger( nmrOfMultiples)) return false;
  } else {
    nmrOfMultiples = 5;  // default value
  }
  //TODO: check also that at least 5 multiples fit into the interval
  return lb * factor2 + offset <= ub;
};
/**
 * Tests if a problem type is a correct definition of the special problem category MixedBinaryProblem.
 * This requires 
 * 1) an operators list containing up to 4 operators defining the set of available operators
 * 2) a corresponding list of number range triples such that each triple defines an optional
 *    result number range as its first component, followed by two number ranges for the two
 *    operands.  
 * 
 * @author Gerd Wagner
 * @return {boolean}
 */
ArithmeticProblemType.prototype.isMixedBinaryProblem = function () {
  return (this.specialProblemCategory === SpecialProblemCategoryEL.MixedBinaryProblem &&
      this.operators && this.operators.length === 0 &&
      this.numberRanges && this.numberRanges.length === this.operators.length); 
};
