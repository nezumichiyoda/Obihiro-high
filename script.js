document.querySelectorAll(”.nav-dropdown > button”).forEach(function(button) {
button.addEventListener(“click”, function() {
const dropdown = this.parentElement;
const wasOpen = dropdown.classList.contains(“open”);

    document.querySelectorAll(".nav-dropdown").forEach(function(item) {
        item.classList.remove("open");
    });
    if (!wasOpen) {
        dropdown.classList.add("open");
    }
});

});

// Keep dropdown links clickable on mobile
document.querySelectorAll(”.dropdown-menu a”).forEach(function(link) {
link.addEventListener(“click”, function() {
window.location.href = this.href;
});
});

// Close dropdowns when tapping outside
document.addEventListener(“click”, function(event) {
if (!event.target.closest(”.main-navigation”)) {
document.querySelectorAll(”.nav-dropdown”).forEach(function(dropdown) {
dropdown.classList.remove(“open”);
});
}
});