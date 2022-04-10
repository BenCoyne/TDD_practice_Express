const validatePassword = require("./validatePassword");

describe("validatePassword", () => {
	it("returns false when given an empty string", () => {
		expect(validatePassword("")).toBe(false);
	});

	it("returns true given a password 8 chars or longer, a letter and a number", () => {
		expect(validatePassword("a1234567")).toBe(true);
	});
});
