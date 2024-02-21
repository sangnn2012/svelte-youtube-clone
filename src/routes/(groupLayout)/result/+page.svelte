<script>
	import ChannelCard from "$lib/components/ChannelCard.svelte";
    import SearchVideoCard from "$lib/components/SearchVideoCard.svelte";
	import * as Dialog from "$lib/components/ui/dialog";
    export let data;

</script>
<div class="space-y-5">
	{#each data.contents as { type, channel, video }}
		{#if type === 'video'}
			<SearchVideoCard
				avatar={video.author.avatar && video.author.avatar[0]?.url}
				badges={video.badges}
				views={video.stats.views}
				channelName={video.author.title}
				descriptionSnippet={video.descriptionSnippet}
				publishedTimeText={video.publishedTimeText}
				thumbnails={video.thumbnails[0].url}
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