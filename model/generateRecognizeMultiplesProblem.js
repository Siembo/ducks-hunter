/**
 * Generates a problem for the special problem category RecognizeMultiples.
 * Such a problem is defined by a numberRange defining the interval for selecting the product, 
 * the specialProblemCategory parameter factor2 defines the second (fixed) factor, 
 * and the specialProblemCategory parameter offset defines an optional offset.
 * 
 * @author Gerd Wagner
 * @return {ArithmeticProblem}  
 */
ArithmeticProblemType.prototype.generateRecognizeMultiplesProblem = function () {
  var numbers = [], factor1=0, product=0,
      selInterval = this.numberRanges[0],
      factor2 = this.specialProblemCategoryParams.factor2,
      offset = this.specialProblemCategoryParams.offset || 0,
      nmrOfMultiples = this.specialProblemCategoryParams.nmrOfMultiples || 5,
      ap = new ArithmeticProblem();
  while (numbers.length < nmrOfMultiples) {
    factor1 = util.randomInt( Math.ceil( selInterval.lb / factor2), Math.floor( selInterval.ub / factor2));
    product = factor1 * factor2 + offset;
    // check if the generated number already exists
    if (numbers.indexOf( product) === -1) {
      numbers.push( product);  // add the new number
    }
  }
  ap.setOperands( numbers);  
  return ap;
};

