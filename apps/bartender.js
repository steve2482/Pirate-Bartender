
// Bartender questions constructor function

function Questions() {
  this.questions = ['Do ye like yer drinks strong?', 'Do ye like it with a salty tang?', 'Are ye a lubber who likes it bitter?', 'Would ye like a bit of sweetness with yer poison?', 'Are ye one for a fruity finish?'];
}

// Bar ingredients constructor function

function Ingredients() {
  this.ingredients = [['glug of rum', 'slug of whisky', 'splash of gin'],
  ['olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
  ['shake of bitters', 'splash of tonic', 'twist of lemon peel'],
  ['sugar cube', 'spoonful of honey', 'spash of cola'],
  ['slice of orange', 'dash of cassis', 'cherry on top']];
  this.randomIngredient = Math.floor((Math.random() * 3) + 0);
}

// Pantry constructor function

function Pantry(barIngredients) {
  this.barIngredients = new Ingredients();
}

// Customer preferences constructor function

function Preferences() {
  this.preferences = [];
}

// Bartender constructor function

function Bartender() {
  var restaurantPantry = new Pantry();
  this.createDrink = function(preferences) {
    var drink = [];
    for (var i = 0; i < preferences.length; i++) {
      if (preferences[i]) {
        drink.push(restaurantPantry.barIngredients.ingredients[i][restaurantPantry.barIngredients.randomIngredient]);
      }
    }
    return drink;
  };
}

// ----APPLICATION----

$(document).ready(function() {
  var customerPreferences = new Preferences();
  var barQuestions = new Questions();
  
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
      customerPreferences.preferences[questionNumber] = true;
      questionNumber++;
      $('.bar-questions').text(barQuestions.questions[questionNumber]);
    } else if (this.id === 'no') {
      customerPreferences.preferences[questionNumber] = false;
      questionNumber++;
      $('.bar-questions').text(barQuestions.questions[questionNumber]);
    }
    if (questionNumber === 5) {
      $('.answer-buttons').hide();
      $('.create-drink').show();
      $('.bar-questions').text("Have the Bartender Mix Your Drink!");
    }
  });

  $('#create').click(function(e) {
    e.preventDefault();
    var pirateBartender = new Bartender();
    var drink = pirateBartender.createDrink(customerPreferences.preferences);
    var last = drink.length - 1;
    $('.bar-questions').text("Here's your drink mixed with");
    for (var i = 0; i < drink.length - 1; i++) {
      $('.bar-questions').append(", a " + drink[i].toString());
    }
    $('.bar-questions').append(" and a " + drink[last]);
    $('.bar-questions').append(".");
    $('.create-drink').hide();
  });
});
