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
    components: {
      'app-server': Server
    },
    created(){
      eventBus.$on('changeStatus', newStatus => {
        for(let i = 0; i < this.servers.length; i++){
          //console.log(this.servers[i])
          if(this.servers[i].id === newStatus.id){
            console.log(newStatus.status)
            console.log('match')
            this.servers[i].status = newStatus.status 
          }
        }
      })
      eventBus.$on('resetAllServers', () => {
        this.servers.map(server => server.status = 'normal')
      })
    }
  }
</script>