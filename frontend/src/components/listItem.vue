<template>
    <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
            <div class="input-group mb-3">
                <!--TextFeild-->
                <input v-model="item.details" type="text" class="form-control">

                <div class="input-group-append">
                    <!--EditButton-->
                    <span class="input-group-text">
                        <button type="button" class="edit close">
                        <span class="fa fa-pencil"></span>
                        </button>
                    </span>

                    <!--CloseButton-->
                    <span class="input-group-text">
                        <button type="button" class="red close" @click="deleteItem">
                        <span class="fa fa-close" aria-hidden="true"></span>
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <small class="text-muted">Updated:</small>
    </div>
</template>

<script>
export default {
    props: ['item'],

    methods:{
        deleteItem: function () {
            this.item.details = "deleted";
        }
    }
};
</script>
