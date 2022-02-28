<script lang="ts">
    export let size: string
    export let label: string
    export let onDark: boolean = false
</script>

<template>
    {#if size === "sm"}
        <button class="relative inline-flex h-10 px-6 group overflow-hidden">
            <span
                class="m-auto text-base font-bold transition-colors group-hover:text-very-dark-violet"
                class:text-grayish-violet={ !onDark }
                class:text-white={ onDark }
                class:group-hover:text-very-dark-violet={ !onDark }
                class:group-hover:text-cyan={ onDark }
                on:click
            >
                { label }
            </span>
        </button>
    {:else if size === "lg"}
        <button class="relative inline-flex h-12 px-10 group overflow-hidden">
            <span
                class="m-auto text-base font-bold transition-colors group-hover:text-very-dark-violet"
                class:text-grayish-violet={ !onDark }
                class:text-white={ onDark }
                class:group-hover:text-very-dark-violet={ !onDark }
                class:group-hover:text-cyan={ onDark }
                on:click
            >
                { label }
            </span>
        </button>
    {/if}
</template>