const username = localStorage.getItem("loggedInUser");
if (username) {
    document.getElementById("username-display").textContent = username;
} else {
    window.location.href = "index.html";
}
