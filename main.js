const linkEl1 = document.querySelector(`#link-home`);
const linkEl2 = document.querySelector(`#link-bio`);
const linkEl3 = document.querySelector(`#link-resume`);
const linkEl4 = document.querySelector(`#link-projects`);
const linkEl5 = document.querySelector(`#link-links`);

linkEl1.addEventListener('click', errorAlert)
linkEl2.addEventListener('click', errorAlert)
linkEl3.addEventListener('click', errorAlert)
// linkEl4.addEventListener('click', errorAlert)
linkEl5.addEventListener('click', errorAlert)

function errorAlert() {
    alert(`That feature is still in development.`);
};