<script>
    export let name;
    export let content;
    export let avatar;
    export let publishedTimeText;
</script>

<div class="flex gap-4">
    <img alt="avatar" class="w-10 h-10 rounded-full" src={avatar} />
    <div class="space-y-2">
        <div class="flex items-baseline">
            <h1 class="font-medium text-sm capitalize">{name}</h1>
            <span class="text-gray-600 text-xs">{publishedTimeText}</span>
        </div>
        
        <p class="text-sm">
            {content}
        </p>

        <div class="flex items-center gap-5">
            <button class="p-1 text-xs rounded-full hover:bg-gray-200">
                <img alt="like" class="w-4 h-4" src="/icons/likeIcon.svg" />
            </button>
            <button class="p-1 text-xs rounded-full hover:bg-gray-200">
                <img alt="like" class="w-4 h-4" src="/icons/dislikeIcon.svg" />
            </button>
            <button class="px-2 py-0.5 text-xs font-medium capitalize rounded-full hover:bg-gray-200">
                reply
            </button>
        </div>
    </div>
</div>