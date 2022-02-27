<script lang="ts">
    import Logo from '@components/logo.svelte'
    import Navigation from '@components/navigation.svelte'
    import MenuButton from '@components/menu-button.svelte'
    import Button from '@components/button.svelte'
</script>

<template>
    <header class="w-full h-20 flex flex-col justify-end items-start">
        <div class="container mx-auto px-6 pb-2 flex flex-row justify-start items-center">
            <Logo />
            <Navigation />
            <MenuButton />
            <div class="hidden lg:block lg:ml-auto lg:space-x-2">
                <Button type="text" size="sm" label="Login" />
                <Button type="filled" size="sm" label="Sign Up" rounded />
            </div>
        </div>
    </header>
</template>