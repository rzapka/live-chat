<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import {useRouter} from "vue-router";
import getUser from "../composables/getUser";

export default {
  name: "Navbar",
  setup() {
    const {error, logout} = useLogout()
    const router = useRouter()

    const { user } = getUser()
    const handleClick = async () => {
      await logout()
      if (!error.value) {
        await router.push('/')
      }
    }

    return {error, handleClick, user}
  }
}
</script>

<style scoped>

</style>