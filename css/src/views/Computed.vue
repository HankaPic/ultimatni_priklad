<template>
  <div>
      <h1>Computed...</h1>

      {{ jmeno }} {{ prijmeni }}
      <hr>
      {{ celeJmeno }}

      <hr>

      <ul>
          <li v-for="cislo in cisla">
              {{ cislo }}
          </li>
      </ul>


  </div>
</template>

<script>
export default {

    data() {
        return {
            jmeno: 'Hanička',
            prijmeni: 'Kokosová',

            cisla: [9, 13, 3, 8, 56, 53, 110, 9, 42, 256, 37],
        }
    },

    computed: {
        celeJmeno() {
            return this.jmeno + ' ' + this.prijmeni;
        }
    }


}
</script>

<style>

</style>