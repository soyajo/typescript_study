class Car {
    color: string;
    constructor(color: string) {
        this.color = color;
    }

    start() {
        console.log("start");
    }
}

const bmw = new Car("red");