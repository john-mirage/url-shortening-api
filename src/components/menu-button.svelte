<script lang="ts">
    export let drawerIsOpen: boolean
</script>

<template>
    <button class="flex w-12 h-12 ml-auto -mr-3 lg:hidden" on:click>
        <div class="flex flex-col justify-between items-start w-6 h-5 m-auto">

            <!-- Top bar -->
            <div
                class="w-full h-[0.1875rem] bg-grayish-violet transition-transform"
                class:menu-icon-top-bar={ drawerIsOpen }
            ></div>

            <!-- Middle bar -->
            <div
                class="w-full h-[0.1875rem] bg-grayish-violet transition-opacity"
                class:opacity-100={ !drawerIsOpen }
                class:opacity-0={ drawerIsOpen }
            ></div>

            <!-- Bottom bar -->
            <div
                class="w-full h-[0.1875rem] bg-grayish-violet transition-transform"
                class:menu-icon-bottom-bar={ drawerIsOpen }
            ></div>
            
        </div>
    </button>
</template>