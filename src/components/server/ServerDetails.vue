<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server #{{ id }}</p>
    <p>Status: {{ status }}</p>
  </div>
</template>

<script>
  import Server from './Server.vue'
  export default {
    data: function(){
      return {

      }
    },
    props: ['id', 'status'],
    Created(){}
  }
</script>