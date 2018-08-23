<template>
<div class="row">
	<div class="col align-self-center">
		<br/>
		<form class="col-6">
			<fieldset>
				<legend>Add Event</legend>
				
				<div class="form-group">
				<label for="exampleInputEmail1">Event Details</label>
				<input 
					type="text" 
					class="form-control" 
					id="inputEvent"
					name="inputEvent" 
					aria-describedby="emailHelp" 
					placeholder="Enter event details"
					v-validate="'required'"
					v-model="item.detail"
				>
				<div class="alert alert-secondary" v-show="errors.has('inputEvent')">
					{{ errors.first('inputEvent') }}
				</div>
				</div>
				
				<button 
					type="submit" 
					class="btn btn-primary"
					v-show="item.detail"
				>Save</button>
			</fieldset>
		</form>	
	</div>
</div>
</template>

<script>
export default {
	data(){
		return{
			item:{
				detail:''
			}
		}
	}
}
</script>
