let progress = localStorage.getItem("progress") || 25;
let missions = localStorage.getItem("missions") || 0;


// Start Mission Button
function startMission() {

    progress = Number(progress) + 25;

    if (progress > 100) {
        progress = 100;
    }


    missions = Number(missions) + 1;


    localStorage.setItem("progress", progress);
    localStorage.setItem("missions", missions);


    updateDisplay();


    if (progress === 100) {

        document.getElementById("missionMessage").innerHTML =
        "🎉 Mission Complete! Operation Jeb Reloaded Ready!";

    } 
    else {

        document.getElementById("missionMessage").innerHTML =
        "Mission in progress... Keep building 🚀";

    }

}



// Update Screen
function updateDisplay(){

    document.querySelector(".progress").style.width =
    progress + "%";


    document.getElementById("progressText").innerHTML =
    progress + "% Complete 🚀";


    document.getElementById("counter").innerHTML =
    "Missions Completed: " + missions;

}



// Dark Mode
function toggleMode(){

    document.body.classList.toggle("dark");

}



// Reset Mission
function resetMission(){

    progress = 25;
    missions = 0;

    localStorage.clear();

    location.reload();

}



// Page Load
updateDisplay();


let savedName = localStorage.getItem("username");

if(savedName){

    document.getElementById("welcome").innerHTML =
    "Welcome " + savedName + " 🚀";

}

function saveName(){

    let name = document.getElementById("username").value;

    if(name === ""){
        alert("Please enter your name 🚀");
        return;
    }

    localStorage.setItem("username", name);

    document.getElementById("welcome").innerHTML =
    "Welcome " + name + " 🚀";

}

