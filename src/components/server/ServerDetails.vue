<template>
  <div class="col-xs-12 col-sm-6">
    <h3>Server #{{id}} </h3>
    <h4>Status: {{status}}</h4>
    <hr>
    <select 
      class="form-control"
      name="statusSelect" 
      id="statusSelect">
      <option value="normal">Normal</option>
      <option value="critical">Critical</option>
      <option value="offline">Offline</option>
    </select>
    <button 
      class="btn btn-primary"
      @click="changeStatus(id)">Change Status</button>
    <button 
      class="btn btn-danger"
      @click="resetAllServers">Reset All Servers</button>
  </div>
</template>

<script>
  import { eventBus } from '../../main.js'

  import Server from './Server.vue'
  export default {
    // props: ['id', 'status'],
    data: function(){
      return {
        id: 1,
        status: 'Please select a server to Vue its details'
      }
    },
    methods: {
      changeStatus(id){
        const updatedStatus = document.getElementById('statusSelect')
        this.status = updatedStatus[updatedStatus.selectedIndex].value
        status = this.status
        eventBus.$emit('changeStatus', {id, status})
      },
      resetAllServers(){
        eventBus.$emit('resetAllServers')
      }
    },
    created(){
      eventBus.$on('detailsLoaded', (details) => {
        this.id = details.id
        this.status = details.status
      })
    }
  }
</script>

<style scoped>
  select {
    margin-bottom: 2rem;
    width: 30%;
  }
</style>

