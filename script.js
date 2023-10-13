'use strict';

// destructuring array
const restaurant = {
    name: "Apon Bari",
    location: "4340-Raozan, Chattogram",
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Chicken Chaap', 'Chicken Grill', 'Firni', 'Chicken Shorma'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
[main, secondary] = [secondary, main]
console.log(main, secondary);

// receive 2 retrun values from a function
const [starter, another] = restaurant.order(2, 0)
console.log(starter, another);

