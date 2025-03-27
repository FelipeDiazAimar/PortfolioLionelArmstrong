document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById("darkmode");
    const isDarkMode = localStorage.getItem("darkmode") === "enabled";

    if (isDarkMode) {
        document.body.classList.add("darkmode");
    }

    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("darkmode");
        
        if (document.body.classList.contains("darkmode")) {
            localStorage.setItem("darkmode", "enabled");
        } else {
            localStorage.setItem("darkmode", "disabled");
        }
    });
});