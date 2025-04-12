// Manager Class
var Manager = /** @class */ (function () {
    function Manager(name, id, role, department) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.department = department;
    }
    Manager.prototype.getDetails = function () {
        return "Manager: ".concat(this.name, ", ID: ").concat(this.id, ", Role: ").concat(this.role, ", Department: ").concat(this.department);
    };
    return Manager;
}());
// Developer Class
var Developer = /** @class */ (function () {
    function Developer(name, id, role, programmingLanguages) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.programmingLanguages = programmingLanguages;
    }
    Developer.prototype.getDetails = function () {
        return "Developer: ".concat(this.name, ", ID: ").concat(this.id, ", Role: ").concat(this.role, ", Languages: ").concat(this.programmingLanguages.join(", "));
    };
    return Developer;
}());
// Creating instances
var manager1 = new Manager("Spandan Deb", 201, "Manager", "IT");
var developer1 = new Developer("Kevin", 202, "Developer", ["TypeScript", "JavaScript", "Python"]);
// Output
console.log(manager1.getDetails());
console.log(developer1.getDetails());
