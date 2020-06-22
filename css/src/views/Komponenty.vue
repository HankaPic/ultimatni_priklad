<template>
  <div>
      <h1>Komponenty a Props</h1>

        <auto 
            v-for="(vozidlo, index) in autobazar"
            v-bind:key="index"
            v-bind:auto="vozidlo"
            v-bind:index="index"
            v-on:snizeni-km="zmensiPocetKm($event)"
        />
        <!-- DŮLEŽITÉ!!! -->



    <!-- vypsáno jednotlivě: (s props: ['vyrobce', 'model'])
      <auto vyrobce="Škoda" model="Octavia" />
      <auto vyrobce="Mercedes" model="S class" />
      <auto vyrobce="Renault" model="Clio" />
      <auto vyrobce="Nisan" model="Juke" />
    -->

  </div>
</template>

<script>
import Auto from './../components/Auto.vue'

export default {

    components: {
        auto: Auto
    },

    data() {
        return {
            autobazar: [
                {vyrobce: 'Škoda', model: 'Octavia', najetoKm: 97450 },
                {vyrobce: 'Mercedes', model: 'S class', najetoKm: 13240 },
                {vyrobce: 'Renault', model: 'Clio', najetoKm: 1237 },
                {vyrobce: 'Nissan', model: 'Juke', najetoKm: 124793 },
                {vyrobce: 'Volkswagen', model: 'Polo', najetoKm: 14793 },
                {vyrobce: 'Trabant', model: '601', najetoKm: 478965 },
            ]
        }
    },

    methods: {
        zmensiPocetKm(idx) {
            this.autobazar[idx].najetoKm -= 1000;
        }
    },

}
</script>

<style>

</style>