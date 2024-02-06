<script lang="ts">
    import './styles.css'
    import Header from '../lib/components/Header.svelte';
	import SideBar from '../lib/components/SideBar.svelte';
</script>

<!-- Header apply to all page -->
<Header />
<div class="flex">
    <SideBar />
    <main class="ml-[74px] flex-1 p-6">
        <slot />
    </main>
</div>