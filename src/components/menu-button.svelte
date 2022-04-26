<script lang="ts">
    export let drawerIsOpen: boolean
</script>

<template>
    <button class="flex w-12 h-12 ml-auto -mr-3 lg:hidden" on:click>
        <span class="flex flex-col justify-between items-start w-6 h-5 m-auto">

            <!-- Top bar -->
            <span
                class="w-full h-[0.1875rem] bg-grayish-violet transition-transform"
                class:menu-icon-top-bar={ drawerIsOpen }
            ></span>

            <!-- Middle bar -->
            <span
                class="w-full h-[0.1875rem] bg-grayish-violet transition-opacity"
                class:opacity-100={ !drawerIsOpen }
                class:opacity-0={ drawerIsOpen }
            ></span>

            <!-- Bottom bar -->
            <span
                class="w-full h-[0.1875rem] bg-grayish-violet transition-transform"
                class:menu-icon-bottom-bar={ drawerIsOpen }
            ></span>
            
        </span>
    </button>
</template>