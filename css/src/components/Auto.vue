<template>
  <div class="auto">
      <p>{{auto.vyrobce}} {{auto.model}}</p>

      <button v-on:click="snizitKm">-</button>

      <p>{{auto.najetoKm}} km</p>


  </div>
</template>

<script>
export default {
    
    props: ['auto', 'index'],
        /*props: ['vyrobce', 'model'] {
            name:'vyrobce', 
            required: true,
            default: 'Automaker',
            type: String
        } toto jsou nějaké další hodnoty které můžu použít - lépe se to naddefinuje, podrobnější, ale pro nás ntřeba :-)

        nahradily jsme jen props auto se kterou pracujeme jako s objektem z pole autobazar
        */
    
    methods: {
        snizitKm() {
            this.$emit('snizeni-km', this.index)
        }
        /*
        snizitKm() {
            this.auto.najetoKm -= 1000;
        }*/
    }

}
</script>

<style>
.auto {
    border: 1px solid silver;
    padding: 10px;
    margin: 5px;
}
</style>