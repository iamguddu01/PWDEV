// Index Type => allows you to access the type of a property of an object type using the syntax TypeName['propertyName']. This is useful for creating new types based on existing types or for extracting specific types from complex types.
type Usr = {
    name : string,
    age : number,
    address : {
        street : string,
        city : string,
        country : string
    }
};

type name = Usr['name'];
type age = Usr['age'];
type address1 = Usr['address'];
type street = Usr['address']['street'];

