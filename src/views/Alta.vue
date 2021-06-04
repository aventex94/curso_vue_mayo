<template>
	<v-form>
		<v-container>
			<v-row>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="firstName"
						:counter="10"
						label="First name"
						required
					></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field
						v-model="lastName"
						:counter="10"
						label="Last name"
						required
					></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field v-model="email" label="E-mail" required></v-text-field>
					<v-btn class="mt-6" text color="primary" @click="agregar()"> Agregar </v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>
<script>
	export default {
		data: () => ({
			firstName: "",
			lastName: "",
			email: "",
		}),
		mounted() {},
		methods: {
			agregar() {
				this.$store.dispatch("setFirstName", this.firstName);
			},
		},
	};
</script>
