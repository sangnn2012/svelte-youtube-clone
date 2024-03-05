<script>
    import { formatLargeNumber } from "$lib/utils";

    export let title;
    export let publishTimeText;
    export let views;
    export let videoId;
    export let thumbnail;
    export let channelName;
    export let avatar;
</script>

<a href="/{videoId}">
    <div class="relative">
        <div class="absolute bg-black/80 text-white bottom-1 right-1 font-semibold rounded px-1"
        >
            {publishTimeText}
        </div>
        <img 
            src={thumbnail} 
            alt="thumbnail" 
            class="sm:h-[208px] h-[250px] w-full object-cover rounded-2xl bg-gray-200"
        >
    </div>
    <div class="flex gap-3 mt-3">
        <img alt="images" 
            src={avatar} 
            class="h-9 w-9 rounded-full bg-gray-100"
        />
        <div>
            <h3 class="capitalize font-medium">{title}</h3>
            <p class="text-xm text-gray-500 mt-1">{channelName}</p>
            <div class="text-gray-600 text-sm"> 
                <span class="text-xs text-gray-500">{formatLargeNumber(views)} Views</span>
                <span class="text-xs text-gray-500">{publishTimeText ? publishTimeText : ''}</span>
            </div>
        </div>
    </div>
</a>