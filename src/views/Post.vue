<template>
  <div class="pt-3">
    <div class="pt-5">
      <div class="container">
        <div class="row d-block pb-4 text-center">
          <h1 v-if="post.title" class="display-6">{{ post.title }}</h1>
          <span v-if="post.subtitle" class="text-muted text-justify">{{ post.subtitle }} </span>

          <small class="d-block pt-3">
            <i v-if="post.user_id.name" class="bx bx-user mr-2"></i>Por {{ post.user_id.name }}
            <i v-if="post.date" class="bx bx-calendar ml-3 mr-2"></i>{{ post.date }}
            <i v-if="post.category_id.name" class="bx bx-purchase-tag ml-3 mr-1"></i> {{ post.category_id.name }}
          </small>

          <img v-if="post.image" class="post_features mt-5 shadow rounded-2" :src="post.image" alt="">
        </div>
        <div class="row text-justify pt-3 pb-3 mb-5">
          <div class="pt-md-5 pb-5">
            <div>
              <p v-if="post.text" >{{ post.text }}</p>
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
  name: "Post",
  data(){
    return {
      post: {}
    }
  },
  computed: {
    ...mapState(['posts'])
  },
  created() {
    this.post = this.findBySlug(this.$route.params.slug)
  },
  methods: {
    findBySlug(slug) {
      for (let i = 0; i < this.posts.length; i++)
      {
        if (slug === this.posts[i].slug) return this.posts[i];
      }
      return null;
    }
  }
}
</script>

<style scoped>

</style>