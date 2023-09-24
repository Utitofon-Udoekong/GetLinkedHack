<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <div data-aos="fade-down" class="horizontal-padding mb-4 md:mb-8 bg-transparent h-full">
    <nav class="w-full m-auto hidden md:flex justify-between items-center ">
        <Logo/>

        <div class="flex items-center">
            <ul class="inline-flex gap-x-10 mr-24 text-base">
                <li><a class="text-white mouse-md" href="/#timeline">Timeline</a></li>
                <li><a class="text-white mouse-md" href="/#">Overview</a></li>
                <li><a class="text-white mouse-md" href="/#faq">FAQs</a></li>
                <li><RouterLink to="/contact" class="bg-gradient-to-r from-purple to-[#FF26B9] mouse-md bg-clip-text text-transparent" >Contact</RouterLink></li>
            </ul>
            <button class="text-white z-10 mouse-md rounded-[4px] relative action-button px-11 py-4 sm:px-13 font-montserrat text-base">Register</button>
        </div>
    </nav>
    <RouterLink to="/" class="text-pink font-clash font-bold text-[15px] block md:hidden">Register</RouterLink>
  </div>
</template>
<style>
.action-button::before{
    content: "";
    position: absolute;
    border-radius: 4px;
    inset: 0;
    background: var(--vt-c-primary-gradient);
    z-index: -3;
}
.action-button::after{
    content: "";
    position: absolute;
    border-radius: 4px;
    inset: 2px;
    z-index: -2;
    background: var(--background-color);
}
</style>