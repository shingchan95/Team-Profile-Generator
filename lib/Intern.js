const Employee = require("./Employee")

class Intern extends Employee {
    constructor(school){
        super(employee_email, employee_id, employee_name)
        this.school= school
    }

    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }

}

module.exports = Intern;