//Q.24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// Equality Test with String (For True)
console.log('Equality Test with String',"Mercedes"==="Mercedes");
// Inequality Test with String (For True)
console.log('Inequality Test with String',("Mercedes"as string)!=="BMW");
// Equality Test with String(For False)
console.log('Equality Test with String',"Mercedes" as string==="BMW");
// Inequality Test with String(For False)
console.log('Inequality Test with String',("Mercedes"as string)!=="Mercedes");

// • Tests using the lower case function
// (For True)
console.log('Lower Case Test',"Hello".toLowerCase() =="hello");
// (For False)
console.log('Lower Case Test',"Hello".toLowerCase() =="Hello");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// (For True)
console.log('Equality Test with Number',20===20);
console.log('Inequality Test with Number',20 as number !== 7);
console.log('GraterThen Test Equal to with Number',20>=7);
console.log('LessThen Test Equal to with Number',7<=2003);
// (For False)
console.log('Equality Test with Number',20 as number === 7);
console.log('Inequality Test with Number',20 !== 20);
console.log('GraterThen Equal to Test with Number',7>=20);
console.log('LessThen Equal to Test with Number',2003<=7);

// • Tests using "and" and "or" operators
// (For True)
console.log('And Opertor Test',20===20 && 20>=7); 
console.log('OR Opertor Test',20 as number ===7 || 20>=7);
// (For False)
console.log('And Opertor Test',20===20 && 7>=20);
console.log('OR Opertor Test',20 as number ===7 || 7>=2003);

// Array
const animals:string[]=['cow','goat','camel'];

// • Test whether an item is in a array
console.log('Test "goat" present in an array', animals.includes("goat"));

// • Test whether an item is not in a array
console.log('Test "sheep" presunt in an array', animals.includes("sheep"));







