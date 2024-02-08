<script>
    const nav = [
        {
        icon: 'homeIcon',
        title: 'Home',
        },
        {
        icon: 'shortsIcon',
        title: 'Shorts',
        },
        {
        icon: 'libraryIcon',
        title: 'Library',
        },
        {
        icon: 'subIcon',
        title: 'Subscriptions',
        },
    ];
</script>

<div class="bg-white py-2 md:flex flex-col px-1 fixed top-[60px] h-screen hidden">
    {#each nav as { icon, title }, i}
        <a 
            href="/" 
            class="flex items-center justify-center flex-col gap-1 py-4 hover:bg-gray-100 rounded-lg"
        >
            <img 
                src={`icons/${icon}.svg`} 
                alt={icon}
            />
            <p>{title}</p>
        </a>
    {/each}
</div>