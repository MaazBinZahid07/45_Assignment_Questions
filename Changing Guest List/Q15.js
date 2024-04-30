//Q.15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 
var Guest = ["Sharjeel", "Ramzan", "Delailah"];
Guest.map(function (item) { return console.log("Hi", item, ",You are invited to dinner tonight at my place."); });
//Now One Person can't able to attend
console.log("\n".concat(Guest[2], " can't make it for dinner.\n"));
var New_Guest = "Maaz";
Guest[Guest.indexOf(Guest[2])] = New_Guest;
Guest.map(function (item) { return console.log("Hi", item, ",You are invited to dinner tonight at my place."); });
