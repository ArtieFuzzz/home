<script lang="ts">
  import Heading from "../components/Heading.svelte";

  const year = new Date().getFullYear();
</script>

<div class="flex flex-col my-auto lg:w-[30%] h-full bg-pink p-14">
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

  <div class="flex flex-col w-full h-full">
    <div class="flex flex-col w-full h-full"></div>
    <div class="flex flex-row justify-center items-center w-full h-fit">
      <p class="text-base font-normal text-white font-body">
        &copy; artiefuzzz - {year}
      </p>
    </div>
  </div>
</div>

<div class="flex flex-col w-full h-full bg-black">
  <div class="flex flex-row w-full h-full">
    <div class="flex flex-col p-3 w-52 border-pink border-r-1">
      <Heading title="say hi." description="find me around." />
    </div>
    <div class="flex flex-col p-3 w-full h-full">
      <Heading title="projects." description="w.i.p. or completed." />
    </div>
  </div>
  <div class="flex flex-row w-full h-full">
    <div
      class="flex flex-col p-3 h-full w-md border-pink border-r-1 border-t-1"
    >
      <Heading title="languages & tools." description="things I use." />
    </div>
    <div class="flex flex-col p-3 w-full h-full border-pink border-t-1">
      <Heading
        title="contributions"
        description="projects or companies I contributed to."
      />
    </div>
  </div>
</div>
