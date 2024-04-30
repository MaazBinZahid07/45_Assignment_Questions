//Q.20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var Something = ["Mount Everest", "River Indus", "New Zealand", "New York City", "English"];
console.log('"List of My Favourite Things:"');
Something.map(function (item) { return console.log(item); });
