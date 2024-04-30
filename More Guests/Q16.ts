//Q.16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let Guest: string[] = ["Sharjeel","Ramzan","Delailah"]
let New_Guest: string = "Maaz";
Guest[Guest.indexOf(Guest[2])]=New_Guest;
console.log("\nPeople! I found a bigger dinner table.\n")
Guest.unshift("Rafay");               // To Add in the Start of an array
let MiddleIndex: number =Guest.length/2       // This we done to find the middle index number for adding new one
Guest.splice(MiddleIndex,0,"Khizer") 
Guest.push("Hamza");                // To Add in the last of an arrat
Guest.map((item)=>console.log("Hi",item,",You are invited to dinner tonight at my place."));