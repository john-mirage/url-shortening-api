<script lang="ts">
    import { string } from 'yup'
    import axios from 'axios'
    import Button from '@components/button.svelte'

    interface Link {
        baseUrl: string;
        shortUrl: string;
        copied: boolean;
    }

    let links: Link[] = []
    let textInput

    async function handleSubmit() {
        let schema = string().required().url()
        const url = textInput.value
        if (await schema.isValid(url)) {
            /*
            axios.post("https://api.shrtco.de/v2/shorten", {
                url: url,
            }).then((response) => {
                console.log(response)
            }).catch(function (error) {
                console.log(error);
            });
            */
            links = [...links, { baseUrl: url, shortUrl: "shortUrl", copied: false }]
            textInput.value = ""
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
    <div class="flex flex-col items-stretch gap-5 -translate-y-1/2 p-6 bg-dark-violet rounded-lg bg-shorten-mobile bg-no-repeat bg-right-top md:flex-row md:p-10 lg:bg-shorten-desktop">
        <input
            class="w-full h-12 bg-white rounded-lg px-4 md:mb-0 md:flex-1 outline-cyan"
            placeholder="Shorten a link here..."
            type="text"
            bind:this={textInput}
        />
        <Button type="filled" size="lg" label="Shorten it!" on:click={handleSubmit} />
    </div>
    {#if links.length > 0}
        <ul class="w-full h-auto -translate-y-12 md:-translate-y-16">
            {#each links as link, index}
                <li class="flex flex-row justify-start items-center w-full h-auto p-6 bg-white rounded-lg mt-6 shadow-sm">
                    <p class="text-very-dark-violet font-medium">{ link.baseUrl }</p>
                    <p class="ml-auto mr-6 text-cyan font-medium">{ link.shortUrl }</p>
                    <Button
                        type="filled"
                        size="sm"
                        label={link.copied ? "Copied!" : "Copy"}
                        background={link.copied ? "violet" : "cyan"}
                        on:click={() => handleClipboard(index)}
                    />
                </li>
            {/each}
        </ul>
    {/if}
</template>