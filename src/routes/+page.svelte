<script lang="ts">
  import "iconify-icon";
  import { staggeredLinks } from "$lib/motion.svelte";
  import Heading from "../components/Heading.svelte";
  import Link from "../components/Link.svelte";
  import Lanyard from "../components/Lanyard.svelte";
  import { profiles, tech } from "$lib/constants";
</script>

<div class="flex flex-col my-auto lg:w-[30%] h-full bg-pink p-14 z-10">
  <div class="flex flex-col w-full h-full">
    <div class="flex flex-col w-full h-fit">
      <div class="flex flex-row items-baseline justify-start gap-3">
        <h1 class="text-3xl font-medium text-white">
          <p><span class="underline">Artie</span>Fuzzz</p>
        </h1>
        <a href="https://en.pronouns.page/@ArtieFuzzz"
          ><p
            class="underline font-normal text-white underline-offset-6 text-base"
          >
            (she/her)
          </p></a
        >
      </div>

      <p class="text-base font-normal text-white">
        Software Developer, UI Developer, Sys-Admin.
      </p>
    </div>
  </div>

  <Lanyard />

  <div class="flex flex-col w-full h-full">
    <div class="flex flex-col w-full h-full"></div>
    <div class="flex flex-row justify-center items-center w-full h-fit">
      <p class="text-base font-normal text-white">
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
            <Link
              name={profile.name}
              link={profile.url}
              icon={profile.icon}
              type={profile.rel}
            />
          </li>
        {/each}
      </ul>
    </div>
    <div class="flex flex-col p-3 w-full h-full">
      <Heading title="projects." description="w.i.p. or completed." />

      <div class="pt-2">
        <p class="text-base text-white">Work In Progress.</p>
      </div>
    </div>
  </div>
  <div class="flex flex-row w-full h-full">
    <div
      class="flex flex-col p-3 h-full w-md border-pink border-r-1 border-t-1"
    >
      <Heading title="languages & software." description="things I use." />
      <div class="pt-2">
        <div
          class="w-full h-full flex flex-row flex-wrap justify-start items-center gap-2"
        >
          {#each tech as item}
            <iconify-icon
              icon={`simple-icons:${item.icon}`}
              style={`color: ${item.color};`}
              height="32"
              width="32"
            ></iconify-icon>
          {/each}
        </div>
      </div>
    </div>
    <div class="flex flex-col p-3 w-full h-full border-pink border-t-1">
      <Heading
        title="contributions"
        description="projects or companies I contributed to."
      />

      <div class="pt-2">
        <p class="text-base text-white">Work In Progress.</p>
      </div>
    </div>
  </div>
</div>
