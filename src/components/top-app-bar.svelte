<script lang="ts">
    import Logo from '@components/logo.svelte'
    import Navigation from '@components/navigation.svelte'
    import MenuButton from '@components/menu-button.svelte'
    import FilledButton from '@components/button-filled.svelte'
    import TextButton from '@components/button-text.svelte'
    import Drawer from '@components/drawer.svelte'

    let topAppBarHasShadow: boolean = false
    let drawerIsOpen: boolean = false

    function handleTopAppBarShadow() {
        if (!topAppBarHasShadow && window.scrollY > 0) {
            topAppBarHasShadow = true
        } else if (topAppBarHasShadow && window.scrollY <= 0) {
            topAppBarHasShadow = false
        }
    }

    function toggleDrawer() {
        drawerIsOpen = !drawerIsOpen
    }
</script>

<svelte:window on:scroll={handleTopAppBarShadow} />

<template>
    <header
        class="fixed z-50 top-0 left-0 w-full flex flex-col justify-end items-start bg-white"
        class:shadow-lg={topAppBarHasShadow}
        class:h-20={!topAppBarHasShadow}
        class:h-auto={topAppBarHasShadow}
    >
        <div class="container mx-auto px-6 py-2 lg:py-3 flex flex-row justify-start items-center">
            <Logo />
            <Navigation />
            <MenuButton on:click={toggleDrawer} drawerIsOpen={drawerIsOpen} />
            <div class="hidden lg:block lg:ml-auto lg:space-x-2">
                <TextButton size="sm" label="Login" />
                <FilledButton size="sm" label="Sign Up" rounded />
            </div>
        </div>
        {#if drawerIsOpen}
            <Drawer />
        {/if}     
    </header>
</template>