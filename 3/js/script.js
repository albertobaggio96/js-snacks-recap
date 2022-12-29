/** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */

const { createApp } = Vue

createApp({
  data() {
    return {
      messages: [],

      writedText: "",

      randomSentence: "",
    }
  },
  methods:{
    getSentence(){
      axios.get("https://flynn.boolean.careers/exercises/api/random/sentence")
        .then((response) => {
          console.log(response.data.response);
          this.randomSentence = {
            message : response.data.response,
            status : "recived"
          }
          this.messages.push(this.randomSentence);
       })
    },

    getSentMessage(text){
      text = {
        message : text,
        status : "sent"
      }
      this.messages.push(text);

      this.writedText = "";

      setTimeout(() => {

        this.getSentence()

      }, 1000);
    }
  },
  
}).mount('#app')

