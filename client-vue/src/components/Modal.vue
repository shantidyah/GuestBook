<template>
  <div class="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
							<label>First Name</label>
							<input type="input" class="form-control" placeholder="" v-model="firstName"/>
							<label>Last Name</label>
							<input type="input" class="form-control" placeholder="" v-model="lastName"/>
							<label>Address</label>
							<textarea class="form-control" rows="3" v-model="address"></textarea>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal" @click="Add">Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'

export default {
	name:'modal',
	computed: {
		firstName: {
			get(){
				return this.$store.state.firstName
			},
			set( value ){
				return this.$store.commit('setFirstName',value)
			}
		},
		lastName: {
			get(){
				return this.$store.state.lastName
			},
			set( value ){
				return this.$store.commit('setLastName',value)
			}
		},
		address: {
			get(){
				return this.$store.state.address
			},
			set( value ){
				return this.$store.commit('setAddress',value)
			}
		}
	},
	methods: {
		...mapActions([
			'addGuest'
		]),
		Add(){
			this.addGuest()
		}
	}
}
</script>

<style>

</style>
