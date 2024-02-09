<script>
	import ChannelCard from "$lib/components/ChannelCard.svelte";
    import SearchVideoCard from "$lib/components/SearchVideoCard.svelte";
    export let data;
	import * as Dialog from "$lib/components/ui/dialog";

</script>

<Dialog.Root class="flex justify-end my-2">
    <button class="font-medium border px-4 py-1 rounded-full hover:bg-gray-200">Filter</button>
</Dialog.Root>
<div class="space-y-5">
	{#each data.contents as { type, channel, video }}
		{#if type === 'video'}
			<SearchVideoCard
				avatar={video.author.avatar[0].url}
				badges={video.badges}
				views={video.stats.views}
				channelName={video.author.title}
				descriptionSnippet={video.descriptionSnippet}
				publishedTimeText={video.publishedTimeText}
				thumbnail={video.thumbnails[0].url}
				title={video.title}
				videoId={video.videoId}
			/>
		{:else if type === 'channel'}
			<ChannelCard
				avatar={channel.avatar[0].url}
				descriptionSnippet={channel.descriptionSnippet}
				subscribers={channel.stats.subscribersText}
				title={channel.title}
				userName={channel.username}
			/>
		{/if}
	{/each}
</div>