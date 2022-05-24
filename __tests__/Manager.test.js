const Manager = require("../lib/Manager");

describe("Manager", () => {

    describe("Manager_test", () => {
        it("test the constructor", () => {
            
            const employee_name= "Alex"
            const id = "2032";
            const email = "alex@bootcamp.com";
            const officeNumber = "01612389932"
            const role = "Manager";
            
            const engineer_profile= new Manager(employee_name, id, email, officeNumber)
       
        expect(engineer_profile.getName()).toEqual(employee_name);
        expect(engineer_profile.getId()).toEqual(id);
        expect(engineer_profile.getEmail()).toEqual(email);
        expect(engineer_profile.getOfficeNumber()).toEqual(officeNumber);
        expect(engineer_profile.getRole()).toEqual(role);
        });
    })
})