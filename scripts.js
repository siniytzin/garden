const contentBlock = document.getElementById("slider");

const redBlock = document.getElementById("redZone");
const orangeBlock = document.getElementById("orangeZone");
const greenBlock = document.getElementById("greenZone");
const blueBlock = document.getElementById("blueZone");
const violetBlock = document.getElementById("violetZone");


let changeContent = (content) => {
    contentBlock.innerHTML = content;
}
console.log(contentBlock)
document.querySelectorAll("input[name='content-options']").forEach(input => {
    input.addEventListener("change", (event) => {
        if (event.target.checked) {
            switch (event.target.value) {
                case "option1":
                    changeContent(redBlock, console.log("Red DONE"));
                    break;
                case "option2":
                    changeContent(orangeBlock);
                    break;
                case "option3":
                    changeContent(greenZone);
                    break;
                case "option4":
                    changeContent(blueZone);
                    break;
                case "option5":
                    changeContent(violetZone);
                    break;
            }
        }
    });
});