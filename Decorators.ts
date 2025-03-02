function Logger(target: Function) {
    console.log("Logging...");
    console.log(target);
}

@Logger
class User {
    
    name: string = "John";
    age: number = 25;
    constructor(){
        console.log("User Created");
    }
    
}


const u = new User();
