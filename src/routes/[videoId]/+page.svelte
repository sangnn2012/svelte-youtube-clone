<script>
	import ChannelInfo from "$lib/components/ChannelInfo.svelte";
    import VideoDescription from "$lib/components/VideoDescription.svelte";
	import Comments from "$lib/components/Comments.svelte";
	import RecommendedVideo from "$lib/components/RecommendedVideo.svelte";

    let videoId = 'videoId';
</script>

<iframe
    class="w-full h-[480px]"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
/>

<div class="max-w-[1150px] px-2 w-full mx-auto">
    <h1 class="capitalize text-xl font-semibold">
        sveltekit
    </h1>

    <div class="flex flex-cols md:flex-row gap-5 items-start">
        <div>
            <ChannelInfo />

            <VideoDescription />

            <Comments />

        </div>
        <RecommendedVideo />

    </div>
</div>