var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q.43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ['Harry Houdini', 'Derren Brown', 'Lance Burton'];
function copyArray(array) {
    return __spreadArray([], array, true);
}
var cpyArray = copyArray(magicians);
function make_great(the_Great) {
    for (var i = 0; i < the_Great.length; i++) {
        the_Great[i] = 'the Great ' + the_Great[i];
    }
}
make_great(cpyArray);
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
;
console.log('\nThis is my original Array');
show_magicians(magicians);
console.log('\n\nThis is my modified form of original Array');
show_magicians(cpyArray);
