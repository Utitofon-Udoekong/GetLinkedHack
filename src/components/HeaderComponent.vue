<script setup lang="ts">
const dueDate = new Date("2023,11, 18")
const hour = ref("00")
const minute = ref("00")
const seconds = ref("00")
setInterval(() => {
    const now = Date.now()
    const timeLeft = new Date(dueDate.getTime() - now)
    hour.value = timeLeft.getHours().toString().padStart(2,"0")
    minute.value = timeLeft.getMinutes().toString().padStart(2,"0")
    seconds.value = timeLeft.getSeconds().toString().padStart(2,"0")
}, 1000)

</script>
<template>
    <div>
        <header class="">
            <Navbar />
            <Divider />

            <div class="z-20 mt-8 relative">
                <div class="text-right relative w-full pr-8 md:pr-[70px] xl:pr-32">
                    <p class="text-[15px] md:text-2xl xl:text-4xl italic font-bold">Igniting a Revolution in HR Innovation</p>
                    <img src="@images/header/ignition-line.png" class="absolute -bottom-2 xl:-bottom-4 w-[115px] md:w-[170px] right-8" alt="curved line">
                </div>
                <div class="flex flex-col md:flex-row md:justify-between">
                    <div class="px-8 md:pl-[70px] xl:pl-32">
                        <div class="font-clash text-3xl mouse-lg md:text-6xl xl:text-[80px] mt-16 md:mt-32 relative md:w-max text-center md:text-left">
                            <p >getlinked Tech</p>
                            <p class="flex items-center justify-center md:justify-start gap-x-1 md:gap-x-2 pb-2 md:pb-0">Hackathon <span class="text-pink">1.0</span>
                                <img src="@images/header/header-icon-chain.png" alt="chain icon"
                                    class="grow-0 w-6 md:w-10 xl:w-13">
                                <img src="@images/header/header-icon-flare.png" alt="flare icon"
                                    class="grow-0 w-5 md:w-10 xl:w-13">
                            </p>
                            <img src="@images/header/header-icon-bulbl.png" alt="bulbl icon"
                                class="absolute w-[18px] -top-4 right-7 md:w-10 xl:w-13 md:-top-10 md:right-24 xl:-top-12 xl:right-7">
                            <p class="text-xs md:text-xl font-montserrat leading-6 ">Participate in getlinked tech Hackathon 2023 stand
                                <br class="hidden md:block"> a chance to
                                win a Big prize
                            </p>
                            <div class="mt-8">
                                <RouterLink to="/register" class="text-white bg-gradient-to-r rounded-[4px] from-soft-pink via-pink to-purple px-11 md:px-11 py-4 font-montserrat text-xs md:text-base" >Register</RouterLink>
                            </div>
                        </div>
                        <div class="font-unica text-5xl md:text-6xl flex justify-center md:justify-start gap-x-5 md:mb-20 mt-4 md:mt-16">
                            <span class="mouse-md">{{hour}}<span class="font-montserrat text-sm">H</span></span>
                            <span class="mouse-md">{{minute}}<span class="font-montserrat text-sm">M</span></span>
                            <span class="mouse-md">{{seconds}}<span class="font-montserrat text-sm">S</span></span>
                        </div>
                    </div>
                    <div class="flex md:items-end md:justify-end">
                        <img src="@images/header/header-image.png" alt="Header image"
                            class="max-w-full md:max-w-2xl xl:max-w-3xl filter hue-rotate-45">
                    </div>
                </div>
                <!-- stars -->
                <img src="@images/header/header-star-1.png" alt="star icon" class="absolute w-3 md:w-auto top-[58px] left-[32%] md:left-[185px]">
                <img src="@images/header/header-star-2.png" alt="star icon"
                    class="absolute w-2 md:w-auto top-[7%] md:top-[120px] xl:top-[287px] left-[84%] lg:left-[665px]">
                <img src="@images/header/header-star-3.png" alt="star icon" class="absolute w-3 md:w-auto bottom-[63%] left-[80%] md:bottom-[150px] md:left-[500px]">
            </div>
            <img src="@images/header/header-lens-1.png" alt="Header lens flare"
                class="absolute hidden md:block top-0 md:top-0 -left-10 md:left-0 mix-blend-hard-light ">
            <img src="@images/header/header-flare-mobile.png" alt="Header lens flare"
                    class="absolute top-0 right-0 mix-blend-hard-light block md:hidden -z-10">
            <img src="@images/header/header-lens-2.png" alt="Header lens flare"
                class="absolute top-0 right-0 mix-blend-hard-light hidden md:block -z-10">
            <img src="@images/header/header-matrix.png" alt="Header matrix"
                class="absolute bottom-0 right-0 mix-blend-luminosity -z-10 hidden md:block">
        </header>
        <Divider />
    </div>
</template>
<style>
</style>
