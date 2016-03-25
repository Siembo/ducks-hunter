/**
 * Generates a problem for the special problem category MixedBinaryProblem.
 * Such a problem type is defined by 1) an operators list containing up to 4 operators defining 
 * the set of available operators; 2) a corresponding list of number range triples such that 
 * each triple defines an optional result number range as its first component, followed by 
 * two number ranges for the two operands.
 * 
 * A problem of this type can be generated either for a given operator (from the problem type's 
 * list of operators) provided as an argument or for an operator chosen at random from 
 * the problem type's list of operators. Such a problem is still term-based, 
 * but the binary term's type (e.g. its operator) is not represented in the problem type 
 * definition, so it has to be represented in the problem definition itself
 * using the problem's operators property.   
 * 
 * @author Gerd Wagner
 * @return {ArithmeticProblem}  
 */
ArithmeticProblemType.prototype.generateMixedBinaryProblem = function (givenOperatorIndex) {
  var operatorIndex=0, numberRangeTriple=[], ap=null, apt=null;
  if (!givenOperatorIndex) {
    operatorIndex = util.randomInt( 0, this.operators.length-1);
  } else {
    operatorIndex = givenOperatorIndex;
  }
  operator = this.operators[ operatorIndex];
  numberRangeTriple = this.numberRanges[ operatorIndex];
  apt = new ArithmeticProblemType( {numberType:this.numberType, operators:[operator], numberRanges:numberRangeTriple});
  ap = apt.generateProblem();
  ap.setType( this);
  ap.setOperators( [operator]);
  return ap; 
};

