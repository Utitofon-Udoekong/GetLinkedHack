<script setup lang="ts">
const faqs = <{q: String,a: String}[]> [
    {
        q: "Can I work on a project I started before the hackathon?",
        a: ""
    },
    {
        q: "What happens if I need help during the hackathon?",
        a: ""
    },
    {
        q: "What happens if I don't have an idea for a project?",
        a: ""
    },
    {
        q: "Can I join a team or do I have to come with one?",
        a: ""
    },
    {
        q: "What happens after the hackathon ends",
        a: ""
    },
    {
        q: "Can I work on a project I started before the hackathon?",
        a: ""
    },
]
</script>
<template>
  <div class="flex flex-col md:flex-row md:justify-around items-center horizontal-padding relative">
    <div data-aos="fade-left" class="max-w-md mb-20 md:mb-0">
        <p class="text-center md:text-left font-clash text-xl  md:text-3xl mouse-lg pb-3 md:pb-5">Frequently Ask<br><span class="text-pink">Question</span></p>
        <p class="text-center md:text-left text-xs md:text-sm pb-8 md:pb-10 leading-7">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
        <div>
            <div v-for="faq in faqs" class="border-b border-pink py-2 md:py-3 mb-3 cursor-pointer flex justify-between items-center">
                <p class="text-xs md:text-sm">{{ faq.q }}</p>
                <MaterialSymbolsAdd class=" text-pink stroke-pink text-xs md:text-xl"/>
            </div>
        </div>
        <img class="absolute left-10 -top-5 w-3 md:w-auto" src="@images/faq/faq-star.png" alt="FAQ star">
    </div>
    <div data-aos="fade-right" class="relative max-w-full md:max-w-xl">
        <img src="@images/faq/faq-image.png" alt="FAQ Image">
        <img class="absolute left-12 top-20 md:left-28 md:top-28 w-2 md:w-auto" src="@images/faq/faq-star-2.png" alt="FAQ star-2">
        <img class="absolute w-10 md:w-auto left-20 md:left-44 -top-12 md:-top-14" src="@images/faq/faq-mark-1.png" alt="FAQ mark-1">
        <img class="absolute right-24 top-2 -z-10 md:right-52 w-4 md:w-8 md:top-0" src="@images/faq/faq-mark-2.png" alt="FAQ mark-2">
    </div>
  </div>
</template>
<style>
</style>
