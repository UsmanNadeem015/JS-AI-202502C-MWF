// console.log('Query selector in JS');
let single = document.querySelector('#mainHeading')
console.log(single.innerHTML);

let multiple = document.querySelectorAll('.list')
i=0;
while(i<=3){
    console.log(multiple[i].innerHTML);
    i++
}