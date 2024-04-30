//Q.17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var Guest = ["Sharjeel", "Ramzan", "Delailah"];
var New_Guest = "Maaz";
Guest[Guest.indexOf(Guest[2])] = New_Guest;
Guest.unshift("Rafay"); // To Add in the Start of an array
var MiddleIndex = Guest.length / 2; // This we done to find the middle index number for adding new one
Guest.splice(MiddleIndex, 0, "Khizer");
Guest.push("Hamza"); // To Add in the last of an arrat
console.log(Guest);
console.log("\nI can only able to invite only Two People for Dinner\n");
while (Guest.length > 2) {
    var RemoveGuest = Guest.pop();
    console.log("Sorry ".concat(RemoveGuest, " Because of unvalablity of Space you are not invited For Dinner Tonight"));
}
;
Guest.map(function (item) { return console.log("Hi", item, ",You are still invited to dinner tonight at my place."); });
while (Guest.length > 0) {
    Guest.pop();
}
;
console.log(Guest); // Checking Final list
