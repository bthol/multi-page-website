//////////////////////////GLOABAL VARIABLES/////////////
let clickCount = 0;

///////////////////////////DATA STRUCTURES//////////////
const textArr = ['Three', `Two`, `One`];

///////////////////////////DOM SELECTORS////////////////
const btn1El = document.querySelector(`#btn1`);

///////////////////////////EVENT LISTENERS////////////////
btn1El.addEventListener('click', function() {
    if (clickCount < 3) {
        clickCount += 1;
        btn1El.innerText = textArr[clickCount - 1];
    } else {
        btn1El.innerText = `Done`;
    }
});

///////////////////////////FUNCTIONS///////////////////////

