//Q.42 Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ['Harry Houdini', 'Derren Brown', 'Lance Burton'];
function make_great(the_Great) {
    for (var i = 0; i < the_Great.length; i++) {
        magicians[i] = 'the Great ' + the_Great[i];
    }
}
make_great(magicians);
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
;
show_magicians(magicians);
