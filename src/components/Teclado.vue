<template>
  <div class="grid grid-rows-5 grid-cols-4 bg-purple-900">
    <div
      class="
        flex-1
        px-2
        py-2
        justify-center
        flex
        items-center
        text-white text-2xl
        font-semibold
      "
      v-for="item in items"
      :key="item.valor"
    >
      <div
        class="
          rounded-full
          h-16
          w-16
          flex
          items-center
          bg-purple-800
          justify-center
          shadow-lg
          border-2 border-purple-700
          hover:border-2 hover:border-gray-500
          focus:outline-none
        "
        @click="clicked(item)"
      >
        {{ item.simbolo }}
      </div>
    </div>

    <div
      class="
        flex-1
        px-2
        py-2
        justify-center
        flex
        items-center
        text-white text-2xl
        font-semibold
      "
    >
      <div
        class="
          rounded-full
          h-16
          w-16
          flex
          items-center
          bg-orange-500
          justify-center
          shadow-lg
          border-2 border-purple-700
          hover:border-2 hover:border-gray-500
          focus:outline-none
        "
        @click="resultado()"
      >
        =
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { numeros } from "../composables/numeros";
import { calculadoraStore } from "../store/calcadoraStore";
export default {
  name: "teclado",
  setup() {
    const store = calculadoraStore();
    const items = ref(numeros);
    const secondParameter = ref(false);

    const clicked = ({ valor, simbolo }) => {
      if (typeof valor === "function") {
        store.$state.operacion = valor;
        store.$state.simbolo = simbolo;
        secondParameter.value = true;

        if (simbolo === "Res") {
          secondParameter.value = false;
          store.$reset();
        }

        return console.log(valor);
      }

      if (secondParameter.value) {
        store.$state.num2.push(valor);
        return store.concat2;
      }

      store.$state.num1.push(valor);
      store.concat1;
    };

    const resultado = () => {
      store.$state.operacion(store);
    };

    return {
      items,
      clicked,
      store,
      resultado,
    };
  },
};
</script>

<style>
</style>