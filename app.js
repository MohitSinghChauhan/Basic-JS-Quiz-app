const form = document.querySelector('.quiz');
const correctAnswers = ["C", "A", "C", "D", "C"];
const finalScore = document.querySelector('.finalScore')
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    const userScore = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    let score = 0;
    let output = 0;

    userScore.forEach((answers, index) => {
        //Answer Checking
        if (correctAnswers[index] == answers) {
            score += 25;
        }
    });

    // console.log(score);
    const percentScore = (score/125)*100;
    // console.log(percentScore);
    scrollTo(0, 0);
    result.classList.remove('hidden');

    const timer = setInterval(() => {
        finalScore.textContent = `${output}`;
        if (output < percentScore) {
            output++;
        }
        else{
            clearInterval(timer);
        }
    }, 75);

})