//Q.30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// Conventional METHOD:
var array = ['admin', 'sharjeel', 'ramzan', 'dalilah', 'maaz'];
for (var i = 0; i < array.length; i++) {
    if (array[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(array[i], " , thank you for logging in again."));
    }
}
// By ONE more METHOD:
array.forEach(function (array) {
    if (array === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(array, " , thank you for logging in again."));
    }
});
