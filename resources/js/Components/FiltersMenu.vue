<script setup>
const drawer = ref(true)
</script>

<template>
    <q-btn outline color="grey-6" icon="filter_alt" @click="drawer = !drawer" />
</template>
