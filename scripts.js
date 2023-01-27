const myRadioButton = document.getElementById("option1");
const redZone = document.getElementById("redZone");
const greenZone = document.getElementById("greenZone");
const orangeZone = document.getElementById("orangeZone");
const blueZone = document.getElementById("blueZone");
const violetZone = document.getElementById("violetZone");


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
                    break;
                case "option2":
                    orangeZone.classList.add("visible");

                    redZone.classList.remove("visible");
                    greenZone.classList.remove("visible");
                    blueZone.classList.remove("visible");
                    violetZone.classList.remove("visible");
                    break;
                case "option3":
                    greenZone.classList.add("visible");

                    redZone.classList.remove("visible");
                    orangeZone.classList.remove("visible");
                    blueZone.classList.remove("visible");
                    violetZone.classList.remove("visible");
                    break;
                case "option4":
                    blueZone.classList.add("visible");

                    redZone.classList.remove("visible");
                    greenZone.classList.remove("visible");
                    orangeZone.classList.remove("visible");
                    violetZone.classList.remove("visible");
                    break;
                case "option5":
                    violetZone.classList.add("visible");

                    redZone.classList.remove("visible");
                    greenZone.classList.remove("visible");
                    orangeZone.classList.remove("visible");
                    blueZone.classList.remove("visible");
                    break;
            }
            // redZone.classList.remove("visible")
        }
    });
});