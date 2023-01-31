<script lang="ts">
	import { contact } from '$lib/stores';

	const items = [
		{
			href: '/work',
			text: 'Mi trabajo'
		},
		{
			href: '/about-me',
			text: 'Sobre mí'
		},
		{
			href: '/contact',
			text: 'Contacto'
		}
	];
</script>

<!-- FRONTMATTER -->
<div class="w-full h-screen bg-base md:p-20 text-lighter">
	<!-- LEFT -->
	<div class="flex flex-col gap-16 w-1/2">
		<div class="flex flex-col gap-6">
			<!-- NAV BAR -->
			<nav class="flex justify-start gap-6">
				{#each items as { href, text }, i (i)}
					<a {href} class="hover:text-light transition-all hover:font-semibold">{text}</a>
					{#if i < items.length - 1}
						<p class="text-primary font-bold text-lg">|</p>
					{/if}
				{/each}
			</nav>
			<!-- NAV BAR -->

			<!-- HERO -->
			<div class="container flex flex-col gap-6">
				<h1 class="font-semibold text-6xl text-light">Hola, soy Pablo.</h1>
				<h2 class="text-4xl font-light">Soluciono tu vida <br /> en la web.</h2>
			</div>
			<!-- HERO -->
		</div>

		<!-- CALL TO ACTION -->
		<div>
			<button
				class="px-6 py-4 active:scale-95 text-xl hover:scale-105 transition-all text-lighter font-semibold bg-primary rounded-lg"
			>
				Ver mi trabajo
			</button>
		</div>
		<!-- CALL TO ACTION -->

		<!-- CONTACT INFORMATION -->
		<div class="flex flex-col italic text-lg hover:underline gap-4">
			<a href={`tel:${$contact.phoneText}`}>{$contact.phoneFormatted}</a>
			<a href={`mailto:${$contact.phoneText}`}>{$contact.phoneFormatted}</a>
		</div>
		<!-- CONTACT INFORMATION -->
	</div>
	<!-- LEFT -->
</div>
