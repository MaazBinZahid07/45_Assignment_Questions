//Q.13 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Sharjeel", "Ramzan", "Dalilah", "Maaz"];
console.log("Hey ".concat(names[0], ",Will you gonna come to Friday Club this week?"));
console.log("Hey ".concat(names[1], ",Will you gonna come to Friday Club this week?"));
console.log("Hey ".concat(names[2], ",Will you gonna come to Friday Club this week?"));
console.log("Hey ".concat(names[3], ",Will you gonna come to Friday Club this week?"));
// This can also be done with a short trick that is "Map Method":-
names.map(function (item) { return console.log("Hey", item, "Will you gonna come to Friday Club this week?"); });
