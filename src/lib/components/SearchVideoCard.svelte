<script>
    import { formatLargeNumber } from "$lib/utils";
  
    export let avatar;
    export let publishedTimeText;
    export let views;
    export let descriptionSnippet;
    export let title;
    export let thumbnails;
    export let channelName;
    export let videoId;
    export let badges;
  </script>
  
  <a href={videoId} class="flex gap-4">
    <img
      class="max-w-[360px] object-cover aspect-video rounded-2xl w-full flex items-center justify-center"
      src={thumbnails}
      alt=""
    />
  
    <div class="text-gray-700">
      <h1 class="capitalize font-medium text-lg text-black">{title}</h1>
      <p class=" text-xs mb-1">
        {formatLargeNumber(views)} views . {publishedTimeText}
      </p>
      <div class="flex items-center gap-2 my-4">
        <img src={avatar} class="w-6 h-6 rounded-full" alt="" />
        <p class="capitalize text-sm">{channelName}</p>
      </div>
      <p class=" text-xs">
        {descriptionSnippet || ""}
      </p>
      <div class="flex items-center gap-2 mt-3">
        {#each badges as badge}
          <p
            class="rounded bg-gray-200 text-gray-800 text-xs font-medium py-0.5 px-1"
          >
            {badge}
          </p>
        {/each}
      </div>
    </div>
  </a>
  