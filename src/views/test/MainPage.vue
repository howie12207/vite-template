<script setup>
import { useMeta } from 'vue-meta';

useMeta({
    title: 'Test',
    meta: [
        {
            vmid: 'description',
            name: 'description',
            content: 'test '
        }
    ]
});
</script>

<template>
    <div>Test <router-link to="/home">home</router-link></div>
</template>
