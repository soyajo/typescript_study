// 함수
// age?: number,name: string - 에러 선택적 매개변수는 앞에두면 안된다.
//하지만 undefined 를 사용하면 가능하다
function hello(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}`;
    } else {
        return `Hello,${name}`;
    }
}

// undefined
function hello2(age: number | undefined, name: string): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}`;
    } else {
        return `Hello,${name}`;
    }
}

console.log(hello('soya',30));
console.log(hello2(30, 'soya'));
console.log(hello2(undefined, 'soya'));

