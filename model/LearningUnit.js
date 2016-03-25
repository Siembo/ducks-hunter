/**
 * @author Gerd Wagner
 * @constructor
 * @this {LearningUnit}
 * @param {number} id  
 * @param {string} title  
 * @param {string} description  
 * @param {string} subjectArea  
 * @param {number} grade  Optional attribute. An integer between 1 and 12 denoting the grade 
 *        to which the learning unit is assigned.
 * @param {array} exercises  The list of exercises that make up the unit.  
 */
function LearningUnit( id, title, description, subjectArea, grade, exercises) {
  this.id = 0;
  this.title = "";
  this.description = "";
  this.subjectArea = "";
  this.grade = 0;
  this.exercises = [];

  if (arguments.length > 0) { // constructor invocation with arguments
    this.setId( id); 
    this.setTitle( title); 
    this.setDescription( description); 
    this.setSubjectArea( subjectArea); 
    this.setGrade( grade); 
    this.setExercises( exercises); 
  }
};

LearningUnit.prototype.setId = function (id) {
  if (id === undefined) {
    throw new MandatoryValueConstraintViolation("No value provided for id!");
  } else if (!util.isNonNegativeInteger( id)) {
    throw new TypeConstraintViolation("The value of id is not a non-negative integer!");
  } else this.id = id;
};
LearningUnit.prototype.setTitle = function (title) {
  if (title === undefined || title === "") {
    throw new MandatoryValueConstraintViolation("A value for the title must be provided!");
  } else if (typeof( name) !== "string") {
    throw new TypeConstraintViolation("The title must be a string!");
  } else {
    this.title = title;
  }
};
LearningUnit.prototype.setDescription = function (description) {
  if (description === undefined || description === "") {
    throw new MandatoryValueConstraintViolation("A value for the description must be provided!");
  } else if (typeof( description) !== "string") {
    throw new TypeConstraintViolation("The description must be a string!");
  } else {
    this.description = description;
  }
};
LearningUnit.prototype.setSubjectArea = function (subjectArea) {
  if (subjectArea === undefined || subjectArea === "") {
    throw new MandatoryValueConstraintViolation("A value for the subjectArea must be provided!");
  } else if (typeof( subjectArea) !== "string") {
    throw new TypeConstraintViolation("The subjectArea must be a string!");
  } else {
    this.subjectArea = subjectArea;
  }
};
LearningUnit.prototype.setGrade = function (grade) {
  if (!grade) {
    throw new MandatoryValueConstraintViolation("A value for the grade must be provided!");
  } else if (!util.isPositiveInteger( grade) || grade < 1 || grade > 7) {
    throw new TypeConstraintViolation("The value of grade must be a positive integer between 1 and 7!");
  } else this.grade = grade;
};
LearningUnit.prototype.setExercises = function( exercises) {
  if (exercises === null || exercises === undefined) {
    throw new MandatoryValueConstraintViolation("No value provided for the parameter 'exercises'!");
  } else if (!Array.isArray( exercises)) {
    throw new TypeConstraintViolation("The parameter 'exercises' must be an array!");
  } else if (exercises.length === 0) {
    throw new MandatoryValueConstraintViolation("The parameter 'exercises' is an empty list!");
  } else {
    this.exercises = exercises;
  }
};
/**
 * Determine the number of problems  
 * 
 * @author Gerd Wagner
 * 
 * @return {number}  The number of problems
 */
LearningUnit.prototype.getNmrOfProblems = function () {
  var n=0, rf=null;
  for (var i=0; i < this.exercises.length; i++) {
    rf = this.exercises[i].renderingForm;
    if (!rf.noEvaluation && 
        (!oa.env.isTouchScreenDevice || rf.worksForTouchScreens) &&
        (!oa.env.isIE9 || rf.worksForIE9) 
       ) {
      n = n + this.exercises[i].numberOfProblems;
    }
  }
  return n;
};
/**
 * Get learning unit by id
 * 
 * @author Gerd Wagner
 * 
 * @param {string} id  The id of a learning unit
 * @return {LearningUnit}  A learning unit object
 */
LearningUnit.getLearningUnitById = function (id) {
  for (var i=0; i < oa.learningUnits.length; i++) {
    lu = oa.learningUnits[i];
    if (lu.id === id) { return lu;}
  }
  return null;
};
/**
 * Get all grade levels
 * 
 * @author Gerd Wagner
 * 
 * @return {array}  A list of integers representing grade levels
 */
LearningUnit.getAllGradeLevels = function () {
  var gradeLevels = [],
      lu=null;
  for (var i=0; i < oa.learningUnits.length; i++) {
    lu = oa.learningUnits[i];
    if (gradeLevels.indexOf( lu.grade) === -1) { 
      gradeLevels.push( lu.grade);
    }
  }
  return gradeLevels;
};
/**
 * Get all subject areas
 * 
 * @author Gerd Wagner
 * 
 * @return {array}  A list of strings representing subject areas
 */
LearningUnit.getAllSubjectAreas = function () {
  var subjectAreas = [],
      lu=null;
  for (var i=0; i < oa.learningUnits.length; i++) {
    lu = oa.learningUnits[i];
    if (subjectAreas.indexOf( lu.subjectArea) === -1) { 
      subjectAreas.push( lu.subjectArea);
    }
  }
  return subjectAreas;
};
/**
 * Get subject areas by grade
 * 
 * @author Gerd Wagner
 * 
 * @param {number} g  A positive integer representing a grade (1-6)
 * @return {array}  A list of strings representing subject areas
 */
LearningUnit.getSubjectAreasByGrade = function (g) {
  var subjectAreas = [],
      lu=null;
  for (var i=0; i < oa.learningUnits.length; i++) {
    lu = oa.learningUnits[i];
    if (lu.grade === g && subjectAreas.indexOf( lu.subjectArea) === -1) { 
      subjectAreas.push( lu.subjectArea);
    }
  }
  return subjectAreas;
};
/**
 * Get learning units by grade
 * 
 * @author Gerd Wagner
 * 
 * @param {number} g  A positive integer representing a grade (1-6)
 * @return {array}  A list of learning unit objects
 */
LearningUnit.getLearningUnitsByGrade = function (g) {
  return oa.learningUnits.filter( function (lu) {
    return ( lu.grade === g);    
  });
};
/**
 * Get learning units by subject area
 * 
 * @author Gerd Wagner
 * 
 * @param {string} sa  A string representing a subject area
 * @return {array}  A list of learning unit objects
 */
LearningUnit.getLearningUnitsBySubjectArea = function (sa) {
  return oa.learningUnits.filter( function (lu) {
    return (lu.subjectArea === sa);    
  });
};
/**
 * Get learning units by grade and subject area
 * 
 * @author Gerd Wagner
 * 
 * @param {number} g  A positive integer representing a grade (1-6)
 * @param {string} sa  A string representing a subject area
 * @return {array}  A list of learning unit objects
 */
LearningUnit.getLearningUnitsByGradeAndSubjectArea = function (g, sa) {
  return oa.learningUnits.filter( function (lu) {
    return ( lu.grade === g && lu.subjectArea === sa);    
  });
};
