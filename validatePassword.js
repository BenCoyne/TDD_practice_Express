function validatePassword(password) {
	const lengthCheck = password.length >= 8;
	const letterCheck = /[a-zA-Z]/g.test(password);
	const numberCheck = /[0-9]/g.test(password);

	return lengthCheck && letterCheck && numberCheck;
}

module.exports = validatePassword;
