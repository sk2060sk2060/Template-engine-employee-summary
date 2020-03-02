// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer");
    this.github = github;  // github => github uername
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;

// const engineer = new Engineer("Michele", 23, "michele@gmail.com", "mc");
// // console.log(`Name: ${engineer.getName()}`);
// console.log(engineer.getName());
// console.log(engineer.getId());
// console.log(engineer.getEmail());
// console.log(engineer.getRole());