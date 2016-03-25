/**
 * @fileOverview  Contains various UI functions in the namespace "oa.view" 
 * @author Gerd Wagner
 */
oa.view = {
  rf: {},  // subnamespace for rendering forms
  operatorSymbols: ["+","−","⋅",":"],  // contains the non-ANSI Unicode characters "−" and "⋅"
  continueSymbol: "►",  // the non-ANSI Unicode character "►"
  // background colors (e.g. for memory cards) 
  backgroundColors: ['pink','plum','aqua','greenyellow','lightskyblue','palegreen','yellow','lime',"magenta","orange"],
  timeoutId: null,  // stored globally for being able to reset
  /**
   *  UI initialization is called when the HTML page is loaded
   */
  initializeUI: function () {
    var lSel=null, lLbl=null, p=null, txt="";
    if (oa.learner.firstName) { oa.view.updateLearnerDataView(); }
    if (oa.learner.language !== "en") {
      oa.view.translateTextItemsOnPage();
    }
    if (oa.demo) {
      document.querySelector("#grades").style.display = "none";
      document.querySelector("#subjectAreas").style.display = "none";
      p = document.querySelector("#rfDescr");
      txt = oa.rf[oa.demo].description;
      p.textContent = oa.trans( txt);
      p.setAttribute("data-txtId", txt.substring( 0, txt.indexOf(":")));
      p = document.querySelector("#helpTxt");
      txt = oa.rf[oa.demo].helpText;
      p.textContent = oa.trans( txt);
      p.setAttribute("data-txtid", txt.substring( 0, txt.indexOf(":")));
      lSel = document.getElementById("languageSelect"),
      oa.view.constructLanguageOptions( lSel);
/* 
      lLbl = document.createTextNode( oa.trans("Language") + ":");
      // assign label by accessing the input's parent element
      lSel.parentNode.insertBefore( lLbl, lSel);
 */
      lSel.addEventListener('change', function () {
        oa.learner.setLanguage( lSel.value);
        if (lSel.value === "en") {
          msg = "Restart Ari123 to see English text!";
          alert( msg);
        } else {
          oa.view.translateTextItemsOnPage();
        }
     });
    } else {
      oa.view.initUserDataForm();
      document.getElementById("editLearnerData").addEventListener('click', oa.view.openUserDataFormWindow);
      document.getElementById("closeDialog").addEventListener('click', oa.view.closeUserDataFormWindow);
      document.getElementById("reset").addEventListener('click', oa.view.resetData);
      document.getElementById("showAll").addEventListener('click', function () { 
        oa.showAllContents = !oa.showAllContents;
        oa.view.renderLearningUnitSelectionList();
      });
    }
    oa.view.renderLearningUnitSelectionList();
    oa.view.addEventHandlers();
    // oa.view.turnOnFullScreenMode();
  },
  /**
   *  Render the learning unit selection list
   */
  renderLearningUnitSelectionList: function () {
    var gradesEl = document.getElementById("grades"),
        gradeListItems = [],
        selectedGradeListItems = document.querySelectorAll("#grades>ul>li.selected"),
        subjectAreaSelList = document.querySelector("#subjectAreas>ul"),
        learningUnitSelList = document.querySelector("#learningUnits>ul"),
        headers = document.querySelectorAll("#learningUnitSelection h1"),
        txt = "";
    subjectAreaSelList.innerHTML = "";
    learningUnitSelList.innerHTML = "";
    for (var i=0; i < headers.length; i++) {
      headers[i].textContent = oa.trans( headers[i].textContent);
    }
    oa.view.renderGradeLevelList();
    if (oa.learner.grade > 0) {
      if (oa.showAllContents) { 
        gradesEl.classList.remove("hide");
        if (selectedGradeListItems.length > 0) {
          selectedGradeListItems[0].classList.remove("selected");
        }
        gradeListItems = gradesEl.querySelectorAll("ul>li");
        for (var i=0; i < gradeListItems.length; i++) {
          if (gradeListItems[i].textContent == oa.learner.grade) {
            gradeListItems[i].classList.add("selected");
          }        
        }
        txt = oa.trans("Show only subject areas for your grade level"); 
      } else {  // show only the learner's grade level
        gradesEl.classList.add("hide");
        txt = oa.trans("Show all grade levels"); 
      }
      subjectAreas = LearningUnit.getSubjectAreasByGrade( oa.learner.grade);
      learningUnits = LearningUnit.getLearningUnitsByGrade( oa.learner.grade);
      document.querySelector("#learningUnitSelection>p").textContent = txt;
    } else {  // no grade level entered
      subjectAreas = LearningUnit.getAllSubjectAreas(); 
      learningUnits = oa.learningUnits;
      gradesEl.classList.remove("hide");
      if (selectedGradeListItems.length > 0) {
        selectedGradeListItems[0].classList.remove("selected");
      }
      document.querySelector("#learningUnitSelection>p").innerHTML = "";
    }
    if (oa.demo) {
      document.querySelector("#subjectAreas").style.display="none";
    } else {
      oa.view.displaySubjectAreas( subjectAreas);
    }
    oa.view.displayLearningUnits( learningUnits);
  },
  /**
   * Render grade level list
   * 
   * @author Gerd Wagner
   * 
   * @param {array} gradeLevels  A list of grade levels
   */
  renderGradeLevelList: function () {
    var gradeLevelList = document.querySelector("#grades>ul"),
        gradeLevels = LearningUnit.getAllGradeLevels(),
        el=null;
    gradeLevelList.innerHTML = "";
    for (var i=0; i < gradeLevels.length; i++) {
      el = document.createElement("li");
      el.textContent = gradeLevels[i];
      gradeLevelList.appendChild( el);      
    }
  },
  /**
   * Display subject areas
   * 
   * @author Gerd Wagner
   * 
   * @param {array} subjectAreas  A list of subject areas
   */
  displaySubjectAreas: function (subjectAreas) {
    var subjectAreaSelList = document.querySelector("#subjectAreas>ul"),
        el=null;
    subjectAreaSelList.innerHTML = "";
    for (var i=0; i < subjectAreas.length; i++) {
      el = document.createElement("li");
      el.classList.add("translate");
      el.setAttribute('data-sa', subjectAreas[i]);
      el.textContent = oa.trans( subjectAreas[i]);
      subjectAreaSelList.appendChild( el);      
    }
  },
  /**
   * Display learning units
   * 
   * @author Gerd Wagner
   * 
   * @param {array} learningUnits  A list of learning units
   */
  displayLearningUnits: function (learningUnits) {
    var learningUnitSelList = document.querySelector("#learningUnits>ul"),
        el=null;
    learningUnitSelList.innerHTML = "";
    for (var i=0; i < learningUnits.length; i++) {
      el = document.createElement("li");
      el.classList.add("translate");
      // store English title
      el.setAttribute('data-txt', learningUnits[i].title);
      el.textContent = oa.trans( learningUnits[i].title);
      //el.appendChild( document.createTextNode( oa.trans( learningUnits[i].title)));
      el.setAttribute('title', oa.trans( learningUnits[i].description));
      el.setAttribute('data-luid', learningUnits[i].id);
      learningUnitSelList.appendChild( el);
    }
  },
  /**
   * Event handler for displaying subject areas when a grade is selected
   * 
   * @author Gerd Wagner
   */
  handleGradeSelectionEvents: function (e) {
    var grade = parseInt( e.target.textContent),
        subjectAreas = [], learningUnits = [],
        prevSelectedGradeElems = document.querySelectorAll("#grades>ul>li.selected");
    if (!grade) return;  // clicked in list, but no grade level selected
    if (prevSelectedGradeElems.length > 0) {
      prevSelectedGradeElems[0].classList.remove("selected");
      // distinguish between new selection and unselection
      if (prevSelectedGradeElems[0] !== e.target) {
        e.target.classList.add("selected");
        subjectAreas = LearningUnit.getSubjectAreasByGrade( grade);
        learningUnits = LearningUnit.getLearningUnitsByGrade( grade);
      } else {  // unselection
        subjectAreas = LearningUnit.getAllSubjectAreas();
        learningUnits = oa.learningUnits;
      }
    } else {  // no previous selection
      e.target.classList.add("selected");      
      subjectAreas = LearningUnit.getSubjectAreasByGrade( grade);
      learningUnits = LearningUnit.getLearningUnitsByGrade( grade);
    }
    oa.view.displaySubjectAreas( subjectAreas);
    oa.view.displayLearningUnits( learningUnits);
  },
  /**
   * Event handler for subject area selection events
   * Displays learning units
   * 
   * @author Gerd Wagner
   */
  handleSubjectAreaSelectionEvents: function (e) {
    var subjectArea = e.target.getAttribute("data-sa"),
        grade = 0;
        selectedGradeListItems = document.querySelectorAll("#grades>ul>li.selected"),
        prevSelectedSubjectAreaElems = document.querySelectorAll("#subjectAreas>ul>li.selected"),
        learningUnits = [],
        learningUnitSelList = document.querySelector("#learningUnits>ul"),
        el = null;
    if (!subjectArea) return;  // clicked in list, but no subjectArea selected
    learningUnitSelList.innerHTML = "";
    if (!oa.learner.grade || oa.showAllContents) {
      if (selectedGradeListItems.length > 0) {
        grade = parseInt( selectedGradeListItems[0].textContent);
      }
    } else if (oa.learner.grade > 0) {
      grade = oa.learner.grade;
    }
    if (prevSelectedSubjectAreaElems.length > 0) {
      prevSelectedSubjectAreaElems[0].classList.remove("selected");
      // distinguish between new selection and unselection
      if (prevSelectedSubjectAreaElems[0] !== e.target) {
        e.target.classList.add("selected");
        if (grade>0) {
          learningUnits = LearningUnit.getLearningUnitsByGradeAndSubjectArea( grade, subjectArea);
        } else {
          learningUnits = LearningUnit.getLearningUnitsBySubjectArea( subjectArea);          
        }
      } else {  // unselection
        if (grade>0) {
          learningUnits = LearningUnit.getLearningUnitsByGrade( grade);
        } else {
          learningUnits = oa.learningUnits;          
        }
      }
    } else {  // no previous selection
      e.target.classList.add("selected");
      if (grade>0) {
        learningUnits = LearningUnit.getLearningUnitsByGradeAndSubjectArea( grade, subjectArea);
      } else {
        learningUnits = LearningUnit.getLearningUnitsBySubjectArea( subjectArea);          
      }
    }
    oa.view.displayLearningUnits( learningUnits);
  },
  /**
   * Event handler for starting a learning unit when selected from the
   * learning unit selection list 
   * 
   * @author Gerd Wagner
   */
  startLearningUnit: function (e) {
    var lu = e.target.getAttribute("data-luid");
    if (!lu) return;  // clicked in list, but no learningUnit selected
    document.body.classList.toggle("showRenderBox");
    oa.ctrl.startLearningUnit( lu);
  },
  /**
   *  Reset the screen: 
   *  1) Delete session data
   *  2) Restore learning unit selection list
   *  3) Delete renderBox contents
   *  4) Hide Tito
   */
  resetScreen: function () {
    var rB = document.getElementById("renderBox");
    document.body.classList.toggle("showRenderBox");
    oa.view.hideHelpButton();
    oa.view.hideQuitButton();
    rB.innerHTML = "";
    rB.className = "";
    // oa.view.toggleTito();
  },
  /**
   *  Update learner data
   */
  updateLearnerDataView: function () {
    var learnerDataText = oa.trans("For") + " "+ oa.learner.firstName;
    if (oa.learner.grade > 0) { 
      learnerDataText += ", "+ oa.trans("grade level") +" "+ oa.learner.grade;
    }
    document.getElementById("learnerData").textContent = learnerDataText;
    document.getElementById("editLearnerData").textContent = oa.trans("Edit");
  },
  /**
  *  Add the event listeners for the general user interface
  */
  addEventHandlers: function () {
    document.querySelector("#learningUnits>ul").addEventListener("click", 
        oa.view.startLearningUnit);
    document.querySelector("#subjectAreas>ul").addEventListener("click", 
        oa.view.handleSubjectAreaSelectionEvents);
    document.querySelector("#grades>ul").addEventListener("click", 
        oa.view.handleGradeSelectionEvents);
    document.getElementById("help").addEventListener("click", oa.view.exerciseHelp);
    document.getElementById("quit").addEventListener("click", oa.ctrl.quit);
    document.querySelector("#exerciseHelpText>button").addEventListener("click", oa.view.endExerciseHelp);
    /*
    // close dialog window also when its surrounding is clicked
    document.querySelector('.overlay').addEventListener('click', function (e) {
      if (/overlay|wrap/.test(e.target.className)) { oa.view.closeUserDataFormWindow(); }
    });
    */
  },
  /**
   *  Init dialog window
   */
  initUserDataForm: function () {
    var fInp = document.getElementById("firstNameInput"),
        fLbl = document.createTextNode( oa.trans("First name") + ":"),
        gInp = document.getElementById("gradeInput"),
        gLbl = document.createTextNode( oa.trans("Grade level") + ":"),
        lSel = document.getElementById("languageSelect"),
        lLbl = document.createTextNode( oa.trans("Language") + ":");
    // assign label by accessing the input's parent element
    fInp.parentNode.insertBefore( fLbl, fInp);
    gInp.parentNode.insertBefore( gLbl, gInp);
    oa.view.constructLanguageOptions( lSel);
    lSel.parentNode.insertBefore( lLbl, lSel);
    document.getElementById("dialog-title").textContent = oa.trans("Your Data");
    document.getElementById("closeDialog").textContent = oa.trans("OK");
    document.getElementById("reset").textContent = oa.trans("Reset");
  },    
  /**
   *  Construct language selection options
   */
  constructLanguageOptions: function ( langSel) {
    var opt = {};
    for (var i=0; i < oa.supportedLanguages.length; i++) {
      opt = document.createElement("option");
      opt.value = oa.supportedLanguages[i];
      opt.textContent = util.languageNames[opt.value];
      if (opt.value === oa.learner.language) {
        opt.setAttribute("selected", "selected");
      }
      langSel.appendChild( opt);    
    }
  },
  /**
   *  Open dialog window
   */
  openUserDataFormWindow: function () {
    var dialogEl = document.getElementById("dialog"),
        fInp = document.getElementById("firstNameInput"),
        gInp = document.getElementById("gradeInput"),
        elem = {};
    if (oa.learner.firstName) { fInp.value = oa.learner.firstName;}
    // else {fInp.value = "?";}
    if (!oa.learner.grade) { 
      gInp.value = "none";
      oa.learner.setGrade(0);
    } else {
      gInp.value = oa.learner.grade;
    }
    dialogEl.style.display = "block";
    document.body.classList.toggle("overlaid");
    if (oa.demo) return;  // no basic problem statistics for demos
    if (oa.learner.grade === 1) {
      if (oa.basicAdditionStatistics.length > 0) {
        elem = document.getElementById("additionTbl");
        oa.view.fillBasicProblemStatistics( oa.basicAdditionStatistics, elem);
      }
      document.getElementById("additionTbl").style.display = "inline-table";
      document.getElementById("multiplicationTbl").style.display = "none";
      dialogEl.classList.remove("noTables");      
    } else if (oa.learner.grade === 2) {
      if (oa.basicAdditionStatistics.length > 0) {
        elem = document.getElementById("additionTbl");
        oa.view.fillBasicProblemStatistics( oa.basicAdditionStatistics, elem);
      }
      if (oa.basicMultiplicationStatistics.length > 0) {
        elem = document.getElementById("multiplicationTbl");
        oa.view.fillBasicProblemStatistics( oa.basicMultiplicationStatistics, elem);
      }
      document.getElementById("additionTbl").style.display = "inline-table";
      document.getElementById("multiplicationTbl").style.display = "inline-table";
      dialogEl.classList.remove("noTables");      
    } else {  // grade > 2
      document.getElementById("additionTbl").style.display = "none";
      document.getElementById("multiplicationTbl").style.display = "none";
      dialogEl.classList.add("noTables");      
    }
  },    
  /**
   *  Close dialog window
   */
  closeUserDataFormWindow: function (e) {
    var fInp = document.getElementById("firstNameInput"),
        lSel = document.getElementById("languageSelect"),
        gInp = document.getElementById("gradeInput"),
        g = (gInp.value === "none") ? 0 : parseInt( gInp.value),
        somethingChanged = false,
        msg = "";
    if (!fInp.value || fInp.value.trim === "") { 
      fInp.value = "?";
    }
    if (fInp.value !== oa.learner.firstName) {  
      oa.learner.setFirstName( fInp.value);
      somethingChanged = true;
    }
    if (g !== oa.learner.grade) {
      oa.learner.setGrade(g);
      somethingChanged = true;
      oa.view.renderLearningUnitSelectionList();
    }
    if (lSel.value !== oa.learner.language) {
      oa.learner.setLanguage( lSel.value);
      somethingChanged = true;
      if (lSel.value === "en") {
        msg = "Restart Ari123 to see English text!";
        alert( msg);
      } else {
        oa.view.translateTextItemsOnPage();
      }
    }
    // update the learner data view element
    if (somethingChanged) { oa.view.updateLearnerDataView();}
    // close dialog window
    document.getElementById("dialog").style.display = "none";
    document.body.classList.toggle("overlaid");
    e.preventDefault();
  },
  /**
   * Translate all text items on the page
   * 
   */
  translateTextItemsOnPage: function () {
    var txtId="", txt="";
    var transItems = document.querySelectorAll(".translate");
    for (var i=0; i < transItems.length; i++) {
      txtId = transItems[i].getAttribute("data-txtid");
      txt = transItems[i].getAttribute("data-txt");
      if (txtId) {
        transItems[i].textContent = oa.trans( txtId);
      } else if (txt) {
        transItems[i].textContent = oa.trans( txt);
      } else {
        transItems[i].textContent = oa.trans( transItems[i].textContent);        
      };
    }
  },
  /**
   * Turn the full screen mode on
   * DOESN'T WORK???
   */
  turnOnFullScreenMode: function () {
    var elem = document.querySelector("#renderBox");  
    if (elem.requestFullScreen) { elem.requestFullScreen();} 
    else if (elem.mozRequestFullScreen) { elem.mozRequestFullScreen();} 
    else if (elem.webkitRequestFullScreen) { elem.webkitRequestFullScreen();}    
  },
  /**
   * Fill in the learning unit header data
   * 
   * @param {LearningUnit} lu  A learning unit.
   */
  fillLearningUnitHeader : function ( lu) {
    document.querySelector("#sessionInfo>h1").textContent = oa.trans( lu.title);
    document.getElementById("nmrOfProblems").textContent = "("+ oa.trans("of") +" "+ lu.getNmrOfProblems()+")";
  },
  /**
   * Fill in the session info labels
   */
  fillLabels: function () {
    document.getElementById("labelProblemCounter").textContent = oa.trans("Problem");
    document.getElementById("labelPercentageCorrect").textContent = oa.trans("Correct:");     
  },
  /**
   * Fill in the exercise header data
   * 
   * @param {ArithmeticExercise} ae  An arithmetic exercise.
   */
  fillExerciseHeader : function (ae) {
    document.querySelector("#sessionInfo>h2").textContent = oa.trans( ae.problemType.title);
  },
  /**
   * Hide evaluation info
   */
  hideEvaluationInfo: function () {
    document.body.classList.add("hideEvaluationInfo");
  },
  /**
   * Show evaluation info
   */
  showEvaluationInfo: function () {
    document.body.classList.remove("hideEvaluationInfo");
  },
  /** 
   *  Fill in basic addition statistics data
   */
  fillBasicProblemStatistics: function ( basicProblemStatistics, tblElem) {
    var rows = tblElem.querySelectorAll("tbody>tr"),
        cells = [],
        count = 0;
    for (var i=0; i < 10; i++) {
      cells = rows[i].querySelectorAll("td");
      for (var j=0; j < 10; j++) {
        count = basicProblemStatistics[i*10 + j].correctCounter;
        cells[j].textContent = count;
        // data-count is used for coloring the cells with 5 different greens
        cells[j].setAttribute('data-count', Math.min( count, 5));
      }
    }
  },
  /**
   * FOR LENZ ONLY!!!
   * Show/hide Tito
   */
  toggleTito : function () {
    document.querySelector("#tito").classList.toggle("show");
  },
  /**
   * reset learner data by clearing local storage, the oa.learner slots,
   * the learner data view and the learning unit selection list
   */
  resetData: function () {
    if (confirm( oa.trans("Do you really want to clear all data?"))) {
      oa.ctrl.resetData();
      oa.view.updateLearnerDataView();
      oa.view.renderLearningUnitSelectionList();
      // close dialog window
      document.body.classList.toggle("overlaid");
    }
  },
  /**
   * show success animation
   */
  showSuccessAnimation: function () {
    oa.view.showAriWithBubble();
    oa.view.timeoutId = window.setTimeout( oa.view.showSmilingAri, 2000);
  },
  /**
   * show smiling Ari
   */
  showSmilingAri: function () {
    document.querySelector("#ari").className = "smiling";
  },
  /**
   * show worried Ari
   */
  showWorriedAri: function () {
    document.querySelector("#ari").className = "worried";
  },
  /**
   * show disappointed Ari
   */
  showDisappointedAri: function () {
    document.querySelector("#ari").className = "disappointed";
  },
  /**
   * show Ari with bubble
   */
  showAriWithBubble: function () {
    document.querySelector("#ari").className = "withBubble";
  },
  /**
   * hide Ari
   */
  hideAri: function () {
    document.querySelector("#ari").className = "hide";
  },
  /**
   * show percentage of correct answers
   */
  showPercentageCorrect: function (percentageCorrect) {
    document.getElementById("percentageCorrect").textContent = percentageCorrect + " %";
  },
  /**
   * show help during exercises 
   */
  exerciseHelp: function () {
    var ehtElem = document.getElementById("exerciseHelpText"),
        txt = oa.trans( oa.currentExercise.renderingForm.helpText); 
    ehtElem.firstChild.textContent = txt;
    ehtElem.style.display = "block";
    document.body.classList.toggle("overlaid");
    // window.setTimeout( oa.view.endExerciseHelp, txt.length * 100);
  },
  /**
   * end exercise help 
   */
  endExerciseHelp: function () {
    var ehtElem = document.getElementById("exerciseHelpText"); 
    ehtElem.firstChild.innerHTML = "";
    ehtElem.style.display = "none";
    document.body.classList.toggle("overlaid");
  },
  /**
   * hide help button 
   */
  hideHelpButton: function () {
    document.getElementById("help").style.visibility = "hidden";       
  },
  /**
   * show help button 
   */
  showHelpButton: function () {
    document.getElementById("help").style.visibility = "visible";       
  },
  /**
   * hide (help+)quit button 
   */
  hideQuitButton: function () {
    // document.getElementById("help-quit").style.visibility = "hidden";       
    document.getElementById("help-quit").style.display = "none";       
  },
  /**
   * show (help+)quit button 
   */
  showQuitButton: function () {
    // document.getElementById("help-quit").style.visibility = "visible";       
    document.getElementById("help-quit").style.display = "block";       
  },
  /**
   * create the submit/continue button for input field answer handling 
   */
  createSubmitContinueButton: function (parentEl, evtHandler) {
    var el = dom.createButton("submitButton","blue","?");
    if (evtHandler) {
      el.addEventListener("click", evtHandler);
    } else {  // default handler
      el.addEventListener("click", oa.view.handleClickSubmitButtonEvents);
    }
    parentEl.appendChild( el);
    document.addEventListener("keypress", oa.view.handleKeyPressEvents, true);
  },
  /**
   * construct the RHS of a problem 
   */
  constructRHS: function (rhsEl) {
    // equality symbol
    var el = dom.createSpan("equalitySymbol","operator","=");
    rhsEl.appendChild( el);
    // result and submit/continue button
    if (oa.env.isTouchScreenDevice) {
      el = dom.createSpan("askedFor","operand askedFor","?");
      rhsEl.appendChild( el);
      oa.view.createContinueButton( rhsEl);
    } else {
      el = dom.createNumInput("askedFor","operand askedFor","result");
      el.addEventListener("input", oa.view.handleUserInputEvents);
      rhsEl.appendChild( el);
      el = dom.createButton("submitButton","blue","?");
      rhsEl.appendChild( el);
      el.addEventListener("click", oa.view.handleClickSubmitButtonEvents, false);
      document.addEventListener("keypress", oa.view.handleKeyPressEvents, true);
    }
  }
};
