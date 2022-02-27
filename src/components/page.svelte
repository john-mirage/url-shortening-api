<script lang="ts">
    import TopAppBar from "@components/top-app-bar.svelte"
    import Hero from "@components/hero.svelte"
    import Generator from "@components/generator.svelte"
    import Features from "@components/features.svelte"
    import CallToAction from "@components/call-to-action.svelte"
    import Footer from "@components/footer.svelte"
</script>

<template>
    <TopAppBar />
    <Hero />
    <div class="relative w-full h-auto bg-light-gray">
        <div class="container mx-auto px-6 pb-10 lg:pb-48">
            <Generator />
            <Features />
        </div>
    </div>
    <CallToAction />
    <Footer />
</template>