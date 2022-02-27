<script lang="ts">

</script>

<template>
    <div class="w-full h-auto -translate-y-1/2 p-6 bg-dark-violet rounded-lg bg-shorten-mobile bg-no-repeat bg-right-top md:flex md:flex-row md:gap-4 md:p-10 lg:bg-shorten-desktop">
        <input class="w-full h-12 bg-white rounded-lg px-4 mb-5 md:mb-0 md:flex-1" placeholder="Shorten a link here..." type="text">
        <button class="relative w-full h-12 px-10 group overflow-hidden bg-cyan rounded-lg md:w-auto md:px-8 md:flex-shrink-0">
            <span class="m-auto text-white text-base font-medium">Shorten it!</span>
            <div class="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity bg-white group-hover:opacity-40"></div>
        </button>
    </div>
</template>