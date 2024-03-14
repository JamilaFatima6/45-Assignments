function createCar(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(function (extra) {
        var _a = Object.entries(extra)[0], key = _a[0], value = _a[1];
        carInfo[key] = value;
    });
    return carInfo;
}
var carObject = createCar('Toyota', 'Camry', { color: 'blue' }, { features: ['navigation', 'sunroof'] });
console.log(carObject);
