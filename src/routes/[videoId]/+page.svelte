<script>
	import ChannelInfo from "$lib/components/ChannelInfo.svelte";
    import VideoDescription from "$lib/components/VideoDescription.svelte";
	import Comments from "$lib/components/Comments.svelte";
	import RecommendedVideos from "$components/RecommendedVideos.svelte";

    export let data;
</script>

<iframe
    class="w-full h-[480px]"
    src={`https://www.youtube.com/embed/${data.details.videoId}`}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
/>

<div class="max-w-[1150px] px-2 w-full mx-auto py-2">
    <h1 class="capitalize text-xl font-semibold">
        {data.details.title}
    </h1>

    <div class="flex flex-col md:flex-row gap-10 items-start">
        <div class="flex-1">
            <ChannelInfo
				avatar={data.details.author.avatar[1].url}
				likes={data.details.stats.likes}
				name={data.details.author.title}
				subscribersText={data.details.author.stats.subscribersText}
			/>
            <VideoDescription
				desc={data.details.description}
				views={data.details.stats.views}
				publishedDate={data.details.publishedDate}
			/>
            <Comments commentsData={data.streamed.comments} />
        </div>
        <RecommendedVideos recommendedVideos={data.streamed.relatedContent} />
    </div>
</div>