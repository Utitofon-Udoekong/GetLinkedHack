<script setup lang="ts">
import type { Timeline, MobileTimeline } from "@/utils";
const timelines = <Timeline[]>[
    {
        left: {
            title: "Hackathon Announcement",
            sub: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
        },
        num: 1,
        right: {
            title: "November 18, 2023"
        }
    },
    {
        left: {
            title: "November 18, 2023",
        },
        num: 2,
        right: {
            title: "Teams Registration begins",
            sub: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register"
        }
    },
    {
        left: {
            title: "Teams Registration ends",
            sub: "Interested Participants are no longer Allowed to register"
        },
        num: 3,
        right: {
            title: "November 18, 2023",
        }
    },
    {
        left: {
            title: "November 18, 2023"
        },
        num: 4,
        right: {
            title: "Announcement of the accepted teams and ideas",
            sub: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced"
        }
    },
    {
        left: {
            title: "Getlinked Hackathon 1.0 Offically Begins",
            sub: "Accepted teams can now proceed to build their ground breaking skill driven solutions"
        },
        num: 5,
        right: {
            title: "November 18, 2023"
        }
    },
    {
        left: {
            title: "November 18, 2023"
        },
        num: 6,
        right: {
            title: "Demo Day",
            sub: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day"
        }
    },
]
const mobileTimelines = <MobileTimeline[]>[
    {
        title: "Hackathon Announcement",
        sub: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
        num: 1
    },
    {
        title: "Teams Registration begins",
        sub: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
        num: 2,
    },
    {
        title: "Teams Registration ends",
        sub: "Interested Participants are no longer Allowed to register",
        num: 3,
    },
    {
      
        title: "Announcement of the accepted teams and ideas",
        sub: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
        num: 4
    },
    {
        title: "Getlinked Hackathon 1.0 Offically Begins",
        sub: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
        num: 5,
    },
    {
       
        title: "Demo Day",
        sub: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
        num: 6
    },
]
</script>
<template>
    <div>
        <div class="horizontal-padding">
            <div class="text-center mb-14 md:mb-20">
                <p class="font-clash text-xl md:text-3xl mouse-lg pb-3 md:pb-5">Timeline</p>
                <p class="text-xs md:text-sm leading-5 md:leading-7">Here is the breakdown of the time we anticipate <br class="hidden md:block"> using for the upcoming
                    event.</p>
            </div>
            <div>
                <TimeLineObject :timelines="timelines" :mobileTimelines="mobileTimelines" />
            </div>
        </div>
        <img src="@images/timeline/timeline-star-1.png" alt="timeline-star-1" class="absolute w-3 md:w-auto top-[13%] left-[25%] md:top-64 md:left-64">
        <img src="@images/timeline/timeline-star-2.png" alt="timeline-star-2" class="absolute w-2 md:w-auto top-[54%] md:top-1/2 right-14 md:right-52">
        <img src="@images/timeline/timeline-star-3.png" alt="timeline-star-3" class="absolute w-2 md:w-auto bottom-10 md:bottom-32 left-6 md:left-40">
    </div>
</template>
<style></style>