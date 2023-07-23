<script setup>
import TextTitle from '@/Components/TextTitle.vue'
import Breadcrumb from '@/Components/Breadcrumb.vue'
import Card from '@/Components/Card.vue'

const menus = [
    {
        name: 'Users',
        url: '/admin/users',
        active: false,
    },
    {
        name: 'Create',
        url: '/admin/users/create',
        active: true,
    },
]
</script>

<template>
    <DashboardLayout>
        <div class="tw-flex tw-items-center tw-justify-between">
            <TextTitle title="Dashboard" />
            <Breadcrumb :items="menus" />
        </div>
        <Card> testando </Card>
    </DashboardLayout>
</template>
