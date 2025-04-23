<script lang="ts">
  import "../main.css";

  const { children } = $props();
</script>

<div class="flex flex-row w-screen h-screen">
  {@render children()}
</div>
