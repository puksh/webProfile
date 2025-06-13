<script setup>
	defineProps({
		src: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<img class="user-profile-picture" :src="src" />
</template>

<style scoped>
	.user-profile-picture {
		width: var(--profile-picture-size);
		height: var(--profile-picture-size);
		border-radius: 6%;
		border: solid 5px #fff;
		transform: translateY(-56px);
		background-color: #fff;
		margin: 0px 24px 0px 8px;
		animation: fadeIn 0.3s ease-out forwards;
	}

	@media (max-width: 1024px) {
		.user-profile-picture {
			transform: translateY(-36px);
		}
	}
	@media (max-width: 720px) {
		.user-profile-picture {
			height: var(--profile-picture-mobile-size);
			width: var(--profile-picture-mobile-size);
			margin: 0px 0px -64px 0px;
			transform: translateY(-56px);
		}
	}
</style>
