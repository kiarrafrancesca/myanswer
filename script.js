document.getElementById("button1").addEventListener("click", function() {
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "inline-block";
});

document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "inline-block";
});

document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "inline-block";
});

document.getElementById("button4").addEventListener("click", function() {
    document.getElementById("button4").style.display = "none";
    document.getElementById("button5").style.display = "inline-block";
});

document.getElementById("button5").addEventListener("click", function() {
    document.getElementById("button5").style.display = "none";
    document.getElementById("button6").style.display = "inline-block";
});

document.getElementById("button6").addEventListener("click", function() {
    document.getElementById("b-container").style.display = "none";
    document.getElementById("web-content").style.display = "block";
});

function revealWebsite() {
    document.getElementById("b-container").style.display = "none";
    document.getElementById("web-content").style.display = "block";

}