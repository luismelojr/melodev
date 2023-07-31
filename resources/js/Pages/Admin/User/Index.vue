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
import { computed, reactive, watch } from 'vue'
import dateFormatted from '../../../Utils/dateFormatted.js'
import Pagination from '@/Components/Pagination.vue'
import ItemDelete from '@/Components/ItemDelete.vue'
import { ptBR } from 'date-fns/locale'
import ItemEdit from '@/Components/ItemEdit.vue'

const props = defineProps({
    users: {
        type: Object || Array,
        required: true,
    },
    filters: Object || Array,
})

const sortKey = computed(() => {
    return props.filters.sort ? props.filters.sort : null
})

const direction = computed(() => {
    return props.filters.direction ? props.filters.direction : null
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
    {
        name: 'Criado em',
        key: 'created_at',
        sort: true,
        direction: sortKey.value === 'created_at' ? direction.value : null,
    },
])
const search = ref(props.filters?.search)
const remove = ref(false)

const actionsTitle = {
    title: 'Cadastrar usuários',
    href: route('admin.users.create'),
    isback: false,
}

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
                search: search.value,
            }),
            {},
            {
                onStart() {
                    loading.value = true
                },
                onFinish() {
                    loading.value = false
                },
                preserveState: true,
            },
        )
    } else {
        router.get(
            route('admin.users.index'),
            {
                search: search.value,
            },
            {
                onStart() {
                    loading.value = true
                },
                onFinish() {
                    loading.value = false
                },
                preserveState: true,
            },
        )
    }
}

watch(search, () => {
    handleFilters()
})

const params = reactive({
    created_at: props.filters?.created_at,
})

const page = ref(props.filters?.page)
const userId = ref(null)

function handleRemove() {
    router.delete(route('admin.users.destroy', { user: userId.value }), {
        onStart() {
            loading.value = true
        },
        onFinish() {
            loading.value = false
        },
        preserveState: true,
    })
}

function handleFilters() {
    router.get(
        route('admin.users.index', {
            search: search.value,
            created_at: params.created_at,
            page: page.value,
        }),
        {},
        {
            onStart() {
                loading.value = true
            },
            onFinish() {
                loading.value = false
            },
            preserveState: true,
        },
    )
}

function handlePage(value) {
    page.value = value
    handleFilters()
}

function preventDelete(id) {
    remove.value = true
    userId.value = id
}
</script>

<template>
    <DashboardLayout>
        <MenuHeader>
            <TextTitle title="Usuários" />
            <Breadcrumb :items="menus" />
        </MenuHeader>
        <Card class="tw-mt-4">
            <title-card
                title="Listagem de usuários"
                subtitle="Use os campos abaixos para filtrar usuários."
                :actions="actionsTitle"
            />
            <div class="tw-mt-8">
                <div
                    class="tw-mt-2 tw-mb-2 tw-grid tw-grid-cols-1 md:tw-grid-cols-6 tw-gap-2"
                >
                    <q-input
                        v-model="search"
                        clearable
                        placeholder="Search"
                        outlined
                        dense
                        debounce="800"
                        class="tw-col-span-3"
                    >
                        <template #prepend>
                            <q-icon name="search" size="18px" color="grey-5" />
                        </template>
                    </q-input>
                    <VueDatePicker
                        placeholder="Selecionar data"
                        v-model="params.created_at"
                        range
                        :enable-time-picker="false"
                        class="tw-col-span-2"
                        :format="dateFormatted().returnFormatted"
                    />
                    <q-btn
                        color="primary"
                        label="Filtrar"
                        @click="handleFilters"
                        dense
                    />
                </div>
                <TableCustom :columns="columns" @sort="sort" :loading="loading">
                    <tr v-for="item in users.data" :key="item.id">
                        <TdItem>{{ item.id }}</TdItem>
                        <TdItem>{{ item.name }}</TdItem>
                        <TdItem>{{ item.email }}</TdItem>
                        <TdItem>{{
                            dateFormatted().formatted(item.created_at)
                        }}</TdItem>
                        <TdItem>
                            <q-btn flat icon="more_vert" color="grey-7">
                                <q-menu>
                                    <q-list style="min-width: 100px">
                                        <item-edit
                                            :url="
                                                route('admin.users.edit', {
                                                    user: item.id,
                                                })
                                            "
                                        />
                                        <item-delete
                                            :item="item"
                                            @prevent="preventDelete"
                                        />
                                    </q-list>
                                </q-menu>
                            </q-btn>
                        </TdItem>
                    </tr>
                </TableCustom>
                <Pagination :data="users" @page="handlePage" />
            </div>
        </Card>
        <q-dialog v-model="remove" persistent>
            <DialogDelete title="Excluir Usuário" :remove="handleRemove" />
        </q-dialog>
    </DashboardLayout>
</template>

<style scoped></style>
