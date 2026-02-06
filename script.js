// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const noSound = new Audio("whoosh.mp3?v=1");
noSound.volume = 0.6;


// Click Envelope

const music = document.getElementById("bg-music");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    if (music) {
        music.volume = 0.4;
        music.play().catch(err => console.log(err));
    }

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

const heartsContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 6 + "s";
    heart.style.fontSize = 16 + Math.random() * 24 + "px";
    heart.style.opacity = Math.random() * 0.6 + 0.4;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);

const doiliesContainer = document.getElementById("doilies");

function createDoily(x) {
    const doily = document.createElement("img");
    doily.className = "doily";
    doily.src = "doily.png";

    const size = 140 + Math.random() * 80;
    doily.style.width = size + "px";

    // position across the bottom
    doily.style.left = x + "px";
    doily.style.bottom = Math.random() * 20 + "px";

    // choppy rotation
   const duration = 8 + Math.random() * 8;
    doily.style.animationDuration = duration + "s";
    doily.style.animationDirection =
        Math.random() > 0.5 ? "normal" : "reverse";

    doiliesContainer.appendChild(doily);
}

const spacing = 80; // overlap amount
const count = Math.ceil(window.innerWidth / spacing) + 2;

for (let i = 0; i < count; i++) {
    createDoily(i * spacing);
}

doily.style.bottom = Math.random() * 25 + "px";

doily.style.transform = `scale(${0.9 + Math.random() * 0.2})`;


// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // 🔊 play sound
    const sound = noSound.cloneNode();
    sound.play();
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

function typeText(element, text, speed = 40) {
    element.textContent = "";
    let i = 0;

    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(interval);
        }
    }, speed);
}



yesBtn.addEventListener("click", () => {
    title.textContent = "Yippee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
    typeText(
        finalText,
        "Good choice! Happy Valentine's Day 💗 Be ready for a million dates."
    );
});
