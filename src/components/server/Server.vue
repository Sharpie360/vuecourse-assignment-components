<template>
  <li class="list-group-item" @click="showDetails(id, status)" :id="id" :status="status">
    <h2>Server</h2>
    <h3>id: {{ id }} | status: {{ status }}</h3> 
  </li>
</template>

<script>
import ServerList from './ServerList.vue'
  export default {
    data: function() {
      return {
        currentServer: {
          id: 1,
          status: status
        }
      }
    },
    props: ['id', 'status'],
    methods: {
      showDetails(id, status){
        this.currentServer.id = id
        this.currentServer.status = status
        console.log(currentServer.id, status)
      }
    }
  }
</script>