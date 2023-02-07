<script lang="ts">
	import { contact } from '$lib/stores';
	import Navbar from '$components/Navbar.svelte';
	import IconMessageBubble from '$components/icons/IconMessageBubble.svelte';
	import IconEnvelope from '$components/icons/IconEnvelope.svelte';
	import Button from '$components/form/Button.svelte';
</script>

<!-- FRONTMATTER -->
<div
	class="flex min-h-screen w-full flex-col justify-evenly bg-based px-8 text-lighter md:flex-row md:justify-start md:p-20"
>
	<!-- NAVBAR: MOBILE -->
	<div class="mx-auto py-4 md:hidden"><Navbar /></div>
	<!-- NAVBAR: MOBILE -->

	<!-- TEXTO -->
	<div class="order-last flex flex-col gap-16 md:order-first md:w-1/2">
		<div class="flex flex-col gap-6">
			<!-- NAV BAR: DESKTOP -->
			<div class="hidden md:flex"><Navbar /></div>
			<!-- NAV BAR: DESKTOP -->

			<!-- HERO -->
			<div class="container flex flex-col gap-4 text-center md:px-0 md:text-left">
				<h1 class="text-4xl font-semibold text-light md:text-6xl">Hola, soy Pablo.</h1>

				<h2 class="text-xl font-light md:text-4xl">
					Convierto ideas en experiencias digitales sorprendentes.
				</h2>
			</div>
			<!-- HERO -->
		</div>

		<!-- CALL TO ACTION -->
		<div class="mx-auto md:mx-0">
			<Button>Ver mi trabajo</Button>
		</div>
		<!-- CALL TO ACTION -->

		<!-- CONTACT INFORMATION -->
		<div class="flex flex-col items-end gap-4 italic md:items-start">
			<div class="flex flex-row items-center gap-2">
				<IconMessageBubble />
				<a
					href={`tel:${$contact.phoneText}`}
					class="order-first text-lg hover:underline md:order-last">{$contact.phoneFormatted}</a
				>
			</div>

			<div class="flex flex-row items-center gap-2">
				<IconEnvelope />
				<a
					href={`mailto:${$contact.email}`}
					class="order-first text-lg hover:underline md:order-last">{$contact.email}</a
				>
			</div>
		</div>
		<!-- CONTACT INFORMATION -->
	</div>
	<!-- TEXTO -->

	<!-- FOTO -->
	<div class="flex flex-col justify-center px-4 md:w-1/2 md:justify-end md:px-0">
		<img
			src="/yo.jpg"
			alt="El creador del sitio."
			class="w-8/12 self-center rounded-full shadow md:self-end"
		/>

		<p class="hidden w-full text-end italic md:block">
			Desarrollador {' '}<span class="text-primary">/</span> <br /> Diseñador de UI/UX
		</p>
	</div>
	<!-- FOTO -->
</div>
<!-- FRONTMATTER -->


<!-- LO QUE HAGO -->
<div class="min-h-screen w-full bg-light p-8">
	<div class="container flex flex-col gap-16 md:flex-row">
		<div class="flex flex-col gap-8">
			<h2 class="text-4xl font-semibold text-baseder">¿Qué hago?</h2>

			<p class="text-xl text-based">
				Desarrollo aplicaciones web y móviles, diseño interfaces de usuario y experiencias
				digitales.
			</p>
		</div>
		
		<div class="flex flex-col gap-8">
			<h2 class="text-4xl font-semibold text-baseder">¿Cómo lo hago?</h2>
			
			<p class="text-xl text-based">
				Utilizando las últimas tecnologías y metodologías de desarrollo de software.
			</p>
		</div>
		
		<div class="flex flex-col gap-8">
			<h2 class="text-4xl font-semibold text-baseder">¿Por qué lo hago?</h2>
			
			<p class="text-xl text-based">
				Porque me gusta crear cosas que ayuden a las personas a resolver sus problemas.
			</p>
		</div>
	</div>
</div>
<!-- LO QUE HAGO -->
