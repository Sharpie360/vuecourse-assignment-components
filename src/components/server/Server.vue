<template>
  <li class="list-group-item">
    <h3>id: {{ id }} | status: {{ status }}</h3> 
  </li>
</template>

<script>
import ServerList from './ServerList.vue'
  export default {
    data: function() {
      return {
        id: 1,
        status: 'normal'
      }
    },
    props: []
  }
</script>