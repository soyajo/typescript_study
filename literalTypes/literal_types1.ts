// Literal Types
const userName1 = "Bob";
let userName2: string | number = "Tom";

userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User {
    name: string;
    job: Job;
}

const user: User = {
    name: "Bob",
    job: 'developer',
}
// | = 유니온 타입
interface HighSchoolStudent {
    name: number | string;
    grade: 1 | 2 | 3;
}

const student: HighSchoolStudent ={
    name: 'soya',
    grade: 1,
}


