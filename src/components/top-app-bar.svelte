<script lang="ts">
    import Logo from '@components/logo.svelte'
    import Navigation from '@components/navigation.svelte'
    import MenuButton from '@components/menu-button.svelte'
</script>

<template>
    <header class="w-full h-20 flex flex-col justify-end items-start">
        <div class="container mx-auto px-6 pb-2 flex flex-row justify-start items-center">
            <Logo />
            <Navigation />
            <MenuButton />
            <button class="hidden lg:block lg:ml-auto lg:mr-8 lg:w-auto lg:h-8 lg:leading-8 lg:text-base lg:text-gray lg:font-bold lg:transition-colors lg:hover:text-very-dark-violet">Login</button>
            <button class="hidden lg:block lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:bg-cyan lg:rounded-full lg:text-white lg:text-base lg:font-medium">Sign Up</button>
        </div>
    </header>
</template>