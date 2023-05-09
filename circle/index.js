let greyCircle = document.getElementsByClassName('grey-circle');
let whiteCircle = document.getElementsByClassName('white-circle');
let blueCircle = document.getElementsByClassName('blue-circle');
let yellowCircle = document.getElementsByClassName('yellow-circle');

const func = (event) => {
    if(event.target.classList.contains('grey-circle')) {
        document.body.style.backgroundColor = "grey";
    } else if(event.target.classList.contains('white-circle')) {
        document.body.style.backgroundColor = 'white';
    } else if(event.target.classList.contains('blue-circle')) {
        document.body.style.backgroundColor = 'blue';
    } else if(event.target.classList.contains('yellow-circle')) {
        document.body.style.backgroundColor = 'yellow';
    }

}

greyCircle[0].addEventListener('click', func,);
whiteCircle[0].addEventListener('click', func);
blueCircle[0].addEventListener('click', func);
yellowCircle[0].addEventListener('click', func);
