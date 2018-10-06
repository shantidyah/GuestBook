<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="container" style="padding-top:5%">
      <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#modal" style="marginBottom:5%">Add Guest</button>
      <Table></Table>
      <Modal></Modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Table from '@/components/Table.vue'
import Modal from '@/components/Modal.vue'


import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    Navbar,
    Table,
    Modal
  },
  created(){
    this.getListGuest()
  },
  methods: {
    ...mapActions([
      'getListGuest'
    ])
  }
}
</script>
