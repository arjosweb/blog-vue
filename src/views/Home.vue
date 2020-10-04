<template>
<div class="pb-5 mb-5">
  <div class="row">
    <div class="card-deck pt-3 pb-3">
      <div v-for="item in posts" :key="item.id" class="col-md-4 p-0 m-0">
        <div class="card shadow-sm">
          <img :src="item.image" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.text  | truncate(100) }}</p>
            <p class="mb-1">
              <a class="btn btn-secondary btn_hero px-3 mb-0" style="font-weight: 500; font-size: 14px" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
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
