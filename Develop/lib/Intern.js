// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "Intern");
    this.school = school;
  }
  
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;

// const intern = new Intern("Marsha", 19, "marsha@gmail.com", "DU");
// console.log(intern.getName());
// console.log(intern.getId());
// console.log(intern.getEmail());
// console.log(intern.getRole());
// console.log(intern.getSchool());