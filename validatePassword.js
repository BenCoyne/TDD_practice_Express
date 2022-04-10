function validatePassword(password) {
	if (
		password.length >= 8 &&
		/[a-z]/g.test(password) &&
		/[1-9]/g.test(password)
	) {
		return true;
	}
	return false;
}

module.exports = validatePassword;
