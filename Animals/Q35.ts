//Q.35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let fav_animal: string[] = ['Dog','Tiger','Cat'];
for(let i=0;i<fav_animal.length;i++){
    console.log(`A ${fav_animal[i]} would make a great pet.`); 
}
console.log('\nThere are many similarities between cats and tigers, as they are both members of the cat family (Felidae),Unlike the dog which not comes in the family of Cats.');

