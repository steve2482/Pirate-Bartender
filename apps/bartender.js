
// Bartender questions constructor function

function Questions() {
  this.questions = ['Do ye like yer drinks strong?', 'Do ye like it with a salty tang?', 'Are ye a lubber who likes it bitter?', 'Would ye like a bit of sweetness with yer poison?', 'Are ye one for a fruity finish?'];
}

// Bartender questions

var barQuestions = new Questions();

// create the Pirate Bartender

var pirateBartender = new Bartender();

// Bar ingredients constructor function

var randomIngredient = Math.floor((Math.random() * 2) + 0);
function Ingredients() {
  this.ingredients = [{strong: ['glug of rum', 'slug of whisky', 'splash of gin']}, {salty: ['olive on a stick', 'salt-dusted rim', 'rasher of bacon']}, {bitter: ['shake of bitters', 'splash of tonic', 'twist of lemon peel']}, {sweet: ['sugar cube', 'spoonful of honey', 'spash of cola']}, {fruity: ['slice of orange', 'dash of cassis', 'cherry on top']}];
  this.randomIngredient = randomIngredient;
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

// Bartender constructor function

function Bartender() {
  this.questions = barQuestions;
  this.createDrink = function(preferences) {
    var drink = [];
    for (var i = 0; i < 7; i++) {
      if (preferences[i]) {
        drink.push(barIngredients[i].randomIngredient);
      }
    }
    return drink;
  };
}

// ----APPLICATION----

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
      questionNumber++;
      $('.bar-questions').text(barQuestions.questions[questionNumber]);
    } else if (this.id === "no") {
      customerPreferences[questionNumber] = false;
      questionNumber++;
      $('.bar-questions').text(barQuestions.questions[questionNumber]);
    }
    if (questionNumber === 5) {
      $('.answer-buttons').hide();
      $('.create-drink').show();
      $('.bar-questions').text("Have the Bartender Mix Your Drink!");
    }
  });

// Need to create event listener-----------------
  $('.create').click(function(e) {
    e.preventDefault();
    pirateBartender.createDrink(customerPreferences);
    console.log(drink);
  });
});
