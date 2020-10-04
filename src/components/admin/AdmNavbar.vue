<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <router-link :to="{ name: 'AdmHome' }" class="navbar-brand mr-md-5">
      <img class="mr-3 py-1" src="../../assets/logo.png" alt="VueJS" width="30">
      <span style="font-weight: 600;">Blog VueJS</span>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item pr-md-3" style="color: #afb2b5">
          <span class="pl-3"><i class="bx bx-user mr-1"></i> Painel de Controle</span>
        </li>
      </ul>
      <div data-toggle="modal" data-target="#modalLogin" class="my-2 ml-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item pr-md-3" :class="{'active' : this.$route.name === 'AdmHome'}">
            <router-link :to="{ name: 'AdmHome' }" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item pr-md-3" :class="{'active' : this.$route.name === 'AdmPost'}">
            <router-link :to="{ name: 'AdmPost' }" class="nav-link">Criar postagem</router-link>
          </li>
          <li class="nav-item pr-md-3" :class="{'active' : this.$route.name === 'Home'}">
            <router-link :to="{ name: 'Home' }" class="nav-link">Website</router-link>
          </li>
          <button data-toggle="modal" data-target="#modalLogin" class="btn btn-success rounded-circle ml-3" style="padding: 0px 8px !important;">
            <i style="font-size: 20px; font-weight: 500; margin-top: 8px;" class="bx bx-exit"></i>
          </button>
        </ul>
      </div>
    </div>
    <!--Modals-->
  </nav>
</template>

<script>
export default {
name: "AdmNavbar",
  components: {
  },
  methods: {
  }
}
</script>

<style scoped>
.form-control:focus {
  color: #495057;
  background-color: #fff;
  box-shadow: 0 0 0 0.2rem rgb(97 192 141 / 80%);
}
.dropdown-menu {
  padding: 0.5rem 0;
  margin: 0.825rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgb(205 207 208);
  border-radius: 10px 10px;
  box-shadow: 0px 0.4rem 0.55rem rgb(0 0 0 / 9%), 0 -1px 5px rgb(0 0 0 / 6%);
  transition: 0.15s;
}
.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #61c08d;
}
.search_input {
  font-size: 0.8rem;
}
</style>