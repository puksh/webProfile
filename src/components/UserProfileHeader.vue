<script setup>
	import Button from "./common/Button.vue";
	import { ref } from "vue";
	import { formatPhone } from "@/utils/phoneUtils";

	const props = defineProps({
		user: {
			type: Object,
			required: true,
		},
	});

	const isPhoneShown = ref(false);

	const togglePhoneVisibility = () => {
		isPhoneShown.value = !isPhoneShown.value;
	};

	const displayPhone = () => {
		return formatPhone(props.user.phone, isPhoneShown.value);
	};
</script>

<template>
	<div class="user-profile-details">
		<h1 v-if="user.name && user.surname">
			<span>{{ user.name }}</span> <span>{{ user.surname }}</span>
		</h1>
		<p v-if="user.email">
			Email: <a class="email-link" :href="`mailto:${user.email}`">{{ user.email }}</a>
		</p>
		<p v-if="user.phone" class="phone-number">
			Numer telefonu:
			<span>{{ displayPhone() }}</span>
			<Button @click="togglePhoneVisibility" class="button-show-phone">
				{{ isPhoneShown ? "Ukryj telefon" : "Pokaż telefon" }}
			</Button>
		</p>
	</div>
</template>

<style scoped>
	.user-profile-details {
		margin: -8px 0px 0px 0px;
		transition: all 0.3s ease-in-out;
	}
	.user-profile-details h1,
	.user-profile-details p {
		animation: fadeIn 0.3s ease-out forwards;
	}
	.email-link {
		color: #53b4e3;
		text-decoration: none;
	}

	.phone-number {
		min-width: 316px;
		position: relative;
	}

	.button-show-phone {
		transform: translateY(2px);
		margin-left: 4px;
		padding: 4px;
		font-size: x-small;
		border-radius: 0;
	}

	@media (max-width: 1024px) {
		.user-profile-details {
			flex-direction: column;
			text-align: left;
			font-size: 16px;
			margin: 0px;
		}
	}
</style>
