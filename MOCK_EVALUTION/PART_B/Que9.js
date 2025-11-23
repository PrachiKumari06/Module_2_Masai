function displayCar(x){
    console.log(x);
}
function displayTruck(x){
    console.log(x);
}
function displayBike(x){
    console.log(x);
}
function vehicleInfo(vehicleCategory, callbackFn){
    console.log(vehicleCategory);
    callbackFn();
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
