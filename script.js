document.querySelectorAll(".nav-dropdown > button").forEach(function(button) {

    button.addEventListener("click", function() {

        const dropdown = this.parentElement;

        dropdown.classList.toggle("open");

    });

});
