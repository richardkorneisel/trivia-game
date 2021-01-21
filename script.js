let titlePage = document.querySelector(".titlePage")
let startGame = document.querySelector('.startGame')
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
button[0].addEventListener("click", toNextQuestion);
button[1].addEventListener("click", toNextQuestion);
button[2].addEventListener("click", toNextQuestion);
button[3].addEventListener("click", toNextQuestion);
function toNextQuestion() {
   question[0].style.display = "none";
   question[1].style.display = "block";
   break;
}
// button[4].addEventListener("click", toNextQuestion);
// button[5].addEventListener("click", toNextQuestion);
// button[6].addEventListener("click", toNextQuestion);
// button[7].addEventListener("click", toNextQuestion);
// function toNextQuestion() {
//    question[1].style.display = "none";
//    question[2].style.display = "block";
// }
// button[8].addEventListener("click", toNextQuestion);
// button[9].addEventListener("click", toNextQuestion);
// button[10].addEventListener("click", toNextQuestion);
// button[11].addEventListener("click", toNextQuestion);
// function toNextQuestion() {
//    question[2].style.display = "none";
//    question[3].style.display = "block";
// }
// button[12].addEventListener("click", toNextQuestion);
// button[13].addEventListener("click", toNextQuestion);
// button[14].addEventListener("click", toNextQuestion);
// button[15].addEventListener("click", toNextQuestion);
// function toNextQuestion() {
//    question[3].style.display = "none";
//    question[4].style.display = "block";
// }
// button[16].addEventListener("click", toNextQuestion);
// button[17].addEventListener("click", toNextQuestion);
// button[18].addEventListener("click", toNextQuestion);
// button[19].addEventListener("click", toNextQuestion);
// function toNextQuestion() {
//    question[4].style.display = "none";
//    question[5].style.display = "block";
// }
// button[20].addEventListener("click", toNextQuestion);
// button[21].addEventListener("click", toNextQuestion);
// button[22].addEventListener("click", toNextQuestion);
// button[23].addEventListener("click", toNextQuestion);
// function toNextQuestion() {
//    question[5].style.display = "none";
//    question[6].style.display = "block";
// }
// button[24].addEventListener("click", toNextQuestion);
// button[25].addEventListener("click", toNextQuestion);
// button[26].addEventListener("click", toNextQuestion);
// button[27].addEventListener("click", toNextQuestion);
// function toNextQuestion() {
//    question[6].style.display = "none";
//    question[7].style.display = "block";
// }
// button[28].addEventListener("click", toNextQuestion);
// button[29].addEventListener("click", toNextQuestion);
// button[30].addEventListener("click", toNextQuestion);
// button[31].addEventListener("click", toNextQuestion);
// function toNextQuestion() {
//    question[7].style.display = "none";
//    question[8].style.display = "block";
// }
// button[32].addEventListener("click", toNextQuestion);
// button[33].addEventListener("click", toNextQuestion);
// button[34].addEventListener("click", toNextQuestion);
// button[35].addEventListener("click", toNextQuestion);
// function toNextQuestion() {
//    question[8].style.display = "none";
//    question[9].style.display = "block";
// }
// button[36].addEventListener("click", toNextQuestion);
// button[37].addEventListener("click", toNextQuestion);
// button[38].addEventListener("click", toNextQuestion);
// button[39].addEventListener("click", toNextQuestion);
// function toNextQuestion() {
//    question[9].style.display = "none";
//    question[10].style.display = "block";
// }


