const credentialElement = document.getElementById("credential");
const countdownElement = document.getElementById("countdown");

let revealed = false;

function revealCredential() {
    revealed = !revealed;

    if (revealed) {
        credentialElement.textContent =
            "DEMO-CREDENTIAL-NOT-A-REAL-SECRET";
    } else {
        credentialElement.textContent =
            "••••••••••••••••••••••";
    }
}

function updateCountdown() {
    const now = new Date();

    const tomorrow = new Date(now);
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    tomorrow.setUTCHours(0, 0, 0, 0);

    const difference = tomorrow - now;

    if (difference <= 0) {
        countdownElement.textContent = "ROTATING";
        return;
    }

    const hours = Math.floor(difference / 3600000);
    const minutes = Math.floor(
        (difference % 3600000) / 60000
    );
    const seconds = Math.floor(
        (difference % 60000) / 1000
    );

    countdownElement.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
