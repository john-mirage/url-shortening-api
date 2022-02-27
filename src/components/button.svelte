<script lang="ts">
    export let type: string
    export let size: string
    export let label: string
    export let background: string = "cyan"
    export let rounded: boolean = false
</script>

<template>
    {#if type === "filled"}
        <button
            class={`relative inline-flex group overflow-hidden ${size === "sm" ? "min-w-[7.5rem]": ""} ${size === "lg" ? "min-w-[12rem]" : ""}`}
            class:h-12={ size === "lg" }
            class:h-10={ size === "sm" }
            class:rounded-full={ rounded }
            class:rounded-lg={ !rounded }
            class:bg-cyan={ background === "cyan" }
            class:bg-dark-violet={ background === "violet" }
            on:click
        >
            <span class="m-auto text-white font-medium" class:text-base={ size === "sm" } class:text-lg={ size === "lg" }>{ label }</span>
            <div class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity bg-white group-hover:opacity-40"></div>
        </button>
    {:else if type === "text"}
        <button
            class="relative inline-flex group overflow-hidden"
            class:px-10={ size === "lg" }
            class:px-6={ size === "sm" }
            class:h-12={ size === "lg" }
            class:h-10={ size === "sm" }
        >
            <span class="m-auto text-grayish-violet text-base font-bold transition-colors group-hover:text-very-dark-violet">{ label }</span>
        </button>
    {/if}
</template>