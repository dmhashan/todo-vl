<template>
    <div class="list-group">
        <br/>
        <list-item v-for="item in items" :item="item"></list-item>
    </div>
</template>

<script>

  import listItem from '../listItem';

export default {
  data() {
    return {
      items: []
    };
  },

  created() {
    this.$http.get("http://localhost:8000/api/event")
    .then(function(response) {
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
    'list-item': listItem
  }
};
</script>
