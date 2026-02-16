// Generics in TypeScript

function identity<T>(arg: T): T { // The <T> syntax defines a generic type parameter named T. This allows the function to work with any type specified when the function is called.
    console.log(arg);
    return arg; // returninig T
}

identity<string>("Hello, Generics!"); // Output: Hello, Generics!
identity<boolean>(true); // Output: true
identity<number>(42); // Output: 42

function genericArray<T>(items: T[]): T[] { // A generic function that takes an array of type T and returns an array of the same type T.
    return new Array<T>().concat(items); // Creating a new array of type T and concatenating the input items to it.
}

console.log(genericArray<number>([1, 2, 3])); // Output: [1, 2, 3]
console.log(genericArray<string>(["a", "b", "c"])); // Output: ["a", "b", "c"]

function pair<T, U>(first: T, second: U): [T, U] { // A generic function that takes two parameters of different types T and U and returns a tuple containing both values.
    return [first, second]; // Returning a tuple with the first and second values.
}

console.log(pair<string, number>("Age", 30)); // Output: ["Age", 30]
console.log(pair<boolean, string>(true, "Is Active")); // Output: [true, "Is Active"]