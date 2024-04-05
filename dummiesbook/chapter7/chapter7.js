// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("body").style.border = "3px solid black";
// document.getElementById("mouth").style.borderRadius = "4px";
// document.getElementById("righteye").style.border = "4px yellow dotted";
// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// document.getElementById("body").style.backgroundColor = "#FF0000";
// document.getElementById("head").style.borderTop = "10px black solid";

// //My turn to make changes
// document.getElementById("head").style.transform =
// "rotate(-15deg)";
// document.getElementById("nose").style.borderRadius = "50%";
// document.getElementById("rightarm").style.backgroundColor = "green";
// document.getElementById("mouth").style.backgroundColor = "pink";


//ANIMATING THE ROBOT

let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
let leftEye = document.getElementById("lefteye");
leftEye.onclick = moveUpDown;
let nose = document.getElementById("nose");
nose.onclick = moveNoseUpDown;
let leftArm = document.getElementById("leftarm");
leftArm.onclick = moveRightLeft;
//My addtional animations
let rightArm = document.getElementById("rightarm");
rightArm.onclick = moveUpDown;


function moveUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame,10);
    function frame() {
        robotPart.style.top = t + "%";
        t++;
        if (t === 21) {
            clearInterval(animation);
        }
    }
}

function moveNoseUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame,10);
    function frame() {
        robotPart.style.top = t++ + "%";
        if (t === 51) {
            clearInterval(animation);
        }
    }
}

function moveRightLeft(event) {
    console.log(event.target)
    let robotPart = event.target;
    let left = 0;
    let animation = setInterval(frame,10);
    function frame() {
        robotPart.style.left = left++ + "%";
        if (left === 71) {
            clearInterval(animation);
        }
    }
}