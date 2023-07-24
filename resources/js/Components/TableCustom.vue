<script setup>
defineProps({
    columns: {
        type: Array,
        default: () => [],
    },
    loading: {
        type: Boolean,
        default: false,
    },
})
const emit = defineEmits(['sort'])

function sort(column) {
    if (column.direction === null) {
        column.direction = 'asc'
    } else if (column.direction === 'asc') {
        column.direction = 'desc'
    } else {
        column.direction = null
    }
    emit('sort', column)
}
</script>

<template>
    <div class="-tw-mx-4 -tw-my-2 tw-overflow-x-auto sm:-tw-mx-6 lg:-tw-mx-8">
        <div
            class="tw-inline-block tw-min-w-full tw-py-2 tw-align-middle sm:tw-px-6 lg:tw-px-8"
        >
            <div
                class="tw-overflow-hidden tw-shadow tw-ring-1 tw-ring-black tw-ring-opacity-5 tableCustom"
            >
                <q-linear-progress
                    dark
                    query
                    color="cyan"
                    class="tw-w-full"
                    size="xs"
                    v-if="loading"
                />
                <table class="tw-min-w-full tw-divide-y tw-divide-gray-300">
                    <thead class="tw-bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="tw-px-3 tw-py-3.5 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-900"
                                v-for="column in columns"
                                :key="column.name"
                            >
                                <div
                                    class="tw-flex tw-items-center tw-justify-between"
                                >
                                    <span>{{ column.name }}</span>
                                    <div v-if="column.sort">
                                        <button
                                            type="button"
                                            @click="() => sort(column)"
                                        >
                                            <i
                                                :class="{
                                                    'ri-arrow-up-down-line':
                                                        column.direction ===
                                                        null,
                                                    'ri-arrow-up-line':
                                                        column.direction ===
                                                        'asc',
                                                    'ri-arrow-down-line':
                                                        column.direction ===
                                                        'desc',
                                                }"
                                            ></i>
                                        </button>
                                    </div>
                                </div>
                            </th>
                            <th
                                scope="col"
                                class="tw-relative tw-py-3.5 tw-pl-3 tw-pr-4 sm:tw-pr-6"
                            >
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="tw-divide-y tw-divide-gray-200 tw-bg-white">
                        <slot />
                    </tbody>
                </table>
                <div class="over" v-if="loading"></div>
            </div>
        </div>
    </div>
</template>

<style>
.tableCustom {
    position: relative;
}
.over {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
}
</style>
