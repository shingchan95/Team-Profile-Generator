const Intern = require("../lib/Intern");

describe("intern", () => {
    describe("Intern_test", () => {
        it("test the constructor", () => {
            
            const employee_name= "alex"
            const id = "2022";
            const email = "tony@bootcamp.com";
            const school = "alex high school"
            const role = "Intern";
            
            const engineer_profile= new Intern(employee_name, id, email, school)
       
        expect(engineer_profile.getName()).toEqual(employee_name);
        expect(engineer_profile.getId()).toEqual(id);
        expect(engineer_profile.getEmail()).toEqual(email);
        expect(engineer_profile.getSchool()).toEqual(school);
        expect(engineer_profile.getRole()).toEqual(role);
        });
    })
})