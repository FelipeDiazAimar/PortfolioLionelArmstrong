window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");
    let content = document.getElementById("content");
    if (preloader) {
        setTimeout(function() {
            preloader.style.display = "none";
            content.style.display = "block";
        }, 1000);
    }
});
