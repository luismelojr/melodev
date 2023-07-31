<script setup>
const props = defineProps({
    item: {
        type: Object || Array,
        required: true,
    },
})
const emit = defineEmits(['prevent'])
function preventDelete() {
    emit('prevent', props.item?.id)
}
</script>

<template>
    <div>
        <q-item clickable @click="preventDelete" v-close-popup>
            <q-item-section>
                <button
                    class="tw-text-gray-500 hover:tw-text-gray-500 tw-flex tw-items-center tw-gap-2"
                >
                    <i-heroicons-trash />
                    Excluir
                </button>
            </q-item-section>
        </q-item>
    </div>
</template>
