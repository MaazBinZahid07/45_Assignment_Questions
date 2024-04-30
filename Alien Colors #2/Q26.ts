//Q.26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// If the alien’s color is green
let alien_color: string = "green";
if(alien_color==="green"){
    console.log("the player just earned 5 points for shooting the alien.")
}
else{
    console.log("the player just earned 10 points.")
}

// If the alien’s color isn’t green
alien_color = "red";
if(alien_color==="green"){
    console.log("the player just earned 5 points")
}
else{
    console.log("the player just earned 10 points.")
}
