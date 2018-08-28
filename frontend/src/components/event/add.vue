<template>
	<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
		<form class="input-group mb-3" @submit.prevent="addItem">
			<input type="text" 
					placeholder="Enter event for add a new item"
					v-validate="'required'"
					v-model="item.details"
			class="form-control">
			<div class="input-group-append">
				<transition
					enter-active-class="animated bounceIn"
					leave-active-class="animated bounceOut"
				name="custom-classes-transition">
				<button type="submit" v-show="item.details"	class="btn btn-outline-light">
					Add Item
				</button>
				</transition>
			</div>
		</form>
	</nav>
</template>

<script>
export default {

	props: ['items'],

  data() {
    return {
      item: {
        details: ""
      }
    };
  },

  methods: {
    addItem() {
      console.log("form submitted");
      this.$http
        .post("http://localhost:8000/api/event/add", this.item)
        .then(function(response) {
					this.items.push(response.body.response);
					this.item.details = '';
					//console.log(response.body.response);
        });
    }
  }
};
</script>
