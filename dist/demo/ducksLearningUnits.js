/**
 * Define learning units and make them available by adding them
 * to the learningUnits list  
 * 
 * @author Mircea Diaconescu
 * 
 */
 
oa.learningUnits = [
  {  
    id:  1,
    title: "Arithmetic operation",  
    description: "Solve binary arithmetic operations",  
    subjectArea: "Miscellaneous",  
    grade: 1,  
    exercises: [
       new ArithmeticExercise( "mixedBinaryProblems", 3, oa.rf.ducks)
    ] 
  }
];
oa.transformLearningUnits();