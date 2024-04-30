//Q.43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians: string[] = ['Harry Houdini','Derren Brown','Lance Burton'];
function copyArray(array:string[]){
    return [...array];
}
let cpyArray=copyArray(magicians)


function make_great(the_Great:string[]){
    for(let i=0;i<the_Great.length;i++){
        the_Great[i]='the Great '+the_Great[i]
    }
}
make_great(cpyArray)


function show_magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
};
console.log('\nThis is my original Array')
show_magicians(magicians)

console.log('\n\nThis is my modified form of original Array')
show_magicians(cpyArray)

