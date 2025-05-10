<script lang="ts">
  import "iconify-icon";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { useLanyard } from "@yuna0x0/sk-lanyard";

  dayjs.extend(relativeTime);

  const lanyard = useLanyard({ id: "389252140184633363", method: "ws" });

  const statusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-300";
      case "idle":
        return "text-yellow-300";
      case "dnd":
        return "text-red-300";
      case "offline":
        return "text-gray-500";
    }
  };
</script>

<div class="flex flex-col w-full h-[75rem] bg-black p-4 gap-4 rounded-md">
  {#if $lanyard}
    <div class="flex flex-row w-full h-fit gap-3">
      <img
        class="rounded-sm"
        src={`https://api.lanyard.rest/${$lanyard.discord_user.id}.webp`}
        height="64"
        width="64"
        alt="Profile"
      />

      <div class="flex flex-col w-fit h-full justify-end items-start">
        <p
          class="text-base font-body font-semibold text-white inline-flex gap-2 items-baseline"
        >
          {$lanyard.discord_user.display_name}
          <iconify-icon
            class={statusColor($lanyard.discord_status)}
            icon="ic:twotone-circle"
            width="12"
            height="12"
          ></iconify-icon>
        </p>
        <p class="text-base font-body text-white opacity-50">
          {$lanyard.discord_user.username}
        </p>
      </div>
    </div>

    <div
      id="activities"
      class="flex flex-col justify-start items-start gap-3 h-full w-full overflow-y-scroll"
    >
      <h3 class="text-white font-body text-base font-bold">
        <p>Activites</p>
      </h3>

      {#if $lanyard.listening_to_spotify}
        <div class="flex flex-col w-full h-fit">
          <p class="text-white font-body text-base inline-flex gap-2">
            Listening to <span
              ><iconify-icon
                class="text-[#1ED760]"
                icon="line-md:spotify-filled"
                width="24"
                height="24"
              ></iconify-icon></span
            >
          </p>
          <div class="flex gap-3 flex-row w-full">
            <img
              class="rounded-sm"
              width="64"
              height="64"
              src={$lanyard.spotify.album_art_url}
              alt="Spotify Track Cover"
            />

            <div class="flex flex-col">
              <p class="text-white font-body font-semibold text-base">
                {$lanyard.spotify.song}
              </p>
              <p class="text-white font-body text-sm">
                by {$lanyard.spotify.artist} on {$lanyard.spotify.album}
              </p>
            </div>
          </div>
        </div>
      {/if}

      {#each $lanyard.activities.filter((activity) => activity.type != 2 && activity.type != 4) as activity}
        <div class="flex flex-col w-full h-fit">
          <div class="flex gap-3 flex-row w-full">
            <img
              class="rounded-sm"
              width="64"
              height="64"
              src={`https://dcdn.dstn.to/app-icons/${activity.application_id}?size=64`}
              alt="Game Icon"
            />

            <div class="flex flex-col">
              <p class="text-white font-body font-semibold text-base">
                {activity.name}
              </p>
              <p class="text-white font-body text-sm">
                Time Played: {dayjs(activity.created_at).fromNow(true)}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="flex flex-col w-full h-full justify-center items-center">
      <iconify-icon
        class="text-white"
        icon="svg-spinners:bars-scale"
        width="64"
        height="64"
      ></iconify-icon>
    </div>
  {/if}
</div>

<style>
  :where(#activities) {
    scrollbar-width: thin;
  }
</style>
