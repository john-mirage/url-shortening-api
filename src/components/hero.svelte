<script lang="ts">
    import FilledButton from '@components/button-filled.svelte'
    import WorkingIllustration from "@assets/images/illustration-working.svg"
</script>

<template>
    <div class="w-full h-auto mb-32 mt-24 lg:flex lg:flex-row lg:items-center">

        <div class="relative w-full h-auto pt-[90%] mb-10 overflow-hidden sm:pt-0 sm:h-[26rem] lg:mb-0 lg:order-2 lg:w-1/2 lg:pt-0 lg:h-[30rem]">
            <img class="absolute top-0 left-0 translate-x-6 w-auto h-full max-w-none sm:left-1/2 sm:-translate-x-1/3 lg:left-0 lg:translate-x-24" src={WorkingIllustration} alt="Woman working on a computer">
        </div>

        <section class="text-center lg:w-1/2 lg:text-left lg:order-1">
            <div class="w-full h-auto px-6 lg:max-w-[31rem] xl:max-w-[37.5rem] lg:ml-auto">
                <h1 class="text-[2.5rem] leading-[3rem] text-very-dark-violet font-bold mb-4 lg:text-7xl lg:leading-[5rem]">More than just shorter links</h1>
                <p class="text-lg leading-[30px] text-grayish-violet font-medium mb-6">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <FilledButton size="lg" label="Get Started" rounded />
            </div>
        </section>

    </div>
</template>