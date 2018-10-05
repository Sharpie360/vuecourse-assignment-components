<template>
  <li class="list-group-item" @click="showDetails(id, status)" :id="id" :status="status">
    <h2>Server</h2>
    <h3>id: {{ id }} | status: {{ status }}</h3> 
  </li>
</template>

<script>
import { eventBus } from '../../main.js'

import ServerList from './ServerList.vue'
  export default {
    data: function() {
      return {

      }
    },
    props: ['id', 'status'],
    methods: {
      showDetails(id, status){
        console.log(id, status)
        eventBus.$emit('detailsLoaded', { id, status })
      }
    }


    // WHOOO WHOOOOO!!! WE DID IT!!!
  }
</script>