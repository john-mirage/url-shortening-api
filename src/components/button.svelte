<script lang="ts">
    export let type: string
    export let size: string
    export let label: string
</script>

<template>
    {#if type === "filled"}
        <button
            class="relative inline-flex group overflow-hidden bg-cyan rounded-full"
            class:px-10={ size === "lg" }
            class:px-6={ size === "sm" }
            class:h-12={ size === "lg" }
            class:h-10={ size === "sm" }
        >
            <span class="m-auto text-white text-base font-medium">{ label }</span>
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
            <span class="m-auto text-gray text-base font-bold transition-colors group-hover:text-very-dark-violet">{ label }</span>
        </button>
    {/if}
</template>