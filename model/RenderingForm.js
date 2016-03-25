RenderingModeEL = Object.defineProperties( {}, {
  individually: { value: 1, writable: false},
  enbloc: { value: 2, writable: false}
 });
/**
 * @author Gerd Wagner
 * @constructor
 * @this {RenderingForm}
 * @param {string} name  
 * @param {string} description  
 * @param {number} mode  [optional] An integer between 1 and 2 corresponding to one of the  
 *        enumeration literals "individually" and "enbloc" defines if a set of problems is
 *        rendered one by one or as a block.
 * @param {string} helpText  [optional] An HTML fragment used as a help text  
 * @param {boolean} noEvaluation  [optional] A flag that is false by default; if true,  
 *        then an exercise defined with this rendering form will not be evaluated 
 *        (this is good for pure games that should not count) 
 * @param {boolean} worksForTouchScreens  [optional] A flag that is true by default  
 * @param {boolean} worksForIE9  [optional] A flag that is true by default  
 * @param {array} compatibleProblemTypes  [optional] It is an option to specify a set 
 *        of problem types that are compatible with this rendering type. This set can 
 *        be used in the isApplicableTo method of specific rendering type objects.   
 */
function RenderingForm( name, description, mode, 
    helpText, noEvaluation, worksForTouchScreens, worksForIE9, compatibleProblemTypes) {
  this.name = "";
  this.description = "";
  this.mode = RenderingModeEL.individually;
  this.helpText = "";
  this.noEvaluation = false;
  this.worksForTouchScreens = true;
  this.worksForIE9 = true;

  if (arguments.length > 0) {  // constructor invocation with arguments
    this.setName( name); 
    this.setDescription( description); 
    this.setMode( mode);  // optional
    this.setHelpText( helpText);  // optional
    this.setNoEvaluation( noEvaluation);  // optional
    this.setWorksForTouchScreens( worksForTouchScreens);  // optional
    this.setWorksForIE9( worksForIE9);  // optional
    this.setCompatibleProblemTypes( compatibleProblemTypes);  // optional
  }  
}
//========================= S e t t e r s =================================================
RenderingForm.prototype.setName = function( name) {
  if (name === undefined || name === "") {
    throw new MandatoryValueConstraintViolation("A value for the name must be provided!");
  } else if (typeof(name) !== "string") {
    throw new TypeConstraintViolation("The name must be a string!");
  } else {
    this.name = name;
  }
};
RenderingForm.prototype.setDescription = function( description) {
  if (description === undefined || description === "") {
    throw new MandatoryValueConstraintViolation("A value for the description must be provided!");
  } else if (typeof(name) !== "string") {
    throw new TypeConstraintViolation("The description must be a string!");
  } else {
    this.description = description;
  }
};
RenderingForm.prototype.setMode = function( mode) {
  if (!mode) {
    return;
  } else if (typeof(mode) !== "number") {
    throw new TypeConstraintViolation("The value of mode in r.f. "+ this.name +" is not a number:"+ mode);
  } else if (mode < 1 || mode > 2) {
    throw new ValueRangeConstraintViolation("The value of mode must be between 1 and 2!");
  } else this.mode = mode;
};
RenderingForm.prototype.setHelpText = function( helpText) {
  if (!helpText) {
    return;
  } else if (typeof(helpText) !== "string") {
    throw new TypeConstraintViolation("Invalid helpText: "+ helpText +" Must be a string!");
  } else {
    this.helpText = helpText;
  }
};
RenderingForm.prototype.setNoEvaluation = function( noEvaluation) {
  if (noEvaluation === undefined) { return;} 
  else if (typeof(noEvaluation) !== "boolean") {
    throw new TypeConstraintViolation("The value of noEvaluation must be boolean!");
  } else this.noEvaluation = noEvaluation;
};
RenderingForm.prototype.setWorksForTouchScreens = function( worksForTouchScreens) {
  if (worksForTouchScreens === undefined) { return;} 
  else if (typeof(worksForTouchScreens) !== "boolean") {
    throw new TypeConstraintViolation("The value of worksForTouchScreens must be boolean!");
  } else this.worksForTouchScreens = worksForTouchScreens;
};
RenderingForm.prototype.setWorksForIE9 = function( worksForIE9) {
  if (worksForIE9 === undefined) { return;} 
  else if (typeof(worksForIE9) !== "boolean") {
    throw new TypeConstraintViolation("The value of worksForIE9 must be boolean!");
  } else this.worksForIE9 = worksForIE9;
};
RenderingForm.prototype.setCompatibleProblemTypes = function( compatibleProblemTypes) {
  if (!compatibleProblemTypes) {
    return;
  } else if (!Array.isArray( compatibleProblemTypes)) {
    throw new TypeConstraintViolation("The parameter 'compatibleProblemTypes' must be an array!");
  } else {
    this.compatibleProblemTypes = compatibleProblemTypes;
  }
};
