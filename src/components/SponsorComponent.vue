<script setup lang="ts">
</script>
<template>
    <div>
        <div class="horizontal-padding">
            <div class="text-center mb-16">
                <p class="font-clash text-xl md:text-3xl pb-3 md:pb-5">Partner and Sponsors</p>
                <p class="text-xs md:text-sm leading-[27px]">Getlinked Hackathon 1.0 is honored to have the following major <br>
                    companies as its partners and sponsors</p>
            </div>
            <div class="relative bg-white/[0.01] border border-pink rounded-lg py-5 sm:py-10 md:px-40 md:py-36">
                <div class="grid grid-cols-3 grid-rows-2">
                    <div class="p-3 md:p-5 sponsor sponsor-l flex items-center justify-center"><img src="@images/sponsor/Liberty.png" class="w-10 md:w-auto" alt="Liberty"></div>
                    <div class="p-3 md:p-5 sponsor sponsor-l flex items-center justify-center"><img src="@images/sponsor/Libertypay.png" class="w-10 md:w-auto" alt="Libertypay"></div>
                    <div class="p-3 md:p-5 sponsor flex items-center justify-center"><img src="@images/sponsor/Winwise.png" class="w-10 md:w-auto" alt="Winwise"></div>
                    <div class="p-3 md:p-5 sponsor-l flex items-center justify-center"><img src="@images/sponsor/wisper.png" class="w-10 md:w-auto" alt="wisper"></div>
                    <div class="p-3 md:p-5 sponsor-l flex items-center justify-center"><img src="@images/sponsor/Paybox.png" class="w-10 md:w-auto" alt="Paybox"></div>
                    <div class="p-3 md:p-5 flex items-center justify-center"><img src="@images/sponsor/VizualPlus.png" class="w-10 md:w-auto" alt="Vizual Plus"></div>
                </div>
                <img src="@images/sponsor/sponsor-star-1.png" alt="sponsor-star-1" class="absolute w-2 md:w-auto top-2 md:-top-12 left-14">
                <img src="@images/sponsor/sponsor-star-2.png" alt="sponsor-star-2" class="absolute w-2 md:w-auto top-[27%] md:top-20 right-[48%] md:right-[450px]">
                <img src="@images/sponsor/sponsor-star-3.png" alt="sponsor-star-3" class="absolute w-2 md:w-auto bottom-2 md:bottom-16 right-[10%] md:right-[450px]">
            </div>
        </div>
        <img src="@images/sponsor/sponsor-flare-1.png" alt="sponsor-flare-1"
            class="absolute -top-56 left-0 mix-blend-hard-light ">
        <img src="@images/sponsor/sponsor-flare-2.png" alt="sponsor-flare-2"
            class="absolute top-44 right-0 mix-blend-hard-light -z-10">
    </div>
</template>
<style>
.sponsor-l,.sponsor{
    position: relative;
}
.sponsor-l::before{
    position: absolute;
    right: 0;
    top: 10%;
    bottom: 10%;
    content: "";
    width: 4px;
    height: 80%;
    background: var(--vt-c-pink);
    border-radius: 4px;
}
.sponsor::after{
    position: absolute;
    bottom: 0;
    left: 10%;
    right: 10%;
    content: "";
    height: 4px;
    width: 80%;
    background: var(--vt-c-pink);
    border-radius: 4px;
}
@media screen and (max-width: 767.9px) {
    .sponsor-l::before{
    width: 2px;
    height: 60%;
}
.sponsor::after{
    height: 2px;
}
}
</style>