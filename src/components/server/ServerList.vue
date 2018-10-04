<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-for="server in servers" v-bind:key="server.id" :id="server.id" :status="server.status"></app-server>
    </ul>
  </div>
</template>

<script>
  import { eventBus } from '../../main.js'
  import Server from './Server.vue'
  export default {
    data: function(){
      return {
        servers: [
          { id: 1, status: 'normal' },
          { id: 2, status: 'critical' },
          { id: 3, status: 'unknown' },
          { id: 4, status: 'normal' }
        ],
        currentServer: {
          id: 1,
          status: ''
        }
      }
    },
    methods: {

    },
    components: {
      'app-server': Server
    },
    created() {
      
    }
  }
</script>