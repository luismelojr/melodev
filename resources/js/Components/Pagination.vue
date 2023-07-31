<script setup>
import { breakpointsQuasar, useBreakpoints } from '@vueuse/core'

const props = defineProps({
    data: {
        type: Object || Array,
        required: true,
    },
})

const emit = defineEmits(['page'])

const page = ref(props.data?.current_page)

watch(page, (value) => {
    emit('page', value)
})

const breakpoints = useBreakpoints(breakpointsQuasar)
const isMobile = breakpoints.smaller('sm')
</script>

<template>
    <nav
        class="tw-flex tw-items-center tw-justify-between tw-border-t tw-border-gray-200 tw-bg-white tw-py-3"
        aria-label="Pagination"
    >
        <div class="tw-hidden sm:tw-block">
            <p class="tw-text-sm tw-text-gray-700 tw-mt-2">
                Listando
                <span class="tw-font-medium">{{ data.current_page }}</span>
                a
                <span class="tw-font-medium">{{ data.to }}</span>
                de
                <span class="tw-font-medium">{{ data.total }}</span>
                resultados
            </p>
        </div>
        <div
            class="tw-flex tw-flex-1 tw-justify-between sm:tw-justify-end tw-gap-2"
        >
            <q-pagination
                v-model="page"
                :max="data.last_page"
                :max-pages="isMobile ? 4 : 6"
                direction-links
                boundary-links
                icon-first="skip_previous"
                icon-last="skip_next"
                icon-prev="fast_rewind"
                icon-next="fast_forward"
            />
        </div>
    </nav>
</template>
