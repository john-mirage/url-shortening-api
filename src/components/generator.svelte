<script lang="ts">
    import { string } from 'yup'
    import FilledButton from '@components/button-filled.svelte'

    interface Link {
        baseUrl: string;
        shortUrl: string;
        copied: boolean;
    }

    let links: Link[] = []
    let textInput
    let urlIsValid: boolean = true

    async function handleSubmit() {
        let schema = string().required().url()
        const url = textInput.value
        if (await schema.isValid(url)) {
            if (!urlIsValid) urlIsValid = true
            const apiUrl = `https://api.shrtco.de/v2/shorten?url=${url}`
            let data = await fetch(apiUrl).then(response => response.json())
            if (data.ok) {
                links = [...links, { baseUrl: url, shortUrl: data.result.full_short_link, copied: false }]
                textInput.value = ""
            }
        } else {
            if (urlIsValid) urlIsValid = false
        }
    }

    async function handleClipboard(linkIndex: number) {
        if (!links[linkIndex].copied) {
            let copiedLink: Link = await navigator.clipboard.writeText(links[linkIndex].shortUrl).then(() => {
                return { baseUrl: links[linkIndex].baseUrl, shortUrl: links[linkIndex].shortUrl, copied: true }
            }, () => {
                throw new Error("The link has not been copied to the clipboard!")
            })
            links = links.map((link, index) => index === linkIndex ? copiedLink : { ...link, copied: false })
        }
    }
</script>

<template>
    <div class="relative flex flex-col items-stretch gap-5 -translate-y-1/2 p-6 bg-dark-violet rounded-lg bg-shorten-mobile bg-no-repeat bg-right-top md:flex-row md:p-10 lg:bg-shorten-desktop">
        <input
            class="w-full h-12 bg-white rounded-lg px-4 md:mb-0 md:flex-1 outline-cyan focus:outline-none"
            class:border-red={ !urlIsValid }
            class:border-4={ !urlIsValid }
            placeholder="Shorten a link here..."
            type="text"
            bind:this={textInput}
        />
        <FilledButton size="lg" label="Shorten it!" on:click={handleSubmit} />
        {#if !urlIsValid}
            <p class="absolute bottom-4 left-10 text-red text-sm font-medium italic">Please add a link</p>
        {/if}
    </div>
    {#if links.length > 0}
        <ul class="w-full h-auto -translate-y-12 md:-translate-y-16">
            {#each links as link, index}
                <li class="flex flex-col md:flex-row justify-start items-center w-full h-auto p-6 bg-white rounded-lg mt-6 shadow-sm">
                    <p class="text-very-dark-violet font-medium mb-2 md:mb-0">{ link.baseUrl }</p>
                    <p class="text-cyan font-medium mb-2 md:mb-0 md:ml-auto md:mr-6">{ link.shortUrl }</p>
                    <FilledButton
                        size="sm"
                        label={link.copied ? "Copied!" : "Copy"}
                        inactive={link.copied ? true : false}
                        on:click={() => handleClipboard(index)}
                    />
                </li>
            {/each}
        </ul>
    {/if}
</template>