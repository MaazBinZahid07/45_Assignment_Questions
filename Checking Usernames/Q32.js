// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
var current_users = ['admin', 'sharjeel', 'ramzan', 'dalilah', 'maaz'];
var new_users = ['Zeeshan', 'sharjeel', 'ramzan', 'Faizan', 'Daniyal'];
new_users.forEach(function (new_users) {
    if (current_users.includes(new_users)) {
        console.log('the person will need to enter a new username.');
    }
    else {
        console.log('the username is available.');
    }
});
