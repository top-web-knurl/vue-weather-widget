<script setup>
</script>

<template>
    <button class="btn btn-primary">
        <slot name="icon"></slot>
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: unset;
    background: transparent;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    border-radius: 6px;
    padding: 10px 45px;
    min-height: 42px;
    font-weight: 400;
    font-size: max(min(18px, 2vw), 16px);
}

.btn-primary {
    background: linear-gradient(162deg, #8c11fa, #009ca0) no-repeat center;
    color: #f1efec;
    transition: transform .25s ease;

    &:hover {
        transform: scale(1.03);
        transition: .25s ease;
        transition: transform .22s;
    }
}
</style>