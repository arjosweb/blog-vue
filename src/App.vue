<template>
  <div id="app">
    <transition name="view">
      <router-view />
    </transition>
  </div>
</template>

<script>
import "@/assets/css/animations.scss"
export default {
  name: "App",
}
</script>

<style scoped>

</style>
