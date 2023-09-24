<script setup lang="ts">
const isNavOpen = ref(false)
const toggleNav = () => isNavOpen.value = !isNavOpen.value
</script>
<template>
  <div data-aos="fade-down" class="horizontal-padding mb-[30px] bg-transparent h-full ">
    <nav class="w-full m-auto flex justify-between items-center">
        <Logo/>

        <div class="hidden md:flex items-center">
            <ul class="inline-flex gap-x-10 mr-24 text-base">
                <li><a class="text-white mouse-md" href="#timeline">Timeline</a></li>
                <li><a class="text-white mouse-md" href="#">Overview</a></li>
                <li><a class="text-white mouse-md" href="#faq">FAQs</a></li>
                <li><RouterLink to="/contact" class="text-white mouse-md">Contact</RouterLink></li>
            </ul>
            <ActionButton to="/register" title="Register"/>
        </div>
        <div @click="toggleNav" class="block md:hidden">
          <img src="@images/header/hamburger.png" alt="Nav menu icon">
        </div>
        <div v-if="isNavOpen" :class="[
          'fixed inset-0 duration-300 w-full h-screen p-8 bg-indigo backdrop-blur-xl z-40 flex flex-col justify-center items-start md:hidden',
        ]">
          <div @click="toggleNav" class="absolute top-8 right-8">
            <img src="@images/header/close-nav.png" alt="Close Nav icon">
          </div>
            <div>
              <ul class="text-base font-inter font-medium">
                <li class="mb-5"><a class="text-white -tracking-tight" href="#timeline">Timeline</a></li>
                <li class="mb-5"><a class="text-white -tracking-tight" href="#">Overview</a></li>
                <li class="mb-5"><a class="text-white -tracking-tight" href="#faq">FAQs</a></li>
                <li class="mb-10"><RouterLink to="/contact" class="text-white">Contact</RouterLink></li>
            </ul>
            <NavButton to="/register" title="Register"/>
            </div>
        </div>
    </nav>
  </div>
</template>
<style>
</style>