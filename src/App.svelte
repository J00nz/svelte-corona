<script>
	import { Countries } from './store'
	import Popup from './Popup.svelte'

	let selected = null

	const onClick = (country) => {
		return () => selected = country
	}

	const onClose = () => {
		selected = false
	}
</script>

<style>
	.country {
		cursor: pointer; 
	}
</style>

<div>
	{#each $Countries as country }
		<div>
			<span class="country" on:click={onClick(country)}>
				<span>
					{country.Country}
				</span>
				<span>
					Confirmed: {country.TotalConfirmed}
				</span>
				<span>
					Dead: {country.TotalDeaths}
				</span>
			</span>
		</div>
	{/each}
</div>

{#if selected}
	<Popup {...{ onClose, country: selected }} />
{/if}
