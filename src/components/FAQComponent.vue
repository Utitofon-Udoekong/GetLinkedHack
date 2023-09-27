<script setup lang="ts">
const faqs = <{q: string,a: string, id: string}[]> [
    {
        q: "Can I work on a project I started before the hackathon?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum aliquam facilis, eaque quisquam optio.",
    },
    {
        q: "What happens if I need help during the hackathon?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum aliquam facilis, eaque quisquam optio.",
    },
    {
        q: "What happens if I don't have an idea for a project?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum aliquam facilis, eaque quisquam optio.",
    },
    {
        q: "Can I join a team or do I have to come with one?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum aliquam facilis, eaque quisquam optio.",
    },
    {
        q: "What happens after the hackathon ends",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum aliquam facilis, eaque quisquam optio.",
    },
    {
        q: "Can I work on a project I started before the hackathon?",
        a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illum aliquam facilis, eaque quisquam optio.",
    },
]
const activeFaq = ref<string | null>(null)
const showAnswer = (className: string) =>{
    console.log(activeFaq.value)
    if(activeFaq.value == className) {
        activeFaq.value = null
        return;
    }
    activeFaq.value = className
}
</script>
<template>
    
    <div class="flex flex-col md:flex-row md:justify-around items-center horizontal-padding relative">
    <div class="max-w-md mb-20 md:mb-0">
        <p class="text-center md:text-left font-clash text-xl  md:text-3xl mouse-lg pb-3 md:pb-5">Frequently Ask<br><span class="text-pink">Question</span></p>
        <p class="text-center md:text-left text-xs md:text-sm pb-8 md:pb-10 leading-7">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
        <div>
            <div v-for="faq, id in faqs" class="border-b border-pink py-2 md:py-3 mb-3 cursor-pointer">
                <div @click="showAnswer(`answer-block-${id}`)" class="flex justify-between items-center">
                    <p class="text-xs md:text-sm">{{ faq.q }}</p>
                    <MaterialSymbolsRemove v-if="activeFaq == `answer-block-${id}`"  class=" text-pink stroke-pink text-xs md:text-xl"/>
                    <MaterialSymbolsAdd v-else class=" text-pink stroke-pink text-xs md:text-xl"/>
                </div>
                <div :class="[
                    'transition-all duration-300 bg-purple w-full overflow-hidden',
                    {
                        'h-auto p-2 md:p-3': activeFaq == `answer-block-${id}`,
                        'h-0  ': activeFaq != `answer-block-${id}`,
                    }
                ]">
                    <p class="text-xs md:text-sm">{{ faq.a }}</p>
                </div>
            </div>
        </div>
        <img class="absolute left-10 -top-5" src="@images/faq/faq-star.png" alt="FAQ star">
    </div>
    <div class="relative max-w-full md:max-w-xl">
        <img src="@images/faq/faq-image.png" alt="FAQ Image">
        <img class="absolute left-12 top-20 md:left-28 md:top-28 w-2 md:w-auto" src="@images/faq/faq-star-2.png" alt="FAQ star-2">
        <img class="absolute w-10 md:w-auto left-20 md:left-44 -top-12 md:-top-14" src="@images/faq/faq-mark-1.png" alt="FAQ mark-1">
        <img class="absolute right-24 top-2 -z-10 md:right-52 w-4 md:w-8 md:top-0" src="@images/faq/faq-mark-2.png" alt="FAQ mark-2">
    </div>
  </div>
</template>
<style>

</style>
