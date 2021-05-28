<template>
	<v-form v-model="valid">
		<v-container>
			<v-row>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="firstname"
						:rules="nameRules"
						:counter="10"
						label="First name"
						required
					></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field
						v-model="lastname"
						:rules="nameRules"
						:counter="10"
						label="Last name"
						required
					></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field
						v-model="email"
						:rules="emailRules"
						label="E-mail"
						:error="errorMail"
						required
					></v-text-field>
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
			user: {
				firstName: "",
				lastName: "",
			},
		}),
		methods: {
			verificarEmail() {
				return false;
			},
			agregar() {},
		},
	};
</script>
