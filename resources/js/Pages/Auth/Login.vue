<script setup>
import Toast from '@/Components/Toast.vue'

function back() {
    router.get(route('toast'))
}
</script>

<template>
    <div>
        <h1>Login</h1>
        <q-btn color="primary" @click="back">Teste</q-btn>
    </div>
    <Toast />
</template>
