<script lang="ts">
  let props: { title: string; description: string } = $props();
</script>

<div class="flex flex-col">
  <h3 class="text-lg font-medium text-white font-heading">
    <p>{props.title}</p>
  </h3>

  <p class="text-base font-normal text-white font-body">{props.description}</p>
</div>
