class ImmutableUser {
   constructor(public readonly name: string, public readonly Id: number) {}
}
const im1 = new ImmutableUser("Alice", 1);
console.log(im1.name); // Output: Alice
console.log(im1.Id); // Output: 1
// im1.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
// im1.Id = 2; // Error: Cannot assign to 'Id' because it is a read-only property.