<template>
  <h1>State machine test</h1>
  <UsersList />
  <UserForm />
</template>

<script lang="ts" setup>
import UserForm from '@/components/UserForm.vue'
import UsersList from '@/components/UsersList.vue'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
