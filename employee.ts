// Employee Interface
interface Employee {
    name: string;
    id: number;
    role: string;
    getDetails(): string;
}

// Manager Class
class Manager implements Employee {
    constructor(public name: string, public id: number, public role: string, public department: string) {}
    
    getDetails(): string {
        return `Manager: ${this.name}, ID: ${this.id}, Role: ${this.role}, Department: ${this.department}`;
    }
}

// Developer Class
class Developer implements Employee {
    constructor(public name: string, public id: number, public role: string, public programmingLanguages: string[]) {}
    
    getDetails(): string {
        return `Developer: ${this.name}, ID: ${this.id}, Role: ${this.role}, Languages: ${this.programmingLanguages.join(", ")}`;
    }
}

// Creating instances
const manager1 = new Manager("Spandan Deb", 201, "Manager", "IT");
const developer1 = new Developer("Kevin", 202, "Developer", ["TypeScript", "JavaScript", "Python"]);

// Output
console.log(manager1.getDetails());
console.log(developer1.getDetails());
