<template>
<form>
  <input type="text" v-model="firstname" placeholder="prénom">
  <input type="submit" value="Envoyer">
</form>
{{firstname}}
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

  const firstname = ref('')
</script>

<style lang="scss" scoped>
form {
  border: 1px solid blue;
  padding: 20px;
  margin: 50px auto;
  max-width: 60%;
  input {
    margin: 0 20px;
  }
}

</style>