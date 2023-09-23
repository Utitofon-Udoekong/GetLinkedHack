<script setup lang="ts">
</script>
<template>
    <div>
        <div class="w-full px-8">
            <div class="mb-12 flex flex-col md:flex-row items-start justify-between max-w-4xl gap-x-14 mx-auto h-full">
                <div class="flex flex-col justify-evenly max-w-xs h-full mb-8 md:mb-0">
                    <div>
                        <Logo />
                        <p class="leading-[20px] pt-3 pb-8 text-xs ">Getlinked Tech Hackathon is a technology innovation program established by a group of
                            organizations with the aim of showcasing young and talented individuals in the field of
                            technology
                        </p>
                    </div>
                    <a href="#privacy" class="text-xs ">Terms of Use <span class="text-pink px-1 font-semibold text-base">|</span> Privacy Policy</a>
                </div>
                <div class="text-xs leading-7 mb-14 md:mb-0">
                    <p class="text-pink text-sm font-semibold pb-5">Useful Links</p>
                    <ul>
                        <li class="pb-5"><a href="#">Overview</a></li>
                        <li class="pb-5"><a href="#timeline">Timeline</a></li>
                        <li class="pb-5"><a href="#faq">FAQs</a></li>
                        <li class="pb-5"><a href="#">Register</a></li>
                    </ul>
                    <div class="flex items-center gap-x-4">
                        <p class="text-pink">Follow us</p>
                        <img class="w-4" src="@images/footer/instagram.png" alt="Instagram icon">
                        <img class="w-3" src="@images/footer/x.png" alt="x icon">
                        <img class="w-2" src="@images/footer/facebook.png" alt="facebook icon">
                        <img class="w-4" src="@images/footer/linkedin.png" alt="linkedin icon">
                    </div>
                </div>
                <div class="text-xs md:w-36">
                    <p class="text-pink text-sm pb-3 md:pb-5 font-semibold">Contact Us</p>
                    <div>
                        <span class="pb-5 flex items-start gap-x-4">
                            <img class="w-3 md:w-4" src="@images/footer/phone.png" alt="phone icon">
                            <a href="tel:+234 6707653444">+234 6707653444</a>
                        </span>
                        <span class="pb-5 flex items-start gap-x-4">
                            <img class="w-3 md:w-4" src="@images/footer/location.png" alt="location icon">
                            <a href="#">27,Alara Street<br> Yaba 100012 <br>Lagos State</a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="text-center text-xs">
                <p>All rights reserved. © getlinked Ltd.</p>
            </div>
        </div>
        <img src="@images/footer/footer-star-1.png" alt="footer-star-1" class="absolute w-2 md:w-auto top-[15%] md:top-[27%] left-3 md:left-20">
        <img src="@images/footer/footer-star-3.png" alt="footer-star-3" class="absolute w-2 md:w-auto bottom-20 left-[25%] md:left-[50%]">
        <img src="@images/footer/footer-star-2.png" alt="footer-star-2" class="absolute w-2 md:w-auto top-[48%] right-[37%] md:top-24 md:right-[33%]">
        <img src="@images/footer/footer-star-4.png" alt="footer-star-4" class="absolute w-2 md:w-auto bottom-[23%] md:bottom-[35%] right-[10%]">
    </div>
</template>
<style></style>