const Intern = require("../lib/Intern");

describe("intern_test", () => {

    describe("intern_name_test", () => {
        it("should show intern name", () => {
        const employee_name = "Tommy";     
        const result = new Intern().getName(employee_name);
        expect(result).toEqual(employee_name);
        });
    })

    describe("intern_id_test", () => {
        it("should show intern id", () => {
        const id = "2022";
        const result = new Intern().getId(id);
        expect(result).toEqual(id);
        });
    })
    describe("intern_email_test", () => {
        it("should show intern email", () => {
        const email = "tommy@bootcamp.com";
        const result = new Intern().getEmail(email);     
        expect(result).toEqual(email);
        });
    })
    describe("intern_role", () => {
        it("should show intern role", () => {
        const role = "Intern";
        const result = new Intern().getRole(role);     
        expect(result).toEqual(role);
        });
    })
    describe("intern_school", () => {
        it("should show intern school", () => {
        const school = "University of manchester";
        const result = new Intern().getSchool(school);     
        expect(result).toEqual(school);
        });
    })
})