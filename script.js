document.querySelectorAll(".nav-dropdown > button").forEach(function(button) {
    button.addEventListener("click", function() {
        const dropdown = this.parentElement;
        // Close all other dropdowns
        document.querySelectorAll(".nav-dropdown").forEach(function(otherDropdown) {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove("open");
            }
        });
        // Toggle the dropdown that was clicked
        dropdown.classList.toggle("open");
    });
});