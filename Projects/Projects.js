//////////////////////////GLOABAL VARIABLES/////////////
let clickCount = 0;
let downClick = 0;
let endCount = 0;

///////////////////////////DATA STRUCTURES//////////////
const textArr = [`Five`, `Four`, 'Three', `Two`, `One`];

const endMsg = `Done`;

const randText = [`absolutely`, `penguins`, `defenstrate`, `apparatus`, `hot air ballon`, `Nicaragua`, `Stegosauras`, `apples`, `sumset`, `avalanche`];

///////////////////////////DOM SELECTORS////////////////
const btn1El = document.querySelector(`#btn1`);

///////////////////////////EVENT LISTENERS////////////////
btn1El.addEventListener('click', () => {
    clickCount += 1;
    buttonsClicked();
    if (downClick < textArr.length) {
        downClick += 1;
        btn1El.innerText = textArr[downClick - 1];
    } else if (downClick === textArr.length) {
        downClick += 1;
        endCount += 1;
        btn1El.innerText = `${endMsg} ${endCount} times`;
    } else if (downClick > textArr.length) {
        btn1El.innerText = `Reset`;
        downClick = 0;
    }
});

function buttonsClicked() {
    console.log(`button clicked!`);
    $(`#btnsclick`).text(`Buttons clicked: ${clickCount}`);
}
buttonsClicked();

$(`#btnFunct`).on(`click`, () => {
    clickCount += 1;
    buttonsClicked();
    $(`#textFunct`).append(`<p class="rndtxtclass">${randText[Math.floor(Math.random() * randText.length)]}</p>`);
});

$(`#btnFunctClear`).on(`click`, () => {
    clickCount += 1;
    buttonsClicked();
    $(`.rndtxtclass`).remove();
});
