<script>
import { ref, watch, watchEffect } from 'vue'
import Results from "./components/Results.vue";
import teclado from "./components/Teclado.vue";
import { calculadoraStore } from './store/calcadoraStore';

export default {
  components: {
    Results,
    teclado,
  },
  setup() {
    const store = calculadoraStore();
    const resultado = ref(store.$state.resultado);
    const num1 = ref(store.concat1);
    const num2 = ref(store.concat2);

    // watchEffect(() => {
    //   num1.value
    //   num2.value

    // })

    return {
      store,
      num1,
      num2,
      resultado
    };
  },
};
</script>

<template>
  <div
    class="
      mx-auto
      overflow-hidden
      mt-10
      shadow-lg
      mb-2
      bg-purple-900
      shadow-lg
      border
      rounded-lg
      md:w-3/6
      sm:w-4/6
    "
  >
    <div class="p-5 text-white text-center text-3xl bg-purple-900">
      <span class="text-orange-500" >Calcu</span>ladora
    </div>
    <results :num1="num1" :num2="num2" :resultado="resultado"/>
    <div>
      <teclado/>
    </div>
  </div>
</template>
