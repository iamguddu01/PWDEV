let users = [
    {
        name : "govind"
    },
    {},
    null,
    undefined,
    {
        name : "Kishan"
    }
]
users.forEach(e => {
    console.log(e?.name);
});