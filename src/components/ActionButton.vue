<script setup lang="ts">
const props = withDefaults(defineProps<{
    title?: string
}>(),{
  title: "Read More"
})

</script>
<template>
  <div>
    <button class="text-white bg-gradient-to-r rounded-[4px] from-soft-pink via-pink to-purple px-5 md:px-11 py-2 md:py-4 sm:px-13 font-montserrat text-xs md:text-base" >{{ title! }}</button>
  </div>
</template>
<style>
</style>