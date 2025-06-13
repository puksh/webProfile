<script setup>
	import { onMounted } from "vue";
	import { useUser } from "@/composables/useUser";
	import { downloadUserDataAsJson } from "@/utils/downloadUtils";
	import UserProfilePicture from "./UserProfilePicture.vue";
	import UserProfileHeader from "./UserProfileHeader.vue";
	import UserDescription from "./UserDescription.vue";
	import Button from "./common/Button.vue";

	const { user, isLoading, fetchUserData } = useUser();

	const displayButtonFetchContent = () => {
		return isLoading.value ? "⟳" : "Pobierz dane użytkownika";
	};

	const handleFetchUserData = async () => {
		await fetchUserData();
	};

	onMounted(() => {
		handleFetchUserData();
	});
</script>

<template>
	<div class="user-profile">
		<div class="user-profile-header">
			<UserProfilePicture :src="user.profilePicture" />
			<Button v-if="user" class="button-fetch-data" :disabled="isLoading" @click="downloadUserDataAsJson(user)">
				{{ displayButtonFetchContent() }}
			</Button>
			<UserProfileHeader :user="user" />
		</div>
		<UserDescription :description="user.about" />
	</div>
</template>

<style scoped>
	.user-profile {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.user-profile-header {
		display: flex;
		flex-direction: row;
		width: 90%;
		max-width: 1344px;
		background-color: var(--primary-color);
		color: #fff;
		z-index: 1;
		margin-bottom: 0px;
		height: 240px;
		padding: 24px 24px 16px 24px;
		border-radius: 16px;
		box-shadow: 8px 4px 24px 0px rgba(0, 0, 0, 0.25);
		font-size: 18px;
		position: relative;
	}

	.button-fetch-data {
		position: absolute;
		right: 32px;
		top: 32px;
		min-width: 220px;
		min-height: 32px;
	}

	@media (max-width: 1024px) {
		.user-profile-header {
			flex-direction: row;
			align-items: center;
			text-align: center;
		}
	}

	@media (max-width: 720px) {
		.user-profile-header {
			flex-direction: column;
			justify-items: center;
			width: 80%;
			height: auto;
		}

		.button-fetch-data {
			position: relative;
			margin: 32px 0px 0px 0px;
			align-self: center;
			top: auto;
			right: auto;
			width: auto;
		}
	}
</style>
