<template>
<div class="pb-5 mb-5">
  <div class="row">
    <div class="card-deck pt-4 pb-3">
      <div v-for="item in posts" :key="item.id" class="col-md-4 p-0 m-0">
        <div class="card shadow-sm">
          <img :src="item.image" class="card-img-top" alt="">
          <div class="card-body">
            <small><i class="bx bx-user mr-2"></i>Por {{ posts[1].user_id.name }} <i class="bx bx-calendar ml-3 mr-2"></i>{{ posts[1].date }}</small>
            <h5 class="card-title pt-2">{{ item.title | truncate(50)  }}</h5>
            <p class="card-text text-justify">{{ item.text  | truncate(100) }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><i class="bx bx-purchase-tag mr-1"></i> {{ posts[0].category_id.name }}</small>
            <small class="text-muted"><i class="bx bx-time ml-md-3 mr-2"></i>Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'Home',
  components: {
  },
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
.card-img, .card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card {
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
</style>