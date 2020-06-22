<template>
    <div>
        <h1>CSS třídy - přidávání</h1>

        <p v-bind:class="barva">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <p v-bind:class="{ cervena: zapnuto }"
            v-on:click="prepnout">
        Nostrum temporibus ab voluptatum voluptatem harum fugiat labore, aliquid autem.</p>

        <hr>


        <p v-bind:class="{ hightlight: zvyrazni, big: zvetsi, warning: varuj }">
            Tempora nulla harum facilis laudantium. Repellat animi cumque aspernatur laudantium sequi ab.</p>

        <button v-bind:class="{ active: zvetsi }" v-on:click="velke" >Velké písmo</button>
        <button v-bind:class="{ active: zvyrazni }" v-on:click="aktivni" >Zvýraznění</button>
        <button v-bind:class="{ active: varuj }" v-on:click="hrozba" >Varování</button>

    </div>
</template>

<script>
export default {

    data() {
        return {
            barva: 'zelena',
            zapnuto: true,
            zvyrazni: false,
            zvetsi: false,
            varuj: false,

        }
    },

    methods: {
        prepnout() {
            this.zapnuto = !this.zapnuto;
        },
        aktivni() {
            this.zvyrazni = !this.zvyrazni;
        },
        velke() {
            this.zvetsi = !this.zvetsi;
        },
        hrozba() {
            this.varuj = !this.varuj;
        },
    }
}
</script>

<style>

    .cervena {
        background-color: red;
    }
    .zelena {
        background-color: green;
    }
    .big {
        font-size: 48px;
    }
    .hightlight {
        background-color: yellow;
    }
    .warning {
        color: red;
    }
    button {
        padding: 10px;
        border: 2px solid black;
    }
    .active {
        border-color: blue;
        background-color: cornflowerblue;
    }

</style>