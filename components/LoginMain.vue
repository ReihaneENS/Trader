<template>
  <div class="login-wrapper pt-4">
    <div class="title h-16 bg-second rounded">
    </div>
    <div class="mode bg-second text-center text-xs w-48 h-8 rounded flex justify-center items-center">
      <div class="item w-5/12 bg-first rounded h-6 flex justify-center items-center">
        <nuxt-link to="/Login">Login</nuxt-link>
      </div>
      <div class="item w-5/12 text-white">
        <nuxt-link to="/Register">Register</nuxt-link>
      </div>
    </div>
    <div class="inner-content flex justify-center items-center">
      <div class="login-box bg-second p-4 rounded-md">
        <div class="title text-white flex justify-between items-start">
          <div>
            <h4>Login</h4>
            <p class="text-xs mt-2">user va password ra vared konid</p>
          </div>
        </div>
        <div class="inner w-full h-full mt-4">
          <!--    Login Form      -->
          <form @submit.prevent="LoginUser" class="flex h-5/6 flex-col justify-between items-center">
            <div class="input-group w-full">
              <input v-model="loginInfo.username" minlength="1" required
                     class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text"
                     name="username" placeholder="Username">
            </div>
            <div class="input-group w-full">
              <input v-model="loginInfo.password" minlength="1" required
                     class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="password"
                     name="password" placeholder="Password">
            </div>
            <div class="btn-group w-full flex justify-between items-center">
              <nuxt-link to="/ForgotPassword" class="text-white">Forgot Password</nuxt-link>
              <button type="submit" class="bg-first w-32 rounded py-2">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    async LoginUser() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.loginInfo,
        })
        console.log(response)
        this.$auth.$storage.setLocalStorage('UserInfo', this.loginInfo.username)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
