let titlePage = document.querySelector(".titlePage")
let startGame = document.querySelector('.startGame')
let playAgain = document.querySelector('.playAgain')
let question = document.querySelectorAll('.question')
let button = document.querySelectorAll('.button')
// let correct =document.querySelectorAll('.correct')
// let results= document.querySelector('.results')

startGame.addEventListener("click", toQuestions);
function toQuestions() {
   
    titlePage.style.display = "none";
    question[0].style.display = "block";
}
//for loop  refactored way
//console.log(button[0])
button[0].addEventListener("click", toQuestion2);
button[1].addEventListener("click", toQuestion2);
button[2].addEventListener("click", toQuestion2);
button[3].addEventListener("click", toQuestion2);
function toQuestion2() {
   question[0].style.display = "none";
   question[1].style.display = "block";
}
button[4].addEventListener("click", toQuestion3);
button[5].addEventListener("click", toQuestion3);
button[6].addEventListener("click", toQuestion3);
button[7].addEventListener("click", toQuestion3);
function toQuestion3() {
   question[1].style.display = "none";
   question[2].style.display = "block";
}
button[8].addEventListener("click", toQuestion4);
button[9].addEventListener("click", toQuestion4);
button[10].addEventListener("click", toQuestion4);
button[11].addEventListener("click", toQuestion4);
function toQuestion4() {
   question[2].style.display = "none";
   question[3].style.display = "block";
}
button[12].addEventListener("click", toQuestion5);
button[13].addEventListener("click", toQuestion5);
button[14].addEventListener("click", toQuestion5);
button[15].addEventListener("click", toQuestion5);
function toQuestion5() {
   question[3].style.display = "none";
   question[4].style.display = "block";
}
button[16].addEventListener("click", toQuestion6);
button[17].addEventListener("click", toQuestion6);
button[18].addEventListener("click", toQuestion6);
button[19].addEventListener("click", toQuestion6);
function toQuestion6() {
   question[4].style.display = "none";
   question[5].style.display = "block";
}
button[20].addEventListener("click", toQuestion7);
button[21].addEventListener("click", toQuestion7);
button[22].addEventListener("click", toQuestion7);
button[23].addEventListener("click", toQuestion7);
function toQuestion7() {
   question[5].style.display = "none";
   question[6].style.display = "block";
}
button[24].addEventListener("click", toQuestion8);
button[25].addEventListener("click", toQuestion8);
button[26].addEventListener("click", toQuestion8);
button[27].addEventListener("click", toQuestion8);
function toQuestion8() {
   question[6].style.display = "none";
   question[7].style.display = "block";
}
button[28].addEventListener("click", toQuestion9);
button[29].addEventListener("click", toQuestion9);
button[30].addEventListener("click", toQuestion9);
button[31].addEventListener("click", toQuestion9);
function toQuestion9() {
   question[7].style.display = "none";
   question[8].style.display = "block";
}
button[32].addEventListener("click", toQuestion10);
button[33].addEventListener("click", toQuestion10);
button[34].addEventListener("click", toQuestion10);
button[35].addEventListener("click", toQuestion10);
function toQuestion10() {
   question[8].style.display = "none";
   question[9].style.display = "block";
}
button[36].addEventListener("click", toresultsPage);
button[37].addEventListener("click", toresultsPage);
button[38].addEventListener("click", toresultsPage);
button[39].addEventListener("click", toresultsPage);
function toresultsPage() {
   question[9].style.display = "none";
   question[10].style.display = "block";
}
playAgain.addEventListener("click", restart);
function restart() {
    question[10].style.display = "none";
    titlePage.style.display = "block";
}


