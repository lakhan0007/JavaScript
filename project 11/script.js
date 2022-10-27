const flashcards = document.getElementById("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const questione = document.querySelector("#questione");
const answer = document.querySelector("#answer");

let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];





divMaker = function divMaker(text, delThisIndex) {
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");
    var del = document.createElement("i");
}
