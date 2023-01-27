const validWords = [
    "Ramsdale",
    "Turner",
    "Hein",
    "Tierney",
    "White",
    "Gabriel",
    "Saliba",
    "Kiwior",
    "Holding",
    "Cedric",
    "Tomiyasu",
    "Zinchenko",
    "Thomas",
    "Saka",
    "Odegaard",
    "Smith Rowe",
    "Viera",
    "Lakonga",
    "Elneny",
    "Xhaka",
    "Jesus",
    "Martinelli",
    "Nketiah",
    "Trossard",
    "Nelson",
    "Marquinhos",
];

let randomWord =
    validWords[Math.floor(Math.random() * validWords.length)].toLowerCase();
console.log(randomWord);

let remainingAttempts = 4;
document.getElementById(
    "remaining-attempts"
).innerHTML = `You have ${remainingAttempts} attempts left`;

const checkInput = function check() {
    let userAttempt = document.getElementById("userAttempt");
    let submitButton = document.getElementById("submit-button");
    let attemptedWordsList = document.getElementById("attempted-words");

    if (
        userAttempt.value.toLowerCase() === randomWord &&
        remainingAttempts === 4
    ) {
        document.getElementById(
            "remaining-attempts"
        ).innerHTML = `Congratulations, it took you ${
            5 - remainingAttempts
        } attempt to win`;
        userAttempt.remove();
        submitButton.remove();
    } else if (userAttempt.value === randomWord && remainingAttempts < 4) {
        document.getElementById(
            "remaining-attempts"
        ).innerHTML = `Congratulations, it took you ${
            5 - remainingAttempts
        } attempts to win`;
        userAttempt.remove();
        submitButton.remove();
    } else {
        remainingAttempts--;
        if (remainingAttempts === 0) {
            document.getElementById(
                "remaining-attempts"
            ).innerHTML = `You have ${remainingAttempts} attempts left. Game over`;
            userAttempt.remove();
            submitButton.remove();
        } else {
            document.getElementById(
                "remaining-attempts"
            ).innerHTML = `You have ${remainingAttempts} attempts left`;
            const attemptedWord = document.createElement("li");
            attemptedWord.appendChild(
                document.createTextNode(`Attempted: ${userAttempt.value}`)
            );
            attemptedWordsList.appendChild(attemptedWord);

            let matchingLetters = " ";
            for (let i = 0; i < userAttempt.value.length; i++) {
                let letter = userAttempt.value[i];
                if (randomWord.indexOf(letter) !== -1) {
                    matchingLetters += letter;
                    document.getElementById(
                        "matched-letters"
                    ).innerHTML = `Matched Letters: ${matchingLetters}
                    `;
                }
            }
        }
    }
};

// }
// }

const checkSubmit = function checkSubmit(e) {
    if (e && e.keyCode == 13) {
        checkInput();
    }
};
// https://stackoverflow.com/questions/29943/how-to-submit-a-form-when-the-return-key-is-pressed



function refreshPage() {
    location.reload();
}
