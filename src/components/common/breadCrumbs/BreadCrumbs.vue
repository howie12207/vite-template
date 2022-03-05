<script setup>
import { useRoute } from 'vue-router';
import routeMap from './routeMap';

const props = defineProps({
    pageTitle: {
        type: String,
        default: ''
    }
});
const breadCrumbs = useRoute().meta.breadCrumbs;
</script>

<template>
    <h1>{{ props.pageTitle }}</h1>
    <div class="bread_crumbs">
        <span v-for="crumbs in breadCrumbs" :key="crumbs" class="path">
            <router-link v-if="routeMap[crumbs].path" :to="routeMap[crumbs].path">
                <span class="text">{{ routeMap[crumbs].title }}</span>
            </router-link>
            <span v-else class="text">{{ routeMap[crumbs].title }}</span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 24px;
    color: $color-main;
    line-height: 24px;
    font-weight: bold;
    margin-bottom: 16px;
}

.bread_crumbs {
    font-size: 14px;
    color: #999;
    margin-bottom: 24px;

    .path {
        a {
            color: #666;

            &:hover {
                text-decoration: underline;
            }
        }

        &:not(:nth-last-child(1)) {
            &::after {
                content: '/';
                margin: 0 8px;
            }
        }
    }
}
</style>
