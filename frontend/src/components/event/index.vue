<template>
    <div class="list-group">
        <item-add :items="items"></item-add>
        <list-item v-for="item in items" :key="item.id" :item="item" :items="items"></list-item>
        <br/><br/><br/>
    </div>
</template>

<script>

  import listItem from './listItem.vue';
  import addForm from './add.vue';

export default {
  data() {
    return {
      items: []
    };
  },

  created() {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
    this.$http.get("http://localhost/api/event")
    .then(function(response) {
      console.log('ccccccccccccccccccccccccccccc');
      this.items = response.body.response;
    });
  },

  methods:{
    deleteEvent(event){
      console.log(event.target.id);  
      this.$http.delete("http://localhost:8000/api/event/delete/"+event.target.id)
      .then(function(response) {
        var position = this.items.findIndex(function (element){
          return element.id == event.target.id;
        });
        
        this.items.splice(position,1);
      });

    }
  },

  components: {
    'list-item': listItem,
    'item-add': addForm
  }
};
</script>
