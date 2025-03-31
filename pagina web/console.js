
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("productos").style.display = "block";
});