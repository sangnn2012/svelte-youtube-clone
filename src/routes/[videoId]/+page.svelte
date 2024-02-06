<script>
	import ChannelInfo from "$lib/components/ChannelInfo.svelte";

    let videoId = 'videoId';
</script>



<div class="max-w-[1150px] px-2 w-full mx-auto">
    <h1 class="capitalize text-xl font-semibold">
        sveltekit
    </h1>
    <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
    <div class="flex flex-cols md:flex-row gap-5 items-start">
        <div>
            <ChannelInfo />
        </div>
    </div>
</div>