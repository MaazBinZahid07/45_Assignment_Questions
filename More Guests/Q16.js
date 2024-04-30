//Q.16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var Guest = ["Sharjeel", "Ramzan", "Delailah"];
var New_Guest = "Maaz";
Guest[Guest.indexOf(Guest[2])] = New_Guest;
console.log("\nPeople! I found a bigger dinner table.\n");
Guest.unshift("Rafay"); // To Add in the Start of an array
var MiddleIndex = Guest.length / 2; // This we done to find the middle index number for adding new one
Guest.splice(MiddleIndex, 0, "Khizer");
Guest.push("Hamza"); // To Add in the last of an arrat
Guest.map(function (item) { return console.log("Hi", item, ",You are invited to dinner tonight at my place."); });
