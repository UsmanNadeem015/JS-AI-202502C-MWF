console.log("Loops in JS");

// For Loop 
// for(let i=0; i<=10; i++){
// console.log(i);
// console.log("Hello world!");
// }

// While loop
// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++
// }

// Do While Loop
// let i = 10;
// do{
//     console.log(i);
//     i--
// }
// while(i>=1)


// While loop
// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++
// }

// For in loop (Objects)
let employee = {
    id: 2,
    Name: 'Usman Nadeem',
    email: 'usmannadeem015@gmail.com'
}

for(let key in employee){
console.log(employee[key]);
}

console.log('------------------------------------------------');

// For of loop (array)
let fruits =['apple','mangos','grapes']
for(let basket of fruits){
    console.log(basket);
}