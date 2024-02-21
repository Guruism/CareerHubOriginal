document.getElementById("r-btn").addEventListener("click", function() {
    document.body.classList.add("fadeOut");
    setTimeout(function() {
        window.location.href = "register.html";
    }, 500); // Adjust the delay as needed to match your CSS transition duration
});
