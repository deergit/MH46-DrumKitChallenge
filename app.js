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

const polyPlay = (audio_uri, vol) => {
    let polyPlayer = new Audio(audio_uri);
    polyPlayer.volume = vol;
    polyPlayer.play();
    setTimeout(() => {
        polyPlayer.remove();
    }, 2500);
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "a":
        case "q":
            boomKey.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            polyPlay(boom, 0.75);
            setTimeout(() => {
                boomKey.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }, 100);
            break;
        case "s":
        case "w":
            kickKey.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            polyPlay(kick, 0.75);
            setTimeout(() => {
                kickKey.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }, 100);
            break;
        case "d":
        case "e":
            tomKey.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            polyPlay(tom, 0.75);
            setTimeout(() => {
                tomKey.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }, 100);
            break;
        case "f":
        case "r":
            tinkKey.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            polyPlay(tink, 0.75);
            setTimeout(() => {
                tinkKey.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }, 100);
            break;
        case "g":
        case "t":
            clapKey.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            polyPlay(clap, 0.75);
            setTimeout(() => {
                clapKey.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }, 100);
            break;
        case "h":
        case "y":
            snareKey.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            polyPlay(snare, 0.75);
            setTimeout(() => {
                snareKey.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }, 100);
            break;
        case "j":
        case "u":
            hihatKey.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            polyPlay(hihat, 0.75);
            setTimeout(() => {
                hihatKey.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }, 100);
            break;
        case "k":
        case "i":
            openhatKey.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            polyPlay(openhat, 0.75);
            setTimeout(() => {
                openhatKey.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }, 100);
            break;
        case "l":
        case "o":
            rideKey.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            polyPlay(ride, 0.75);
            setTimeout(() => {
                rideKey.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
            }, 100);
            break;
    }
});