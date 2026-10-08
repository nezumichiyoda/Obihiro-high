document.querySelectorAll(".nav-dropdown > button").forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const dropdown = this.parentElement;
        const wasOpen = dropdown.classList.contains("open");

        document.querySelectorAll(".nav-dropdown").forEach(function(otherDropdown) {
            otherDropdown.classList.remove("open");
        });

        if (!wasOpen) {
            dropdown.classList.add("open");
        }

    });

});


// Close dropdown when tapping outside
document.addEventListener("click", function(event) {

    if (!event.target.closest(".main-navigation")) {

        document.querySelectorAll(".nav-dropdown").forEach(function(dropdown) {
            dropdown.classList.remove("open");
        });

    }

});