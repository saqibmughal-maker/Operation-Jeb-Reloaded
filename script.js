let progress = 25;

function startMission() {

    progress += 25;

    if (progress > 100) {
        progress = 100;
    }

    document.querySelector(".progress").style.width = progress + "%";

    document.getElementById("progressText").innerHTML =
    progress + "% Complete 🚀";


    if (progress === 50) {
        document.getElementById("missionMessage").innerHTML =
        "Mission building phase started 💻🔥";
    }

    if (progress === 75) {
        document.getElementById("missionMessage").innerHTML =
        "Almost there! Final testing 🚀";
    }

    if (progress === 100) {
        document.getElementById("missionMessage").innerHTML =
        "🎉 Mission Complete! Operation Jeb Reloaded Ready!";
    }

}
if (progress === 100) {
    document.getElementById("missionMessage").innerHTML =
    "🎉 Mission Complete! Operation Jeb Reloaded Ready!";

    document.querySelector("button").innerHTML = "Mission Completed ✅";
    document.querySelector("button").disabled = true;
}