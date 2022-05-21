const Engineer = require("../lib/Engineer");

describe("engineer_test", () => {

    describe("engineer_name_test", () => {
        it("should show engineer name", () => {
        const employee_name = "Tommy";     
        const result = new Engineer().getName(employee_name);
        expect(result).toEqual(employee_name);
        });
    })

    describe("engineer_id_test", () => {
        it("should show engineer id", () => {
        const id = "2022";
        const result = new Engineer().getId(id);
        expect(result).toEqual(id);
        });
    })
    describe("engineer_email_test", () => {
        it("should show engineer email", () => {
        const email = "tommy@bootcamp.com";
        const result = new Engineer().getEmail(email);     
        expect(result).toEqual(email);
        });
    })
    describe("engineer_role", () => {
        it("should show engineer role", () => {
        const role = "Engineer";
        const result = new Engineer().getRole(role);     
        expect(result).toEqual(role);
        });
    })
    describe("engineer_github", () => {
        it("should show engineer github", () => {
        const github = "shingchan95";
        const githuburl = `https://github.com/${github}`
        const result = new Engineer().getGithub(github);     
        expect(result).toEqual(githuburl);
        });
    })
})

