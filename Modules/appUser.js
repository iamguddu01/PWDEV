const users = [];
function addUser (user) {
    users.push(user);
}
function listuser (){
    return users;
}
module.exports = {
    addUser,
    listuser
}