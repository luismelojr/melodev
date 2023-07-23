<script setup>
import { Link, Head } from '@inertiajs/vue3'
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import Navigation from '@/Components/Navigation.vue'
import BoxUser from '@/Components/BoxUser.vue'
const drawer = ref(false)
</script>

<template>
    <div class="tw-h-full tw-w-full">
        <q-layout
            view="lHh Lpr lff"
            container
            style="height: 100vh"
            class="shadow-0"
        >
            <q-header class="bg-white topbar">
                <q-toolbar>
                    <q-toolbar-title>
                        <q-btn
                            flat
                            @click="drawer = !drawer"
                            round
                            dense
                            icon="menu"
                            color="primary"
                        />
                    </q-toolbar-title>
                    <box-user />
                </q-toolbar>
            </q-header>

            <q-drawer
                v-model="drawer"
                show-if-above
                :width="200"
                :breakpoint="720"
                style="background: #313a46"
            >
                <q-scroll-area
                    style="height: calc(100% - 90px); padding-top: 80px"
                >
                    <q-list padding>
                        <navigation />
                    </q-list>
                </q-scroll-area>
                <div
                    class="absolute-top tw-p-4 tw-border-b-[1px] tw-border-b-[#333333]"
                >
                    <Link :href="route('admin.dashboard')">
                        <ApplicationLogo class="tw-text-white tw-h-7" />
                    </Link>
                </div>
            </q-drawer>

            <q-page-container class="tw-bg-[#fafbfe]">
                <q-page padding>
                    <slot />
                </q-page>
            </q-page-container>
        </q-layout>
    </div>
</template>
<style>
.topbar {
    box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
}
</style>
