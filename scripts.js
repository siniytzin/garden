

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
                    break;
            }
        }
    });
});