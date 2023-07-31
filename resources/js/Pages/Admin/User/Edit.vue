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
        name: 'Usuários',
        url: route('admin.users.index'),
        active: false,
    },
    {
        name: 'Editar Usuários',
        url: null,
        active: true,
    },
]

const actionsTitle = {
    title: 'Voltar',
    href: route('admin.users.index'),
    isback: true,
}

const form = useForm({
    name: props.user.name,
    email: props.user.email,
})
</script>

<template>
    <DashboardLayout>
        <MenuHeader>
            <TextTitle title="Usuários" />
            <Breadcrumb :items="menus" />
        </MenuHeader>
        <Card class="tw-mt-4">
            <title-card
                title="Editar usuário"
                subtitle="Use os campos abaixos para editar usuário."
                :actions="actionsTitle"
            />
            <form
                class="tw-mt-4"
                @submit.prevent="
                    form.put(
                        route('admin.users.update', { user: props.user.id }),
                    )
                "
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
                <!--                <div class="tw-mt-2">-->
                <!--                    <label-->
                <!--                        for="role"-->
                <!--                        class="tw-block tw-text-sm tw-font-medium tw-text-gray-400"-->
                <!--                        >Cargo</label-->
                <!--                    >-->
                <!--                    <q-select-->
                <!--                        id="role"-->
                <!--                        class="tw-mt-1"-->
                <!--                        dense-->
                <!--                        outlined-->
                <!--                        v-model="form.role"-->
                <!--                        :options="props.roles"-->
                <!--                        option-value="id"-->
                <!--                        option-label="name"-->
                <!--                        emit-value-->
                <!--                        map-options-->
                <!--                        :error="!!form.errors.role"-->
                <!--                        :error-message="form.errors.role"-->
                <!--                    />-->
                <!--                </div>-->
                <div class="tw-mt-2 tw-flex tw-justify-end">
                    <loading-button
                        title="Editar"
                        icon="bx-save"
                        type="submit"
                        :loading="form.processing"
                    />
                </div>
            </form>
        </Card>
    </DashboardLayout>
</template>

<style scoped></style>
