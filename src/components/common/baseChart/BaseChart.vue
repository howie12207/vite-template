<!-- This component should use vue3-apexchars -->
<script setup>
import { computed } from 'vue';

const props = defineProps({
    // [{x: 1, y: 10}]  key should be x & y
    data: {
        type: Array,
        default: () => [],
        required: true
    },
    type: {
        type: String,
        default: 'line'
    },
    width: {
        type: String,
        default: '100%'
    },
    title: {
        type: String,
        default: ''
    },
    isLoading: {
        type: Boolean,
        default: true
    },
    label: {
        type: String,
        default: 'series'
    },
    options: {
        type: Object,
        default: () => {
            return {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    type: 'category'
                },
                colors: ['#005598'],
                // Fix auto use decimal bug
                yaxis: [
                    {
                        labels: {
                            formatter: function (val) {
                                if (window.isNaN(val) || Math.floor(val) !== val) return val;
                                try {
                                    return val.toFixed(0);
                                } catch (e) {
                                    return val;
                                }
                            }
                        }
                    }
                ]
            };
        }
    }
});

const series = computed(() => {
    return [
        {
            name: props.label,
            data: props.data
        }
    ];
});
</script>

<template>
    <div class="relative bg-white p-4 rounded transition hover:shadow-md">
        <div class="flex justify-between items-center mb-4">
            <div class="text-lg text-gray-800">{{ props.title }}</div>
            <slot name="top"></slot>
        </div>

        <apexchart :width="props.width" :type="props.type" :options="options" :series="series" />
    </div>
</template>
