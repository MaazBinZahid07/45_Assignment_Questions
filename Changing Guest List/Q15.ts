//Q.15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 

let Guest=["Sharjeel","Ramzan","Delailah"]
Guest.map((item)=>console.log("Hi",item,",You are invited to dinner tonight at my place."));

//Now One Person can't able to attend
console.log(`\n${Guest[2]} can't make it for dinner.\n`)
let New_Guest: string = "Maaz";
Guest[Guest.indexOf(Guest[2])]=New_Guest;
Guest.map((item)=>console.log("Hi",item,",You are invited to dinner tonight at my place."));