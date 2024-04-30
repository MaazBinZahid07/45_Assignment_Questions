//Q.21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Object #1 (Person)
interface person{
    name:string
    age:number
    nationality:string
    student:Boolean
};
let person:person={
    name: 'Maaz',
    age:20,
    nationality:'pakistani',
     student:true
};
console.log(person);
// Object #2 (Car)
type car={
    make:string,
    model: number,
    variant:string,
    automatic:Boolean
}
let car:car={
    make:'Mercedes',
    model:2024,
    variant:'SLK',
    automatic:true
}
console.log(car)
// Object #3 (Mountain)
interface Mountain{
    name:string,
    location:string,
    size:number
}
let Mountain:Mountain={
    name:'Mount Everest',
    location:'Nepal & China',
    size:1
}
console.log(Mountain)
