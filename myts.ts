const num: number = 6;
const str: string = "bla bla";
const bool: boolean = true;
const any: any = {};

const v: void = undefined; // void (empty)
const arr: boolean[] = [true, true, false, false]; // array
const tuple: [string,number,string] = ['str 1', 10, "5"];

// explicit object + class/interface
const jeep = {
    wheels: 4
};

class Car {
    wheels: number = 0;
}

interface someInterface {
    someProp: string;
}

class example1 implements someInterface {
    someProp: string = '';
}

const objExample = new example1();
const obj: someInterface= objExample;
const obj2: Car = jeep;

// expand object with any key
const explicit: { [key: string]: number } = { someKey: 6 };

const union: number | number[] | string = '3'
const union2: number | number[] =[3, 7, 8];

// functions 
function someFunc(): number | string{
    return "2";
}

// function parameters
// THEORY: string will affect the func outside the scope, while number inside the scope
function someFunc2(aString: string): number{
    return 5;
}
someFunc2("10");

//function signature
let arrFunc: (param1: number) => string; // function declaration

arrFunc = (param1: number) => {
    return 'string';
}

// Generics
const nums: string[] = [];
const numGen: Array<string> = [];