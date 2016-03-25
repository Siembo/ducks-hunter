/**
 * @author Gerd Wagner
 * @constructor
 * @this {Learner}
 * @param {string} firstName  The first name of the learner.
 * @param {number} grade  Optional attribute. An integer between 1 and 12 denoting the grade 
 *        when the learner attends a K12 schooa.
 */
function Learner( firstName, grade, lang) {
  this.firstName = "";
  this.grade = 0;
  this.language = (oa.supportedLanguages.indexOf( util.getUserLanguage()) === -1) ? 
      lang="en" : util.getUserLanguage(); 
  if (arguments.length > 0) {
    this.setFirstName( firstName); 
    this.setGrade( grade); 
    this.setLanguage( lang); 
  }
}
Learner.prototype.setFirstName = function( firstName) {
  if (!firstName) {
    throw new MandatoryValueConstraintViolation("A value for the firstName must be provided!");
  } else if (typeof(firstName) !== "string") {
    throw new TypeConstraintViolation("The firstName must be a string!");
  } else {
    this.firstName = firstName;
  }
};
Learner.prototype.setGrade = function( grade) {
  if (grade === undefined || isNaN( grade)) return;  // optional
  if (!util.isNonNegativeInteger( grade) || grade > 7) {
    throw new TypeConstraintViolation("The value of grade must be an integer between 1 and 7!");
  } else this.grade = grade;
};
Learner.prototype.setLanguage = function( lang) {
  if (!lang) this.language = "en";  // default
  else if (typeof(lang) !== "string") {
    throw new TypeConstraintViolation("The value of lang must be a string!");
  } else this.language = lang;
};
