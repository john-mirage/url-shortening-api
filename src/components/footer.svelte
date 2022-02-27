<script lang="ts">
    import Logo from "@components/logo.svelte"
    import SocialNetworks from "@components/social-networks.svelte"
    const sections = [
        {
            name: "Features",
            links: [
                "Link Shortening",
                "Branded Links",
                "Analytics",
            ]
        },
        {
            name: "Ressources",
            links: [
                "Blog",
                "Developers",
                "Support",
            ]
        },
        {
            name: "Company",
            links: [
                "About",
                "Our Team",
                "Careers",
                "Contact",
            ]
        },
    ]
</script>

<template>
    <footer class="w-full h-auto py-16 bg-very-dark-violet text-center lg:text-left">
        <div class="container mx-auto px-6 lg:flex lg:flex-row lg:justify-start lg:items-start">
            <div class="inline-block">
                <Logo color="white" />
            </div>  
            <nav class="w-full h-auto my-10 lg:my-0 lg:flex lg:flex-row lg:w-auto lg:ml-auto lg:gap-20 lg:mr-20">
                {#each sections as section}
                    <section class="flex flex-col items-center justify-start h-auto mb-10 last:mb-0 lg:items-start lg:flex-shrink-0">
                        <h3 class="text-sm text-white font-medium mb-6">{ section.name }</h3>
                        {#each section.links as link}
                            <a class="block text-sm text-gray font-medium mb-2 last:mb-0 transition-colors hover:text-cyan" href="/">{ link }</a>
                        {/each}
                    </section>
                {/each}
            </nav>
            <SocialNetworks />
        </div>
    </footer>
</template>