<template>
  <section class="pt-2 pb-5 mb-3">
    <!--CARDS - VERTICAL-->
    <div class="row pt-5">
      <div class="col-12 pt-2 pb-2 px-md-0">
        <h4 class="border-bottom pb-3">
          <i class="bx bx-news mr-1"></i> Veja todas as postagens abaixo:</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pt-2 pb-2 px-md-0">
        <div v-for="item in posts" :key="item.id" class="card mb-4 mt-2">
          <router-link v-if="item.slug" class="link_router" :to="/posts/ + item.slug">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img v-if="item.image" :src="item.image" class="card-img img_lasts" alt="">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" v-if="item.title">{{ item.title | truncate(100)  }}</h5>
                  <p class="card-text" v-if="item.text">{{ item.text  | truncate(300) }}</p>
                  <p class="card-text">
                    <small class="text-muted" v-if="item.category_id.name"><i class="bx bx-purchase-tag mr-1"></i> {{ item.category_id.name }}</small>
                    <small class="text-muted" ><i class="bx bx-time ml-md-3 mr-2"></i>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Posts",
  computed: {
    ...mapState(['posts'])
  },
  filters: {
    truncate: function (value, limit) {
      if (value.length > limit) {
        value = value.substring(0, (limit - 3)) + '...';
      }

      return value
    },
  }
}
</script>

<style scoped>
.link_router {
  color: #212529;
}
.link_router:hover {
  color: #464647;
  text-decoration: none;
}
.card-img, .card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card {
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #bbc0c475;
  border-radius: 10px;
  transition: all 0.4s;
}
.card:hover {
  margin-top: -10px;
  margin-bottom: 10px;
  transition: all 0.4s;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgb(233 236 239 / 60%);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.btn_home {
  display: flex;
  width: 165px;
}
.img_lasts {
  border-top-left-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0px;
}
.icon_features {
  background: rgb(68,140,114);
  background: linear-gradient(109deg, rgba(68,140,114,1) 26%, rgba(79,192,141,1) 100%);
  border-radius: 50%;
  padding: 7px;
  color: #fff;
}
</style>