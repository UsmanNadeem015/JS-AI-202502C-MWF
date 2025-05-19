console.log('Events in JS');

let butt2 = document.getElementById('butt2');

butt2.addEventListener('click', function(){
    alert('Button 2 is pressed')
})

let butt4 = document.getElementById('butt4');
butt4.addEventListener('mouseover',function(){
    alert('Button 4 over')
}
)