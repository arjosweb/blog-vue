<template>
  <section class="pt-5">
    <div class="row pt-4">
      <div class="col-12 pt-5">
        <h4>Olá, Administrador!</h4>
      </div>
    </div>
    <div class="row pt-1">
      <div class="col-12 px-0 d-flex pt-4">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h5>POSTS</h5>
                </div>
                <div class="col-6 text-right">
                  {{ this.posts.length }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h5>CATEGORIAS</h5>
                </div>
                <div class="col-6 text-right">
                  2134567
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h5>USUÁRIOS</h5>
                </div>
                <div class="col-6 text-right">
                  12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AdmHome",
  computed: {
    ...mapState(['posts'])
  }
}
</script>

<style scoped>

</style>