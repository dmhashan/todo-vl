<template>
<transition 
    enter-active-class="animated bounceIn" 
    leave-active-class="animated bounceOut"
name="custom-classes-transition">
    <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
            <div class="input-group mb-3">
                
                <!--Text Feild-->
                <input type="text" 
                    v-model="item.details"
                    :disabled="disableFlag"
                    @keyup.enter="editItem"
                    @blur="editItem"
                    :id="item.id"
                class="form-control">

                <div class="input-group-append">
                    <!--Edit Button-->
                    <span class="input-group-text">
                        <button type="button" @click="editfocus" class="edit close">
                        <span class="fa fa-pencil"></span>
                        </button>
                    </span>

                    <!--Delete Button-->
                    <span class="input-group-text">
                        <button type="button" class="red close" @click="deleteItem">
                        <span class="fa fa-close" aria-hidden="true"></span>
                        </button>
                    </span>
                </div>
            </div>
        </div>
        <small class="text-muted">
            Status : 
                <span v-show="disableFlag && !updateFlag" class="badge badge-primary">Primary Data</span>
                <span v-show="disableFlag && updateFlag" class="badge badge-success">Updated Data</span>
                <span v-show="!disableFlag" class="badge badge-light">User Editable Mode</span>
            Updated at : <span class="badge badge-secondary">{{item.updated_at}}</span>
            Created at : <span class="badge badge-secondary">{{item.created_at}}</span>
        </small>
    </div>
</transition>
</template>

<script>
export default {
    props: ['item', 'items'],

    data() {
        return {
            'updateFlag': false,
            'disableFlag' : true
        };
    },

    methods:{
        deleteItem: function() {
            this.item.details = "Deleting . . .";
            this.$http.delete("http://localhost:8000/api/event/delete/"+this.item.id)
            .then(function(response) {
                const index = this.items.findIndex(tempItem => tempItem === this.item);
                this.items.splice(index, 1);
            });

        },

        editItem: function() {
            this.tempItem = {'details' : this.item.details};
            this.$http.put("http://localhost:8000/api/event/edit/"+this.item.id, this.tempItem)
            .then(function(response) {
                this.updateFlag = true;
                this.disableFlag = true;
            });

        },

        editfocus: function() {
            this.disableFlag = false;
            document.getElementById(this.item.id).focus();
        }
    }
};
</script>
