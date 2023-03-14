const boom = "./sounds/boom.wav";
const kick = "./sounds/kick.wav";
const tom = "./sounds/tom.wav";
const tink = "./sounds/tink.wav";
const clap = "./sounds/clap.wav";
const snare = "./sounds/snare.wav";
const hihat = "./sounds/hihat.wav";
const openhat = "./sounds/openhat.wav";
const ride = "./sounds/ride.wav";

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
            polyPlay(boom, 0.75);
            break;
        case "s":
        case "w":
            polyPlay(kick, 0.75);
            break;
        case "d":
        case "e":
            polyPlay(tom, 0.75);
            break;
        case "f":
        case "r":
            polyPlay(tink, 0.75);
            break;
        case "g":
        case "t":
            polyPlay(clap, 0.75);
            break;
        case "h":
        case "y":
            polyPlay(snare, 0.75);
            break;
        case "j":
        case "u":
            polyPlay(hihat, 0.75);
            break;
        case "k":
        case "i":
            polyPlay(openhat, 0.75);
            break;
        case "l":
        case "o":
            polyPlay(ride, 0.75);
            break;
    }
});