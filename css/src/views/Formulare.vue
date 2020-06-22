<template>
  <div>
      <h1>Formuláře a v-model</h1>

        <label for="jmeno">Jméno </label>
        <input id="jmeno" type="text" v-model="jmeno">
        <!-- obousměrný databinding: formulář-data -->

        <input type="checkbox" v-model="souhlas">

        <br>
        <select v-model="mesto">
            <option value="600">Brno</option>
            <option value="100">Praha</option>
            <option value="700">Prdelákov</option>
        </select>

        <hr>

        <input type="radio" name="sex" v-model="pohlavi" value="muz"> Muž
        <input type="radio" name="sex" v-model="pohlavi" value="zena"> Žena
        <input type="radio" name="sex" v-model="pohlavi" value="ano"> Ano

        <hr>

        <input type="number" v-model.number="cislo">
        
        <hr>
        <hr>

        <p>{{ jmeno }}</p>
        <p>{{ souhlas }}</p>
        <p>{{ mesto }}</p>
        <p>{{ pohlavi }}</p>
        <p>{{ cislo }}</p>

  </div>
</template>

<script>
export default {

    data() {
        return {
            jmeno: '',
            souhlas: false,
            mesto: 'Brno',
            pohlavi: '',
            cislo: 0,
        }
    }

}
</script>

<style>

</style>