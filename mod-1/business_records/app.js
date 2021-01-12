// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// Name
// Job title
// Salary
// Status
// First, you will create an empty array named employees

// Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time".

// This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

// (e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")

// You will then:

// Instantiate three employees 
// Override the status attribute of one of them to either "Part Time" or "Contract"
// Call the printEmployeeForm method for each employee
// Put the generated employees into the employees array using whichever method you prefer.

//  -----------------------------------------------------------------------------------------------------------------------------------------

employees = []

function Employee(name, jobTitle, salary, statusType){
    this.name = name
    this.jobTitle = jobTitlenode    
    this.salary = salary
    this.statusType = statusType
    this.status = function(){
        console.log(this.statusType)
    }}
    this.printEmployeeForm = function(){
        return `Name: ${name} jobTitle: ${jobTitle} Salary: ${salary} Status: ${statusType}` 
    }

let jimmy = new Employee("Jim", "Boss-man", 100000000, "Full-time");
let marry = new Employee("Marry", "Boss-Lady", 1000000000, "Full-time");
let pablo = new Employee("Pablo", "Painter", 15000, "Part-time");
let chuck = new Employee("Chuck", "Muscle", 25000, "Contract");

jimmy.printEmployeeForm
marry.printEmployeeForm
pablo.printEmployeeForm
chuck.printEmployeeForm

employees.push(jimmy, marry, pablo, chuck)

console.log(employees)

