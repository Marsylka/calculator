
const display = document.querySelector('.calculator .display');
document.querySelectorAll('.numbers button, .operators button')
.forEach( button => button.addEventListener('click', numberOperatorsPressed));
function numberOperatorsPressed(revision) {
    
    const btnText = revision.target.innerText;
    display.value += btnText;

}
document.querySelector('.calculator .equal')
    .addEventListener('click', equalPressed);
function equalPressed() {
    if (eval(display.value) === Infinity) {
    display.value = "Stop this!!! you crash me("
    }else {
    display.value = eval(display.value);
}
}

document.querySelector('.calculator .clearToken')
    .addEventListener('click', clearTokenPressed);
function clearTokenPressed() {
   display.value = display.value.slice(0, -1);
}
document.querySelector('.calculator .clearAll')
    .addEventListener('click', clearAllPressed);
function clearAllPressed() {
    display.value = "";
}
document.querySelector('.operators button' )
.addEventListener('click', doubleOperatorsPressed);
function doubleOperatorsPressed(){
    if (display.value.slice(-1) = '-' || '+'){
        

     
    }
}


