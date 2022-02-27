<script lang="ts">
    const links = [
        "Features",
        "Pricing",
        "Resources",
    ]
</script>

<template>
    <nav class="hidden lg:flex lg:flex-row lg:space-x-6 lg:justify-start lg:w-auto lg:h-auto lg:ml-10">
        {#each links as link}
            <a class="w-auto h-8 leading-8 text-base text-grayish-violet font-bold transition-colors hover:text-very-dark-violet" href="/">{ link }</a>
        {/each}
    </nav>
</template>