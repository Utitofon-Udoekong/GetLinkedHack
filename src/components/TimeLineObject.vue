<script setup lang="ts">
interface Timeline {
    left: {
        title: String;
        sub?: String;
    },
    num: Number,
    right: {
        title: String;
        sub?: String;
    },
}
interface MobileTimeline {
    title: String;
    sub: String;
    num: Number,
}
const props = defineProps<{
    timelines?: Timeline[],
    mobileTimelines?: MobileTimeline[]
}>()
</script>
<template>
    <div>
        <div v-for="timeline in timelines" class="hidden md:grid grid-cols-7 grid-rows-[1fr_20px] items-end">
            <div data-aos="fade-right" :class="[
                'col-span-3 text-right ',
                {
                    'row-span-2': timeline?.left.sub
                }
            ]">
                <p class="text-pink text-xl xl:text-2xl font-bold pb-3">{{ timeline?.left.title }}</p>
                <p v-if="timeline?.left.sub" class="text-sm leading-[27px]">{{ timeline?.left.sub }}</p>
            </div>
            <div class="col-span-1 flex flex-col items-center gap-y-3">
                <div class="w-1 h-32 bg-pink "></div>
                <div class="circle w-12 h-12 text-white text-2xl font-bold flex justify-center items-center relative">
                    {{ timeline?.num }}
                </div>
            </div>
            <div data-aos="fade-left" :class="[
                'col-span-3',
                {
                    'row-span-2': timeline?.right.sub
                }
            ]">
                <p class="text-pink text-xl xl:text-2xl font-bold pb-3">{{ timeline?.right.title }}</p>
                <p v-if="timeline?.right.sub" class="text-sm leading-[27px]">{{ timeline?.right.sub }}</p>
            </div>
        </div>

        <!-- Mobile Timeline Object grid-rows-[1fr_20px]-->
        <div  v-for="mobileTimeline in mobileTimelines" class="grid grid-cols-6 items-end md:hidden mb-5">
            <div class="col-span-1 flex flex-col items-center gap-y-3">
                <div class="w-[2px] h-24 bg-pink "></div>
                <div class="w-5 h-5 circle text-white text-xs font-bold flex justify-center items-center relative">
                    {{ mobileTimeline?.num }}
                </div>
            </div>
            <div class="col-span-5 flex flex-col justify-between h-full">
                <div>
                    <p class="text-pink text-xs font-bold pb-2">{{ mobileTimeline?.title }}</p>
                    <p class="text-xs">{{ mobileTimeline?.sub }}</p>
                </div>
                <p class="text-xs font-bold text-pink">November 18, 2023</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.circle {
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 100%);
    flex-shrink: 0;
    border-radius: 26.5px;
}

</style>