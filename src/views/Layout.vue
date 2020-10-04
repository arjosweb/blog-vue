<template>
<section>
  <!--Navbar-->
  <Navbar/>
  <!--Navbar-->
  <!--Container-->
  <main role="main">
    <!--Hero-->
    <Hero/>
    <!--Hero-->
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
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
export default {
    name: "Layout",
    components: {
      Footer,
      Hero,
      Navbar
    },
    mounted() {
        this.loadResources()
    },
    methods: {
        async loadResources() {
            // await this.$store.dispatch("getClients")
            // await this.$store.dispatch("getProviders")
        },
    }
}
</script>

<style>
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
