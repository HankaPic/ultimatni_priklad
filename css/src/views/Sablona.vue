<template>
    <div>
        <h1>Data v šabloně a události</h1>

        <p>Jsem {{jmeno}} a je mi {{vek}} let.</p>

        <button v-on:click="omladnoutJeden">Omládni</button>
        <button v-on:click="omladnout(5)">Omládni hodně</button>

    </div>
</template>

<script>
export default {

    data() {
        return {
            jmeno: 'Hanka',
            vek: 27
        }
    },

    methods: {
        omladnoutJeden() {
            this.vek--;
        },

        omladnout(pocet) {
            this.vek -= pocet;
        }
    }

}
</script>

<style>

</style>