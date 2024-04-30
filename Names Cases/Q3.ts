// Q.3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Name: string = "Maaz";
//For Lower Case
console.log(Name.toLowerCase());  
//For Upper Case
console.log(Name.toUpperCase()); 
//For Title Case
console.log(Name);
// suppose we have a different situation where Name= maaz , then
let PersonName: string= "maaz" ;
console.log(PersonName.charAt(0).toUpperCase()+PersonName.slice(1,4));