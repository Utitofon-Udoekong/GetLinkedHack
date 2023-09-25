<script setup lang="ts">
</script>
<template>
    <div>
        <div class="horizontal-padding flex flex-col md:flex-row items-center justify-center gap-x-12 mt-5 md:mt-10">
            <div data-aos="fade-right" class="max-w-xl mb-12 md:mb-0">
                <div class="mb-8 md:mb-16 text-center md:text-left">
                    <p class="font-clash text-xl md:text-3xl mouse-lg">Privacy Policy and <br><span class="text-pink">Terms</span></p>
                    <p class="text-xs md:text-sm pt-2 pb-5 md:py-7 text-white/75">Last updated on September 12, 2023</p>
                    <p class="text-xs md:text-sm leading-7">Below are our privacy & policy, which outline a lot of goodies. <br>it’s our aim to
                        always take of our participant</p>
                </div>
                <div>
                    <div class="policy-list-card px-4 md:px-16 py-14">
                        <p class="text-xs md:text-sm leading-7 md:leading-8 pb-6 text-center md:text-left">At getlinked tech Hackathon 1.0, we value your privacy and are
                            committed to protecting your personal information. This Privacy Policy outlines how we collect,
                            use, disclose, and safeguard your data when you participate in our tech hackathon event. By
                            participating in our event, you consent to the practices described in this policy.</p>
                        <p class="text-[13px] md:text-base text-pink font-bold pb-3">Licensing Policy</p>
                        <p class="text-xs md:text-sm font-bold pb-5">Here are terms of our Standard License:</p>
                        <ul class="list-image-check list-none ml-6 text-xs md:text-sm mb-12 md:mb-5">
                            <li class="leading-6 md:leading-7 mb-4 "> The Standard License grants you a non-exclusive right to navigate and register for our event</li>
                            <li class="leading-6 md:leading-7 ">You are licensed to use the item available at any free source sites, for your project developement</li>
                        </ul>
                        <div class="flex justify-center w-full">
                            <ActionButton title="Read More"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:-mt-[70%] md:-mr-[10%] shrink-0 px-2 md:px-0">
                <div class="max-w-full md:max-w-[480px] ">
                    <img src="@images/privacy/privacy-image.png" alt="privacy-image" class="w-full">
                </div>
            </div>
        </div>
        <img src="@images/privacy/privacy-star-1.png" alt="privacy star-1" class="absolute w-2 md:w-auto top-[2%] left-[73%]  md:top-24 md:left-[40%]">
        <img src="@images/privacy/privacy-star-2.png" alt="privacy star-2" class="absolute w-3 md:w-auto top-[18%] left-[80%] md:top-52 md:left-[50%]">
        <img src="@images/privacy/privacy-star-3.png" alt="privacy star-3" class="absolute w-3 md:w-auto bottom-[45%] left-4 md:bottom-56 md:left-20">
        <img src="@images/privacy/privacy-star-4.png" alt="privacy star-4" class="absolute w-1 md:w-auto top-[76%] right-20 md:top-[22%] md:right-40">
        <img src="@images/privacy/privacy-star-5.png" alt="privacy star-5" class="absolute w-2 md:w-auto bottom-[6%] right-[74%] md:bottom-[23%] md:right-[35%]">
        <img src="@images/privacy/privacy-star-6.png" alt="privacy star-6" class="absolute w-3 md:w-auto bottom-[23%] right-[84%] md:bottom-[35%] md:right-[27%]">
        <img src="@images/privacy/privacy-star-7.png" alt="privacy star-7" class="absolute w-2 md:w-auto bottom-[6%] right-[15%] md:bottom-[18%] md:right-20">
        
        <img src="@images/privacy/privacy-flare.png" alt="privacy flare" class="absolute bottom-[40%] md:-bottom-64 left-0 mix-blend-hard-light -z-10"> 
        </div>
</template>
<style scoped>
.policy-list-card {
    border-radius: 5px;
    border: 1px solid var(--vt-c-pink);
    background: rgba(217, 217, 217, 0.03);
}</style>