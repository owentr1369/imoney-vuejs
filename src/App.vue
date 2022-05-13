<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <ul>
    <li>
      <router-link class="t2icon t2ico-wallet" to="/">Home</router-link>
    </li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
  <router-view /> -->
  <!-- explicit style -->
  <font-awesome-icon icon="fa-solid fa-wallet" />

  <!-- implicit style (fas is assumed) -->
  <font-awesome-icon icon="wallet" />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
