<script setup lang="ts">
const props = withDefaults(defineProps<{
    to: string
    title: string
}>(),{
  to: "/",
  title: "Read More"
})

</script>
<template>
  <div>
    <RouterLink :to="to" class="text-white bg-gradient-to-r rounded-[4px] from-soft-pink via-pink to-purple px-11 py-4 sm:px-13 font-montserrat text-base" >{{ title }}</RouterLink>
  </div>
</template>
<style>
</style>