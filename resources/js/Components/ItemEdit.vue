<script setup>
import { router } from '@inertiajs/vue3'

const props = defineProps({
    url: {
        type: String,
        required: true,
    },
})
function handleEdit() {
    router.get(props.url)
}
</script>

<template>
    <q-item clickable @click="handleEdit">
        <q-item-section>
            <Link
                :href="props.url"
                class="tw-text-gray-500 hover:tw-text-gray-500 tw-flex tw-items-center tw-gap-2"
            >
                <i-heroicons-cog-6-tooth />
                Editar
            </Link>
        </q-item-section>
    </q-item>
</template>
