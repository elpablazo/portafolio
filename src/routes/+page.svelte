<script lang="ts">
	import { contact } from '$lib/stores';
	import Navbar from '$components/Navbar.svelte';
	import IconMessageBubble from '$components/icons/IconMessageBubble.svelte';
	import IconEnvelope from '$components/icons/IconEnvelope.svelte';
	import Button from '$components/form/Button.svelte';

	const sitios = [
		{
			src: '/websites/cxp/front.jpg',
			titulo: 'Capital Experiencias',
			descripcion: 'Una plataforma de experiencias digitales con recompensas en tiempo real.',
			href: 'https://www.capitalexperiencias.com'
		},
		{
			src: '/websites/sholomitos/front.png',
			titulo: 'Sholomitos',
			descripcion: 'Una plataforma de experiencias digitales con recompensas en tiempo real.',
			href: 'https://www.capitalexperiencias.com'
		},
		{
			src: '/websites/pif/front.png',
			titulo: 'Plataforma PIF Liverpool y Suburbia',
			descripcion: 'Una plataforma de experiencias digitales con recompensas en tiempo real.',
			href: 'https://www.capitalexperiencias.com'
		}
	];
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
<div class="min-h-screen w-full gap-8 bg-light p-4 md:p-8">
	<div class="flex w-full flex-col gap-2 pb-6 md:pb-12">
		<h1 class="text-center text-3xl font-bold text-based md:text-5xl">¿Necesitas un sitio web?</h1>
		<h2 class="text-center text-xl text-based md:text-2xl">
			Diseños altamente <span class="text-primary">interactivos</span>, hechos a mano para la web
			<span class="text-primary">moderna</span>.
		</h2>
	</div>

	<!-- GRID DE SITIOS -->
	<div class="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
		{#each sitios as { src, titulo, descripcion, href }, i}
			<!-- CXP -->
			<a
				{href}
				target="_blank"
				rel="noreferrer"
				class="group relative overflow-hidden rounded-2xl drop-shadow-lg transition-all active:scale-95"
			>
				<img
					{src}
					alt={`Sitio web de ${titulo}`}
					class="h-max w-full rounded-2xl shadow transition-all"
				/>
				<div
					class={`absolute -bottom-96 w-full ${
						i % 2 === 0 ? 'bg-based' : 'bg-primary'
					} px-4 py-4 shadow drop-shadow-lg transition-all group-hover:bottom-0 active:group-hover:bottom-0`}
				>
					<h3 class="text-lg font-bold text-light md:text-xl">{titulo}</h3>
					<p class="text-lighter md:text-lg">
						{descripcion}
					</p>
				</div>
			</a>
			<!-- CXP -->
		{/each}
	</div>
	<!-- GRID DE SITIOS -->
</div>
<!-- LO QUE HAGO -->
