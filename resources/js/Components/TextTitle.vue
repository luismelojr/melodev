<script setup>
defineProps({
    title: {
        type: String,
        default: 'Dashboard',
    },
})
</script>

<template>
    <h4 class="tw-text-[18px] tw-text-[#313a46] tw-font-bold">{{ title }}</h4>
</template>
