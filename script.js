/* =========================
   LOVE WEBSITE
   ========================= */


/* =========================
   MUSIC
========================= */

const loveMusic =
    document.getElementById("loveMusic");

let musicPlaying = false;


/* =========================
   PAGE NAVIGATION
========================= */

let currentPage = 1;

const totalPages = 7;


function nextPage() {

    const current =
        document.getElementById(
            "page" + currentPage
        );

    current.classList.remove("active");

    currentPage++;

    if (currentPage > totalPages) {

        currentPage = 1;

    }

    const next =
        document.getElementById(
            "page" + currentPage
        );

    next.classList.add("active");
}


/* =========================
   PASSWORD
========================= */

function checkPassword() {

    const password =
        document.getElementById("lovePassword").value;

    const error =
        document.getElementById("passwordError");


    if (password === "Lizzie") {

        error.innerHTML = "";


        /*
         * Start Life's A Mess
         */

        loveMusic.play()
            .then(function () {

                musicPlaying = true;

            })
            .catch(function () {

                musicPlaying = false;

            });


        /*
         * Open the love story
         */

        nextPage();


    } else {

        error.innerHTML =
            "Hmm... that's not the secret, Starr. ❤️";

        document.getElementById(
            "lovePassword"
        ).value = "";

    }

}


/* =========================
   PRESS ENTER FOR PASSWORD
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const passwordInput =
            document.getElementById(
                "lovePassword"
            );


        if (passwordInput) {

            passwordInput.addEventListener(
                "keydown",
                function (event) {

                    if (event.key === "Enter") {

                        checkPassword();

                    }

                }
            );

        }

    }
);


/* =========================
   MUSIC CONTROL
========================= */

function toggleMusic() {

    if (loveMusic.paused) {

        loveMusic.play();

        musicPlaying = true;

    } else {

        loveMusic.pause();

        musicPlaying = false;

    }

}


/* =========================
   PHOTO VIEWER
========================= */

function openPhoto(photo) {

    const viewer =
        document.getElementById(
            "photoViewer"
        );

    const fullPhoto =
        document.getElementById(
            "fullPhoto"
        );


    fullPhoto.src = photo;

    viewer.classList.add("show");

}


function closePhoto() {

    const viewer =
        document.getElementById(
            "photoViewer"
        );

    viewer.classList.remove("show");

}


/* =========================
   LOVE CARD INTERACTION
========================= */

function toggleReason(card) {

    card.classList.toggle("open");

}


/* =========================
   FINAL QUESTION
========================= */

function showFinalMessage() {

    const question =
        document.getElementById(
            "finalQuestion"
        );

    const message =
        document.getElementById(
            "finalMessage"
        );


    question.style.display = "none";

    message.style.display = "block";

}


/* =========================
   PLAYFUL ANSWER
========================= */

function playfulAnswer() {

    const button =
        document.querySelector(
            ".maybe-btn"
        );


    button.innerHTML =
        "ARE YOU SURE? 😏";


    button.style.transform =
        "scale(1.05)";

}