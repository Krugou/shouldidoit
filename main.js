const vastausButton = document.getElementById("vastaus-button");
const answerButton = document.getElementById("answer-button");
const tulos = document.getElementById("tulos");

vastausButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * answersFin.length);
    tulos.innerHTML = answersFin[randomIndex];

});

answerButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * answersEng.length);
    tulos.innerHTML = answersEng[randomIndex];
});