<template>
  <div id="app">


    <router-view/>

    <hr>

    <router-link to="/">Zpět na úvodní stránku</router-link>

  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html { box-sizing: border-box; }
*, ::before, ::after { box-sizing: inherit; }

html {
  --vue-green: #41b883;
  --vue-dark: #35495e;
}


body {
  margin: 2rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: var(--vue-green);
}

h1 {
  color: var(--vue-dark);
  font-size: 48px;
  text-transform: uppercase;
  padding-bottom: 10px;
  border-bottom: 10px solid var(--vue-green);
}

h2 {
  font-size: 28px;
}

h3 {
  font-size: 22px;
}


a {
  color: var(--vue-green);
}

a:hover {
  color: var(--vue-dark);
}


</style>