/** Chiedere all'utente quanti elementi vuole includere nell'array.
 Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
 Stampare a schermo la somma dei numeri generati. */

const { createApp } = Vue

createApp({
  data() {
    return {
      manyNumbers : "",
      apiUrl: "https://flynn.boolean.careers/exercises/api/array/integers",
      result : ""
      
    }
  },
  methods:{
    getSumOfAll(){
      axios.get(this.apiUrl, {
        params: {
          min : 1,
          max : 100,
          items : this.manyNumbers
        }
      })
        .then((response) => {
              console.log(response.data.response)
              let sum = 0;
              response.data.response.forEach(element => {
                return sum += element;
              })
              this.result = sum;
              
        })
        console.log(this.oddList, this.evenList)
    },
  },
  created(){

  }
  
}).mount('#app')