<template>
  <footer class="container">
    <hr class="mt-0">
    <div class="row justify-content-between">
      <div class="col-6">
        <p class="pl-4">&copy; Blog VueJS - 2020</p>
      </div>
      <div class="col-6 text-right">
        <p class="pr-4">
          <small>Make with <i class="bx bxs-heart text-danger" ></i> by <strong>ARJOS</strong></small>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

footer {
  position: fixed;
  bottom: 0;
  min-width: 100%;
  background: #ffffff;
  z-index: 9999;
  /*background: #fff0;*/
  /*background: linear-gradient(0deg, #fff 70%, #fff0 100%);*/
}
</style>