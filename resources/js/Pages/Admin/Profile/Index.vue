<script setup>
import DashboardLayout from '@/Layouts/DashboardLayout.vue'
import TextTitle from '@/Components/TextTitle.vue'
import Breadcrumb from '@/Components/Breadcrumb.vue'
import MenuHeader from '@/Components/MenuHeader.vue'
import Card from '@/Components/Card.vue'
import { useForm } from '@inertiajs/vue3'

const props = defineProps({
    user: Object || Array,
})

const menus = [
    {
        name: 'Perfil',
        url: null,
        active: true,
    },
]

const form = useForm({
    name: props.user.name,
    email: props.user.email,
})

const formPassword = useForm({
    old_password: '',
    password: '',
    password_confirmation: '',
})

function handleUpdatePassword() {
    formPassword.put(route('admin.profile.update.password'), {
        onSuccess: () => {
            formPassword.reset()
        },
        preserveScroll: true,
    })
}

const isPwdO = ref(true)
const isPwd = ref(true)
const isPwdC = ref(true)
</script>

<template>
    <DashboardLayout>
        <MenuHeader>
            <TextTitle title="Editar perfil" />
            <Breadcrumb :items="menus" />
        </MenuHeader>
        <card class="tw-mt-4 md:tw-mt-8">
            <title-card
                title="Atualizar dados pessoais"
                subtitle="Use os campos abaixos para atualizar seus dados ."
            />
            <form
                class="tw-mt-4"
                @submit.prevent="form.put(route('admin.profile.update'))"
            >
                <div>
                    <label
                        for="name"
                        class="tw-block tw-text-sm tw-font-medium tw-text-gray-400"
                        >Nome</label
                    >
                    <q-input
                        id="name"
                        class="tw-mt-1"
                        dense
                        outlined
                        v-model="form.name"
                        :error="!!form.errors.name"
                        :error-message="form.errors.name"
                    />
                </div>
                <div class="tw-mt-2">
                    <label
                        for="email"
                        class="tw-block tw-text-sm tw-font-medium tw-text-gray-400"
                        >E-mail</label
                    >
                    <q-input
                        id="email"
                        class="tw-mt-1"
                        dense
                        outlined
                        v-model="form.email"
                        :error="!!form.errors.email"
                        :error-message="form.errors.email"
                    />
                </div>
                <div class="tw-mt-2 tw-flex tw-justify-end">
                    <loading-button
                        title="Atualizar"
                        type="submit"
                        :loading="form.processing"
                        icon="bx-save"
                    />
                </div>
            </form>
        </card>
        <card class="tw-mt-4">
            <title-card
                title="Atualizar senha"
                subtitle="Use os campos abaixos para atualizar sua senha ."
            />
            <form class="tw-mt-4" @submit.prevent="handleUpdatePassword">
                <div>
                    <label
                        for="old_password"
                        class="tw-block tw-text-sm tw-font-medium tw-text-gray-400"
                        >Senha Atual</label
                    >
                    <q-input
                        class="tw-mt-1"
                        v-model="formPassword.old_password"
                        outlined
                        dense
                        :type="isPwdO ? 'password' : 'text'"
                        :error="!!formPassword.errors.old_password"
                        :error-message="formPassword.errors.old_password"
                    >
                        <template #append>
                            <q-icon
                                :name="isPwdO ? 'visibility' : 'visibility_off'"
                                class="cursor-pointer"
                                @click="isPwdO = !isPwdO"
                            />
                        </template>
                    </q-input>
                </div>
                <div class="tw-mt-2">
                    <label
                        for="password"
                        class="tw-block tw-text-sm tw-font-medium tw-text-gray-400"
                        >Nova Senha</label
                    >
                    <q-input
                        class="tw-mt-1"
                        v-model="formPassword.password"
                        outlined
                        dense
                        :type="isPwd ? 'password' : 'text'"
                        :error="!!formPassword.errors.password"
                        :error-message="formPassword.errors.password"
                    >
                        <template #append>
                            <q-icon
                                :name="isPwd ? 'visibility' : 'visibility_off'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                        </template>
                    </q-input>
                </div>
                <div class="tw-mt-2">
                    <label
                        for="password_confirmation"
                        class="tw-block tw-text-sm tw-font-medium tw-text-gray-400"
                        >Confirma nova senha</label
                    >
                    <q-input
                        class="tw-mt-1"
                        v-model="formPassword.password_confirmation"
                        outlined
                        dense
                        :type="isPwdC ? 'password' : 'text'"
                        :error="!!formPassword.errors.password_confirmation"
                        :error-message="
                            formPassword.errors.password_confirmation
                        "
                    >
                        <template #append>
                            <q-icon
                                :name="isPwdC ? 'visibility' : 'visibility_off'"
                                class="cursor-pointer"
                                @click="isPwdC = !isPwdC"
                            />
                        </template>
                    </q-input>
                </div>
                <div class="tw-mt-2 tw-flex tw-justify-end">
                    <loading-button
                        title="Atualizar"
                        type="submit"
                        :loading="formPassword.processing"
                        icon="bx-save"
                    />
                </div>
            </form>
        </card>
    </DashboardLayout>
</template>

<style scoped></style>
