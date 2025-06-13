export const downloadUserDataAsJson = (userData) => {
	if (!userData || userData.error || userData.isError) return;
	try {
		const dataStr = JSON.stringify(userData, null, 2);
		const link = document.createElement("a");
		link.href = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
		link.download = `user-${userData.id || "unknown"}-data.json`;
		link.click();
	} catch (error) {
		alert("Wystąpił problem podczas pobierania danych użytkownika. Spróbuj ponownie.");
	}
};
