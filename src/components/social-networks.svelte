<script lang="ts">
    import FacebookIcon from "@components/icon-facebook.svelte"
    import TwitterIcon from "@components/icon-twitter.svelte"
    import PinterestIcon from "@components/icon-pinterest.svelte"
    import InstagramIcon from "@components/icon-instagram.svelte"
</script>

<template>
    <nav class="flex flex-row justify-center items-center gap-6 w-full h-auto lg:w-auto">
        <a class="w-auto h-6 group" href="/">
            <FacebookIcon />
        </a>
        <a class="w-auto h-6 group" href="/">
            <TwitterIcon />
        </a>
        <a class="w-auto h-6 group" href="/">
            <PinterestIcon />
        </a>
        <a class="w-auto h-6 group" href="/">
            <InstagramIcon />
        </a>
    </nav>
</template>