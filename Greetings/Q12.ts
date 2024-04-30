//Q.13 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names: string[] =["Sharjeel","Ramzan","Dalilah","Maaz"];
console.log(`Hey ${names[0]},Will you gonna come to Friday Club this week?`);
console.log(`Hey ${names[1]},Will you gonna come to Friday Club this week?`);
console.log(`Hey ${names[2]},Will you gonna come to Friday Club this week?`);
console.log(`Hey ${names[3]},Will you gonna come to Friday Club this week?`);

// This can also be done with a short trick that is "Map Method":-
names.map((item)=>console.log("Hey",item,"Will you gonna come to Friday Club this week?"))