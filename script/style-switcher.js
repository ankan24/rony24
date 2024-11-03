// -------------- toggle style switch --------------------

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
    console.log('button clicked');
    document.querySelector(".style-switcher").classList.toggle("open");
});


// hide style switcher on scroll

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


// -------------------------------- theme colors ------------------------------
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    });
}


// ---------------------------- theme light and dark mode---------------------------------------
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})



// Select the audio element
const backgroundMusic = document.getElementById("background-music");
// Toggle music playback on button click
const musicToggle = document.querySelector(".music-toggle");
musicToggle.addEventListener("click", () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.querySelector("i").classList.remove("fa-volume-mute");
        musicToggle.querySelector("i").classList.add("fa-music");
    } else {
        backgroundMusic.pause();
        musicToggle.querySelector("i").classList.remove("fa-music");
        musicToggle.querySelector("i").classList.add("fa-volume-mute");
    }
});
