<script setup>
import { useStore } from 'vuex';
import PageLoading from '@c/common/pageLoading/PageLoading.vue';

const store = useStore();
</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="page_fade">
            <component :is="Component" />
        </transition>
    </router-view>
    <transition name="fade">
        <PageLoading v-if="store.state.pageLoading" />
    </transition>
</template>
