<script>
    import { formatLargeNumber } from "$lib/utils";
  
    export let views;
    export let desc;
    export let publishedDate;

    let showMore = false;
  </script>

<div
    class:h-fit={ showMore }
    class:h-[105px]={ !showMore }
    class="bg-gray-200 mb-5 relative overflow-hidden text-sm rounded-lg p-3 hover:bg-gray-300"
>
    <span> {formatLargeNumber(views)} views {publishedDate}</span>

    <p class="mb-5">
        {desc}
    </p>

    <button 
        on:click={() => {
            showMore = !showMore;
        }} 
        class="absolute bottom-1 right-1 font-medium p-1 capitalize bg-gray-200 group-hover:bg-gray-300">show { showMore ? 'more' : 'less'}</button>
</div>