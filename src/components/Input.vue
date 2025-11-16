<script setup>
const props = defineProps(['value'])
const emit = defineEmits(['update:value'])
</script>

<template>
    <input 
     :value="props.value"
     @input="emit('update:value', $event.target.value)">
</template>

<style lang="scss" scoped></style>