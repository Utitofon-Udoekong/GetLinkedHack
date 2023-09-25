<script setup lang="ts">
import gsap from "gsap"
const currentValue = ref(0)

function updateCounter() {
  if (currentValue.value == 100) return;
  currentValue.value += Math.floor(Math.random() * 10) + 1;
  if (currentValue.value > 100) {
    currentValue.value = 100
  }

  const delay = Math.floor(Math.random() * 200) + 50;
  setTimeout(updateCounter, delay)
}
onMounted(() => {
  updateCounter()
  gsap.to(".counter", 0.25, {
    delay: 2.5,
    opacity: 0
  })
  gsap.to(".bar", 1, {
    delay: 3,
    height: 0,
    stagger: {
      amount: 0.5
    },
    ease: "power4.inOut"
  })
  gsap.to(".preloader", 1, {
    delay: 3.5,
    height: 0,
  })
  
})
</script>

<template>
  <div class="overflow-hidden">
    <section class="preloader pointer-events-none w-screen h-screen relative">
      <h1 class="counter fixed w-full h-full flex justify-end items-end z-50 font-clash">{{ currentValue }}%</h1>
      <div class="overlay inset-0 fixed w-screen h-screen z-10 flex">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </section>
  </div>
  <Loader />
  <RouterView/>
  <Cursor />
</template>

<style scoped>
.bar {
  width: 10vw;
  height: 105vh;
  background: #a199a8;
}

.counter {
  color: var(--vt-c-indigo);
  padding: 0.2em 0.4em;
  font-size: 5em;
}
@media screen and (max-width: 768px) {
  .counter{
    font-size: 2.5em;
  }
}
</style>
