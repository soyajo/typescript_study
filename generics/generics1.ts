// Generic

function getSize<T>(arr: T[]):number {
    return arr.length;
}

const arr1 = [0, 1, 3];
getSize(arr1);

const arr2 = ["a", "b", "c"];
getSize(arr2);

const arr3 = [false, true, false];
getSize(arr3);

const arr4 = [{},{},{name: "soya"}];
getSize(arr4);


interface Mobile<T> {
    name: string;
    price: number;
    option: T;
}

const apple: Mobile<object> = {
    name: "apple",
    price: 10000,
    option: {
        a: "a",
        b: "b"
    },
}

const samsung: Mobile<string> = {
    name: "apple",
    price: 10000,
    option: "aa",
}