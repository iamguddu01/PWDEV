const user = {
    name: "vandana",
    greet: function() {     // this -> user
        const innerFunc = () => {           // lexical/forceful binding: this -> user
            console.log("Hi ", this.name);
        }

        innerFunc();
    }
}

user.greet();