<script setup>
import { useMeta } from 'vue-meta';

useMeta({
    title: 'Home'
});
</script>

<template>
    <div class="home">Home <router-link to="/test">test</router-link></div>
</template>
