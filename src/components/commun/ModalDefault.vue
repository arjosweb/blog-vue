<template>
    <div :id="id_modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div :class="size" class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title ml-3"><i v-if="title" class="mr-2 bx" :class="icon" style="font-size: 20px;"></i>{{ title }}</h5>
                    <button type="button" class="close mr-1" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div v-if="footer" class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalDefault",
    props: ['icon', 'id_modal', 'size', 'title', 'footer'],
}
</script>

<style scoped>

</style>
