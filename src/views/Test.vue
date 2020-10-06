<template>
  <div class="pt-3">
    <div class="pt-5">
      <div v-if="this.test" class="container">
        <div class="row d-block pb-4 text-center">
          <h1 v-if="test.title" class="display-6">{{ test.title }}</h1>
          <span v-if="test.subtitle" class="text-muted text-justify">{{ test.subtitle }} </span>
          <small class="d-block pt-3">
            <i class="bx bx-user mr-2"></i> Por {{ test.user ? test.user.name : null}}
            <i class="bx bx-calendar ml-3 mr-2"></i> {{ test.created_at }}
            <i class="bx bx-purchase-tag ml-3 mr-1"></i> {{ test.category ? test.category.name : null }}
          </small>
          <img v-if="test.image" class="test_features mt-5 shadow rounded-2" :src="test.image" alt="">
        </div>
        <div class="row text-justify pt-3 pb-3 mb-5">
          <div class="pt-md-5 pb-5">
            <div>
              <p v-if="test.text" >{{ test.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container">
        <div class="row">
          <div class="col-12 text-center">
            Carregando...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Test",
  computed: {
    ...mapState(['test'])
  },
  created() {
    this.iniPage(this.$route.params.slug);
  },
  methods: {
    iniPage(payload){
      this.$store.dispatch('getTest', payload);
      setTimeout( () => {
        if (this.test.id === undefined) {
          this.$router.push({name: 'NotFound'})
        } else {
          return null
        }
      }, 200);
    }
  }
}
</script>

<style scoped>

</style>