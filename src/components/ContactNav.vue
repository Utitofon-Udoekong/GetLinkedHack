<script setup lang="ts">
</script>
<template>
  <div data-aos="fade-down" class="horizontal-padding md:mb-[30px] bg-transparent h-full">
    <RouterLink to="/" class="block md:hidden"><img src="@images/contact/back.png" alt="back button"></RouterLink>
    <nav class="w-full m-auto hidden md:flex justify-between items-center ">
        <Logo/>

        <div class="flex items-center">
            <ul class="inline-flex gap-x-10 mr-24 text-base">
                <li><a class="text-white mouse-md" href="/#timeline">Timeline</a></li>
                <li><a class="text-white mouse-md" href="/#">Overview</a></li>
                <li><a class="text-white mouse-md" href="/#faq">FAQs</a></li>
                <li><RouterLink to="/contact" class="bg-gradient-to-r mouse-md from-purple to-[#FF26B9] bg-clip-text text-transparent" >Contact</RouterLink></li>
            </ul>
            <NavButton to="/register" title="Register"/>
        </div>
    </nav>
  </div>
</template>
<style>
</style>