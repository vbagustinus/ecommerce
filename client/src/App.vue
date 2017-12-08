<template>
  <div id="app">
    <router-view/>
   <!-- FOOTER -->
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>BoostBulma Custom</strong> by SmartShop.
            </p>
          </div>
        </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
