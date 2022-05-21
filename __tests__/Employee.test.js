const Employee = require("../lib/Employee");

describe("employee_test", () => {

    describe("employee_name_test", () => {
        it("should show employee name", () => {
        const employee_name = "Tommy";     
        const result = new Employee().getName(employee_name);
        expect(result).toEqual(employee_name);
        });
    })

    describe("employee_id_test", () => {
        it("should show employee id", () => {
        const id = "2022";
        const result = new Employee().getId(id);
        expect(result).toEqual(id);
        });
    })
    describe("employee_email_test", () => {
        it("should show employee email", () => {
        const email = "tommy@bootcamp.com";
        const result = new Employee().getEmail(email);     
        expect(result).toEqual(email);
        });
    })
    describe("employee_role", () => {
        it("should show employee role", () => {
        const role = "employee";
        const result = new Employee().getRole();     
        expect(result).toEqual(role);
        });
    })
})

