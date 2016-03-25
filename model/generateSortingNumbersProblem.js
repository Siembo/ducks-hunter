/**
 * Generates a Size Comparison Problem for numbers
 * 
 * @author Linda Eckardt
 * @return {ArithmeticProblem} The new Size Comparison problem as an ArithmeticProblem object.
 */
ArithmeticProblemType.prototype.generateSortingNumbersProblem = function (){
  var numbers = [];
  var i = 1;
  while (numbers.length < this.numberRanges.length - 1) {
    var newNumber = {};
    if (this.numberType === NumberTypeEL.Fraction) {
      switch (this.askedForNumDenomOrBoth) {
      case NumDenomOrBothEL.numerator: // different numerators
        if (numbers.length) {
          newNumber = [util.randomInt( this.numberRanges[i].lb, this.numberRanges[i].ub), numbers[0][1]];
        } else { // first number
          newNumber = [util.randomInt( this.numberRanges[i].lb, this.numberRanges[i].ub),
                       util.randomInt( this.numberRanges[i].lbD, this.numberRanges[i].ubD)];
        }
        break;
      case NumDenomOrBothEL.denominator: // different denominators
        if (numbers.length) {
          newNumber = [numbers[0][0],
                       util.randomInt( this.numberRanges[i].lbD, this.numberRanges[i].ubD)];
        } else { // first number
          newNumber = [util.randomInt( this.numberRanges[i].lb, this.numberRanges[i].ub),
                       util.randomInt( this.numberRanges[i].lbD, this.numberRanges[i].ubD)];
        }
        break;
      case NumDenomOrBothEL.both: // both differs
        newNumber = [util.randomInt( this.numberRanges[i].lb, this.numberRanges[i].ub),
                     util.randomInt( this.numberRanges[i].lbD, this.numberRanges[i].ubD)];
        break;
      }
    } else {  // no fraction
      newNumber = util.randomInt( this.numberRanges[i].lb, this.numberRanges[i].ub);
    }
    // check if the generated number already exists
    var exists = false;
    for (var n = 0; n < numbers.length; n++)
      if (this.numberType === NumberTypeEL.Fraction) {
        if (numbers[n][0] === newNumber[0] && numbers[n][1] === newNumber[1]) {
          exists = true;
          break;
        }
      } else {
        if (numbers[n] === newNumber) {
          exists = true;
          break;
        }
      }
    if (!exists) {
      numbers.push(newNumber); // add the new number
      i++;
    }
  }
  ap = new ArithmeticProblem();
  ap.setOperands(numbers);  
  return ap;
};

