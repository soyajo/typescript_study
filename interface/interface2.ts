


interface Add {
    (num1:number, num2:number): number;
}

const add: Add = function (x, y) {
    return x + y;
};

add(10, 20);

interface  IsAdult {
    (age: number): boolean;
}

const a: IsAdult = (age) => {
    return age > 19;
};

// 클래스 생성
interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Benz extends Car {
    door: number;

    stop(): void;
}

const benz : Benz = {
    door : 5,
    stop() {
        console.log("stop");
    },
    color: 'black',
    wheels: 4,
    start() {
        console.log('benz..go');
    },
}

class Bmw implements Car {
    color;
    wheels = 4;
    // 생성자 선언
    constructor(c: string) {
        this.color = c;
    }
    start() {
        console.log("go...!");
    }
}

const b = new Bmw("green");
console.log(b);
b.start();


// extends

