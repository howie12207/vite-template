<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'blue'
    }
});
const emit = defineEmits(['click']);
</script>

<template>
    <button :class="['custom_btn', props.type]" @click="emit('click')">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.custom_btn {
    padding: 8px 16px;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
}

.custom_btn:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
}

.custom_btn:focus {
    outline: none;
}

.custom_btn.red {
    background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);
    box-shadow: 0 5px 15px rgb(242 97 103 / 40%);
}

.custom_btn.green {
    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
}

.custom_btn.blue {
    background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
}

.custom_btn.purple {
    background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);
    box-shadow: 0 4px 15px 0 rgb(116 79 168 / 75%);
}

.custom_btn.black {
    background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);
}

// .custom_btn.blue-green {
//     background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
// }

// .custom_btn.color-2 {
//     background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);
// }

// .custom_btn.color-4 {
//     background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);
//     box-shadow: 0 4px 15px 0 rgb(252 104 110 / 75%);
// }

// .custom_btn.color-6 {
//     background-image: linear-gradient(to right, #009245, #fcee21, #00a8c5, #d9e021);
//     box-shadow: 0 4px 15px 0 rgb(83 176 57 / 75%);
// }

// .custom_btn.color-7 {
//     background-image: linear-gradient(to right, #6253e1, #852d91, #a3a1ff, #f24645);
//     box-shadow: 0 4px 15px 0 rgb(126 52 161 / 75%);
// }

// .custom_btn.color-10 {
//     background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a, #fbb03b);
//     box-shadow: 0 4px 15px 0 rgb(236 116 149 / 75%);
// }
</style>
