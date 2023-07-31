<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
const $page = usePage()
const user = computed(() => {
    return $page.props.auth.user
})
</script>

<template>
    <q-btn class="tw-flex tw-gap-2" outline>
        <q-avatar size="md" color="grey-5">{{ user.name[0] }}</q-avatar>
        <span class="tw-text-[#313A46] tw-normal-case tw-ml-2">{{
            user.name
        }}</span>
        <q-menu style="width: 150px">
            <q-list>
                <q-item clickable v-close-popup>
                    <Link
                        :href="route('admin.profile.index')"
                        class="tw-flex tw-items-center tw-gap-2 tw-w-full tw-text-gray-500 hover:tw-text-gray-800"
                    >
                        <i class="tw-text-[14px] ri-user-settings-line"></i>
                        <span class="tw-text-[14px]">Editar perfil</span>
                    </Link>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup>
                    <Link
                        :href="route('logout')"
                        class="tw-flex tw-items-center tw-gap-2 tw-w-full tw-text-gray-500 hover:tw-text-gray-800"
                        method="post"
                        as="button"
                    >
                        <i class="tw-text-[14px] ri-logout-box-line"></i>
                        <span class="tw-text-[14px]">Sair</span>
                    </Link>
                </q-item>
            </q-list>
        </q-menu>
    </q-btn>
</template>

<style scoped></style>
