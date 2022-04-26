<script lang="ts">
    export let size: string
    export let label: string
    export let inactive: boolean = false
    export let rounded: boolean = false
</script>

<template>
    {#if size === "sm"}
        <button
            class="relative inline-flex h-10 px-6 group overflow-hidden min-w-btn-sm"
            class:rounded-full={ rounded }
            class:rounded-lg={ !rounded }
            class:bg-cyan={ !inactive }
            class:bg-dark-violet={ inactive }
            on:click
        >
            <span class="m-auto text-white font-medium text-base">{ label }</span>
            <span class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity bg-white group-hover:opacity-40"></span>
        </button>
    {:else if size === "md"}
        <button
                class="relative inline-flex h-12 px-10 group overflow-hidden min-w-btn-lg"
                class:rounded-full={ rounded }
                class:rounded-lg={ !rounded }
                class:bg-cyan={ !inactive }
                class:bg-dark-violet={ inactive }
                on:click
        >
            <span class="m-auto text-white font-bold text-lg">{ label }</span>
            <span class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity bg-white group-hover:opacity-40"></span>
        </button>
    {:else if size === "lg"}
        <button
            class="relative inline-flex h-14 px-10 group overflow-hidden min-w-btn-lg"
            class:rounded-full={ rounded }
            class:rounded-lg={ !rounded }
            class:bg-cyan={ !inactive }
            class:bg-dark-violet={ inactive }
            on:click
        >
            <span class="m-auto text-white font-bold text-xl">{ label }</span>
            <span class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity bg-white group-hover:opacity-40"></span>
        </button>
    {/if}
</template>