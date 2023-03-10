

const redZone = document.getElementById("redZone");
const greenZone = document.getElementById("greenZone");
const orangeZone = document.getElementById("orangeZone");
const blueZone = document.getElementById("blueZone");
const violetZone = document.getElementById("violetZone");

const redCheckerColor = document.getElementById("redCheckerColor");
const greenCheckerColor = document.getElementById("greenCheckerColor");
const orangeCheckerColor = document.getElementById("orangeCheckerColor");
const blueCheckerColor = document.getElementById("blueCheckerColor");
const violetCheckerColor = document.getElementById("violetCheckerColor");

const redZoneCard = document.getElementById("redZoneCard");
const greenZoneCard = document.getElementById("greenZoneCard");
const orangeZoneCard = document.getElementById("orangeZoneCard");
const blueZoneCard = document.getElementById("blueZoneCard");
const violetZoneCard = document.getElementById("violetZoneCard");

document.querySelectorAll("input[name='content-options']").forEach(input => {
    input.addEventListener("change", (event) => {
        if (event.target.checked) {
            switch (event.target.value) {
                case "option1":
                    redZone.classList.add("visible");

                    greenZone.classList.remove("visible");
                    orangeZone.classList.remove("visible");
                    blueZone.classList.remove("visible");
                    violetZone.classList.remove("visible");

                    redCheckerColor.classList.add("visible");

                    greenCheckerColor.classList.remove("visible");
                    orangeCheckerColor.classList.remove("visible");
                    blueCheckerColor.classList.remove("visible");
                    violetCheckerColor.classList.remove("visible");

                    redZoneCard.classList.add("visible");

                    greenZoneCard.classList.remove("visible");
                    orangeZoneCard.classList.remove("visible");
                    blueZoneCard.classList.remove("visible");
                    violetZoneCard.classList.remove("visible");
                    break;
                case "option2":
                    orangeZone.classList.add("visible");

                    redZone.classList.remove("visible");
                    greenZone.classList.remove("visible");
                    blueZone.classList.remove("visible");
                    violetZone.classList.remove("visible");


                    orangeCheckerColor.classList.add("visible");

                    redCheckerColor.classList.remove("visible");
                    greenCheckerColor.classList.remove("visible");
                    blueCheckerColor.classList.remove("visible");
                    violetCheckerColor.classList.remove("visible");

                    orangeZoneCard.classList.add("visible");

                    greenZoneCard.classList.remove("visible");
                    redZoneCard.classList.remove("visible");
                    blueZoneCard.classList.remove("visible");
                    violetZoneCard.classList.remove("visible");
                    break;
                case "option3":
                    greenZone.classList.add("visible");

                    redZone.classList.remove("visible");
                    orangeZone.classList.remove("visible");
                    blueZone.classList.remove("visible");
                    violetZone.classList.remove("visible");


                    greenCheckerColor.classList.add("visible");

                    redCheckerColor.classList.remove("visible");
                    orangeCheckerColor.classList.remove("visible");
                    blueCheckerColor.classList.remove("visible");
                    violetCheckerColor.classList.remove("visible");

                    greenZoneCard.classList.add("visible");

                    orangeZoneCard.classList.remove("visible");
                    redZoneCard.classList.remove("visible");
                    blueZoneCard.classList.remove("visible");
                    violetZoneCard.classList.remove("visible");
                    break;
                case "option4":
                    blueZone.classList.add("visible");

                    redZone.classList.remove("visible");
                    greenZone.classList.remove("visible");
                    orangeZone.classList.remove("visible");
                    violetZone.classList.remove("visible");


                    blueCheckerColor.classList.add("visible");

                    redCheckerColor.classList.remove("visible");
                    greenCheckerColor.classList.remove("visible");
                    orangeCheckerColor.classList.remove("visible");
                    violetCheckerColor.classList.remove("visible");

                    blueZoneCard.classList.add("visible");

                    orangeZoneCard.classList.remove("visible");
                    redZoneCard.classList.remove("visible");
                    greenZoneCard.classList.remove("visible");
                    violetZoneCard.classList.remove("visible");
                    break;
                case "option5":
                    violetZone.classList.add("visible");

                    redZone.classList.remove("visible");
                    greenZone.classList.remove("visible");
                    orangeZone.classList.remove("visible");
                    blueZone.classList.remove("visible");


                    violetCheckerColor.classList.add("visible");

                    redCheckerColor.classList.remove("visible");
                    greenCheckerColor.classList.remove("visible");
                    orangeCheckerColor.classList.remove("visible");
                    blueCheckerColor.classList.remove("visible");

                    violetZoneCard.classList.add("visible");

                    orangeZoneCard.classList.remove("visible");
                    redZoneCard.classList.remove("visible");
                    greenZoneCard.classList.remove("visible");
                    blueZoneCard.classList.remove("visible");
                    break;
            }
        }
    });
});

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '519px',
        width: '100%',
        videoId: 'AMy9lDbXEK8',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
}

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}
