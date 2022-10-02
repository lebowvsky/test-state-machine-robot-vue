<template>
<ul>
  <li v-for="user in allUsers" :key="user.id" @click="() => userSelectedId = user.id">
    <p>prénom : {{user.firstname}}</p>
    <p>id : {{user.id}}</p>
  </li>

</ul>
</template>

<script lang="ts" setup>
import { onMounted, ref } from '@vue/runtime-core'
import axios from 'axios'

const allUsers = ref([])
const userSelectedId = ref('');

const fetchUsers = async () => {
  const result = await axios.get('https://my-json-server.typicode.com/lebowvsky/fake_users/users')
  allUsers.value = result.data
}
onMounted(() => fetchUsers())
</script>

<style lang="scss" scoped>

ul {
  list-style-type: none;
  
  li {
    margin: 15px 0;
    p {
      margin: 0;
    }
  }
}

</style>