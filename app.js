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
            boomKey.style.color = "red";
            polyPlay(boom, 0.75);
            setTimeout(() => {
                boomKey.style.color = "black";
            }, 100);
            break;
        case "s":
        case "w":
            kickKey.style.color = "red";
            polyPlay(kick, 0.75);
            setTimeout(() => {
                kickKey.style.color = "black";
            }, 100);
            break;
        case "d":
        case "e":
            tomKey.style.color = "red";
            polyPlay(tom, 0.75);
            setTimeout(() => {
                tomKey.style.color = "black";
            }, 100);
            break;
        case "f":
        case "r":
            tinkKey.style.color = "red";
            polyPlay(tink, 0.75);
            setTimeout(() => {
                tinkKey.style.color = "black";
            }, 100);
            break;
        case "g":
        case "t":
            clapKey.style.color = "red";
            polyPlay(clap, 0.75);
            setTimeout(() => {
                clapKey.style.color = "black";
            }, 100);
            break;
        case "h":
        case "y":
            snareKey.style.color = "red";
            polyPlay(snare, 0.75);
            setTimeout(() => {
                snareKey.style.color = "black";
            }, 100);
            break;
        case "j":
        case "u":
            hihatKey.style.color = "red";
            polyPlay(hihat, 0.75);
            setTimeout(() => {
                hihatKey.style.color = "black";
            }, 100);
            break;
        case "k":
        case "i":
            openhatKey.style.color = "red";
            polyPlay(openhat, 0.75);
            setTimeout(() => {
                openhatKey.style.color = "black";
            }, 100);
            break;
        case "l":
        case "o":
            rideKey.style.color = "red";
            polyPlay(ride, 0.75);
            setTimeout(() => {
                rideKey.style.color = "black";
            }, 100);
            break;
    }
});