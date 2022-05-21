class Employee {
    constructor(employee_name, employee_id,employee_email) {
        this.employee_name = employee_name
        this.employee_id = employee_id
        this.employee_email = employee_email
    }

        getName() {
            return this.employee_name
        }
        getId() {
            return this.employee_id
        }
        getEmail(){
            return this.employee_email
        }
        getRole(){
            return "Employee"
        }
    
}

module.exports = Employee;