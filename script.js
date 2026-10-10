document.addEventListener("DOMContentLoaded", function () {
    const navigation = document.querySelector(".main-navigation");

    if (!navigation) return;

    const dropdowns = navigation.querySelectorAll(".nav-dropdown");

    // Open or close dropdowns when their buttons are tapped.
    dropdowns.forEach(function (dropdown) {
        const button = dropdown.querySelector(":scope > button");

        if (!button) return;

        button.addEventListener("click", function () {
            const shouldOpen = !dropdown.classList.contains("open");

            dropdowns.forEach(function (item) {
                item.classList.remove("open");
                const itemButton = item.querySelector(":scope > button");
                if (itemButton) itemButton.setAttribute("aria-expanded", "false");
            });

            if (shouldOpen) {
                dropdown.classList.add("open");
                button.setAttribute("aria-expanded", "true");
            }
        });

        button.setAttribute("aria-expanded", "false");
    });

    // Close dropdowns when the user taps outside the navigation.
    document.addEventListener("click", function (event) {
        if (!navigation.contains(event.target)) {
            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("open");

                const button = dropdown.querySelector(":scope > button");
                if (button) button.setAttribute("aria-expanded", "false");
            });
        }
    });

    // Escape closes any open dropdown.
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("open");

                const button = dropdown.querySelector(":scope > button");
                if (button) button.setAttribute("aria-expanded", "false");
            });
        }
    });
});