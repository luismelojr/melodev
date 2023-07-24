<script setup>
import { Link } from '@inertiajs/vue3'
defineProps({
    title: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <Link
        :href="href"
        class="tw-inline-flex tw-items-center tw-gap-x-1.5 tw-rounded-md tw-bg-gray-900 tw-px-2.5 tw-py-1.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-gray-700 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-gray-800"
    >
        <i :class="icon" class="tw-text-[20px]"></i>
        <span>{{ title }}</span>
    </Link>
</template>

<style scoped></style>
