const numBox1 = document.getElementById('num-box1');
const numBox2 = document.getElementById('num-box2');
const checkButton = document.getElementById('check');
const input = document.getElementById('input');

numBox1.innerText = Math.floor(Math.random() * 10);
numBox2.innerText = Math.floor(Math.random() * 10);

checkButton.addEventListener('click', function() {
    let sum = +numBox1.innerText + +numBox2.innerText;
   if (input.value != sum) {
    alert('Sorry. Incorrect. The correct answer was ' +  sum);
   } else {
    alert('correct')
   }
})
