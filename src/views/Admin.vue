<template>
  <section>
    <!--Navbar-->
    <AdmNavbar/>
    <!--Navbar-->
    <!--Container-->
    <main role="main">
      <div class="container">
        <!-- Content -->
        <transition name="view">
          <router-view></router-view>
        </transition>
        <!-- Content -->
      </div>
    </main>
    <!--Container-->
    <Footer/>
  </section>
</template>

<script>
import Footer from "@/components/Footer";
import AdmNavbar from "@/components/admin/AdmNavbar";
export default {
name: "Admin",
  components: {
    AdmNavbar,
    Footer,
  },
  mounted() {
    this.loadResources()
  },
  methods: {
    async loadResources() {
      // await this.$store.dispatch("getPosts")
    },
  }
}
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
body {
  padding-top: 3.5rem;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>