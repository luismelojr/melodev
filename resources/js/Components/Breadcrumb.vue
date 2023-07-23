<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <ul class="tw-flex tw-items-center tw-gap-2">
        <li>
            <Link
                :href="route('admin.dashboard')"
                class="tw-text-blue-500 hover:tw-text-blue-900 tw-transition-all"
                >Dashboard
            </Link>
            <i class="ri-arrow-right-s-line"></i>
        </li>
        <li
            v-for="(item, index) in items"
            :key="index"
            class="tw-flex tw-items-center tw-gap-2"
        >
            <Link
                :href="item.url"
                class="tw-text-blue-500 hover:tw-text-blue-900 tw-transition-all"
                v-if="!item.active"
                >{{ item.name }}
            </Link>
            <span v-else class="tw-text-">{{ item.name }}</span>
            <i
                class="ri-arrow-right-s-line"
                v-if="index < items.length - 1"
            ></i>
        </li>
    </ul>
</template>

<style scoped>
span,
i {
    color: rgba(108, 117, 125, 0.75);
}
</style>
