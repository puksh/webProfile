const API_BASE_URL = import.meta.env.VITE_API_URL;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const backOff = 200;
const retryCall = async (fn, retries = 5) => {
	try {
		return await fn();
	} catch (error) {
		if (retries === 0) throw error;
		await wait(backOff);
		return retryCall(fn, retries - 1);
	}
};

export const userApi = {
	async fetchUser() {
		return retryCall(async () => {
			const response = await fetch(`${API_BASE_URL}/user/`);
			if (!response.ok) {
				throw new Error("Failed to fetch user data");
			}
			return response.json();
		});
	},
};

export const handleApiCall = async (apiCall, minLoadingTime = 500) => {
	const start = performance.now();
	try {
		const response = await retryCall(apiCall);
		const end = performance.now();
		const timePassed = end - start;

		if (timePassed < minLoadingTime) {
			await wait(minLoadingTime - timePassed);
		}

		return response;
	} catch (error) {
		throw error;
	}
};
