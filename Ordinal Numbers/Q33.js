//Q.34 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
var Ordinal_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < Ordinal_Numbers.length; i++) {
    if (Ordinal_Numbers[i] === 1) {
        console.log(Ordinal_Numbers[i] + "st");
    }
    else if (Ordinal_Numbers[i] === 2) {
        console.log(Ordinal_Numbers[i] + "nd");
    }
    else if (Ordinal_Numbers[i] === 3) {
        console.log(Ordinal_Numbers[i] + "rd");
    }
    else {
        console.log(Ordinal_Numbers[i] + "th");
    }
}
;
// BY ONE MORE METHOD:
Ordinal_Numbers.forEach(function (Ordinal_Numbers) {
    if (Ordinal_Numbers === 1) {
        console.log(Ordinal_Numbers + "st");
    }
    else if (Ordinal_Numbers === 2) {
        console.log(Ordinal_Numbers + "nd");
    }
    else if (Ordinal_Numbers === 3) {
        console.log(Ordinal_Numbers + "rd");
    }
    else {
        console.log(Ordinal_Numbers + "th");
    }
});
