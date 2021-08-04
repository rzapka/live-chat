<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChatroom"/>
      <p>No account yet? <span class="toggle" @click="showLogin = !showLogin">Signup</span> instead.</p>
    </div>
    <div v-else>
      <h2>Signup</h2>
      <SignupForm @signup="enterChatroom"/>
      <p>Already registered? <span class="toggle" @click="showLogin = !showLogin"> Login</span> instead.</p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import {ref} from "vue";
import {useRouter} from "vue-router";
export default {
  name: "Welcome",
  components: {LoginForm, SignupForm},
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChatroom = () => {
      router.push({name: 'Chatroom'})
    }

    return {showLogin, enterChatroom}
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span {
    font-weight: bold;
    cursor:pointer;
    text-decoration: underline;
    color: #5ae4ca;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>