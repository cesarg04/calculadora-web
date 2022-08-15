import { defineStore } from 'pinia'


export const calculadoraStore = defineStore('calculos', {
    state: () => ({
        num1: [],
        num2: [],
        resultado: 0,
        operacion: undefined,
        simbolo: '',
    }),
    getters:{
        concat1: ({num1}) => Number(num1.join('')),
        concat2: ({num2}) => Number(num2.join(''))
    },
    actions:{
        sumar(){
            this.resultado = this.concat1 + this.concat2
        },
        restar(){
            this.resultado = this.concat1 - this.concat2
        },
        multiplicar(){
            this.resultado = this.concat1 * this.concat2
        },
        dividir(){
            this.resultado = this.concat1 / this.concat2
        },
        RaizCuadrada(){
            this.resultado = Math.sqrt(this.concat1)
        },
        potenciar(){
            this.resultado = Math.pow(this.concat1, this.concat2)
        },
        resetear(){
            this.$state.num1 = []
            this.$state.num2 = []
            this.$state.concat1 = 0
            this.$state.concat2 = 0
            this.$state.resultado = 0
            this.$state.operacion = undefined
            
        }
    }
})


