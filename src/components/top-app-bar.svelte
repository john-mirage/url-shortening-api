<script lang="ts">
    import Logo from '@components/logo.svelte'
    import MenuButton from '@components/menu-button.svelte'
</script>

<template>
    <header class="w-full h-28 flex flex-col justify-end items-start">
        <div class="container m-auto px-6 flex flex-row justify-between items-center">
            <Logo />
            <MenuButton />
        </div>
    </header>
</template>