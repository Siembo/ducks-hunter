/** 
 * @author Mircea Diaconescu
 *
 * The view render form for the Game learning type.
 */
oa.view.rf.ducks = {
  // the ducks actor
  duck1 : new Object(),
  duck2 : new Object(),
  // the canvas element
  canvas : new Object(),
  // the number of cells on the space width
  spaceWidth : 1024, 
  // the number of cells on the space height
  spaceHeight : 768,
  // the FPS rate
  fps : 60,
  // create a stage by getting a reference to the canvas
  stage : new Object(),
  // the shape of images
  duckImageShape1 : new Object(),
  duckImageShape2 : new Object(),
  // counter for calculate fps
  timeCounter : 0,
  // save the Answers
  rightAnswer : 0,
  wrongAnswer : 0,
  // instance of the basic text objects from EaselJS for the Answer of OA-Framework.
  answer1 : new Object(),
  answer2 : new Object(),
  // array for operands and operators
  mathForm : new Array(),
  // show Maths formula
  textMaths : new Object(),
  // show the Texts when game winn, missed or lost.
  textWinn : new Object(),
  textLost : new Object(),
  textMissed : new Object(),


  /**
   * Build the DOM/canvas structure 
   * @author Mircea Diaconescu
   * 
   * @param {ArithmeticProblem} ap  
   */
  render:  function ( ap) {
    // here add your code for canvas creation, and other DOM elements 

    // get target div named "renderBox" from the html file:
    var renderBox = document.getElementById("renderBox");
    // define target canvas:
    this.canvas = dom.createCanvas("playground", null, "", this.spaceWidth, this.spaceHeight);
    // insert the canvas into renderBox:
    renderBox.appendChild(this.canvas);

    // Stop the Game directly when player click the "quit" button
    document.getElementById( "quit").addEventListener( "click", this.stopGame);
    // waiting to call resize function when the window's size changed.
    window.addEventListener( "resize", this.onResize.bind(this));

  },

  /**
   * Fill the DOM/canvas structure with numbers
   * @author Mircea Diaconescu
   * 
   * @param {ArithmeticProblem} ap  
   */
  fill:  function ( ap) {
    // here is the place where you will get access to the numbers to use in your game
    
    // fill sounds for games.
    createjs.Sound.play( "media/music/rockBacksound.mp3", "none", 0, 0, -1);    
    this.canvas.addEventListener("click", function() {createjs.Sound.play( "media/music/shot.mp3", "none", 0, 0, 0);});
    // save the operands and operator
    this.mathForm[0] = ap.operands[0];
    this.mathForm[1] = oa.view.operatorSymbols[ap.operators[0]-1];
    this.mathForm[2] = ap.operands[1];
    // save the right answer
    this.rightAnswer = ap.getCorrectAnswer();
    
    this.initGame();
  },

  /**
   * [initGame description]
   * @return {[type]} [description]
   */
  initGame: function () {
    var self = this;
    
    // this must be done after creating the canvas element!
    self.stage = new createjs.Stage( "playground");
    // size the playground at the beginning of one play.
    self.onResize();

    // create maths formula on canvas.
    self.textMaths = new createjs.Text(self.mathForm.join(" "), "60px Cochin", "black");
    self.textMaths.x = 440;
    self.textMaths.y = 60;
    self.textMaths.textBaseline = "alphabetic";
    self.stage.addChild(self.textMaths);

    // create the ducks object 1 - Duck1 will always be the one with right answer.
    self.duck1 = new oa.rf.ducks.Duck();
    self.answer1 = new createjs.Text(self.rightAnswer, "25px Cochin", "black");

    self.duck1.queue.addEventListener("complete", function(event){
      self.duckImageShape1 = new createjs.Bitmap(self.duck1.swingUp());
      // Set flexible position for duck1.
      self.duckImageShape1.x = self.spaceWidth;
      self.duckImageShape1.y = Math.floor(Math.random()*self.spaceHeight/2 + 100);
      self.stage.addChild(self.duckImageShape1);
      // add number by duck1
      self.answer1.x = self.duckImageShape1.x;
      self.answer1.y = self.duckImageShape1.y;
      self.answer1.textBaseline = "alphabetic";
      self.stage.addChild(self.answer1);
      // add shooting event listener for duck1
      self.duckImageShape1.addEventListener("click", self.shooterClickHandler1);
    });
    

    // create the ducks object 2
    self.duck2 = new oa.rf.ducks.Duck();
    // create wrong Answer - two answers are not same && both bigger than 0
    do {
      self.wrongAnswer = self.rightAnswer + Math.floor(Math.random()*20 - 10);
    } while (self.wrongAnswer === self.rightAnswer || self.wrongAnswer < 0);
    self.answer2 = new createjs.Text(self.wrongAnswer, "25px Cochin", "black");
    self.duck2.queue.addEventListener("complete", function(event){
      self.duckImageShape2 = new createjs.Bitmap(self.duck2.swingUp());
      // Set position of duck2 - based on the duck1.
      // The position of duck2 will also be relatively flexible.
      self.duckImageShape2.x = self.spaceWidth;
      if(self.duckImageShape1.y < self.spaceHeight/2) {
        self.duckImageShape2.y = self.duckImageShape1.y + 150;
      } else {
        self.duckImageShape2.y = self.duckImageShape1.y - 150;
      }
      self.stage.addChild(self.duckImageShape2);
      // add number by duck2
      self.answer2.x = self.duckImageShape2.x;
      self.answer2.y = self.duckImageShape2.y;
      self.answer2.textBaseline = "alphabetic";
      self.stage.addChild(self.answer2);
      // add shooting event listener for duck2
      self.duckImageShape2.addEventListener("click", self.shooterClickHandler2);
    });
    // update the stage
    self.stage.update();
    self.playGame();
  },

  /**
   * set Ticker and start game
   */
  playGame : function () {
    createjs.Ticker.setFPS( this.fps);
    createjs.Ticker.addEventListener( 'tick', this.duckFlyHandler);
  },

  /**
   * animation for flying
   */
  duckFlyHandler: function() {
    var self = oa.view.rf.ducks;
    self.timeCounter++;
    // when duck alive, switch the image and change the position to let it fly
    if (self.duck1.alive) {
      if ( self.timeCounter % 60 === 0) {
        self.duckImageShape1.image = self.duck1.swingUp();
      } else if ( self.timeCounter % 60 === 30) {
        self.duckImageShape1.image = self.duck1.swingDown();
      }
        self.duckImageShape1.x -= self.duck1.getSpeed();
        self.answer1.x = self.duckImageShape1.x;
    }
    if (self.duck2.alive) {
      if ( self.timeCounter % 60 === 0) {
        self.duckImageShape2.image = self.duck2.swingUp();
      } else if ( self.timeCounter % 60 === 30) {
        self.duckImageShape2.image = self.duck2.swingDown();
      }
        self.duckImageShape2.x -= self.duck2.getSpeed();
        self.answer2.x = self.duckImageShape2.x;
    }
    // if both ducks get the other side of canvas, then missed the game
    if (self.duckImageShape1.x < 0 && self.duckImageShape2.x < 0) {
      self.gameMissed();
    }
    // update stage
    self.stage.update();
  },

  /**
   * change the image of duck1 to death
   */
  shooterClickHandler1: function () {
    var self = oa.view.rf.ducks;
    if (self.duckImageShape1.x > 0) {
      self.duckImageShape1.image = self.duck1.beKilled();
      self.stage.addChild(self.duckImageShape1);
      self.gameLost();
    }
  },  
  
  /**
   * change the image of duck2 to death
   */
  shooterClickHandler2: function () {
    var self = oa.view.rf.ducks;
    if (self.duckImageShape2.x > 0) {
      self.duckImageShape2.image = self.duck2.beKilled();
      self.stage.addChild(self.duckImageShape2);
      self.gameWinn();
    }
  },

  /**
   * Winn the game.
   */
  gameWinn : function () {
    var self = this;
    self.textWinn = new createjs.Text("YES! BAD Duck has been killed!", "50px Cochin", "red");
    self.textWinn.x = 170;
    self.textWinn.y = 150;
    self.textWinn.textBaseline = "alphabetic";
    oa.ctrl.evaluateAnswer( true);
    self.stage.addChild(self.textWinn);
    self.stage.update();
    self.gameGoOn();
  },

  /**
   * Lost the Game
   */
  gameLost : function () {
    var self = this;
    self.textLost = new createjs.Text("OH Nooo... That's a good duck!", "50px Cochin", "red");
    self.textLost.x = 170;
    self.textLost.y = 150;
    self.textLost.textBaseline = "alphabetic";
    oa.ctrl.evaluateAnswer( false);
    self.stage.addChild(self.textLost);
    self.stage.update();
    self.gameGoOn();
  },

  /**
   * Had not shoot any duck, quit the game
   */
  gameMissed : function () {
    var self = this;
    self.textMissed = new createjs.Text("Good Morning...", "50px Cochin", "red");
    self.textMissed.x = 350;
    self.textMissed.y = 150;
    self.textMissed.textBaseline = "alphabetic";
    self.stage.addChild(self.textMissed);
    self.stage.update();
    setTimeout(function() {
      self.initGame();
    }, 2000);
  },

  /**
   * finish one problem, beginn next problem.
   */
  gameGoOn : function () {
    var self = this;
    self.duckImageShape1.removeEventListener( 'click', self.shooterClickHandler1);
    self.duckImageShape2.removeEventListener( 'click', self.shooterClickHandler2);
    setTimeout(function() {
      createjs.Sound.stop();
      oa.ctrl.continueCurrentExercise();
    }, 1500);
  },

  /**
   * quit the game directly
   */
  stopGame : function () {
      createjs.Sound.stop();
  },

  /**
   * set canvas size automatic
   */
  onResize : function () {
    var self = this;
    // browser viewport size
    var w = window.innerWidth;
    var h = window.innerHeight;

    // keep aspect ratio
    var scale = Math.min(w / self.spaceWidth, h / self.spaceHeight);
    self.stage.scaleX = scale;
    self.stage.scaleY = scale;

    // adjust canvas size
    self.stage.canvas.width = self.spaceWidth * scale;
    self.stage.canvas.height = self.spaceHeight * scale;

    // update the stage
    self.stage.update();
  },


  /**
   * Handle the ClickSubmitButtonEvent
   * @author Mircea Diaconescu
   * 
   * @param {UIEvent} e  
   */
  handleClickSubmitButtonEvent: function ( e) { }
};
