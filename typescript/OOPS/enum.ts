// Enums are fixed sets of related constants that can be numeric or string values. They provide a way to define a collection of named values, making code more readable and maintainable.

// Numeric Enums
enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right // 3
}

console.log(Direction.Up); // Output: 0
console.log(Direction.Down); // Output: 1
console.log(Direction.Left); // Output: 2
console.log(Direction.Right); // Output: 3

// String Enums
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

console.log(Color.Red);             // Output: "RED"
console.log(Color.Green);           // Output: "GREEN"
console.log(Color.Blue);            // Output: "BLUE"

// Heterogeneous Enums (mixing numeric and string values)
enum MixedEnum {
    No = 0,
    Yes = "YES"
}

console.log(MixedEnum.No);          // Output: 0
console.log(MixedEnum.Yes);         // Output: "YES"        

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

console.log(Role.Admin);            // Output: "ADMIN"
console.log(Role.User);             // Output: "USER"
console.log(Role.Guest);            // Output: "GUEST"