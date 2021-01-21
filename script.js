let titlePage = document.querySelector(".titlePage")
let startGame = document.querySelector('.startGame')
let question1 = document.querySelector('.question1')
let button = document.querySelectorAll('.button')
// let correct =document.querySelectorAll('.correct')
// let results= document.querySelector('.results')

startGame.addEventListener("click", toQuestions);
function toQuestions() {
   //document.getElementsByClassName(".titlePage").display = "none";
   titlePage.style.display = "none";
   question1.style.display = "show";
}

//document.location.hash = "titlePage";