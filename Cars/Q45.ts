//Q.45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function Cars(manufacturer:string, model_name:string, ...extraDetails:{[key:string]:any}[]){
    interface car{
        manufacturer: string
        model_name:string
    }
    let car:car={
        manufacturer:manufacturer,
        model_name:model_name,
        ...Object.assign({}, ...extraDetails)
    }
    return car;
};
console.log(Cars('Mercedes','S Class',{model:2022},{color:'PerlWhite'},{features:['Long Wheel Base','Automatic']}))
