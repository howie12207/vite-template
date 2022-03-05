<script setup>
import { computed } from 'vue';

const props = defineProps({
    value: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ''
    }
});
const emits = defineEmits(['update:value', 'change']);

const valueSync = computed({
    get() {
        return props.value;
    },
    set(value) {
        emits('update:value', value);
    }
});

const change = () => {
    emits('change', props.value);
};
</script>

<template>
    <label class="checkbox_container">
        <input v-model="valueSync" class="checkbox" type="checkbox" @change="change" />
        <span class="checkbox_custom"></span>
        <span class="checkbox_text">{{ props.label }}</span>
    </label>
</template>

<style lang="scss" scoped>
.checkbox_container {
    --size: 18px;
    --brand-color: #005598;

    display: inline-block;
    font-size: 16px;
    line-height: var(--size);
    height: var(--size);
    position: relative;
    cursor: pointer;
    user-select: none;

    .checkbox_custom {
        position: absolute;
        top: 0;
        left: 0;
        height: var(--size);
        width: var(--size);
        border: 1px solid var(--brand-color);
        border-radius: 4px;
        transition: 0.2s;
    }

    .checkbox_text {
        margin-left: calc(var(--size) + 8px);
        transition: 0.25s;
    }

    .checkbox {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;

        &:checked {
            ~ .checkbox_custom {
                background-color: var(--brand-color);

                &::after {
                    content: '';
                    position: absolute;
                    top: calc(50% - 2px);
                    left: 50%;
                    box-sizing: content-box;
                    border: 3px solid #fff;
                    border-left: 0;
                    border-top: 0;
                    height: 12px;
                    width: 5px;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
            }

            ~ .checkbox_text {
                color: var(--brand-color);
            }
        }
    }
}
</style>
