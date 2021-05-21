<template>
	<div>
		<h1>{{ datos }}</h1>

		<h1 v-for="user in users" v-bind:key="user">{{ user }}</h1>
		<h1 v-if="nombre == 'Matias'">Nombre Correcto</h1>
		<HelloWorld />
		<button @click="mostrarDatos()">Mostrar Nombre</button>
	</div>
</template>

<script>
	import HelloWorld from "./HelloWorld";
	export default {
		props: ["auth"],
		components: {
			HelloWorld,
		},
		data: () => ({
			nombre: "Matias",
			apellido: "Diaz",
			mail: "julietadiaz@gmail.com",
			users: ["Pedro", "Matias", "Carlos", "LALALA"],
			usuario: Object,
			municipio: [],
			localidades: [],
		}),
		mounted() {
			console.log("Hola chiques");
			//UNA LLAMADA A UNA API QUE CARGUE EN LA VARIABLE LOCAL MUNICIPIO = TODOS LOS MUNICIO
		},
		methods: {
			mostrarDatos() {
				this.mostrarNombre();
				this.mostrarApellido();
				this.setearNombre("CARLITOS");
				this.mostrarNombre();
			},
			mostrarNombre() {
				console.log(this.nombre);
				console.log(this.auth);
			},
			mostrarApellido() {
				console.log(this.apellido);
			},
			setearNombre(nombreParam) {
				this.nombre = nombreParam;
			},
		},
		computed: {
			datos() {
				return this.nombre + " " + this.apellido + " " + this.mail;
			},
		},
		watch: {
			datos() {
				console.log("aca cambio datos");
			},
			nombre() {
				console.log("aca cambio nombre");
			},
			municipio() {},
		},
	};
</script>
