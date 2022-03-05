<script setup>
import { useStore } from 'vuex';
import { useMeta } from 'vue-meta';
import PageLoading from '@c/common/pageLoading/PageLoading.vue';

useMeta({
    htmlAttrs: { lang: 'zh-TW' },
    meta: [
        {
            vmid: 'description',
            name: 'description',
            content: 'Vite Template'
        }
    ]
});

const store = useStore();
</script>

<template>
    <metainfo>
        <template #title="{ content }">
            {{ content ? `${content} | Vite Template` : 'Vite Template' }}
        </template>
    </metainfo>
    <router-view v-slot="{ Component }">
        <transition name="page_fade">
            <component :is="Component" />
        </transition>
    </router-view>
    <transition name="fade">
        <PageLoading v-if="store.state.pageLoading" />
    </transition>
</template>
