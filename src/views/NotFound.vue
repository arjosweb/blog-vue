<template>
  <section>
    <div class="row pt-5 align-content-center align-self-center">
      <div class="col-12 text-center pt-5">
        <div>
          <h1>404</h1>
        </div>
        <h4>
          <p>Página não encontrada.</p>
          <h6><p>
            <router-link :to="{name: 'Home'}">
              [ Voltar ]
            </router-link>
          </p></h6>
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
  components: {
  }
}
</script>

<style scoped>

</style>