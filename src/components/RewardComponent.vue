<script setup lang="ts">
</script>
<template>
    <!-- REWARD COMPONENT -->
    <div class="w-full horizontal-padding">
        <div class="md:grid md:grid-cols-12 mb-14 md:mb-20">
            <div class="hidden md:block col-span-7"></div>
            <div class="md:col-span-5 text-center md:text-left">
                <p class="font-clash text-xl md:text-3xl mouse-lg">Prizes and <br><span class="text-pink">Rewards</span></p>
                <p class="text-xs md:text-base leading-[25px]">Highlight of the prizes or rewards for winners and for participants. </p>
            </div>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-around">
            <img class="absolute top-10 left-6 md:top-20 md:left-48 w-2 md:w-auto" src="@images/price/price-star-1.png" alt="price star-1">
            <img class="absolute top-[10%] right-[25%] md:top-[21%] md:right-[15%] w-2 md:w-auto -z-10" src="@images/price/price-star-2.png" alt="price star-2">
            <div class="relative">
                <img src="@images/price/prize-image.png" alt="price image" class="max-w-full md:max-w-sm">

                <img class="absolute hidden md:block bottom-0 left-10 md:-bottom-14 md:left-32 w-2 md:w-auto" src="@images/price/price-star-3.png" alt="price star-3">
                <img class="absolute hidden md:block  -bottom-14 right-6 md:bottom-12 md:right-8 w-2 md:w-auto" src="@images/price/price-star-5.png" alt="price star-5">
            </div>
            <div class="relative">
                <div class="flex items-end justify-center gap-x-2 md:gap-x-4 mt-20 md:mt-0">
                    <div class="mb-6 flex flex-col items-center">
                        <img src="@images/price/prize-2.png" alt="Silver" class="-mb-9 md:-mb-20 z-10 w-20 md:w-40">
                        <div class="flex flex-col justify-end text-center md:p-6 py-6 bg-pink/[0.12] border border-pink rounded-lg w-20 md:w-44 h-32 md:h-60 xl:w-56 xl:h-72">
                            <p class="font-bold text-xs md:text-3xl mouse-lg xl:text-4xl">2nd</p>
                            <p class="font-semibold pt-0 xl:pt-1 pb-2 xl:pb-3 text-xs md:text-xl xl:text-2xl">Runner</p>
                            <p class="font-bold text-pink text-xs md:text-2xl xl:text-3xl mouse-lg">N300,000</p>
                        </div>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="@images/price/prize-1.png" alt="Gold" class="-mb-14 md:-mb-28 z-10 p-0 m-0 w-36 md:w-52">
                        <div
                            class="flex flex-col justify-end text-center md:p-6 py-6 bg-purple/[0.12] border border-purple rounded-lg w-24 md:w-44 h-36 md:h-64 xl:w-56 xl:h-80">
                            <p class="font-bold text-xs md:text-3xl mouse-lg xl:text-4xl">1st</p>
                            <p class="font-semibold pt-0 xl:pt-1 pb-2 xl:pb-3 text-xs md:text-xl xl:text-2xl">Runner</p>
                            <p class="font-bold text-pink text-xs md:text-2xl xl:text-3xl mouse-lg">N400,000</p>
                        </div>
                    </div>
                    <div class="mb-6 flex flex-col items-center">
                        <img src="@images/price/prize-3.png" alt="Bronze" class="-mb-11 md:-mb-24 z-10 w-20 md:w-40">
                        <div class="flex flex-col justify-end text-center md:p-6 py-6 bg-pink/[0.12] border border-pink rounded-lg w-20 md:w-44 h-32 md:h-60 xl:w-56 xl:h-72">
                            <p class="font-bold text-xs md:text-3xl mouse-lg xl:text-4xl">3rd</p>
                            <p class="font-semibold pt-0 xl:pt-1 pb-2 xl:pb-3 text-xs md:text-xl xl:text-2xl">Runner</p>
                            <p class="font-bold text-pink text-xs md:text-2xl xl:text-3xl mouse-lg">N150,000</p>
                        </div>
                    </div>
                </div>

                <!-- stars -->
                <img class="absolute hidden md:block -top-[2%] left-[47%]" src="@images/price/price-star-4.png" alt="price star-4">
                <img class="absolute w-2 md:w-auto -bottom-5 md:-bottom-10 right-20 md:right-48" src="@images/price/price-star-4.png" alt="price star-4">
                <img class="absolute w-2 md:w-auto -top-4 left-0" src="@images/price/price-star-6.png" alt="price star-6">
                <img class="absolute w-2 md:w-auto top-14 md:top-0 right-0" src="@images/price/price-star-7.png" alt="price star-7">
            </div>
        </div>
        <img class="absolute top-10 -left-10 md:top-0 md:left-0 mix-blend-hard-light -z-10" src="@images/price/price-flare-1.png"
            alt="price flare">
        <img class="absolute top-0 right-0 mix-blend-hard-light -z-10" src="@images/price/price-flare-2.png"
            alt="price flare">
    </div>
</template>
<style></style>