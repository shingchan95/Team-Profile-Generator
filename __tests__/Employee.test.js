const Employee = require("../lib/Employee");


describe("employee", () => {
    describe("employee_test", () => {
        it("test the constructor", () => {
            
            const employee_name= "Tommy"
            const id = "2022";
            const email = "tommy@bootcamp.com";
            const role = "employee";
            
            const employee_profile= new Employee(employee_name, id,email)
       
        expect(employee_profile.getName()).toEqual(employee_name);
        expect(employee_profile.getId()).toEqual(id);
        expect(employee_profile.getEmail()).toEqual(email);
        expect(employee_profile.getRole()).toEqual(role);
        });
    })
})

