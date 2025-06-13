import { ref } from "vue";
import { userApi, handleApiCall } from "@/services/userApi";
import { downloadUserDataAsJson } from "@/utils/downloadUtils";

export function useUser() {
	const user = ref({
		id: 1,
		name: "",
		surname: "",
		email: "",
		phone: "",
		profilePicture: "",
		about: "",
	});
	const error = ref(null);
	const isLoading = ref(false);

	const fetchUserData = async () => {
		isLoading.value = true;
		try {
			const responseData = await handleApiCall(() => userApi.fetchUser());
			updateUserData(responseData.data);
		} catch (error) {
			alert("Wystąpił problem z siecią. Spróbuj ponownie.");
		} finally {
			isLoading.value = false;
		}
	};

	const updateUserData = (userData) => {
		user.value.id = userData.id;
		user.value.name = userData.name;
		user.value.surname = userData.surname;
		user.value.email = userData.email;
		user.value.phone = userData.phone;
		user.value.about = userData.about || "";
		user.value.profilePicture = userData.image
			? `${userData.image.baseUrl}${userData.image.filename}.${userData.image.extension}`
			: "";
	};

	return {
		user,
		isLoading,
		error,
		fetchUserData,
	};
}
