// 함수
function add(num1: number, num2: number): void {
    console.log(num1 + num2);
}

// 함수
function isAdult(age: number): boolean {
    return age > 19;
}

// 매개변수가 있어도 없어도 된다. - ?
// ? - 선택적 매개변수
function hello(name?: string) {
    return `Hello, ${name || "world"}`;
}
function hello2(name = "world") {
    return `Hello, ${name}`;
}

const result = hello();
const result2 = hello("Sam");