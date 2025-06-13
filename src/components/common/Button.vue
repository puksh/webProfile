<script setup>
	defineProps({
		disabled: Boolean,
	});
</script>

<template>
	<button class="button" :class="{ 'button-disabled': disabled }">
		<slot></slot>
	</button>
</template>

<style scoped>
	.button {
		font-size: large;
		padding: 4px;
		border-radius: 8px 0px 8px 0px;
		color: #fff;
		background-color: rgb(59, 186, 232);
		border: none;
		transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;
	}
	.button:active {
		background-color: rgb(41, 151, 190);
	}
	.button:hover {
		background-color: rgb(63, 200, 250);
		cursor: pointer;
	}
	.button-disabled {
		background-color: rgb(200, 200, 200);
		cursor: not-allowed;
	}
</style>
