const Engineer = require("../lib/Engineer");

describe("engineer", () => {
    describe("engineer_test", () => {
        it("test the constructor", () => {
            
            const employee_name= "Tony"
            const id = "2022";
            const email = "tony@bootcamp.com";
            const github = "tony95"
            const role = "Engineer";
            
            const engineer_profile= new Engineer(employee_name, id, email, github)
       
        expect(engineer_profile.getName()).toEqual(employee_name);
        expect(engineer_profile.getId()).toEqual(id);
        expect(engineer_profile.getEmail()).toEqual(email);
        expect(engineer_profile.getGithub()).toEqual(github);
        expect(engineer_profile.getRole()).toEqual(role);
        });
    })
 
})

