<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <h2 class="tw-text-[20px] tw-text-bluedark tw-font-bold">{{ title }}</h2>
</template>
