/**
 * A number range represents an interval as a subset of its number type
 * TODO: Add a number type property to be able to recognize decimals in the randomChoice function
 * 
 * @author Gerd Wagner
 * @author Linda Eckardt
 * @constructor
 * @this {NumberRange}
 * @param {number} lb  The lower bound of the number range.
 * @param {number} ub  The upper bound of the number range.
 * @param {number} lbD The lower bound of the number range for fractions.
 * @param {number} ubD The upper bound of the number range for fractions.
 */
function NumberRange(
    lb,   // lower bound (Integer, mandatory)
    ub,   // upper bound (Integer, mandatory)
    lbD,  // lower bound denominator (Integer)
    ubD   // upper bound denominator (Integer)
) {
  this.lb = 0;
  this.ub = 0;

  if (arguments.length > 0) { // constructor invocation with arguments
    this.setLb( lb);
    this.setUb( ub);
    if (arguments.length > 2) {
      this.setLbD( lbD);
      this.setUbD( ubD);
    }
  }
}
NumberRange.prototype.setLb = function (lb) {
  if (lb === undefined) {
    throw new MandatoryValueConstraintViolation("No value provided for lb!");
  } else if (typeof(lb) !== "number") {
    throw new TypeConstraintViolation("The value of lb is not a number!");
  } else this.lb = lb;
};
NumberRange.prototype.setUb = function (ub) {
  if (ub === undefined) {
    throw new MandatoryValueConstraintViolation("No value provided for ub!");
  } else if (typeof(ub) !== "number") {
    throw new TypeConstraintViolation("The value of ub is not a number!");
  } else if (ub < this.lb) {
    throw new ValueRangeConstraintViolation(
        "The upper bound is smaller than the lower bound!");
  } else this.ub = ub;
};
NumberRange.prototype.setLbD = function (lbD) {
  if (lbD === undefined) {
    throw new MandatoryValueConstraintViolation("No value provided for lbD: "+ this.toString());
  } else if (!util.isInteger(lbD)) {
    throw new TypeConstraintViolation("The value of lbD is not an integer!");
  } else this.lbD = lbD;
};
NumberRange.prototype.setUbD = function (ubD) {
  if (ubD === undefined) {
    throw new MandatoryValueConstraintViolation("No value provided for ubD: "+ this.toString());
  } else if (!util.isInteger(ubD)) {
    throw new TypeConstraintViolation("The value of ubD is not an integer!");
  } else if (ubD < this.lbD) {
    throw new ValueRangeConstraintViolation(
        "The upper bound denominator is smaller than the lower bound denominator!");
  } else this.ubD = ubD;
};
NumberRange.prototype.toString = function () {
  var str = "["+ this.lb +","+ this.ub +"]";
  if (this.lbD) {
    str = str +" / "+ "["+ this.lbD +","+ this.ubD +"]";
  }
  return str;
};
NumberRange.prototype.getRandomChoice = function () {
  var r=0;
  if (!this.lbD) {  // integer or decimal
    //TODO: add support for decimal
    r = util.randomInt( this.lb, this.ub);    
  } else {  //TODO: add fractions
    
  }
  return r;
};
NumberRange.createInstanceFromAdHocObject = function (nrAdHocObject) {
  var nrInstance=null;
  if (typeof(nrAdHocObject) === "object" && 
      typeof(nrAdHocObject.lb) === "number" &&
      typeof(nrAdHocObject.ub) === "number") {
    // transform number range ad-hoc object into NumberRange instance
    if (nrAdHocObject.lbD) {  // a lower bound for a fraction's denominator
      nrInstance = new NumberRange( nrAdHocObject.lb, nrAdHocObject.ub,
          nrAdHocObject.lbD, nrAdHocObject.ubD);            
    } else {
      nrInstance = new NumberRange( nrAdHocObject.lb, nrAdHocObject.ub);
    }
  } else {
    throw new TypeConstraintViolation("Number range "+ i +": "+ JSON.stringify( nrAdHocObject));                    
  }
  return nrInstance;
};