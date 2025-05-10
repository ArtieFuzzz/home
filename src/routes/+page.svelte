<script lang="ts">
  import { staggeredLinks } from "$lib/motion.svelte";
  import Heading from "../components/Heading.svelte";
  import Link from "../components/Link.svelte";
  import Lanyard from "../components/Lanyard.svelte";

  const profiles: { name: string; icon: string; url: string }[] = [
    {
      name: "GitHub",
      icon: "simple-icons:github",
      url: "https://github.com/ArtieFuzzz",
    },
    {
      name: "SourceHut",
      icon: "simple-icons:sourcehut",
      url: "https://git.sr.ht/~artiefuzzz",
    },
    {
      name: "Email",
      icon: "mdi:email-outline",
      url: "mailto:hey@astolfo.cafe",
    },
    {
      name: "Matrix",
      icon: "simple-icons:matrix",
      url: "https://matrix.to/#/@artsy.:astolfo.cafe",
    },
    {
      name: "Last.FM",
      icon: "simple-icons:lastdotfm",
      url: "https://last.fm/user/artiefuzzz",
    },
    {
      name: "Steam",
      icon: "simple-icons:steam",
      url: "https://steamcommunity.com/id/ArtieFuzzz/",
    },
  ];
</script>

<div class="flex flex-col my-auto lg:w-[30%] h-full bg-pink p-14 z-10">
  <div class="flex flex-col w-full h-full">
    <div class="flex flex-col w-full h-fit">
      <h1 class="text-3xl font-medium text-white font-heading">
        <p><span class="underline">Artie</span>Fuzzz</p>
      </h1>
      <p class="text-base font-normal text-white font-body">
        Software Developer, UI Developer, Sys-Admin.
      </p>
    </div>
  </div>

  <Lanyard />

  <div class="flex flex-col w-full h-full">
    <div class="flex flex-col w-full h-full"></div>
    <div class="flex flex-row justify-center items-center w-full h-fit">
      <p class="text-base font-normal text-white font-body">
        &copy; artiefuzzz - {new Date().getFullYear()}
      </p>
    </div>
  </div>
</div>

<div class="flex flex-col w-full h-full bg-black">
  <div class="flex flex-row w-full h-full">
    <div class="flex flex-col p-3 gap-5 w-52 border-pink border-r-1">
      <Heading title="say hi." description="find me around." />

      <ul
        id="profiles"
        use:staggeredLinks
        class="flex flex-col gap-2.5 w-full h-full"
      >
        {#each profiles as profile}
          <li class="opacity-0">
            <Link name={profile.name} link={profile.url} icon={profile.icon} />
          </li>
        {/each}
      </ul>
    </div>
    <div class="flex flex-col p-3 w-full h-full">
      <Heading title="projects." description="w.i.p. or completed." />

      <div class="pt-2">
        <p class="text-base font-body text-white">Work In Progress.</p>
      </div>
    </div>
  </div>
  <div class="flex flex-row w-full h-full">
    <div
      class="flex flex-col p-3 h-full w-md border-pink border-r-1 border-t-1"
    >
      <Heading title="languages & tools." description="things I use." />
      <div class="pt-2">
        <p class="text-base font-body text-white">Work In Progress.</p>
      </div>
    </div>
    <div class="flex flex-col p-3 w-full h-full border-pink border-t-1">
      <Heading
        title="contributions"
        description="projects or companies I contributed to."
      />

      <div class="pt-2">
        <p class="text-base font-body text-white">Work In Progress.</p>
      </div>
    </div>
  </div>
</div>
