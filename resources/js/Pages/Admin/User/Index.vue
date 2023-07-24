<script setup>
import DashboardLayout from '@/Layouts/DashboardLayout.vue'
import TextTitle from '@/Components/TextTitle.vue'
import Breadcrumb from '@/Components/Breadcrumb.vue'
import MenuHeader from '@/Components/MenuHeader.vue'
import Card from '@/Components/Card.vue'
import NavigationButton from '@/Components/NavigationButton.vue'
import TableCustom from '@/Components/TableCustom.vue'
import TdItem from '@/Components/TdItem.vue'
import { router } from '@inertiajs/vue3'
import { computed } from 'vue'

defineProps({
    users: {
        type: Object || Array,
        required: true,
    },
})
// console.log(router.page.url.split('?')[1].split('&')[0].split('=')[1])
// console.log(router.page.url.split('?')[1].split('&')[1].split('=')[1])

const sortKey = computed(() => {
    return router.page.url.split('?').length > 1
        ? router.page.url.split('?')[1].split('&')[0].split('=')[1]
        : null
})

const direction = computed(() => {
    return router.page.url.split('?').length > 1
        ? router.page.url.split('?')[1].split('&')[1].split('=')[1]
        : null
})

const menus = [
    {
        name: 'Usuários',
        url: route('admin.users.index'),
        active: true,
    },
]

const loading = ref(false)

const columns = ref([
    {
        name: 'Id',
        key: 'id',
        sort: true,
        direction: sortKey.value === 'id' ? direction.value : null,
    },
    {
        name: 'Nome',
        key: 'name',
        sort: true,
        direction: sortKey.value === 'name' ? direction.value : null,
    },
    {
        name: 'E-mail',
        key: 'email',
        sort: true,
        direction: sortKey.value === 'email' ? direction.value : null,
    },
])

async function sort(column) {
    columns.value = columns.value.map((item) => {
        if (item.name === column.name) {
            return {
                ...item,
                direction: column.direction,
            }
        }
        return {
            ...item,
            direction: null,
        }
    })
    if (column.direction) {
        router.get(
            route('admin.users.index', {
                sort: column.key,
                direction: column.direction,
            }),
            {},
            {
                onStart() {
                    loading.value = true
                },
                onFinish() {
                    loading.value = false
                },
            },
        )
    } else {
        router.get(
            route('admin.users.index'),
            {},
            {
                onStart() {
                    loading.value = true
                },
                onFinish() {
                    loading.value = false
                },
            },
        )
    }
}
</script>

<template>
    <DashboardLayout>
        <MenuHeader>
            <TextTitle title="Usuários" />
            <Breadcrumb :items="menus" />
        </MenuHeader>
        <Card class="tw-mt-4">
            <div class="tw-flex tw-justify-end">
                <NavigationButton
                    title="Adicionar usuários"
                    icon="ri-add-line"
                    :href="route('admin.users.create')"
                />
            </div>
            <div class="tw-mt-4">
                <TableCustom :columns="columns" @sort="sort" :loading="loading">
                    <tr v-for="item in users.data" :key="item.id">
                        <TdItem>{{ item.id }}</TdItem>
                        <TdItem>{{ item.name }}</TdItem>
                        <TdItem>{{ item.email }}</TdItem>
                        <TdItem></TdItem>
                    </tr>
                </TableCustom>
            </div>
        </Card>
    </DashboardLayout>
</template>

<style scoped></style>
