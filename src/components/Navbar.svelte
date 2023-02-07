<script lang="ts">
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

<nav class="flex justify-start md:gap-6 gap-4 break-keep">
	{#each items as { href, text }, i (i)}
		<a {href} class="hover:text-light transition-all hover:font-semibold">{text}</a>
		{#if i < items.length - 1}
			<p class="text-primary font-bold text-lg">|</p>
		{/if}
	{/each}
</nav>
