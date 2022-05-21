const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(github){
        super(employee_email, employee_id, employee_name)
        this.github= github
    }

    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }

}

module.exports = Engineer;