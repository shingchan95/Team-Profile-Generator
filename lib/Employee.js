class Employee {
    constructor(employee_name, id,email) {
        this.employee_name = employee_name
        this.id = id
        this.email = email
    }

        getName(employee_name) {
            return employee_name
        }
        getId(id) {
            return id
        }
        getEmail(email){
            return email
        }
        getRole(){
            return "employee"
        }
    
}

module.exports = Employee;