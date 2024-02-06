<script>

</script>

<div class="my-5 flex items-center justify-between">
    <div class="flex items-center gap-5">
        <div class="flex items-center gap-3">
            <img src="/avatar.png" alt="avatar" class="w-10 h-10 rounded-full"/>
            <div>
                <p class="font-medium capitalize">Channel name</p>
                <p class="text-gray-700 text-xs">100000 subs</p>        
            </div>
        </div>

        <button class="text-white text-sm bg-black font-medium rounded-full py-2 px-4">Subscribe</button>

        <div class="flex gap-3 items-center">

            <!-- Like/Dislike -->
            <div class="divide-x-2 bg-gray-100 flex items-center overflow-hidden rounded-full">
                <button class="hover:bg-gray-200 py-2 px-4 flex items-center gap-2">
                    <img src="/icons/likeIcon.svg" alt="thumbs-up" class="w-4 h-4"/>
                    <span class="text-sm font-medium">3000</span>
                </button>

                <button class="hover:bg-gray-200 py-2 px-4 flex items-center gap-2">
                    <img src="/icons/dislikeIcon.svg" alt="thumbs-up" class="w-4 h-4"/>
                    <span class="text-sm font-medium">3000</span>
                </button>
            </div>

            <!-- Share -->
            <button class="hover:bg-gray-200 rounded-full py-2 px-4 flex items-center gap-2">
                <img src="/icons/shareIcon.svg" alt="thumbs-up" class="w-4 h-4"/>
                <span class="text-sm font-medium">share</span>
            </button>


            <button class="hover:bg-gray-200 p-2 rounded-full flex items-center gap-2">
                <img src="/icons/moreIcon.svg" alt="thumbs-up" class="w-4 h-4"/>
            </button>
        </div>
    </div>
</div>