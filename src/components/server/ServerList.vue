<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-for="server in servers" v-bind:key="{server}" :id="server.id" :status="server.status"></app-server>
    </ul>
  </div>
</template>

<script>
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
      showDetails(id, status){
        this.currentServer.id = id
        this.currentServer.status = status
        console.log(currentServer)
      }
    },
    components: {
      'app-server': Server
    }
  }
</script>