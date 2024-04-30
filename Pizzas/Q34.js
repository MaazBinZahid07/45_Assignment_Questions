//Q.34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var fav_Pizza = ['Margherita', 'Pepperoni', 'Neapolitan'];
for (var i = 0; i < fav_Pizza.length; i++) {
    console.log(" I like ".concat(fav_Pizza[i], " pizza."));
}
console.log('\nPizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil.');
console.log(' I really love pizza!');
// BY ONE MORE METHOD
fav_Pizza.forEach(function (fav_Pizza) {
    console.log("I like ".concat(fav_Pizza, " pizza."));
});
console.log('\nPizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. Some of the most common toppings are cheese, sausages, pepperoni, vegetables, tomatoes, spices and herbs and basil.');
console.log(' I really love pizza!');
