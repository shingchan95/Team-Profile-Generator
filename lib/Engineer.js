const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(employee_name, id, email, github){
        super(employee_name, id,email)
        this.github= `https://github.com/${github}`
    }

    getGithub(github){
        return `https://github.com/${github}`
    }
    getRole(){
        return "Engineer"
    }

}

module.exports = Engineer;