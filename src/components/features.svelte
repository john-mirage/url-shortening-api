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
    <div class="w-full max-w-lg mx-auto text-center mb-20">
        <h2 class="text-[1.75rem] tracking-[-0.8px] text-dark-violet font-bold mb-6">Advanced Statistics</h2>
        <p class="text-base leading-7 text-grayish-violet font-medium">Track how your links are performing across the web with our advanced statistics dashboard.</p>
    </div>
    <ul class="relative w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-6">
        {#each features as feature, index}
            <Feature feature={feature} featureIndex={index} />
        {/each}
        <li class="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-2 h-full bg-cyan lg:w-full lg:h-2 lg:top-1/2 lg:left-0 lg:translate-x-0 lg:-translate-y-1/2"></li>
    </ul>
</template>