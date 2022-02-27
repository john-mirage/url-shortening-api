<script lang="ts">
    import Button from '@components/button.svelte'
    import WorkingIllustration from "@assets/images/illustration-working.svg"
</script>

<template>
    <div class="w-full h-auto mb-32 lg:mt-10 lg:flex lg:flex-row lg:items-center">

        <div class="relative w-full h-auto pt-[90%] mb-10 overflow-hidden lg:mb-0 lg:order-2 lg:w-1/2 lg:pt-0 lg:h-[30rem]">
            <img class="absolute top-0 left-0 w-auto h-full max-w-none ml-6 lg:ml-24" src={WorkingIllustration} alt="Woman working on a computer">
        </div>

        <section class="text-center lg:w-1/2 lg:text-left lg:order-1">
            <div class="w-full h-auto px-6 lg:max-w-[31rem] xl:max-w-[37.5rem] lg:ml-auto">
                <h1 class="text-4xl leading-10 text-very-dark-violet font-bold mb-4 lg:text-7xl lg:leading-[5rem]">More than just shorter links</h1>
                <p class="text-base leading-6 text-grayish-violet font-medium mb-6">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <Button type="filled" size="lg" label="Get Started" rounded />
            </div>
        </section>

    </div>
</template>