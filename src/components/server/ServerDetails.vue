<template>
  <div class="col-xs-12 col-sm-6">
    <p >Server #{{id}} </p>
    <p>Status: {{status}}</p>
    <button>Change Status</button>
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
        status: 'normal'
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