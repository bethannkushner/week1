/*
Exercise File for Week 1 Source, see Week1.txt for details
*/

/*
These are functions, but why the weird syntax?
*/
const personOne = favoriteFoods => {
  /*insert functionality here*/
};

const personTwo = favoriteMovies => {
  /*insert functionality here*/
  var stringArray = ["Gone with the wind", "Casablanca", "Bridget jones"];
  for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
  }
};


const favoriteFoods = [],
  favoriteMovies = [];

const iceBreaker = () => {
  /*
    Call each function here
    */
  personOne(favoriteFoods);
  personTwo(favoriteMovies);
};

iceBreaker();
