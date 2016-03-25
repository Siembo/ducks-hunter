/**
 * @fileOverview  Defines namespaces, global variables and exceptions/errors  
 * 
 * @author Gerd Wagner
 */
var oa = {
  learner: {},
  supportedLanguages: ["en","de"],
  basicAdditionStatistics: [],
  basicMultiplicationStatistics: [],
  learningUnits: [],
  showAllContents: false,
  problemCounter: 0, // counts the problems per learning unit
  correctAnswerCounter: 0,  // counts the correct answers per learning unit
  attemptCounter: 0,
  currentLearningUnit: null,
  currentExercise: null,
  currentExerciseNumber: 0,
  previousProblem: null,
  currentProblem: null,
  currentProblems: [],
  currentProblemNumber: 0,  // counts the problems per exercise
  /**
   *  Transform the arithmeticProblemTypes_indexed array of ad-hoc objects 
   *  into an associative array of ArithmeticProblemType instances
   */
  transformProblemTypes: function () {
    var aptI=null;
    oa.arithmeticProblemTypes = {};
    for (var i=0; i < oa.arithmeticProblemTypes_indexed.length; i++) {
      aptI = oa.arithmeticProblemTypes_indexed[i];
      try {
        oa.arithmeticProblemTypes[ aptI.name] = new ArithmeticProblemType( 
            aptI.name,
            aptI.title, 
            aptI.numberType,
            aptI.numberRanges, 
            aptI.operators, 
            aptI.askedFor, 
            aptI.specialProblemCategory,
            aptI.askedForNumDenomOrBoth, 
            aptI.reducedFractions,
            aptI.mixedFractions );
        //console.log( oa.arithmeticProblemTypes[aptI.name].toString());
        if (aptI.specialProblemCategoryParams) {
          oa.arithmeticProblemTypes[aptI.name].specialProblemCategoryParams = aptI.specialProblemCategoryParams;
        }
      } catch(e) {
        console.log( e.name + ": " + e.message + (e.culprit ? "\nCulprit: "+ e.culprit : ""));
        delete oa.arithmeticProblemTypes[ aptI.name];        
      }
    }
  },
  /**
   *  Transform the learningUnits array of ad-hoc objects 
   *  into an array of LearningUnit instances
   */
  transformLearningUnits: function () {
    try {
      for (var lu=0; lu < oa.learningUnits.length; lu++) {
        oa.learningUnits[lu] = new LearningUnit( oa.learningUnits[lu].id, oa.learningUnits[lu].title, 
            oa.learningUnits[lu].description, oa.learningUnits[lu].subjectArea,
            oa.learningUnits[lu].grade, oa.learningUnits[lu].exercises);
      }
    } catch(e) {
      console.log(e);
    }
  }
};
/**
 * Define namespaces  
 */
// Namespace for controller functions
oa.ctrl = {};
// Namespace for arithmetic problem type objects
oa.apt = {};
//Namespace for rendering form objects
oa.rf = {};
//Namespace for learning units
oa.lu = {};

/**
 *  Error Types 
 */
MandatoryValueConstraintViolation = function ( msg, culprit) {
  this.name = "MandatoryValueConstraintViolation";
  this.message = msg;
  this.culprit = culprit;
};
MandatoryValueConstraintViolation.prototype = new Error();
MandatoryValueConstraintViolation.prototype.constructor = MandatoryValueConstraintViolation;

TypeConstraintViolation = function ( msg, culprit) {
  this.name = "TypeConstraintViolation";
  this.message = msg;
  this.culprit = culprit;
};
TypeConstraintViolation.prototype = new Error();
TypeConstraintViolation.prototype.constructor = TypeConstraintViolation;

ValueRangeConstraintViolation = function ( msg, culprit) {
  this.name = "ValueRangeConstraintViolation";
  this.message = msg;
  this.culprit = JSON.stringify( culprit);
};
ValueRangeConstraintViolation.prototype = new Error();
ValueRangeConstraintViolation.prototype.constructor = ValueRangeConstraintViolation;

OtherConstraintViolation = function ( msg, culprit) {
  this.name = "OtherConstraintViolation";
  this.message = msg;
  this.culprit = culprit;
};
OtherConstraintViolation.prototype = new Error();
OtherConstraintViolation.prototype.constructor = OtherConstraintViolation;
