export const formatPhone = (phone, isVisible) => {
	if (!phone || typeof phone !== "string" || phone.length < 7) {
		return "";
	}
	return isVisible ? phone : "XXXXXX" + phone.slice(-3);
};
