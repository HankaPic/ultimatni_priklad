<template>
  <div>
      <h1>Zeměpis</h1>

      {{staty[0].pocetObyvatel}}

      <stat 
        v-for="stat in staty"
        v-bind:key="stat.id"
        v-bind:id="stat.id"
        v-bind:nazev="stat.nazev"
        v-bind:mesto="stat.mesto"
        v-bind:pocetObyvatel="stat.pocetObyvatel"

        v-on:zmenit-pocet="zmenitPocet($event.idcko, $event.cislo)"
      /> <!-- UDÁLOST - můžu jich mít kolik chci na jedné komponentě -->
    

  </div>
</template>

<script>
import Stat from './../components/Stat.vue'

export default {

    components: {
        stat: Stat
    },

    data() {
        return {
            staty: [
                { id: 1, nazev: 'Česká republika', mesto: 'Praha', pocetObyvatel: 10500000},
                { id: 7, nazev: 'Německo', mesto: 'Berlín', pocetObyvatel: 83000000},
                { id: 123, nazev: 'Polsko', mesto: 'Varšava', pocetObyvatel: 37000000},
                { id: 9, nazev: 'Slovenská republika', mesto: 'Bratislava', pocetObyvatel: 5500000},
                { id: 42, nazev: 'Rakousko', mesto: 'Vídeň', pocetObyvatel: 8800000},
            ]
        }
    },

    methods: {

        zmenitPocet(idcko, cislo) {

            // 1. způsob (podle indexu):
            // const index = this.staty.findIndex(stat => stat.id === idcko);
            // this.staty[index].pocetObyvatel += cislo;

            // 2. způsob (objekt):

            const zeme = this.staty.find(stat => stat.id === idcko);
            zeme.pocetObyvatel += cislo;

        }
    }

}
</script>

<style>

</style>