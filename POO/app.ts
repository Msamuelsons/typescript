class User {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const user = new User('Marcos', 22);

user.showName();

const otherUser = new User('Samuel', 30);
otherUser.showName();