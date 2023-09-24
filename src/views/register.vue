<script setup lang="ts">
import type { Categories, RegisterForm } from '@/utils';
const store = useAPIStore()
const isRegistered = ref(false)
const form = ref<RegisterForm>({
  category: 0,
  email: "",
  group_size: 1,
  phone_number: "",
  privacy_poclicy_accepted: false,
  project_topic: "",
  team_name: ""
})
const {data,isLoading, execute,isFinished} = registerTeam(form.value)
const {data: categories} = getCategories()
watchEffect(() => {
  console.log(form.value.privacy_poclicy_accepted)
  if(data.value){
    isRegistered.value = true
  }
  if(isLoading.value){
    store.toggleLoading()
  }
  if(isFinished.value){
    store.toggleLoading()
  }
})

useHead({
  title: "Register - GetLinked"
})
</script>
<template>
  <div>
    <section class="relative py-8 md:py-20 h-full">
      <div>
        <RegisterNav />
        <div class="flex flex-col md:flex-row justify-between items-center md:mt-32 md:px-5 px-8">
          <div class="lg:max-w-xl">
            <img src="@images/register/register-image.png" alt="register-image" class="md:w-full w-48">
          </div>
          <div class="register-card md:px-16 md:py-14 lg:max-w-[600px]">
            <p class="text-3xl mouse-lg font-clash text-pink font-semibold pb-9 hidden md:block">Register</p>
            <span class="mb-2 md:mb-5 flex items-end">
              <p class="text-xs md:text-sm">Be part of this movement!</p> <img src="@images/register/movement.png"
                alt="Part of the movement" class="w-20">
            </span>
            <p class="text-xl md:text-2xl uppercase pb-5 md:pb-10 text-center md:text-left">CREATE YOUR ACCOUNT</p>
            <div class="grid md:grid-cols-2 md:gap-x-4">
              <div class="w-full mb-4 md:mb-7">
                <p class="label pb-2 md:pb-3">Team’s Name</p>
                <input v-model="form.team_name" class="w-full" type="text" placeholder="Enter the name of your group">
              </div>
              <div class="w-full mb-4 md:mb-7">
                <p class="label pb-2 md:pb-3">Phone</p>
                <input v-model="form.phone_number" class="w-full" type="text" placeholder="Enter your phone number">
              </div>
              <div class="w-full mb-4 md:mb-7">
                <p class="label pb-2 md:pb-3">Email</p>
                <input v-model="form.email" class="w-full" type="text" placeholder="Enter your email address">
              </div>
              <div class="w-full mb-4 md:mb-7">
                <p class="label pb-2 md:pb-3">Project Topic</p>
                <input v-model="form.project_topic" class="w-full" type="text" placeholder="What is your group project topic">
              </div>
            </div>
            <div class="grid grid-cols-3 md:grid-cols-2 gap-x-2 md:gap-x-4">
              <div class="w-full mb-4 md:mb-7 relative col-span-2 md:col-span-1">
                <p class="label pb-2 md:pb-3">Category</p>
                <select v-model="form.category" >
                  <option value="Select your category" disabled selected>Select your category</option>
                  <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                </select>
                <MaterialSymbolsKeyboardArrowDown class="absolute top-[52%] md:top-[55%] right-1 md:right-3" />
              </div>
              <div class="w-full mb-4 md:mb-7 relative col-span-1 md:col-span-1">
                <p class="label pb-2 md:pb-3">Group Size</p>
                <select nv-model="form.group_size" >
                  <option selected>Select</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>
                <MaterialSymbolsKeyboardArrowDown class="absolute top-[52%] md:top-[55%] right-1 md:right-3" />
              </div>
            </div>
            <p class="text-[9px] md:text-xs text-hard-pink italic pb-4">Please review your registration details before submitting</p>
            <div class="flex items-start md:items-center">
              <input v-model="form.privacy_poclicy_accepted" type="checkbox" class="mr-2 md:mr-3 appearance-none border border-white rounded-sm">
            <p class="text-xs">
              I agreed with the event terms and conditions and privacy policy
            </p>
            </div>

            <div class="flex justify-center mt-5">
              <button @click="execute()"
                class="hidden md:block text-white max-w-52 md:w-full bg-gradient-to-r rounded-[4px] from-soft-pink via-pink to-purple px-11 py-4 sm:px-13 font-montserrat text-base">{{isLoading ? "..." : "Register Now"}}</button>
              <button
                class="block md:hidden text-white max-w-64 md:w-full bg-gradient-to-r rounded-[4px] from-soft-pink via-pink to-purple px-11 py-4 sm:px-13 font-montserrat text-base">{{isLoading ? "..." : "Submit"}}</button>
            </div>
          </div>
        </div>
      </div>


      <!-- stars -->
      <img class="absolute w-3 md:w-auto top-[18%] md:top-[23%] left-[85%] md:left-[5.5%]" src="@images/register/register-star-1.png" alt="register-star-1">
      <img class="absolute w-3 md:w-auto bottom-[60%] md:bottom-[10%] left-[5%] md:left-[10%]" src="@images/register/register-star-2.png" alt="register-star-2">
      <img class="absolute w-2 md:w-auto bottom-[22%] md:bottom-[20%] left-[91%] md:left-[43%]" src="@images/register/register-star-3.png" alt="register-star-3">
      <img class="absolute top-[28%] right-[19%] hidden md:block" src="@images/register/register-star-4.png" alt="register-star-4">
      <img class="absolute bottom-[5%] right-[5%] hidden md:block" src="@images/register/register-star-5.png" alt="register-star-5">
      <!-- flares -->
      <img class="absolute top-0 left-0 mix-blend-hard-light -z-10" src="@images/contact/contact-flare-1.png"
        alt="contact-flare-1">
      <img class="absolute bottom-0 right-0 mix-blend-hard-light -z-10" src="@images/contact/contact-flare-2.png"
        alt="contact-flare-2">
    </section>

    <!-- SUCCESS MODAL -->
    <section v-if="isRegistered"
      class="fixed h-screen w-screen p-6 md:p-0 z-30 inset-0 bg-indigo/[93%] flex justify-center items-center">
      <div class="relative w-full h-full">
        <div class="register-success-card mx-auto md:max-w-lg p-10 px-4 md:p-14 xl:max-w-2xl xl:p-16 absolute inset-0 text-center flex flex-col items-center justify-center">
        <div class="flex justify-center">
          <img src="@images/register/register-success.png" alt="register success" class="w-auto md:w-[320px]">
        </div>
        <p class="text-base md:text-2xl xl:text-3xl mouse-lg font-semibold pb-5">Congratulations <br> you have successfully Registered!</p>
        <p class="text-xs md:text-sm font-medium md:font-semibold pb-2">Yes, it was easy and you did it!</p>
        <p class="text-xs md:text-sm font-medium md:font-semibold flex gap-x-1 items-center justify-center">check your mail box for next step
          <img src="@images/register/register-success-emoji.png" alt="register success emoji">
        </p>
        <div class="flex justify-center mt-5">
          <RouterLink to="/"
            class="text-white w-full bg-gradient-to-r rounded-[4px] from-soft-pink via-pink to-purple px-11 py-4 sm:px-13 font-montserrat text-base">Back</RouterLink>
        </div>

        <!-- stars -->
        <img class="absolute w-3 md:w-auto top-[35%] left-[10%]" src="@images/register/register-success-star-1.png"
          alt="register-success-star-1">
        <img class="absolute w-2 md:w-auto -top-5 right-5" src="@images/register/register-success-star-2.png"
          alt="register-success-star-2">
        <img class="absolute w-3 md:w-auto -bottom-5 right-10" src="@images/register/register-success-star-3.png"
          alt="register-success-star-3">
      </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.register-card {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  /* min-width: 600px; 2705 */
}
input[type='checkbox']{
  position: relative;
  width: 15px;
  height: 15px;
}
input[type='checkbox']:checked::before{
  content: "\2713";
  color: var(--vt-c-pink);
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 
}
.register-success-card {
  border-radius: 5px;
  border: 1px solid #D434FE;
  background: rgba(255, 255, 255, 0.01);
}

@media screen and (max-width: 639px) {
  .register-card {
    background: none;
    box-shadow: none;
  }

  input[type='checkbox']{
    position: relative;
  }

  input[type='checkbox']:checked::after {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    content: '&check;';
  }

  input:not(input[type='checkbox']),
  input::placeholder,
  textarea::placeholder,
  select,
  .label {
    font-size: 13px;
  }
  input:not(input[type='checkbox'])
  select {
    padding-left: 6px;
  }
  option{
    font-size: 10px;
  }
}

input:not(input[type='checkbox']),
select {
  border-radius: 4px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 13px 0;
  padding-left: 18px;
  outline: none;
  width: 100%;
  font-size: 14px;
}

select {
  appearance: none;
}

option {
  background: var(--background-color);
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.25);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}</style>
