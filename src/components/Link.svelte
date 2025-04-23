<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";

  const props: { link: string; name: string; icon: IconifyIcon } = $props();
</script>

<a
  href={props.link}
  class="inline-flex items-center text-base font-body font-normal text-white"
  ><Iconify icon={props.icon} width={24} height={24} />{props.name}</a
>
