function Storage() {}

Storage.prototype.addCarToStorage = function(newCar) {
    let cars = this.getCarsFromStorage();
    cars.push(newCar);
    localStorage.setItem("cars", JSON.stringify(cars));
}

Storage.prototype.getCarsFromStorage = function() {
    let cars;
    if (localStorage.getItem("cars") === null) {
        cars = [];
    } else {
        try {
            cars = JSON.parse(localStorage.getItem("cars"));
            if (!Array.isArray(cars)) {
                cars = [];
            }
        } catch (e) {
            cars = [];
        }
    }
    return cars;
}

Storage.prototype.deleteCarFromStorage = function(carTitle) {
    let cars = this.getCarsFromStorage();
    cars.forEach(function(car, index) {
        if (car.title === carTitle) {
            cars.splice(index, 1);
            localStorage.setItem("cars", JSON.stringify(cars));
        }
    });
}

Storage.prototype.clearAllCarsFromStorage = function() {
    localStorage.removeItem("cars");
}
