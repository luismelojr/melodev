<template>
    <div
        class="tw-min-h-screen tw-min-w-full tw-grid tw-grid-cols-1 tw-bg-gray-100 md:tw-grid-cols-2"
    >
        <div
            class="tw-py-[1.5rem] tw-px-[2rem] tw-flex tw-justify-between tw-flex-col sm:tw-py-[2.5rem] sm:tw-px-[7rem] md:tw-px-[3rem]"
        >
            <div>
                <Link :href="route('login')">
                    <ApplicationLogo class="tw-h-10 tw-text-primary" />
                </Link>
                <div class="tw-mt-[8rem]">
                    <slot />
                </div>
            </div>
            <span class="tw-text-center tw-pb-4 tw-text-gray-400"
                >© Melo Dev -
                <a
                    href="https://www.linkedin.com/in/luis-henrique-da-silva-melo-junior-416579155/"
                    target="_blank"
                    >Luis Henrique</a
                ></span
            >
        </div>
        <div
            class="tw-bg-banner tw-bg-cover tw-bg-no-repeat tw-bg-center tw-hidden md:tw-block"
        ></div>
    </div>
    <Toasts />
</template>

<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import Toasts from '@/Components/Toast.vue'
</script>
