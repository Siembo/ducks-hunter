oa.arithmeticProblemTypes_indexed = [
  {
    name: "sorting12345",
    title: "Sorting the numbers 1, 2, 3, 4 and 5",
    specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:1, ub:1}, {lb:2, ub:2}, {lb:3, ub:3}, {lb:4, ub:4}, {lb:5, ub:5}] 
  },
  {
    name: "sorting456789",
    title: "Sorting the numbers 4, 5, 6, 7, 8 and 5",
    specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:4, ub:4}, {lb:5, ub:5}, {lb:6, ub:6}, {lb:7, ub:7}, {lb:8, ub:8}, {lb:9, ub:9}] 
  },
  {
    name: "sorting246etc",
    title: "Sorting the numbers 2, 4, 6, etc.",
    specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:2, ub:2}, {lb:4, ub:4}, {lb:6, ub:6}, {lb:8, ub:8}, {lb:10, ub:10}] 
  },
  {
    name: "sorting369etc",
    title: "Sorting the numbers 3, 6, 9, etc.",
    specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:3, ub:3}, {lb:6, ub:6}, {lb:9, ub:9}, {lb:12, ub:12}, {lb:15, ub:15}] 
  },
  {
    name: "sortingNaturalNumbersUpTo9",
    title: "Sorting natural numbers up through 9",
    specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:1, ub:9}, {lb:1, ub:9}, {lb:1, ub:9}, {lb:1, ub:9}] 
  },
  {
    name: "sortingNaturalNumbersUpTo20",
    title: "Sorting natural numbers up through 20",
    specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:2, ub:20}, {lb:2, ub:20}, {lb:2, ub:20}, {lb:2, ub:20}, {lb:2, ub:20},
                   {lb:2, ub:20}, {lb:2, ub:20}, {lb:2, ub:20}, {lb:2, ub:20}, {lb:2, ub:20}] 
  },
  {
    name: "sortingNaturalNumbersUpTo100",
    title: "Sorting natural numbers up through 100",
    specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:10, ub:100}, {lb:10, ub:100}, {lb:10, ub:100}, {lb:10, ub:100}] 
  },
  {
    name: "sortingIntegersUpTo9",
    title: "Sorting integers from -9 to 9",
    specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
    numberType: NumberTypeEL.Integer,
    numberRanges: [null, {lb:-9, ub:9}, {lb:-9, ub:9}, {lb:-9, ub:9}, {lb:-9, ub:9}] 
  },
  {
    name: "sortingIntegersUpTo20",
    title: "Sorting integers from -20 to 20",
    specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
    numberType: NumberTypeEL.Integer,
    numberRanges: [null, {lb:-20, ub:20}, {lb:-20, ub:20}, {lb:-20, ub:20}, {lb:-20, ub:20}, {lb:-20, ub:20}] 
  },

  {
    name: "simpleAdditionOf1",
   	title: "Addition|of|1",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:0, ub:8}, {lb:1, ub:1}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  {
    name: "additionOf1",
    title: "Addition|of|1",
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:0, ub:18}, {lb:1, ub:1}], 
    operators: [OperatorEL.plus],
    askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleAdditionOf2",
   	title: "Addition|of|2",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:0, ub:7}, {lb:2, ub:2}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  {
    name: "additionOf2",
    title: "Addition|of|2",
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:0, ub:17}, {lb:2, ub:2}], 
    operators: [OperatorEL.plus],
    askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleAdditionOf3",
   	title: "Addition|of|3",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:0, ub:6}, {lb:3, ub:3}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  {
    name: "additionOf3",
    title: "Addition|of|3",
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:0, ub:16}, {lb:3, ub:3}], 
    operators: [OperatorEL.plus],
    askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf4",
   	title: "Addition|of|4",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:0, ub:15}, {lb:4, ub:4}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf5",
   	title: "Addition|of|5",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:0, ub:14}, {lb:5, ub:5}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf6",
   	title: "Addition|of|6",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:0, ub:13}, {lb:6, ub:6}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf7",
   	title: "Addition|of|7",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:0, ub:12}, {lb:7, ub:7}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf8",
   	title: "Addition|of|8",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:0, ub:11}, {lb:8, ub:8}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf9",
   	title: "Addition|of|9",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:0, ub:10}, {lb:9, ub:9}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleAddition12",
   	title: "Addition|with a sum|between|7|and|12",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:7, ub:12}, {lb:1, ub:9}, {lb:1, ub:9}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "basicAddition",
   	title: "Addition|with a sum|between|10|and|20",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:10, ub:20}, {lb:2, ub:10}, {lb:2, ub:10}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleAdditionWithAskedForOperand1",
   	title: "Addition|with a sum|up through|10|where the first summand is asked for",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:10}, {lb:0, ub:9}, {lb:0, ub:9}], // result number range enforces non-negative integers
   	operators: [OperatorEL.plus],  
   	askedFor: 1   // askedFor = "operand 1"
  },
  
  {
   	name: "simpleAdditionWithAskedForOperand2",
   	title: "Addition|with a sum|up through|10|where the second summand is asked for",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:10}, {lb:0, ub:9}, {lb:0, ub:9}], // result number range enforces non-negative integers
   	operators: [OperatorEL.plus],  
   	askedFor: 2   // askedFor = "operand 2"
  },
  
  {
   	name: "basicAdditionWithAskedForOperand2",
   	title: "Addition|with a sum|up through|20|where the second summand is asked for",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:10, ub:20}, {lb:2, ub:9}, {lb:2, ub:9}], // result number range enforces non-negative integers
   	operators: [OperatorEL.plus],  
   	askedFor: 2   // askedFor = "operand 2"
  },
  
  {
   	name: "basicAdditionWithAskedForOperand1",
   	title: "Addition|with a sum|up through|20|where the first summand is asked for",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:10, ub:20}, {lb:2, ub:9}, {lb:2, ub:9}], // result number range enforces non-negative integers
   	operators: [OperatorEL.plus],  
   	askedFor: 1   // askedFor = "operand 1"
  },
  
  {
   	name: "simpleAdditionUpTo6",
   	title: "Addition of 2 numbers between 1 and 6",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:1, ub:6}, {lb:1, ub:6}],
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleAdditionOf3NumbersUpTo6",
   	title: "Addition of 3 numbers between 1 and 6",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:1, ub:6}, {lb:1, ub:6}, {lb:1, ub:6}],
   	operators: [OperatorEL.plus, OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleAdditionOf4NumbersUpTo6",
   	title: "Addition of 4 numbers between 1 and 6",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:1, ub:6}, {lb:1, ub:6}, {lb:1, ub:6}, {lb:1, ub:6}],
   	operators: [OperatorEL.plus, OperatorEL.plus, OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf10ToNoUpTo10",
   	title: "Addition of 10 to numbers up through 10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:0, ub:10}, {lb:10, ub:10}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf10ToNoUpTo90",
   	title: "Addition of 10 to numbers up through 90",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:10, ub:89}, {lb:10, ub:10}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf20",
   	title: "Addition of 20 to numbers up through 80",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:1, ub:79}, {lb:20, ub:20}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf30",
   	title: "Addition of 30 to numbers up through 70",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:1, ub:69}, {lb:30, ub:30}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf40",
   	title: "Addition of 40 to numbers up through 60",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:41, ub:99}, {lb:1, ub:59}, {lb:40, ub:40}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf50",
   	title: "Addition of 50 to numbers up through 50",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:1, ub:49}, {lb:50, ub:50}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf60",
   	title: "Addition of 60 to numbers up through 40",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:1, ub:39}, {lb:60, ub:60}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf70",
   	title: "Addition of 70 to numbers up through 30",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:1, ub:29}, {lb:70, ub:70}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf80",
   	title: "Addition of 80 to numbers up through 20",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:81, ub:99}, {lb:1, ub:19}, {lb:80, ub:80}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionOf90",
   	title: "Addition of 90 to numbers up through 10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:1, ub:9}, {lb:90, ub:90}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "basicAdditionOf3Numbers",
   	title: "Addition of 3 numbers between 4 and 10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:15, ub:30}, {lb:4, ub:10}, {lb:4, ub:10}, {lb:4, ub:10}],
   	operators: [OperatorEL.plus, OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "addition30",
   	title: "Addition|with a sum|of|up through|30",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:20, ub:30}, {lb:3, ub:20}, {lb:3, ub:20}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "addition50",
   	title: "Addition|with a sum|of|up through|50",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:30, ub:50}, {lb:10, ub:40}, {lb:10, ub:40}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "addition100",
   	title: "Addition|with a sum|of|up through|99",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:50, ub:99}, {lb:10, ub:60}, {lb:10, ub:60}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "addition1000",
   	title: "Addition|with a sum|of|up through|1000",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:100, ub:500}, {lb:100, ub:500}], 
   	operators: [OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "addition50withAskedForOperand1",
   	title: "Addition of two numbers|with a sum|of|up through|50|where the first summand is asked for",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:30, ub:50}, {lb:10, ub:40}, {lb:10, ub:40}], 
   	operators: [OperatorEL.plus],  
   	askedFor: 1   // askedFor = "operand 1"
  },
  
  {
   	name: "addition50withAskedForOperand2",
   	title: "Addition of two numbers|with a sum|of|up through|50|where the second summand is asked for",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:30, ub:50}, {lb:10, ub:40}, {lb:10, ub:40}], 
   	operators: [OperatorEL.plus],  
   	askedFor: 2   // askedFor = "operand 2"
  },
  
  {
  	name: "addition100withAskedForOperand1",
  	title: "Addition of two numbers|with a sum|of|up through|100|where the first summand is asked for",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [{lb:50, ub:100}, {lb:10, ub:60}, {lb:10, ub:60}], 
  	operators: [OperatorEL.plus],  
  	askedFor: 1   // askedFor = "operand 1"
  },
  
  {
   	name: "addition100withAskedForOperand2",
   	title: "Addition of two numbers|with a sum|of|up through|100|where the second summand is asked for",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:50, ub:100}, {lb:10, ub:60}, {lb:10, ub:60}], 
   	operators: [OperatorEL.plus],  
   	askedFor: 2   // askedFor = "operand 2"
  },
  
  {
   	name: "basicAdditionOf4Numbers",
   	title: "Addition of 4 numbers|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:20, ub:30}, {lb:4, ub:10}, {lb:4, ub:10}, {lb:4, ub:10}, {lb:4, ub:10}],
   	operators: [OperatorEL.plus, OperatorEL.plus, OperatorEL.plus],
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionOf1",
   	title: "Subtraction|of|1|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:1, ub:10}, {lb:1, ub:1}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionOf2",
   	title: "Subtraction|of|2|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:2, ub:10}, {lb:2, ub:2}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionOf3",
   	title: "Subtraction|of|3|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:3, ub:10}, {lb:3, ub:3}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionOf4",
   	title: "Subtraction|of|4|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:4, ub:10}, {lb:4, ub:4}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionOf5",
   	title: "Subtraction|of|5|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:5, ub:10}, {lb:5, ub:5}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionOf6",
   	title: "Subtraction|of|6|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:6, ub:10}, {lb:6, ub:6}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionOf7",
   	title: "Subtraction|of|7|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:7, ub:10}, {lb:7, ub:7}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionOf8",
   	title: "Subtraction|of|8|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:8, ub:10}, {lb:8, ub:8}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionOf9",
   	title: "Subtraction|of|9|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [null, {lb:9, ub:10}, {lb:9, ub:9}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtractionOf1",
   	title: "Subtraction|of|1|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:1, ub:10}, {lb:1, ub:1}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtractionOf2",
   	title: "Subtraction|of|2|from minuends|up through|11",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:2, ub:11}, {lb:2, ub:2}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtractionOf3",
   	title: "Subtraction|of|3|from minuends|up through|12",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:3, ub:12}, {lb:3, ub:3}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtractionOf4",
   	title: "Subtraction|of|4|from minuends|up through|13",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:4, ub:13}, {lb:4, ub:4}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtractionOf5",
   	title: "Subtraction|of|5|from minuends|up through|14",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:5, ub:14}, {lb:5, ub:5}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtractionOf6",
   	title: "Subtraction|of|6|from minuends|up through|15",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:6, ub:15}, {lb:6, ub:6}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtractionOf7",
   	title: "Subtraction|of|7|from minuends|up through|16",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:7, ub:16}, {lb:7, ub:7}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtractionOf8",
   	title: "Subtraction|of|8|from minuends|up through|17",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:8, ub:17}, {lb:8, ub:8}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtractionOf9",
   	title: "Subtraction|of|9|from minuends|up through|18",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:9, ub:18}, {lb:9, ub:9}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtraction",
   	title: "Subtraction|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:1, ub:10}, {lb:1, ub:10}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionWithAskedForOperand1",
   	title: "Subtraction|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:0, ub:10}, {lb:1, ub:10}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 1   // askedFor = "result"
  },
  
  {
   	name: "simpleSubtractionWithAskedForOperand2",
   	title: "Subtraction|from minuends|up through|10",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:5, ub:10}, {lb:1, ub:10}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 2   // askedFor = "result"
  },
  
  {
   	name: "basicSubtraction",
   	title: "Subtraction|from minuends|up through|20",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:9}, {lb:10, ub:20}, {lb:2, ub:10}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtraction50",
   	title: "Subtraction from up through|50",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:100}, {lb:20, ub:50}, {lb:10, ub:40}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtraction100",
   	title: "Subtraction from up through|100",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:10, ub:99}, {lb:50, ub:100}, {lb:10, ub:50}],  // result number range enforces non-negative integers
   	operators: [OperatorEL.minus],   
   	askedFor: 0   // askedFor = "result"
  },
  {
    name: "subtraction130",
    title: "Subtraction with minuends up through 130",
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [{lb:0, ub:50}, {lb:80, ub:130}, {lb:80, ub:130}],  // result number range enforces non-negative integers
    operators: [OperatorEL.minus],   
    askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "additionSubtraction",
   	title: "Addition followed by subtraction",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:20}, {lb:1, ub:10}, {lb:1, ub:10}, {lb:1, ub:10}], // result number range enforces non-negative integers
   	operators: [OperatorEL.plus, OperatorEL.minus],  
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "subtractionAddition",
   	title: "Subtraction followed by addition",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:20}, {lb:1, ub:20}, {lb:1, ub:10}, {lb:1, ub:10}], // result number range enforces non-negative integers
   	operators: [OperatorEL.minus, OperatorEL.plus],  
   	askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "doubleSubtraction",
   	title: "Two chained subtractions",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:20}, {lb:0, ub:20}, {lb:1, ub:10}, {lb:1, ub:10}], // result number range enforces non-negative integers
   	operators: [OperatorEL.minus, OperatorEL.minus],  
   	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "multiplicationBy2",
  	title: "Multiplication by 2",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:10}, {lb:2, ub:2}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "multiplicationBy3",
  	title: "Multiplication by 3",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:10}, {lb:3, ub:3}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "multiplicationBy4",
  	title: "Multiplication by 4",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:10}, {lb:4, ub:4}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "multiplicationBy5",
  	title: "Multiplication by 5",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:10}, {lb:5, ub:5}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "multiplicationBy6",
  	title: "Multiplication by 6",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:10}, {lb:6, ub:6}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "multiplicationBy7",
  	title: "Multiplication by 7",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:10}, {lb:7, ub:7}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "multiplicationBy8",
  	title: "Multiplication by 8",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:10}, {lb:8, ub:8}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "multiplicationBy9",
  	title: "Multiplication|by|9",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:10}, {lb:9, ub:9}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "basicMultiplication",
  	title: "Multiplication|with|a product between|9|and|90",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [{lb:10, ub:90}, {lb:2, ub:11}, {lb:2, ub:11}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  {
    name: "multiplicationByUpTo30",
    title: "Multiplication|with a product|between|60|and|100",
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [{lb:60, ub:100}, {lb:2, ub:30}, {lb:2, ub:30}], 
    operators: [OperatorEL.times],
    askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "basicMultiplicationWithAskedForOperand1",
  	title: "Multiplication with a product between 9|and|90",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [{lb:9, ub:90}, {lb:2, ub:9}, {lb:2, ub:10}], 
  	operators: [OperatorEL.times],
  	askedFor: 1   // askedFor = operand1
  },
  
  {
  	name: "basicMultiplicationWithAskedForOperand2",
  	title: "Multiplication with a product between 9|and|90",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [{lb:9, ub:90}, {lb:2, ub:9}, {lb:2, ub:10}], 
  	operators: [OperatorEL.times],
  	askedFor: 2   // askedFor = operand2
  },
  
  {
  	name: "multiplication15",
  	title: "Multiplication with factors up through|15",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [{lb:9, ub:100}, {lb:2, ub:15}, {lb:11, ub:15}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "multiplication20",
  	title: "Multiplication with factors up through|20",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:11, ub:20}, {lb:11, ub:20}], 
  	operators: [OperatorEL.times],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
    name: "writtenMultiplication1",
    title: "Written multiplication with a 3-digit and a 2-digit factor",
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [null, {lb:101, ub:999}, {lb:11, ub:99}], 
    operators: [OperatorEL.times],
    askedFor: 0   // askedFor = "result"
  },
  
  {
   	name: "multiplicationAdditionSubtraction",
   	title: "Mulitplication|and|addition|and|subtraction",
   	numberType: NumberTypeEL.NonNegativeInteger,
   	numberRanges: [{lb:0, ub:100}, {lb:4, ub:12}, {lb:4, ub:12}, {lb:15, ub:25}, {lb:20, ub:50}], 
   	operators: [OperatorEL.times, OperatorEL.plus, OperatorEL.minus],  
   	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "divisionBy1",
  	title: "Division by 1",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:10}, {lb:1, ub:1}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "divisionBy2",
  	title: "Division by 2",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:20}, {lb:2, ub:2}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "divisionBy3",
  	title: "Division by 3",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:30}, {lb:3, ub:3}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "divisionBy4",
  	title: "Division by 4",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:40}, {lb:4, ub:4}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "divisionBy5",
  	title: "Division by 5",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:50}, {lb:5, ub:5}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "divisionBy6",
  	title: "Division by 6",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:60}, {lb:6, ub:6}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "divisionBy7",
  	title: "Division by 7",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:70}, {lb:7, ub:7}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "divisionBy8",
  	title: "Division by 8",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:80}, {lb:8, ub:8}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "divisionBy9",
  	title: "Division by 9",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:0, ub:90}, {lb:9, ub:9}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "basicDivision",
  	title: "Division with a divisor up through|90",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [{lb:2, ub:9}, {lb:9, ub:90}, {lb:2, ub:10}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "basicDivisionWithAskedForOperand1",
  	title: "Division with a divisor up through|90",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [{lb:2, ub:10}, {lb:9, ub:90}, {lb:2, ub:10}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "basicDivisionWithAskedForOperand2",
  	title: "Division with a divisor up through|90",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [{lb:2, ub:10}, {lb:9, ub:90}, {lb:2, ub:10}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "division200",
  	title: "Division with a divisor up through|200",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [{lb:2, ub:10}, {lb:4, ub:180}, {lb:10, ub:20}], 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0   // askedFor = "result"
  },
  {
    name: "AirplaneSpeed",
    title: "Division with a divisor up through|200",
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [{lb:300, ub:800}, {lb:1200, ub:1600}, {lb:2, ub:4}], 
    operators: [OperatorEL.dividedBy],
    askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "fractionPlusSameDenom",
  	title: "Fraction1",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}], 
  	operators: [OperatorEL.plus, OperatorEL.plus],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.SameDenominator,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionPlusLCM",
  	title: "Fraction2",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:189, lbD:1, ubD:162}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD: 18}] , 
  	operators: [OperatorEL.plus],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.DenominatorEqualsLCM,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // numerator
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionPlusNormal",
  	title: "Fraction3",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:153, lbD:1, ubD:72}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}] , 
  	operators: [OperatorEL.plus],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: null, // other
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: true, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionPlusNatural",
  	title: "Fraction4",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:153, lbD:1, ubD:72}, {lb:1, ub:9, lbD:1, ubD:1}, {lb:1, ub:9, lbD:1, ubD:9}] , 
  	operators: [OperatorEL.plus],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.DenominatorEqualsLCM, // other
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: true, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionMinusSameDenom",
  	title: "Fraction5",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:18, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}] , 
  	operators: [OperatorEL.minus],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.SameDenominator,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // numerator
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionMinusLCM",
  	title: "Fraction6",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:189, lbD:1, ubD:20}, {lb:1, ub:9, lbD:1, ubD:9}] , 
  	operators: [OperatorEL.minus],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.DenominatorEqualsLCM,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionMinusNormal",
  	title: "Fraction7",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:153, lbD:1, ubD:72}, {lb:1, ub:9, lbD:1, ubD:9}] , 
  	operators: [OperatorEL.minus],
  	askedFor: 1, // askedFor = "result"
  	specialProblemCategory: null, // other
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // denom
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionMinusNatural",
  	title: "Fraction8",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:2, ubD:9}, {lb:1, ub:153, lbD:1, ubD:72}, {lb:1, ub:9, lbD:1, ubD:1}] , 
  	operators: [OperatorEL.minus],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.DenominatorEqualsLCM, // other
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // denom
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionTimesLCM",
  	title: "Fraction9",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:1, ubD:188}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:18}] , 
  	operators: [OperatorEL.times],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.DenominatorEqualsLCM,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionTimesSameDenom",
  	title: "Fraction10",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}] , 
  	operators: [OperatorEL.times],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.SameDenominator,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionTimesNatural",
  	title: "Fraction11",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:1}] , 
  	operators: [OperatorEL.times],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.DenominatorEqualsLCM,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: true, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionDivideLCM",
  	title: "Fraction12",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:1, ubD:188}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:18}] , 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.DenominatorEqualsLCM,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionDivideSameDenom",
  	title: "Fraction13",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}] , 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.SameDenominator,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "fractionDivideNatural",
  	title: "Fraction14",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:1}] , 
  	operators: [OperatorEL.dividedBy],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.DenominatorEqualsLCM,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: false, // reduced
  	mixedFractions: true // mixed
  },
  
  {
  	name: "recognizeFraction",
  	title: "Recognize a part of a shape as a proper fraction",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:9, lbD:2, ubD:9}], 
  	specialProblemCategory: SpecialProblemCategoryEL.RecognizeNumber,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both, // both
  	reducedFractions: false,
  	mixedFractions: false
  },
    
  {
  	name: "fractionComparisonNum",
  	title: "Sorting fractions with a common denominator",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [null, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}], 
  	specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.numerator,
  	reducedFractions: false,
  	mixedFractions: false
  },
  
  {
   	name: "fractionComparisonDenom",
    title: "Sorting fractions with a common numerator",
   	numberType: NumberTypeEL.Fraction,
   	numberRanges: [null, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}] , 
   	specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
   	askedForNumDenomOrBoth: NumDenomOrBothEL.denominator,
   	reducedFractions: false,
   	mixedFractions: false
  },
  
  {
  	name: "fractionComparisonBoth",
    title: "Sorting fractions",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [null, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}, {lb:1, ub:9, lbD:1, ubD:9}] , 
  	specialProblemCategory: SpecialProblemCategoryEL.SortingNumbers,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both,
  	reducedFractions: false,
  	mixedFractions: false
  },
  
  {
  	name: "fractionExtendAndReduce",
  	title: "Find extended|and|reduced fractions whose values are equal",
  	numberType: NumberTypeEL.Fraction,
  	numberRanges: [{lb:1, ub:30, lbD:1, ubD:30}] , 
  	operators: [OperatorEL.times],
  	askedFor: 0, // askedFor = "result"
  	specialProblemCategory: SpecialProblemCategoryEL.EquivalentFractions,
  	askedForNumDenomOrBoth: NumDenomOrBothEL.both,
  	reducedFractions: false,
  	mixedFractions: false
  },
  
  {
  	name: "basicAdditionZwithNegativeSummand2",
  	title: "Integer addition with negative second summand",
  	numberType: NumberTypeEL.Integer,
  	numberRanges: [null, {lb:-10, ub:10}, {lb:-10, ub:-1}], 
  	operators: [OperatorEL.plus],
  	askedFor: 0   // askedFor = "result"
  },
  
  {
  	name: "basicAdditionZwithNegativeSummand2AskedForSummand2",
  	title: "Integer addition with negative second summand",
  	numberType: NumberTypeEL.Integer,
  	numberRanges: [null, {lb:-10, ub:10}, {lb:-10, ub:-1}], 
  	operators: [OperatorEL.plus],
  	askedFor: 2   // askedFor = operand2
  },
  
  {
  	name: "basicAdditionZwithNegativeSummand2AskedForSummand1",
  	title: "Integer addition with negative second summand",
  	numberType: NumberTypeEL.Integer,
  	numberRanges: [null, {lb:-10, ub:10}, {lb:-10, ub:-1}], 
  	operators: [OperatorEL.plus],
  	askedFor: 1   // askedFor = operand1
  },
  {
  	name: "basicAdditionZwithNegativeSummand1",
  	title: "Integer addition with negative first summand",
  	numberType: NumberTypeEL.Integer,
  	numberRanges: [null, {lb:-10, ub:-1}, {lb:-10, ub:10}], 
  	operators: [OperatorEL.plus],
  	askedFor: 0   // askedFor = "result"
  },
  {
  	name: "basicAdditionZwithNegativeSummand1AskedForSummand2",
  	title: "Integer addition with negative second summand",
  	numberType: NumberTypeEL.Integer,
  	numberRanges: [null, {lb:-10, ub:-1}, {lb:-10, ub:10}], 
  	operators: [OperatorEL.plus],
  	askedFor: 2   // askedFor = operand2
  },  
  {
  	name: "basicAdditionZwithNegativeSummand1AskedForSummand1",
  	title: "Integer addition with negative second summand",
  	numberType: NumberTypeEL.Integer,
  	numberRanges: [null, {lb:-10, ub:-1}, {lb:-10, ub:10}], 
  	operators: [OperatorEL.plus],
  	askedFor: 1   // askedFor = operand1
  },
  {
  	name: "additionZ",
  	title: "Addition|of|integers between -50|and|50",
  	numberType: NumberTypeEL.Integer,
  	numberRanges: [null, {lb:-50, ub:50}, {lb:-50, ub:50}], 
  	operators: [OperatorEL.plus],
  	askedFor: 0   // askedFor = "result"
  },
  {
    name: "basicMultiplicationZwithNegativeFactor2",
    title: "Integer multiplication with negative second factor",
    numberType: NumberTypeEL.Integer,
    numberRanges: [null, {lb:-9, ub:9}, {lb:-10, ub:-1}], 
    operators: [OperatorEL.times]
  },
  {
    name: "basicMultiplicationZwithNegativeFactor1",
    title: "Integer multiplication with negative second factor",
    numberType: NumberTypeEL.Integer,
    numberRanges: [null, {lb:-10, ub:-1}, {lb:-10, ub:-10}], 
    operators: [OperatorEL.times]
  },
  {
  	name: "writtenMultiplication3DigitsMultipliedBy2Digits",
  	title: "written Multiplication 3 digits multiplied by 2 digits",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:100, ub:999}, {lb:10, ub:99}], 
  	operators: [OperatorEL.plus],
  	askedFor: 0   // askedFor = "result"
  },
  {
  	name: "writtenMultiplication3DigitsMultipliedBy3Digits",
  	title: "written Multiplication 3 digits multiplied by 3 digits",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:100, ub:999}, {lb:100, ub:999}], 
  	operators: [OperatorEL.plus],
  	askedFor: 0   // askedFor = "result"
  },
  {
  	name: "writtenMultiplication4DigitsMultipliedBy4Digits",
  	title: "written Multiplication 4 digits multiplied by 4 digits",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:1000, ub:9999}, {lb:1000, ub:9999}], 
  	operators: [OperatorEL.plus],
  	askedFor: 0   // askedFor = "result"
  },
  {
  	name: "writtenMultiplication5DigitsMultipliedBy5Digits",
  	title: "written Multiplication 5 digits multiplied by 5 digits",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:10000, ub:99999}, {lb:10000, ub:99999}], 
  	operators: [OperatorEL.plus],
  	askedFor: 0   // askedFor = "result"
  },
  {
  	name: "writtenMultiplication5DigitsMultipliedBy3Digits",
  	title: "written Multiplication 5 digits multiplied by 3 digits",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:10000, ub:99999}, {lb:100, ub:999}], 
  	operators: [OperatorEL.plus],
  	askedFor: 0   // askedFor = "result"
  },
  {
  	name: "writtenAddition2Summands3Digits",
  	title: "written addition with two 3-digits long summands",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:100, ub:999}, {lb:100, ub:999}], 
  	operators: [OperatorEL.plus],
  	askedFor: 0   // askedFor = "result"
  },
  {
  	name: "writtenAddition3Summands4Digits",
  	title: "written addition with three 4-digits long summands",
  	numberType: NumberTypeEL.NonNegativeInteger,
  	numberRanges: [null, {lb:1000, ub:9999}, {lb:1000, ub:9999}, {lb:1000, ub:9999}],   	
  	operators: [OperatorEL.plus, OperatorEL.plus],
  	askedFor: 0   // askedFor = "result"
  },
  {
    name: "recognizeEvenNumbers100",
    title: "Recognize|even|numbers|between|0|and|100",
    specialProblemCategory: SpecialProblemCategoryEL.RecognizeMultiples,
    specialProblemCategoryParams: {factor2: 2, nmrOfMultiples: 25},
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [{lb:0, ub:100}] 
  },
  {
    name: "recognizeOddNumbers100",
    title: "Recognize|odd|numbers|between|0|and|100",
    specialProblemCategory: SpecialProblemCategoryEL.RecognizeMultiples,
    specialProblemCategoryParams: {factor2: 2, offset: 1, nmrOfMultiples: 25},
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [{lb:0, ub:100}] 
  },
  {
    name: "recognizeMultiplesOf3",
    title: "Recognize|multiples|of|3",
    specialProblemCategory: SpecialProblemCategoryEL.RecognizeMultiples,
    specialProblemCategoryParams: {factor2: 3, nmrOfMultiples: 7},
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [{lb:0, ub:99}]
  },
  {
    name: "recognizeMultiplesOf5",
    title: "Recognize|multiples|of|5",
    specialProblemCategory: SpecialProblemCategoryEL.RecognizeMultiples,
    specialProblemCategoryParams: {factor2: 3, nmrOfMultiples: 7},
    numberType: NumberTypeEL.NonNegativeInteger,
    numberRanges: [{lb:0, ub:99}] 
  },
  {
    name: "mixedBinaryProblems",
    title: "Mixed|binary|problems",
    specialProblemCategory: SpecialProblemCategoryEL.MixedBinaryProblem,
    numberType: NumberTypeEL.NonNegativeInteger,
    operators: [OperatorEL.plus, OperatorEL.minus, OperatorEL.times, OperatorEL.dividedBy],  
    numberRanges: [[{lb:10, ub:20}, {lb:2, ub:10}, {lb:2, ub:10}], 
                   [{lb:0, ub:9}, {lb:10, ub:20}, {lb:2, ub:10}],
                   [{lb:10, ub:90}, {lb:2, ub:11}, {lb:2, ub:11}],
                   [{lb:2, ub:9}, {lb:9, ub:90}, {lb:2, ub:10}]]
  }
];
oa.transformProblemTypes();