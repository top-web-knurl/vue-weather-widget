<script setup>
import { ref, reactive, nextTick } from "vue"
import Stat from "./components/Stat.vue"
import InputCity from "./components/InputCity.vue"


let data = reactive(
  [
    {
      label: "Влажность",
      stat: `${Math.ceil(Math.random() * 100)}%`,
    },
    {
      label: "Осадки",
      stat: "Дождливо",
    },
    {
      label: "Нстроение",
      stat: "Отличное",
    }
  ]
)


let saveCity = ref("Симферополь")

const getCity = (city) => {
  saveCity.value = city
}

</script>

<template class="app">
  <main class="main">
    <h2>{{ saveCity }}</h2>
      <Stat v-for="(item, key) in data" v-bind="item" :key="key" />
    <InputCity />
  </main>

</template>

<style lang="scss" scoped>
.main {
  background-color: var(--color-cart);
  padding: max(min(60px, 6vw), 30px) max(min(45px, 5vw), 25px);
  border-radius: 1.5rem;
  display: grid;
}
</style>
