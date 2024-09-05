document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo");

    const addCarButton = document.querySelector("button[type='submit']");
    const clearCarsButton = document.getElementById("clear-cars");
    const discardButton = document.querySelector(".btn-secondary");
    const confirmDeleteButton = document.getElementById("confirmDelete");

    const carTable = document.getElementById("cars");
    const deleteButtons = carTable ? carTable.querySelectorAll("#delete-car") : [];

    function triggerLogoAnimation() {
        logo.classList.add("highlight");
        setTimeout(() => logo.classList.remove("highlight"), 2000);
    }

    if (addCarButton) {
        addCarButton.addEventListener("click", triggerLogoAnimation);
    }

    if (clearCarsButton) {
        clearCarsButton.addEventListener("click", triggerLogoAnimation);
    }

    if (discardButton) {
        discardButton.addEventListener("click", triggerLogoAnimation);
    }

    if (confirmDeleteButton) {
        confirmDeleteButton.addEventListener("click", triggerLogoAnimation);
    }

    deleteButtons.forEach(button => {
        button.addEventListener("click", triggerLogoAnimation);
    });
});
