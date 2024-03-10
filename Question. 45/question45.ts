function createCar(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): object {
    let carInfo: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    
    extras.forEach(extra => {
        const [key, value] = Object.entries(extra)[0];
        carInfo[key] = value;
    });

    return carInfo;
}


let carObject = createCar('Toyota', 'Camry', {color: 'blue'}, {features: ['navigation', 'sunroof']});


console.log(carObject);