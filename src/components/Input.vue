<script setup>
const data = defineModel({
    type: String,
    required: true,
})
</script>

<template>
    <input v-model="data">
</template>

<style lang="scss" scoped></style>