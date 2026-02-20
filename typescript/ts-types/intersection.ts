// Intersection Types
type User = {
    id: number;
    name: string;
    mobileNo: string;
    email: string;
}

type AdminPermission = {
    AdminPermission: true;
}

type admin = User & AdminPermission;

const adminUser: admin = {
    id: 1,
    name: "John Doe",
    mobileNo: "1234567890",
    email: "john.doe@example.com",
    AdminPermission: true
};

function getAdminInfo(admin: admin) {
    console.log(`Admin Name: ${admin.name}`);
    console.log(`Admin Email: ${admin.email}`);
    console.log(`Admin Mobile: ${admin.mobileNo}`);
    console.log(`Admin Permission: ${admin.AdminPermission}`);
}

getAdminInfo(adminUser);

type formData = {
    email: string;
}
type validation = {
    isValid: boolean;
}
type formInput = formData & validation;

const userFormInput: formInput = {
    email: "jane.doe@example.com",
    isValid: true
};

type product = {
    id: number;
    name: string;
    price: number;
}
type discount = {
    discountPercentage: number;
}
type discountedProduct = product & discount;

const discountedItem: discountedProduct = {
    id: 101,
    name: "Laptop",
    price: 999.99,
    discountPercentage: 10
};

function calculateDiscountedPrice(item: discountedProduct): number {
    const discountAmount = (item.price * item.discountPercentage) / 100;
    return item.price - discountAmount;
}

const finalPrice = calculateDiscountedPrice(discountedItem);
console.log(`Final Price after Discount: $${finalPrice.toFixed(2)}`);

type readPermission = {
    canRead: boolean;
}
type writePermission = {
    canWrite: boolean;
}
type userPermission = readPermission & writePermission;

const userAccess: userPermission = {
    canRead: true,
    canWrite: false
};

function checkUserAccess(permission: userPermission) {
    console.log(`Can Read: ${permission.canRead}`);
    console.log(`Can Write: ${permission.canWrite}`);
}

checkUserAccess(userAccess);




type employee = {
    id: number;
    name: string;
    department: string;
}

type address = {
    street: string;
    city: string;
    country: string;
}

type employeeDetails = employee & address;

const employeeInfo: employeeDetails = {
    id: 1,
    name: "Alice Smith",
    department: "HR",
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
};

function displayEmployeeDetails(details: employeeDetails) {
    console.log(`Employee Name: ${details.name}`);
    console.log(`Department: ${details.department}`);
    console.log(`Address: ${details.street}, ${details.city}, ${details.country}`);
}

displayEmployeeDetails(employeeInfo);

// Creating a logger
type logger = {
    log: (message: string) => void;
};
type errorLogger = {
    logError: (error: string) => void;
};
type combinedLogger = logger & errorLogger;

const myLogger: combinedLogger = {
    log: (message: string) => console.log(`Log: ${message}`),
    logError: (error: string) => console.error(`Error: ${error}`)
};

myLogger.log("This is a log message.");
myLogger.logError("This is an error message.");


type Entity = {
    id: number;
};
type hardDelete = {
    deletedAt: Date;
};
type softDelete = {
    deletedAt?: Date; // Not compulsory for soft delete
};
type dbRecord1 = Entity & hardDelete;
type dbRecord2 = Entity & softDelete;

const record1: dbRecord1 = {
    id: 1,
    deletedAt: new Date() // Hard delete
};

const record2: dbRecord2 = {
    id: 2,
    deletedAt: undefined // Soft delete
};
