const display = document.querySelector('.calculator .display');
document.querySelectorAll('.number button, .operators button')
    .forEach(button => button.addEventListener('click', numberOperatorsPressed));
function numberOperatorsPressed(revision) {
    const btnText = revision.target.innetText;
    display.value += btnText;
}
document.querySelector('.calculator .equal')
    .addEventListener('click', equalPressed);
function eqPressed() {
    display.value = eval(display.value);
}
document.querySelector('.calculator .clearToken')
    .addEventListener('click', clearTokenPressed);
function clearTokenPressed() {
}
