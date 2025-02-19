// Variable type
const a: string = "this is a string";
const b: number = 25;

// Parameter type annotation
function addup(a: string, b: string) {
    console.log(a + b);
}

// Function return type
function addToString(string1: string, string2: string): string {
    return string1 + string2;
}

// Function which returns promises
async function getFavNumber(): Promise<number> {
    return 45;
}
const arr: number[] = [1, 2, 3, 4, 5, 6];

// Contextual type
arr.forEach(function (s) {
    console.log(s);
});

// Same for arrow function
// Gets its type based on the context
arr.forEach(element => {
    console.log(element);
});

// Annotation for the objects
function getCords(pt: { x: number; y: number }) {
    console.log(`cord ${pt.x}`);
    console.log(`cord ${pt.y}`);
}
// For the type definition, we can use ; and , both

// Union type combine multiple type 
let unionType: number | string;
unionType = 23;
unionType = "A String";
// both will work without any error


// Better way to write type of objects
type Point = {
    x: number;
    y: string,
    z:boolean
}
// now to use it 
function checkType(arg: Point) {
    // rest of the function
}

//  Type Alias
type ID = string | number;
const id: ID = "works";
const id2: ID = 123;

// interface 
interface Pointer {
    lang: number;
    lat: number;
    
}