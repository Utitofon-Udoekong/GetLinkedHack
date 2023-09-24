<script setup lang="ts">
import type { ContactForm } from '@/utils';
const store = useAPIStore()
const contactForm = ref<ContactForm>({
    email: "",
    first_name: "",
    message: "",
    phone_number: ""
})
const {isLoading, execute, isFinished} = submitContactForm(contactForm.value)
watchEffect(() => {
  if(isLoading.value){
    store.toggleLoading()
  }
  if(isFinished.value){
    store.toggleLoading()
  }
})
useHead({
  title: "Contact Us - GetLinked"
})
</script>
<template>
  <div>
    <section class="relative py-8 md:py-20 h-full">
        <div>
            <ContactNav />
            <div class="md:flex justify-around items-center md:mt-32">
                <div class="hidden md:block max-w-[270px]">
                    <p class="text-3xl mouse-lg text-pink pb-5 font-clash font-semibold">Get in touch</p>
                    <p class="pb-5">Contact <br>Information</p>
                    <p class="pb-5">27,Alara Street <br>Yaba 100012 <br>Lagos State</p>
                    <p class="pb-5">Call Us : 07067981819</p>
                    <p class="pb-8">we are open from Monday-Friday 08:00am - 05:00pm</p>
                    <p class="text-pink pb-3">Share on</p>
                    <div class="flex items-center gap-x-4">
                        <img class="w-4" src="@images/footer/instagram.png" alt="Instagram icon">
                        <img class="w-3" src="@images/footer/x.png" alt="x icon">
                        <img class="w-2" src="@images/footer/facebook.png" alt="facebook icon">
                        <img class="w-4" src="@images/footer/linkedin.png" alt="linkedin icon">
                    </div>
                </div>
                <div class="w-full md:w-auto contact-card px-8 pt-10 pb-0 md:px-20 md:py-16">
                    <p class="text-xl font-clash text-pink font-semibold md:pb-3">Questions or need assistance?</p>
                    <p class="text-xl font-clash text-pink font-semibold pb-5 md:pb-8">Let us know  about it!</p>
                    <p class="text-xs block md:hidden pb-5">Email us below to any question related to our event</p>
                    <div class="w-full mb-5 md:mb-10 hidden md:block">
                        <input v-model="contactForm.first_name" class="w-full" type="text" placeholder="First Name">
                    </div>
                    <div class="w-full mb-5 md:mb-10 hidden md:block">
                        <input v-model="contactForm.email" class="w-full" type="text" placeholder="Mail">
                    </div>
                    <div class="w-full mb-5 md:mb-10 block md:hidden">
                        <input v-model="contactForm.first_name" class="w-full" type="text" placeholder="Team's Name">
                    </div>
                    <div class="w-full mb-5 md:mb-10 block md:hidden">
                        <input class="w-full" type="text" placeholder="Topic">
                    </div>
                    <div class="w-full mb-5 md:mb-10 block md:hidden">
                        <input v-model="contactForm.email" class="w-full" type="text" placeholder="Email">
                    </div>
                    <div class="w-full mb-5 md:mb-10">
                        <textarea v-model="contactForm.message" class="w-full h-28 resize-none" type="text" placeholder="Message"></textarea>
                    </div>
                    <div class="flex justify-center mb-5 md:mb-12">
                        <button @click="execute()" class="text-white bg-gradient-to-r rounded-[4px] from-soft-pink via-pink to-purple px-11 py-4 sm:px-13 font-montserrat text-base">{{isLoading ? "..." : "Submit"}}</button>
                    </div>

                    <div class="flex md:hidden flex-col items-center">
                        <p class="text-pink pb-3 text-xs md:text-base">Share on</p>
                        <div class="flex items-center gap-x-4">
                            <img class="w-4" src="@images/footer/instagram.png" alt="Instagram icon">
                            <img class="w-3" src="@images/footer/x.png" alt="x icon">
                            <img class="w-2" src="@images/footer/facebook.png" alt="facebook icon">
                            <img class="w-4" src="@images/footer/linkedin.png" alt="linkedin icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- stars -->
        <img class="absolute w-3 md:w-auto md:top-[25%] md:left-[10%] top-[8%] left-[40%]" src="@images/contact/contact-star-1.png" alt="contact-star-1">
        <img class="absolute w-3 md:w-auto top-[18%] right-[10%]" src="@images/contact/contact-star-2.png" alt="contact-star-2">
        <img class="absolute w-3 md:w-auto bottom-[17%] left-[10%] md:bottom-[24%] md:left-[43.5%]" src="@images/contact/contact-star-3.png" alt="contact-star-3">
        <img class="absolute w-3 md:w-auto bottom-[26%] md:bottom-[8%] right-[3%]" src="@images/contact/contact-star-4.png" alt="contact-star-4">
        <img class="absolute hidden md:block top-[40%] left-[35%]" src="@images/contact/contact-star-5.png" alt="contact-star-5">
        <img class="absolute hidden md:block top-[47%] left-12" src="@images/contact/contact-star-6.png" alt="contact-star-6">
        <!-- flares -->
        <img class="absolute top-0 left-0 mix-blend-hard-light -z-10" src="@images/contact/contact-flare-1.png" alt="contact-flare-1">
        <img class="absolute bottom-0 right-0 mix-blend-hard-light -z-10 hidden md:block" src="@images/contact/contact-flare-2.png" alt="contact-flare-2">
    </section>
  </div>
</template>
<style scoped>
.contact-card{
    border-radius: 12px;
background: rgba(255, 255, 255, 0.03);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
min-width: 600px;
}
@media screen and (max-width: 768px) {
    .contact-card{
    border-radius: unset;
background: none;
box-shadow: none;
min-width: unset;
}
}
input, textarea{
    border-radius: 4px;
border: 1px solid #FFF;
background: rgba(255, 255, 255, 0.03);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 13px 30px;
outline: none;
}
input::placeholder, textarea::placeholder{
    color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
</style>
