<script lang="ts">
    interface Feature {
        icon: string;
        name: string;
        description: string;
    }
    export let feature: Feature
    export let featureIndex: number
</script>

<template>
    <li class="relative z-20 w-full h-auto p-8 rounded-lg bg-white text-center" class:lg:translate-y-10={featureIndex === 1} class:lg:translate-y-20={featureIndex === 2}>
        <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-20 h-20 rounded-full bg-dark-violet">
            <img class="w-10 h-auto m-auto" src={feature.icon} alt="">
        </div>
        <h3 class="text-2xl text-dark-violet font-bold mt-12 mb-4">{ feature.name }</h3>
        <p class="text-sm leading-6 text-gray font-medium">{ feature.description }</p>
    </li>
</template>