<script>
  import { fade } from 'svelte/transition'
  
  export let country
  export let onClose
</script>

<style>
	.overlay {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
	.popup {
		position: fixed;
		top:0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;
		background-color: #fff;
		padding: 2em;
	}
	.popup .close {
		position: absolute;
		top: 0;
		right: 0;
		background-color: #000;
		color: #fff;
		border-radius: 50%;
		width: 1em;
		height: 1em;
		text-align: center;
    cursor: pointer;
	}
</style>

<div class="overlay" on:click={onClose} />
<div class="popup" in:fade>
  <h1>{country.Country}</h1>
  <div>
    <span>
      Confirmed: {country.TotalConfirmed}
    </span>
    <span>
      Dead: {country.TotalDeaths}
    </span>
  </div>
  <div>
    <span>
      Recovered: {country.TotalRecovered}
    </span>
    <span>
      Mortality: {((country.TotalDeaths / country.TotalRecovered) * 50).toFixed(2)}%
    </span>
  </div>
  <div class="close" on:click={onClose}>X</div>
</div>