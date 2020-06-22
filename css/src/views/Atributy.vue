<template>
  <div>
      <h1>Atributy pomocí v-bind</h1>

      <!-- <img v-bind:src="obrazek" alt="Ovoce"> -->
      <img v-bind:src="require(`./../assets/ovoce/${obrazek}.jpg`)" alt="Ovoce">

      <hr>
      <button v-on:click="zmenObrazek('jahoda')">
        Jahoda
      </button>
      <button v-on:click="zmenObrazek('citron')">
        Citrón
      </button>
      <button v-on:click="zmenObrazek('meloun')">
        Meloun
      </button>

      <hr>
      <img v-bind:src="`/images/people/${foto}.jpg`" alt="Slečna">
      <!-- tady musím napsat cestu do BUDOUCÍ složky až ji vytvoří webpack -->
      
  </div>
</template>

<script>
export default {

  data() {
    return {
      //obrazek: require('./../assets/ovoce/avokado.jpg')
      obrazek: 'avokado',
      foto: 'foto01'
      
    }
  },

  methods: {
    zmenObrazek(obr) {
      this.obrazek = obr;
    }
  }

}
</script>

<style>

</style>