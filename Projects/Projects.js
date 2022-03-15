//////////////////////////GLOABAL VARIABLES/////////////
let clickCount = 0;
let endCount = 0;

///////////////////////////DATA STRUCTURES//////////////
const textArr = [`Five`, `Four`, 'Three', `Two`, `One`];

const endMsg = `Done`;

///////////////////////////DOM SELECTORS////////////////
const btn1El = document.querySelector(`#btn1`);

///////////////////////////EVENT LISTENERS////////////////
btn1El.addEventListener('click', () => {
    if (clickCount < textArr.length) {
        clickCount += 1;
        btn1El.innerText = textArr[clickCount - 1];
    } else if (clickCount === textArr.length) {
        clickCount += 1;
        endCount += 1;
        btn1El.innerText = `${endMsg} ${endCount} times`;
    } else if (clickCount > textArr.length) {
        btn1El.innerText = `Reset`;
        clickCount = 0;
    }
});

///////////////////////////FUNCTIONS///////////////////////

