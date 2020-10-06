<template>
  <section class="pt-4">
    <div class="row pt-4">
      <div class="col-12 pt-5">
        <h5 class="pt-3"><i class="bx bx-edit mr-3"></i>Criar nova postagem</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pt-4">
        <div class="form-group">
          <label for="title_post">Título da postagem:</label>
          <input type="text" class="form-control" id="title_post" aria-describedby="title_post_help">
        </div>
        <div class="form-group">
          <label for="subtitle_post">Subtítulo:</label>
          <input type="text" class="form-control" id="subtitle_post" aria-describedby="subtitle_post_help">
        </div>
        <div class="form-group">
          <label for="text_post">Texto:</label>
          <textarea type="text" rows="10" class="form-control" id="text_post" aria-describedby="text_post_help"/>
        </div>
        <div class="form-group d-block">
          <span for="catagory_post">Categoria:</span>
          <select v-model="posts.category_id" style="width: 100%" name="post_category" id="post_category">
            <option>OI</option>
          </select>
        </div>
        <button class="btn btn-info">Enviar postagem</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AdmPost",
  computed: {
    ...mapState(['posts'])
  },

}
</script>

<style scoped>

</style>