var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, studentId, grade) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
    }
    Student.prototype.getDetails = function () {
        return "Student: ".concat(this.name, ", ID: ").concat(this.studentId, ", Grade: ").concat(this.grade);
    };
    return Student;
}());
// Subclass: GraduateStudent
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent(name, studentId, grade, thesisTopic) {
        var _this = _super.call(this, name, studentId, grade) || this;
        _this.thesisTopic = thesisTopic;
        return _this;
    }
    GraduateStudent.prototype.getDetails = function () {
        return "Graduate Student: ".concat(this.name, ", ID: ").concat(this.studentId, ", Grade: ").concat(this.grade, ", Thesis: ").concat(this.thesisTopic);
    };
    GraduateStudent.prototype.getThesisTopic = function () {
        return "Thesis Topic: ".concat(this.thesisTopic);
    };
    return GraduateStudent;
}(Student));
// Independent Class: LibraryAccount
var LibraryAccount = /** @class */ (function () {
    function LibraryAccount(accountId, booksIssued) {
        this.accountId = accountId;
        this.booksIssued = booksIssued;
    }
    LibraryAccount.prototype.getLibraryInfo = function () {
        return "Library Account ID: ".concat(this.accountId, ", Books Issued: ").concat(this.booksIssued);
    };
    return LibraryAccount;
}());
// Composition: Associating LibraryAccount with Student
var StudentWithLibrary = /** @class */ (function () {
    function StudentWithLibrary(student, libraryAccount) {
        this.student = student;
        this.libraryAccount = libraryAccount;
    }
    StudentWithLibrary.prototype.getStudentAndLibraryInfo = function () {
        return "".concat(this.student.getDetails(), "\n").concat(this.libraryAccount.getLibraryInfo());
    };
    return StudentWithLibrary;
}());
// Creating instances
var student1 = new Student("Spandan", 13, "A");
var gradStudent1 = new GraduateStudent("Sagar", 102, "A+", "Machine Learning");
var libraryAccount1 = new LibraryAccount(5001, 3);
// Associating LibraryAccount with Student using composition
var studentWithLibrary = new StudentWithLibrary(student1, libraryAccount1);
// Output
console.log(student1.getDetails());
console.log(gradStudent1.getDetails());
console.log(gradStudent1.getThesisTopic());
console.log(libraryAccount1.getLibraryInfo());
console.log(studentWithLibrary.getStudentAndLibraryInfo());
