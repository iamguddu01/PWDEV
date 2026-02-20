let value: string | number;
value = "Hello";
value = 42;
let apiResponse : string | {error : string} |
{userId : number; userName : string};

apiResponse = "Success";
apiResponse = {error : "Not Found"};
apiResponse = {userId : 1, userName : "John Doe"};

// format function formatValue(value: string | number): string {
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return `String: ${value}`;
    } else {
        return `Number: ${value}`;
    }
}

function format(val: string | number): string {
    return val.toString();
}

type useridType = number | string | boolean | null | undefined;

type userStatus = "active" | "inactive" | "pending";

function getUser(userId : useridType) {
    // Implementation here
}
function updateUser(userId : useridType, newData : any) {
    // Implementation here
}

function updateUserStatus(userId : useridType, status : userStatus) {
    // Implementation here
}
function fileupload(file: File | string) {
    // Implementation here
}
function fileUpload(
    fileContent: string | ArrayBuffer | Blob,
    fileName: string,
    userId: useridType
) {
    // Implementation here
}