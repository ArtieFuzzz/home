<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";

  const props: { link: string; name: string; icon: string } = $props();
</script>

<a
  href={props.link}
  class="inline-flex items-center text-base font-body font-normal text-white gap-3"
  ><Icon icon={props.icon} width={24} height={24} />
  <span>{props.name}</span></a
>
