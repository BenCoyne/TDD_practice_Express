const validatePassword = require("./validatePassword");

describe("validatePassword", () => {
	it("returns false when given an empty string", () => {
		expect(validatePassword("")).toBe(false);
	});

	describe("when password is valid length", () => {
		it("returns true given a password 8 chars or longer, a letter and a number", () => {
			expect(validatePassword("a1234567")).toBe(true);
		});

		it("returns false if password contains less than 1 letter char", () => {
			expect(validatePassword("12345678")).toBe(false);
		});

		it("returns false if password contains less than 1 number char", () => {
			expect(validatePassword("aaaaaaaa")).toBe(false);
		});
	});
});
