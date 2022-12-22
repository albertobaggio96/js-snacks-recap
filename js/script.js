/**
Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
 Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
*/

const { createApp } = Vue

createApp({
  data() {
    return {
      oddsList : [],
      evenList : []
    }
  },
  methods:{
    getNumber(){
      axios.get("https://flynn.boolean.careers/exercises/api/random/int")
        .then((response) => {
              console.log(response.data.response)
              response.data.response % 2 === 0 ? this.evenList.push(response.data.response) : this.oddsList.push(response.data.response)
        })
        console.log(this.oddsList, this.evenList)
    },
  },
  created(){
    this.getNumber()
  }
  
}).mount('#app')