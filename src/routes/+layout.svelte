<script lang="ts">
  import "../main.css";

  const { children } = $props();
</script>

<svelte:head>
  <title>artiefuzzz</title>

  <link rel="icon" type="image/webp" href="/favicon.webp" />

  <script
    defer
    data-domain="dev.astolfo.cafe"
    src="https://analytics.astolfo.cafe/js/script.js"
  ></script>

  <meta property="og:title" content="ArtieFuzzz" />
  <meta property="og:site_name" content="dev.astolfo.cafe" />
  <meta property="og:url" content="https://dev.astolfo.cafe" />
  <meta property="og:description" content="My home on the Internet." />
  <meta property="og:locale" content="en_US" />

  <meta property="twitter:title" content="dev.astolfo.cafe" />
  <meta property="twitter:creator" content="Artie" />
  <meta property="twitter:description" content="My home on the Internet." />
</svelte:head>

<div class="flex flex-row w-screen h-screen">
  {@render children()}
</div>
