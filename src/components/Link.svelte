<script lang="ts">
import "iconify-icon"; // Create some animation thingymabob

const props: { link: string; name: string; icon: string } = $props();
</script>

<a
  href={props.link}
  class="inline-flex items-center text-base font-body font-normal text-white gap-3"
>
  <iconify-icon icon={props.icon} width="24" height="24"></iconify-icon>
  <span>{props.name}</span></a
>
