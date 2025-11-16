<script setup>
const { label, stat } = defineProps({
    label: String,
    stat: String,
});
</script>

<template>
    <div class="stat">
        <div class="stat__name">{{ label }}</div>
        <div class="stat__value">{{ stat }}</div>
    </div>
</template>

<style lang="scss" scoped>
.stat {
    display: flex;
    justify-content: space-between;
    color: #fff;
    grid-area: 15px;
    margin-bottom: 10px;
    &__name {
        font-size: max(min(28px, 3vw), 22px);
        font-weight: 600;
        line-height: 1;
    }

    &__value {
        font-size: max(min(30px, 3.2vw), 24px);
        font-weight: 600;
        line-height: 1;
    }
}
</style>