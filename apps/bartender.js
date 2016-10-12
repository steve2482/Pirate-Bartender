
// Bartender questions constructor function

function Questions() {
  this.questions = ['Do ye like yer drinks strong?', 'Do ye like it with a salty tang?', 'Are ye a lubber who likes it bitter?', 'Would ye like a bit of sweetness with yer poison?', 'Are ye one for a fruity finish?'];
}

// Bartender questions

var barQuestions = new Questions();

// Bar ingredients contructor function

function Ingredients() {
  this.strong = ['glug of rum', 'slug of whisky', 'splash of gin'];
  this.salty = ['olive on a stick', 'salt-dusted rim', 'rasher of bacon'];
  this.bitter = ['shake of bitters', 'splash of tonic', 'twist of lemon peel'];
  this.sweet = ['sugar cube', 'spoonful of honey', 'spash of cola'];
  this.fruity = ['slice of orange', 'dash of cassis', 'cherry on top'];
}

// Bar ingredients

var barIngredients = new Ingredients();

// Pantry constructor function

function Pantry(barIngredients) {
  this.barIngredients = barIngredients;
}

// Restaurant Pantry for when adding food questions later

var restaurantPantry = new Pantry(barIngredients);

// Customer preferences constructor function

function Preferences() {
  this.preferences = [];
}

$(document).ready(function() {
  var customerPreferences = new Preferences();

  // User answers if they want a drink yes/no

  $('#need').click(function(e) {
    e.preventDefault();
    $('.bar-questions').text(barQuestions.questions[0]);
    $('.drink-buttons').hide();
    $('.answer-buttons').show();
  });

  // Answer to drink preferences

  var questionNumber = 0;
  $('#yes, #no').click(function(e) {
    e.preventDefault();
    if (this.id === 'yes') {
      customerPreferences[questionNumber] = true;
    } else if (this.id === "no") {
      customerPreferences[questionNumber] = false;
    }
    questionNumber++;
    $('.bar-questions').text(barQuestions.questions[questionNumber]);
    console.log(customerPreferences);
  });
});
