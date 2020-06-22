<template>
  <div class="stat">
      <h2>{{nazev}}</h2>
      <p>
          Hlavní město: {{mesto}} | 
          Počet obyvatel: {{pocetObyvatel}}
      </p>

      <button v-on:click="zmenitPocetObyvatel(10)">Přišlo 10 lidí</button>
      <button v-on:click="zmenitPocetObyvatel(100)">Přišlo 100 lidí</button>
      <button v-on:click="zmenitPocetObyvatel(1000)">Přišlo 1000 lidí</button>
      <button v-on:click="zmenitPocetObyvatel(-100)">Raději emigrovalo 100 lidí</button>
     



  </div>
</template>

<script>
export default {

    props: ['id', 'nazev', 'mesto', 'pocetObyvatel'],

    methods: {

        zmenitPocetObyvatel(kolik) {

            this.$emit('zmenit-pocet', { idcko: this.id, cislo: kolik });
            // UDÁLOST potřebuju poslat dva parametry -> takže je pošlu jako OBJEKT {}

        /*
        zmenitPocetObyvatel(kolik) {
            this.pocetObyvatel += kolik;
        }*/
        }

    }
}
</script>

<style>
    .stat {
        border: 1px solid grey;
        padding: 10px;
        margin: 5px;
    }
</style>