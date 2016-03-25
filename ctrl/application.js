/**
 * @fileOverview  Contains various controller functions in the namespace "oa.ctrl" 
 * @author Gerd Wagner
 */
oa.ctrl = {
  rf: {},  // subnamespace for rendering forms
  /**
   *  Initialization is called when the HTML page has been loaded
   */
  initialize: function () {
    var lang="";
    if (!oa.demo && window.localStorage) { 
      oa.ctrl.loadData(); 
    } else {
      oa.learner = new Learner();
      lang = util.getUserLanguage();
      if (oa.supportedLanguages.indexOf(lang) === -1) { lang="en"; }
      oa.learner.setLanguage( lang);
    }
    oa.view.initializeUI();
  },
  /**
   *  End problem
   */
  endProblem: function () {
    var percentageCorrect = (oa.learningUnitProblemCounter<=0) ? 0 : 
      Math.floor( oa.correctAnswerCounter / oa.learningUnitProblemCounter * 100);
    oa.view.showPercentageCorrect( percentageCorrect);
  },
  /**
   *  Quit exercise
   */
  quit: function () {
    var rfName = oa.currentExercise.renderingForm.name,
        cleanUp = oa.view.rf[rfName].cleanUp;
    // clear the rf style of the body element
    document.body.classList.remove( rfName);
    // clean up if a cleanUp procedure has been defined 
    if (cleanUp) { cleanUp();}

    oa.currentLearningUnit = null;
    oa.currentExercise = null;
    oa.currentExerciseNumber = 0;
    oa.previousProblem = null;
    oa.currentProblem = null;
    oa.currentProblems = [];
    oa.currentProblemNumber = 0;
    oa.view.resetScreen();
  },
  /**
   *  Exit the application
   */
  exit: function () {
    if (localStorage && oa.learner.firstName) { oa.ctrl.saveData(); }
  },
  /**
   *  Load session data
   */
  loadData: function () {
    var gr=0, lang="";
    try {
      var fN = localStorage.getItem("learnerFirstName");
      if (!fN) { 
        oa.ctrl.resetLearnerData();  
        oa.view.openUserDataFormWindow(); 
      } else {
        gr = parseInt( localStorage.getItem("learnerGrade"));
        lang = localStorage.getItem("learnerLanguage");
        oa.learner = new Learner( fN, gr, lang);
        // only for grade 1 and 2 set up basic problem statistics
        if (util.isNonNegativeInteger( gr) && gr > 0 && gr < 3) {
          oa.basicAdditionStatistics = JSON.parse( localStorage.getItem("basicAdditionStatistics"));
          if (!oa.basicAdditionStatistics || oa.basicAdditionStatistics.length === 0) {
            oa.basicAdditionStatistics = BasicProblemStatistic.getInitialBasicProblemStatisics();
          }
          oa.basicMultiplicationStatistics = JSON.parse( localStorage.getItem("basicMultiplicationStatistics"));
          if (!oa.basicMultiplicationStatistics || oa.basicMultiplicationStatistics.length === 0) {
            oa.basicMultiplicationStatistics = BasicProblemStatistic.getInitialBasicProblemStatisics();
          }
        }
      }
    } catch (e) {
      console.log("Error when loading data\n" + e);        
    } 
  },
  /**
   * initialize learner data
   */
  resetLearnerData: function () {
    lang = util.getUserLanguage();
    if (oa.supportedLanguages.indexOf(lang) === -1) { lang="en"; }
    oa.learner = new Learner("?",0,lang);
    oa.basicAdditionStatistics = BasicProblemStatistic.getInitialBasicProblemStatisics();
    oa.basicMultiplicationStatistics = BasicProblemStatistic.getInitialBasicProblemStatisics();
  },
  /**
   * save session data
   */
  saveData: function () {
    var gr = oa.learner.grade;
    try {
      localStorage.setItem("learnerFirstName", oa.learner.firstName);
      localStorage.setItem("learnerGrade", JSON.stringify( oa.learner.grade));
      localStorage.setItem("learnerLanguage", oa.learner.language);
      // only for grade 1 and 2: save basic problem statistics
      if (util.isNonNegativeInteger( gr) && gr > 0 && gr < 3) {
        localStorage.setItem("basicAdditionStatistics", JSON.stringify( oa.basicAdditionStatistics));
        localStorage.setItem("basicMultiplicationStatistics", JSON.stringify( oa.basicMultiplicationStatistics));        
      }
    } catch (e) {
      if (e == QUOTA_EXCEEDED_ERR) {
        alert('Quota exceeded!');  // handle the error...?
      } else {
        alert("Error when writing to Local Storage\n" + e);        
      } 
    };
  },
  /**
   * reset persistent data by clearing local storage
   */
  resetData: function () {
    if (window.localStorage) {
      try {
        localStorage.clear();
      } catch (e) {
        alert("Error while trying to clear local storage:\n" + e.message);
      }      
    }
    oa.ctrl.resetLearnerData();
    // update basic problem statistics tables
    oa.view.fillBasicProblemStatistics( oa.basicAdditionStatistics, 
        document.getElementById("additionTbl"));
    oa.view.fillBasicProblemStatistics( oa.basicMultiplicationStatistics, 
        document.getElementById("multiplicationTbl"));
  }
};
window.addEventListener("load", oa.ctrl.initialize);
window.addEventListener("beforeunload", oa.ctrl.exit);
