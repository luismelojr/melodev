<script setup>
defineProps({
    priority: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <td
        :class="{
            'tw-whitespace-nowrap tw-py-4 tw-pl-4 tw-pr-3 tw-text-sm tw-font-medium tw-text-gray-900 sm:tw-pl-6':
                priority,
            'tw-whitespace-nowrap tw-px-3 tw-py-4 tw-text-sm tw-text-gray-500':
                !priority,
        }"
    >
        <slot />
    </td>
</template>

<style scoped></style>
