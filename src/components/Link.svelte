<script lang="ts">
  // TODO: Rename to SocialProfile.svelte
  import "iconify-icon"; // Create some animation thingymabob
  import { LinkType } from "$lib/links";

  const props: { link: string; name: string; icon: string; type: LinkType } =
    $props();
</script>

<a
  href={props.link}
  rel={props.type}
  class="inline-flex items-center text-base font-normal text-white gap-3"
>
  <iconify-icon icon={props.icon} width="24" height="24"></iconify-icon>
  <span>{props.name}</span></a
>
