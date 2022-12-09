class Car {
    public name: string = "car";
    color: string;
    constructor(color: string) {
        this.color = color;
    }

    start() {
        console.log("start");
        console.log(this.name);
    }
}

class Bmw extends Car {
    constructor(color: string) {
        super(color);
    }

}

const z4 = new Bmw("black");
console.log(z4.name);