const Manager = require("../lib/Manager");

describe("intern_test", () => {

    describe("intern_name_test", () => {
        it("should show intern name", () => {
        const employee_name = "Tommy";     
        const result = new Manager().getName(employee_name);
        expect(result).toEqual(employee_name);
        });
    })

    describe("intern_id_test", () => {
        it("should show intern id", () => {
        const id = "2022";
        const result = new Manager().getId(id);
        expect(result).toEqual(id);
        });
    })
    describe("intern_email_test", () => {
        it("should show intern email", () => {
        const email = "tommy@bootcamp.com";
        const result = new Manager().getEmail(email);     
        expect(result).toEqual(email);
        });
    })
    describe("intern_role", () => {
        it("should show intern role", () => {
        const role = "Manager";
        const result = new Manager().getRole(role);     
        expect(result).toEqual(role);
        });
    })
})