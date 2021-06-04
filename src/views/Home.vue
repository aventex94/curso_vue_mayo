<template>
	<div>
		<h1>La temperatura de hoy es: {{ temperatura }}</h1>
		<v-btn class="mt-6" text color="primary" @click="dameTemperatura()">
			DAME TEMPERATURA
		</v-btn>
	</div>
</template>

<script>
	import tempService from "../services/tempService";
	export default {
		name: "Home",
		data: () => ({
			temperatura: null,
		}),
		components: {},

		mounted() {
			this.temperatura = localStorage.getItem("temperatura");
		},

		methods: {
			dameTemperatura() {
				tempService
					.getTemperature()
					.then((response) => {
						this.temperatura = response;
						this.$store.dispatch("setearTemperatura", response);
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>
