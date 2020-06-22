<template>
  <div>
      <h1>Opakování v-for</h1>

        <ul>
          <li
          v-for="(osoba, index) in osoby"
          v-bind:key="index"
          v-on:click="vyberOsobu(index)"
          v-bind:class="{ vybrana: index === vybranaOsoba }"
          >
            {{ index }}. {{ osoba.jmeno }} {{ osoba.prijmeni }} ({{ osoba.vek }})
            <!-- 
                příklad s přepínáním -> uložím si index, abych mohla přepínat (ukládám ho do vyberOsobu v metodě skrz vybranaOsoba v datech)
                ve v-bind:class tentokrát rovnou napíšu JS fci -> logický výraz kt. je true / false = stojím na vybrané, tu na kt. jsem klikla, čili se to rovná, takže se tam ta třída přidá!
            -->
          </li>
        </ul>
        {{ vybranaOsoba }}

        <hr>

        <ul>
          <li
          v-for="(osoba, index) in osoby"
          v-bind:key="index"
          v-on:click="zmenStatus(index)"
          v-bind:class="{ online: osoba.online }"
          >
            {{ index }}. {{ osoba.jmeno }} {{ osoba.prijmeni }} ({{ osoba.vek }})
            <!-- 
                příklad s uložením kliku / odkliku => přidám další proměnnou do již existujícího pole osoby (zapnuto: true / false)
            -->
          </li>
        </ul>
        {{  }}

        <hr>

        <ul>
          <li
          v-for="(osoba, index) in osoby"
          v-bind:key="index"
          >
            {{ index +1 }}. {{ osoba.jmeno }} {{ osoba.prijmeni }} ({{ osoba.vek }})
            <!-- 
                u posledního jsou závorky jen proto, že chci mít položku věk v závorkách 
                přidali jsme index k osobě, abychom mohli vyhledat přesné místo a hlavně přidat v-bind:key
            -->
          </li>
      </ul>

  </div>
</template>

<script>
export default {

    data() {
        return {
            osoby: [
                {jmeno: 'Alena', prijmeni: 'Srdíčková', vek: 42, online: false},
                {jmeno: 'Hanka', prijmeni: 'Falloutová', vek: 27, online: false},
                {jmeno: 'Lucka', prijmeni: 'Chlebíková', vek: 24, online: false},
                {jmeno: 'Jitka', prijmeni: 'Kočičková', vek: 32, online: false},
                {jmeno: 'Eva', prijmeni: 'Meruňková', vek: 14, online: false},
                {jmeno: 'Marta', prijmeni: 'Propisková', vek: 58, online: false}
            ],

            vybranaOsoba: null,
        }
    },

    methods: {
        vyberOsobu(index) {
            this.vybranaOsoba = index;
        },
        /*zmenStatus(index) {
            this.osoby[index].online = !this.osoby[index].online;
        }*/

        // chci aby šly zakliknout max tři (online) - nejdřív vyfiltruju info s délkou pole, musím ošetřit aby šlo i vypnout vybrané ne jen přidávat do max. 3 (jakmile jsou tři, může nějakou vypnout) - musím zjistit jestli je osoba momentálně online => vylezou mi dvě podmínky co musí platit: počet lidí menší než tři nebo je v true
        zmenStatus(index) {

            let pocetOnline = this.osoby.filter(osoba => osoba.online === true).length;

            if ( pocetOnline < 3 || this.osoby[index].online === true ) {
                this.osoby[index].online = !this.osoby[index].online;
            }
        }
    }

}
</script>

<style>

.vybrana {
    background-color: rosybrown;
}
.online {
    background-color: lightblue;
}

</style>