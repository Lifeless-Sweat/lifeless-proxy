const credentialElement =
    document.getElementById("credential");

const countdownElement =
    document.getElementById("countdown");

const revealButton =
    document.getElementById("revealButton");

let revealed = false;

const demoCredential =
    "DEMO-CREDENTIAL-NOT-A-REAL-SECRET";

function updateCredentialDisplay() {
    if (revealed) {
        credentialElement.textContent =
            demoCredential;

        revealButton.textContent =
            "HIDE";
    } else {
        credentialElement.textContent =
            "••••••••••••••••••••••";

        revealButton.textContent =
            "REVEAL";
    }
}

function toggleCredential() {
    revealed = !revealed;
    updateCredentialDisplay();
}

function updateCountdown() {
    const now = new Date();

    const tomorrow = new Date(now);

    tomorrow.setUTCDate(
        tomorrow.getUTCDate() + 1
    );

    tomorrow.setUTCHours(
        0,
        0,
        0,
        0
    );

    const difference =
        tomorrow.getTime() - now.getTime();

    if (difference <= 0) {
        countdownElement.textContent =
            "ROTATING";

        return;
    }

    const hours =
        Math.floor(
            difference / 3600000
        );

    const minutes =
        Math.floor(
            (difference % 3600000) / 60000
        );

    const seconds =
        Math.floor(
            (difference % 60000) / 1000
        );

    countdownElement.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}

revealButton.addEventListener(
    "click",
    toggleCredential
);

updateCredentialDisplay();
updateCountdown();

setInterval(
    updateCountdown,
    1000
);
