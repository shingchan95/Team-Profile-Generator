const Employee = require("./Employee")

class Manager extends Employee {
    constructor(officeNumber){
        super(employee_email, employee_id, employee_name)
        this.officeNumber= officeNumber
    }


    getRole(){
        return "Manager"
    }

}

module.exports = Manager;