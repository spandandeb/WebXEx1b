class Student {
  constructor(public name: string, public studentId: number, public grade: string) {}
  
  getDetails(): string {
      return `Student: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}`;
  }
}

// Subclass: GraduateStudent
class GraduateStudent extends Student {
  constructor(name: string, studentId: number, grade: string, public thesisTopic: string) {
      super(name, studentId, grade);
  }
  
  getDetails(): string {
      return `Graduate Student: ${this.name}, ID: ${this.studentId}, Grade: ${this.grade}, Thesis: ${this.thesisTopic}`;
  }
  
  getThesisTopic(): string {
      return `Thesis Topic: ${this.thesisTopic}`;
  }
}

// Independent Class: LibraryAccount
class LibraryAccount {
  constructor(public accountId: number, public booksIssued: number) {}
  
  getLibraryInfo(): string {
      return `Library Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`;
  }
}

// Composition: Associating LibraryAccount with Student
class StudentWithLibrary {
  constructor(public student: Student, public libraryAccount: LibraryAccount) {}
  
  getStudentAndLibraryInfo(): string {
      return `${this.student.getDetails()}\n${this.libraryAccount.getLibraryInfo()}`;
  }
}

// Creating instances
const student1 = new Student("Spandan", 13, "A");
const gradStudent1 = new GraduateStudent("Sagar", 102, "A+", "Machine Learning");
const libraryAccount1 = new LibraryAccount(5001, 3);

// Associating LibraryAccount with Student using composition
const studentWithLibrary = new StudentWithLibrary(student1, libraryAccount1);

// Output
console.log(student1.getDetails());
console.log(gradStudent1.getDetails());
console.log(gradStudent1.getThesisTopic());
console.log(libraryAccount1.getLibraryInfo());
console.log(studentWithLibrary.getStudentAndLibraryInfo());

