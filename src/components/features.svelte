<script lang="ts">
    import Feature from "@components/feature.svelte"
    import BrandRecognitionIcon from "@assets/images/icon-brand-recognition.svg"
    import DetailedRecordsIcon from "@assets/images/icon-detailed-records.svg"
    import FullyCustomizableIcon from "@assets/images/icon-fully-customizable.svg"
    const features = [
        {
            icon: BrandRecognitionIcon,
            name: "Brand Recognition",
            description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
        },
        {
            icon: DetailedRecordsIcon,
            name: "Detailed Records",
            description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        },
        {
            icon: FullyCustomizableIcon,
            name: "Fully Customizable",
            description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        },
    ]
</script>

<template>
    <div class="w-full h-auto pt-40 pb-12 bg-light-gray">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl text-dark-violet font-bold mb-6">Advanced Statistics</h2>
            <p class="text-sm leading-6 text-grayish-violet font-medium">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <ul class="relative container mx-auto px-6 mt-16">
            {#each features as feature}
                <Feature feature={feature} />
            {/each}
            <div class="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-2 h-full bg-cyan"></div>
        </ul>
    </div>
</template>