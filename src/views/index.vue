<script setup lang="ts">

</script>
<template>
  <div class="overflow-x-clip">
    <section class="relative pt-8 md:pt-[67px]">
        <HeaderComponent />
    </section>
    <section class="relative py-8 md:py-16 border-b border-white/[0.18]" id="about">
        <AboutComponent />
    </section>
    <section class="relative py-8 md:py-16 border-b border-white/[0.18]" id="rules">
        <RulesComponent />
    </section>
    <section class="relative border-b border-white/[0.18] overflow-x-hidden" id="criteria">
        <CriteriaComponent />
    </section>
    <section class="relative py-10 md:py-20 border-b border-white/[0.18]" id="faq">
        <FAQComponent />
    </section>
    <section class="relative py-12 md:py-24 " id="timeline">
        <TimeLineComponent />
    </section>
    <section class="relative py-12 md:py-24 reward" id="rewards">
        <RewardComponent />
    </section>
    <section class="relative py-10 md:py-20 border-b border-white/[0.18]" id="sponsors">
        <SponsorComponent />
    </section>
    <section class="relative py-10 md:py-20" id="privacy">
        <PrivacyComponent />
    </section>
    <section class="relative pt-10 md:pt-20 pb-8 md:pb-14 footer-bg" id="footer">
        <FooterComponent />
    </section>
  </div>
</template>
<style>
.reward{
    height: 100%;
    background: url(@/assets/images/price/prize-bg.png), var(--background-color) 0px -0.093px / 100% 109.967% no-repeat;
    background-blend-mode: color-burn;
    z-index: -20;
}
  @media screen and (mqx-width: 767px){
    .reward{
      background: none;
    }
  }
.footer-bg{
    background: var(--footer-bg);
}
</style>
