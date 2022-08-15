<template>
  <div class="">
    <div class="pt-8 p-2 pb-0 text-white text-right text-3xl bg-purple-800">
      <span>{{ store.concat1 }}</span> 
      <span v-if="store.$state.operacion"> {{ store.$state.simbolo }} </span>
      <span v-if="store.concat2">{{ store.concat2 }}</span>
    </div>
    <div class="p-4 text-white text-right text-3xl bg-purple-800">
      = <span class="text-orange-500">{{ store.$state.resultado }}</span>
    </div>
  </div>
</template>

<script>
import { calculadoraStore } from "../store/calcadoraStore";
export default {
  name: "Results",
  setup() {
    const store = calculadoraStore();

    return {
      store,
    };
  },
};
</script>

<style scoped>
span{

    @apply px-2
}
</style>