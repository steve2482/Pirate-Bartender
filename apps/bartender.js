
// Bartender questions constructor function

function Questions(strong, salty, bitter, sweet, fruity) {
  this.strong = strong;
  this.salty = salty;
  this.bitter = bitter;
  this.sweet = sweet;
  this.fruity = fruity;
}

// Bartender questions

var barQuestions = new Questions('Do ye like yer drinks strong?', 'Do ye like it with a salty tang?', 'Are ye a lubber who likes it bitter?', 'Would ye like a bit of sweetness with yer poison?', 'Are ye one for a fruity finish?');

// Bar ingredients contructor function

function Ingredients(strong, salty, bitter, sweet, fruity) {
  this.strong = strong;
  this.salty = salty;
  this.bitter = bitter;
  this.sweet = sweet;
  this.fruity = fruity;
}

// Bar ingredients

var barIngredients = new Ingredients(['glug of rum', 'slug of whisky', 'splash of gin'], ['olive on a stick', 'salt-dusted rim', 'rasher of bacon'], ['shake of bitters', 'splash of tonic', 'twist of lemon peel'], ['sugar cube', 'spoonful of honey', 'spash of cola'], ['slice of orange', 'dash of cassis', 'cherry on top']);

// Pantry constructor function

function Pantry(barIngredients) {
  this.barIngredients = barIngredients;
}

// Resturant Pantry

var resturantPantry = new Pantry(barIngredients);

function Preferences(strong, salty, bitter, sweet, fruity) {
  this.strong = strong;
  this.salty = salty;
  this.bitter = bitter;
  this.sweet = sweet;
  this.fruity = fruity;
}

$(document).ready(function() {
  // User answers if they want a drink yes/no

  $('#yes').click(function(e) {
    e.preventDefault();
    $('.bar-questions').text(barQuestions.strong);
    $('#yes').text('Yes');
    $('#no').text('No');
  });
});
