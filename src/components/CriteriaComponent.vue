<script setup lang="ts">
</script>
<template>
    <div class="py-10 md:py-20 overflow-x-hidden">
        <div class="flex flex-col md:flex-row items-center justify-around horizontal-padding">
            <div class="relative pt-8 md:pt-16">
                <img src="@images/criteria/criteria-image.png" alt="Criteria image" class="md:h-full">
                <img src="@images/criteria/criteria-star.png" alt="star icon" class="absolute w-2 md:w-auto top-0 md:-top-16 left-28 md:left-32">
                <img src="@images/criteria/criteria-star-2.png" alt="star icon" class="absolute hidden md:block -bottom-10 right-10 w-2 md:w-5 xl:w-8">
                <img src="@images/criteria/criteria-ellipse.png" alt="image ellipse clip" class="absolute top-6 hidden sm:block left-20 -z-10">
            </div>
            <div class="max-w-md relative text-center md:text-left">
                <p class="font-clash text-xl md:text-3xl mouse-lg pb-4 md:pb-5">Judging criteria<br><span class="text-pink">Key attributes</span></p>
                <ul class="text-xs md:text-sm">
                    <li class="leading-[25px] mb-5"><span class="text-hard-pink">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</li>
                    <li class="leading-[25px] mb-5"><span class="text-hard-pink">Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</li>
                    <li class="leading-[25px] mb-5"><span class="text-hard-pink">Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</li>
                    <li class="leading-[25px] mb-5"><span class="text-hard-pink">Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</li>
                    <li class="leading-[25px] mb-10 md:mb-5"><span class="text-hard-pink">Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</li>
                </ul>
                <ActionButton />
            </div>
        </div>
        <img src="@images/criteria/criteria-star-2.png" alt="star icon" class="absolute md:hidden block bottom-16 right-10 w-2 md:w-5 xl:w-8">
        <img src="@images/criteria/criteria-flare.png" alt="flare icon" 
        class="absolute top-0 -left-10 mix-blend-hard-light -z-10">
        <img src="@images/criteria/criteria-flare-2.png" alt="flare icon"
            class="absolute md:top-80 bottom-0 -right-14 mix-blend-hard-light -z-10 w-sm">
</div></template>
<style></style>
