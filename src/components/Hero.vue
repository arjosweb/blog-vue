<template>
  <section>
    <transition name="view">
      <div class="jumbotron" v-if="this.$route.name === 'Home'">
        <div class="container">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row reverse_sm">
                  <div class="col-md-6 col-sm-12 align-self-center pt-2 pb-3 d-md-none">
                    <img v-if="posts[0].image" :src="posts[0].image" width="100%" class="shadow rounded-2 p-0">
                  </div>
                  <div class="col-md-6 col-sm-12 pr-md-2">
                    <b-badge v-if="posts[0].category_id.name" class=""><small class="px-1"><i class="bx bx-purchase-tag mr-1"></i> {{ posts[0].category_id.name }}</small></b-badge>
                    <h1 v-if="posts[0].title" class="display-5 mt-sm-4 title_hero">{{ posts[0].title | truncate(70) }}</h1>
                    <p v-if="posts[0].text" class="pt-2 text-justify">{{ posts[0].text | truncate(180) }}</p>
                    <p class=" text-justify">
                      <small>
                        <i class="bx bx-user mr-2" v-if="posts[0].user_id.nam"></i>Por {{ posts[0].user_id.name }}
                        <i class="bx bx-time ml-3 mr-2" v-if="posts[0].date"></i>{{ posts[0].date }}
                      </small>
                    </p>
                    <p class="pt-2">
                      <router-link v-if="posts[0].slug" :to="/posts/ + posts[0].slug" class="btn btn-success rounded btn-lg  shadow-sm btn_hero px-4 py-2" role="button">
                        <span class="btn_hero_text">Leia mais &raquo;</span>
                      </router-link>
                    </p>
                  </div>
                  <div class="col-md-6 col-sm-12 align-self-center text-right hidden">
                    <div class="p-2 pr-3">
                      <img v-if="posts[0].image" :src="posts[0].image" class="img_hero shadow rounded-2 p-0 mb-1">
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row reverse_sm">
                  <div class="col-md-6 col-sm-12 align-self-center pt-2 pb-3 d-md-none">
                    <img v-if="posts[1].image" :src="posts[1].image" width="100%" class="shadow rounded-2 p-0">
                  </div>
                  <div class="col-md-6 col-sm-12 pr-md-2">
                    <b-badge v-if="posts[1].category_id.name" class=""><small class="px-1"><i class="bx bx-purchase-tag mr-1"></i> {{ posts[1].category_id.name }}</small></b-badge>
                    <h1 v-if="posts[1].title" class="display-5 mt-sm-4 title_hero">{{ posts[1].title | truncate(70) }}</h1>
                    <p v-if="posts[1].text" class="pt-2 text-justify">{{ posts[1].text | truncate(180) }}</p>
                    <p class=" text-justify">
                      <small>
                        <i class="bx bx-user mr-2" v-if="posts[1].user_id.name"></i>Por {{ posts[1].user_id.name }}
                        <i class="bx bx-time ml-3 mr-2" v-if="posts[1].date"></i>{{ posts[1].date }}
                      </small>
                    </p>
                    <p class="pt-2">
                      <router-link v-if="posts[1].slug" :to="/posts/ + posts[1].slug" class="btn btn-success rounded btn-lg shadow-sm btn_hero px-4 py-2" role="button">
                        <span class="btn_hero_text">Leia mais &raquo;</span>
                      </router-link>
                    </p>
                  </div>
                  <div class="col-md-6 col-sm-12 align-self-center text-right hidden">
                    <div class="p-2 pr-3">
                      <img v-if="posts[1].image" :src="posts[1].image" class="img_hero shadow rounded-2 p-0 mb-1">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="control_slide" aria-hidden="true">
                <i class="bx bxs-chevron-left"></i>
              </span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="control_slide" aria-hidden="true">
                <i class="bx bxs-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Hero",
  computed: {
    ...mapState(['posts'])
  },
  filters: {
    uppercase: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    },
    truncate: function (value, limit) {
      if (value.length > limit) {
        value = value.substring(0, (limit - 3)) + '...';
      }

      return value
    },
  }
}
</script>

<style>



</style>