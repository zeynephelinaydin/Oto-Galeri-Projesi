document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("car-form");
    const titleElement = document.querySelector("#title");
    const priceElement = document.querySelector("#price");
    const urlElement = document.querySelector("#url");
    const cardbody = document.querySelectorAll(".card-body")[1];
    const clear = document.getElementById("clear-cars");

    const ui = new UI();
    const storage = new Storage();

    function eventListeners() {
        if (form) {
            form.addEventListener("submit", addCar);
        }

        if (cardbody) {
            cardbody.addEventListener("click", deleteCar);
        }

        if (clear) {
            clear.addEventListener("click", showConfirmModal);
        }

        document.getElementById("confirmDelete")?.addEventListener("click", clearAllCars);
        document.getElementById("cancelDelete")?.addEventListener("click", closeModal);
    }

    function addCar(e) {
        const title = titleElement.value;
        const price = priceElement.value;
        const url = urlElement.value;

        if (title === "" || price === "" || url === "") {
            ui.displayMessages("Lütfen tüm alanları doldurun!", "danger");
        } else {
            const newCar = new Car(title, price, url);
            ui.addCarToUI(newCar);
            storage.addCarToStorage(newCar);
            ui.displayMessages("Araç başarıyla eklendi!", "success");
        }
        ui.clearInputs(titleElement, priceElement, urlElement);
        e.preventDefault();
    }

    function deleteCar(e) {
        if (e.target.id === "delete-car") {
            ui.deleteCarFromUI(e.target);
            const carName = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
            storage.deleteCarFromStorage(carName);
            ui.displayMessages("Silme işlemi başarıyla gerçekleştirildi!", "success");

            const logo = document.querySelector(".logo");
            if (logo) {
                logo.classList.add("highlight");
                setTimeout(() => logo.classList.remove("highlight"), 1100);
            }
        }
    }

    function showConfirmModal() {
        $('#confirmModal').modal('show');
    }

    function clearAllCars() {
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
        ui.displayMessages("Tüm araçlar başarıyla silindi!", "success");
        closeModal();
    }

    function closeModal() {
        $('#confirmModal').modal('hide');
    }

    eventListeners();
});
