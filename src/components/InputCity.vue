<script setup>
import Button from "./Button.vue"
import IconLocation from "../icons/IconLocation.vue"
import { ref } from "vue";
import Input from "./Input.vue";

const emit = defineEmits({
    selectCity(payLoad) {
        return payLoad
    }
})

let city = ref("Симферополь")
let editState = ref(false)


let enableEdit = () => {
    editState.value = true
}

const select = () => {
    editState.value = false
}

</script>
<template>
    <div class="choise-city-wrapper">
        {{ city }}
        <div class="choise-city" v-show="editState">
            <Input 
            v-model="city"  
            type="text" 
            class="choise-city__input" 
            laceholder="Введите город!" 
            name="city" />
            <Button @click="select()">
                Сохранить
            </Button>
        </div>
        <Button v-show="!editState" @click="enableEdit()">
            <template #icon>
                <IconLocation />
            </template>
            Выбрать город
        </Button>
    </div>
</template>

<style lang="scss" scoped>
.btn {
    gap: 10px;
    width: 100%;

    svg {
        width: 20px;
        height: 20px;
    }
}

.choise-city-wrapper {
    margin-top: 20px;
}

.choise-city {
    display: grid;
    grid-template-columns: 1fr .3fr;
    gap: 10px;

    &__input {
        border-radius: 6px;
        border: unset;
        outline: unset;
        padding: 10px 25px;
        color: #fff;
        font-size: max(min(18px, 2vw), 16px);
        background-color: #5c5a5a;
        transition: filter .15s linear;
        width: 100%;

        &::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

        &:focus {
            overflow: unset;
            border: unset;
            transition: filter .25s linear;
            filter:
                drop-shadow(-2px -2px 8px rgba(141, 17, 250, 0.6)) drop-shadow(2px 2px 8px rgba(0, 155, 160, 0.6));
        }
    }
}
</style>