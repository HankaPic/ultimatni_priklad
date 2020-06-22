<template>
    <div>
        <h1>Skrývání prvků</h1>

        <button v-on:click="prepnout">Přepnout viditelnost odstavce</button>

        <p v-if="viditelne">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis, et deleniti nulla animi quos iure delectus impedit aut nisi dolorum pariatur reiciendis a vel architecto repellendus esse dignissimos similique?
        </p>

        <p v-else>
            I'm baby umami ugh ethical, keffiyeh edison bulb blue bottle copper mug deep v art party tumblr flexitarian flannel shoreditch man braid. Next level cray farm-to-table tumeric PBRB seitan. Hexagon cardigan leggings unicorn art party. Cliche bespoke raw denim adaptogen tousled cred seitan. Health goth chartreuse fixie four loko.
        </p>

        <hr>

        <p v-show="viditelne">
            Bacon ipsum dolor amet beef ribs turkey bresaola, pork loin buffalo fatback pork chop. Ham hock tongue ham strip steak, jowl meatloaf pancetta. Sirloin kevin pancetta, drumstick ground round short ribs bacon meatloaf tail bresaola leberkas chuck ham pork chop ribeye. Beef sausage pancetta tongue.
        </p>


    </div>
</template>

<script>
export default {

    data() {
        return {
            viditelne: true
        }
    },

    methods: {
        prepnout() {
            this.viditelne = !this.viditelne;
        }
    }
}
</script>

<style>

</style>