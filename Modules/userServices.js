const service = require('./appUser');
service.addUser("Govind");
console.log(service.listuser());

const listUsers = service.listuser();
console.log(listUsers);