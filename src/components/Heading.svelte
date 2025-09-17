<script lang="ts">
  const props: { title: string; description: string } = $props();
</script>

<div class="flex flex-col">
  <h3 class="text-lg font-medium text-white">
    <p>{props.title}</p>
  </h3>

  <p class="text-base font-normal text-white">{props.description}</p>
</div>
