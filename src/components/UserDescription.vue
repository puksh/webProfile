<script setup>
	import Button from "./common/Button.vue";
	import { ref } from "vue";

	const props = defineProps({
		description: {
			type: String,
			default: "",
		},
	});

	const isDescriptionExpanded = ref(false);

	const toggleUserDescription = () => {
		isDescriptionExpanded.value = !isDescriptionExpanded.value;
	};

	const displayDescription = () => {
		if (!props.description) return "Brak opisu";

		if (isDescriptionExpanded.value) {
			return props.description;
		} else {
			const firstParagraph = props.description.split("\n\n")[0];
			return firstParagraph;
		}
	};
</script>

<template>
	<div class="user-profile-card-2">
		<h4 v-if="description" class="description">{{ displayDescription() }}</h4>
		<Button v-if="description" @click="toggleUserDescription" class="button-expand-description">
			<span>
				{{ isDescriptionExpanded ? "Schowaj opis" : "Rozwiń opis" }}
			</span>
		</Button>
	</div>
</template>

<style scoped>
	.user-profile-card-2 {
		width: 80%;
		max-width: 1264px;
		background-color: var(--secondary-color);
		z-index: 0;
		margin: 0px 5% 0px 5%;
		padding: 24px 24px 0 24px;
		border-radius: 0 0 12px 12px;
		box-shadow: 8px 4px 24px 0px rgba(0, 0, 0, 0.25);
	}

	.button-expand-description {
		margin: 0px 0px 32px 0px;
		animation: fadeIn 0.3s ease-out forwards;
	}
	.description {
		transition: all 0.6s ease-in-out;
		animation: fadeIn 0.3s ease-out forwards;
		white-space: pre-line;
		font-size: 16px;
		color: #000;
		text-align: left;
		margin: 40px 16px 24px 16px;
		word-wrap: break-word;
	}

	@media (max-width: 720px) {
		.user-profile-card-2 {
			margin: 0 auto;
			width: 70%;
		}
		.description {
			margin-bottom: 48px !important;
		}
	}
</style>
