<script lang="ts">
	import { contact } from '$lib/stores';
	import Navbar from '$components/Navbar.svelte';
	import IconMessageBubble from '$components/icons/IconMessageBubble.svelte';
	import IconEnvelope from '$components/icons/IconEnvelope.svelte';
</script>

<!-- FRONTMATTER -->
<div class="w-full h-screen bg-base md:p-20 text-lighter flex flex-col md:flex-row">
	<!-- LEFT -->
	<div class="flex flex-col md:w-1/2 gap-16">
		<div class="flex flex-col gap-6">
			<!-- NAV BAR -->
			<Navbar />
			<!-- NAV BAR -->

			<!-- HERO -->
			<div class="container flex flex-col gap-4">
				<h1 class="font-semibold text-6xl text-light">Hola, soy Pablo.</h1>

				<h2 class="text-4xl font-light">
					Convierto ideas en experiencias digitales sorprendentes.
				</h2>
			</div>
			<!-- HERO -->
		</div>

		<!-- CALL TO ACTION -->
		<div>
			<button
				class="px-6 py-4 active:scale-95 text-xl hover:scale-105 transition-all text-lighter font-semibold rounded-lg  bg-primary active:bg-gradient-to-r from-primary to-auxiliar ease-linear"
			>
				Ver mi trabajo
			</button>
		</div>
		<!-- CALL TO ACTION -->

		<!-- CONTACT INFORMATION -->
		<div class="flex flex-col italic gap-4">
			<div class="flex flex-row gap-2 items-center">
				<IconMessageBubble />
				<a href={`tel:${$contact.phoneText}`} class="text-lg hover:underline "
					>{$contact.phoneFormatted}</a
				>
			</div>

			<div class="flex flex-row gap-2 items-center">
				<IconEnvelope />
				<a href={`mailto:${$contact.email}`} class="text-lg hover:underline ">{$contact.email}</a>
			</div>
		</div>
		<!-- CONTACT INFORMATION -->
	</div>
	<!-- LEFT -->

	<!-- RIGHT -->
	<div class="md:w-1/2 justify-end flex flex-col">
		<img src="/yo.jpg" alt="El creador del sitio." class="w-8/12 rounded-full shadow self-end" />

		<p class="italic text-end w-full">
			Desarrollador {' '}<span class="text-primary">/</span> <br /> Diseñador de UI/UX
		</p>
	</div>
	<!-- RIGHT -->
</div>
