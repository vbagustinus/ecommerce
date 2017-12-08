<template>
  <div>
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'MainPage',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
