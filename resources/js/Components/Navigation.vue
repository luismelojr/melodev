<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    miniState: {
        type: Boolean,
        default: false,
    },
})

const menus = [
    {
        label: 'Dashboard',
        href: route('admin.dashboard'),
        icon: 'ri-home-5-line',
        routeActive: ['admin.dashboard'],
    },
    {
        label: 'Cadastros',
        icon: 'ri-add-line',
        routeActive: ['admin.users.*'],
        children: [
            {
                label: 'Usuários',
                href: route('admin.users.index'),
                icon: 'ri-user-add-line',
                routeActive: ['admin.users.*'],
            },
        ],
    },
]

function isActive(routeName) {
    const value = routeName.map((item) => {
        if (route().current(item)) {
            return true
        }
    })
    return value.includes(true)
}
</script>

<template>
    <div v-for="menu in menus" :key="menu.label">
        <q-item clickable v-if="menu.href">
            <Link
                :href="menu.href"
                class="tw-flex tw-items-center tw-gap-4 tw-w-full hover:tw-text-white"
                :class="{
                    'tw-text-white': isActive(menu.routeActive),
                    'tw-text-[#8391a2]': !isActive(menu.routeActive),
                }"
            >
                <i :class="menu.icon" class="tw-text-[20px]"></i>
                <span class="tw-text-[0.9375rem]">{{ menu.label }}</span>
            </Link>
        </q-item>
        <q-expansion-item
            expand-separator
            :default-opened="isActive(menu.routeActive)"
            v-else
        >
            <template #header>
                <div
                    class="tw-flex tw-items-center tw-gap-4 tw-w-full tw-text-[#8391a2] hover:tw-text-white"
                >
                    <i :class="menu.icon" class="tw-text-[20px]"></i>
                    <span class="tw-text-[0.9375rem]">{{ menu.label }}</span>
                </div>
            </template>
            <q-item
                clickable
                v-ripple
                :inset-level="0.2"
                v-for="item in menu.children"
                :key="item.label"
            >
                <Link
                    :href="item.href"
                    class="tw-flex tw-items-center tw-gap-4 tw-w-full hover:tw-text-white"
                    :class="{
                        'tw-text-white': isActive(item.routeActive),
                        'tw-text-[#8391a2]': !isActive(item.routeActive),
                    }"
                >
                    <i :class="item.icon" class="tw-text-[20px]"></i>
                    <span class="tw-text-[0.9375rem]">{{ item.label }}</span>
                </Link>
            </q-item>
        </q-expansion-item>
    </div>
</template>
