// score 타입 - 데이터 타입을 지정할 수 있다.
type Score = 'A' | 'B' | 'C' | 'F';


interface User {
    name : string;
    age : number;
    // ? - 값을 생성 때 필수로 안적어도 된다.
    gender? : string;
    // readonly - 최초에 값을 작성할 때 읽기 전용으로 값을 변경할 수 없다.
    readonly birthYear: number;
    // grade 는 다른 명칭으로 대체 가능
    // 1 : 'A',
    // 2 : 'B'
    // 이런식으로 값을 넣을 수 있음.
    [grade:number] : Score;
}

let user : User = {
    name : 'xx',
    age : 30,
    birthYear : 2000,
    1 : 'A',
    2 : 'B'
}
user.age = 10;
user.gender = 'male'

console.log(user.age)
