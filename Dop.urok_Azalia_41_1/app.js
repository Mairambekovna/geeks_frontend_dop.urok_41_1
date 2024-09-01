let correctAnswer;
let score = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;

    document.getElementById("question").textContent = `Сколько будет ${num1} * ${num2}?`;
}


function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const userAnswer = parseInt(answerInput.value);

    if (userAnswer === correctAnswer) {
        score += 1;
    } else {
        score -= 1;
    }

    document.getElementById("score").textContent = `Результат: ${score}`;

    answerInput.value = "";
    generateQuestion();
}

generateQuestion();
