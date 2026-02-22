const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const catPic = document.getElementById("catPic");
const heartPic = document.getElementById("heartPic");
const buttonsRow = document.getElementById("buttonsRow");
const hintText = document.getElementById("hintText");
const finalMessage = document.getElementById("finalMessage");

const trollQuestions = ["pkka?", "pkka pkka?", "pkka pkka pkka?", "PKKA NA?"];
const trollYesLabels = ["haan", "bilkul", "100%", "of course"];
const trollNoLabels = ["pkka", "double pkka", "triple pkka", "PKKA!!"];

let yesScale = 1;
let stage = 1;
let trollIndex = -1;

function startTrollRound() {
  stage = 3;
  trollIndex = 0;
  question.textContent = trollQuestions[trollIndex];
  yesBtn.textContent = trollYesLabels[trollIndex];
  noBtn.textContent = trollNoLabels[trollIndex];
  noBtn.style.display = "inline-block";
  yesBtn.style.transform = "scale(1)";
}

function showFinalMessage() {
  stage = 5;
  question.textContent = "";
  buttonsRow.style.display = "none";
  hintText.style.display = "none";
  heartPic.style.display = "none";
  catPic.style.display = "none";
  finalMessage.classList.remove("hidden");
}

function advanceTrollRound() {
  trollIndex += 1;

  if (trollIndex >= trollQuestions.length) {
    catPic.src = "love.png";
    heartPic.src = "hearts.png";
    question.textContent = "yayyy 💖 I LOVE YOU SO MUCHHHHH";
    yesBtn.textContent = ":3";
    noBtn.style.display = "none";
    stage = 4;
    return;
  }

  question.textContent = trollQuestions[trollIndex];
  yesBtn.textContent = trollYesLabels[trollIndex];
  noBtn.textContent = trollNoLabels[trollIndex];
}

noBtn.addEventListener("click", () => {
      yesScale += 0.5;
    yesBtn.style.transform = `scale(${yesScale})`;
    if (stage === 1) {
    catPic.src = "angry.png";
    heartPic.src = "kife.png";
    return;
  }

  if (stage === 3) {
    advanceTrollRound();
  }
});

yesBtn.addEventListener("click", () => {
  if (stage === 1) {
    stage = 2;
    question.textContent = "will u be my boyfriend?";
    catPic.src = "plead.png";
    heartPic.src = "kife.png";
    yesScale = 1;
    yesBtn.style.transform = "scale(1)";
    return;
  }

  if (stage === 2) {
    startTrollRound();
    return;
  }

  if (stage === 3) {
    advanceTrollRound();
    return;
  }

  if (stage === 4) {
    showFinalMessage();
  }
});
