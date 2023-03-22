const boom = "./sounds/boom.wav";
const kick = "./sounds/kick.wav";
const tom = "./sounds/tom.wav";
const tink = "./sounds/tink.wav";
const clap = "./sounds/clap.wav";
const snare = "./sounds/snare.wav";
const hihat = "./sounds/hihat.wav";
const openhat = "./sounds/openhat.wav";
const ride = "./sounds/ride.wav";

const boomKey = document.getElementById("boomKey");
const kickKey = document.getElementById("kickKey");
const tomKey = document.getElementById("tomKey");
const tinkKey = document.getElementById("tinkKey");
const clapKey = document.getElementById("clapKey");
const snareKey = document.getElementById("snareKey");
const hihatKey = document.getElementById("hihatKey");
const openhatKey = document.getElementById("openhatKey");
const rideKey = document.getElementById("rideKey");

const allKeys = document.querySelectorAll(".inputKey");
const allSounds = [boom, kick, tom, tink, clap, snare, hihat, openhat, ride];

const polyPlay = (audio_uri, vol) => {
    let polyPlayer = new Audio(audio_uri);
    polyPlayer.volume = vol;
    polyPlayer.play();
    setTimeout(() => {
        polyPlayer.remove();
    }, 2500);
}

const kitPlay = (audio_uri, button) => {
    button.style.backgroundColor = "rgba(204, 36, 29, 0.5)";
    button.style.animation = "hitZoom 0.1s linear";
    polyPlay(audio_uri, 0.75);
    setTimeout(() => {
        button.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
        button.style.removeProperty("animation");
    }, 100);
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "a":
        case "q":
            kitPlay(boom, boomKey);
            break;
        case "s":
        case "w":
            kitPlay(kick, kickKey);
            break;
        case "d":
        case "e":
            kitPlay(tom, tomKey);
            break;
        case "f":
        case "r":
            kitPlay(tink, tinkKey);
            break;
        case "g":
        case "t":
            kitPlay(clap, clapKey);
            break;
        case "h":
        case "y":
            kitPlay(snare, snareKey);
            break;
        case "j":
        case "u":
            kitPlay(hihat, hihatKey);
            break;
        case "k":
        case "i":
            kitPlay(openhat, openhatKey);
            break;
        case "l":
        case "o":
            kitPlay(ride, rideKey);
            break;
    }
});

allKeys.forEach((key, index) => {
    key.addEventListener("click", () => {
        kitPlay(allSounds[index], key);
    });
});

window.onload = () => {
    allSounds.forEach((index) => {
        polyPlay(allSounds[index], 0);
    });
}