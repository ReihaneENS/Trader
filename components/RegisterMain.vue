<template>
  <div class="register-wrapper pt-4">
    <div class="title h-16 bg-second rounded">
    </div>
    <div class="mode bg-second text-center text-xs w-48 h-8 rounded flex justify-center items-center">
      <div class="item w-5/12 text-white">
        <nuxt-link to="/Login">Login</nuxt-link>
      </div>
      <div class="item bg-first w-5/12 rounded h-6 flex justify-center items-center">
        <nuxt-link to="/Register">Register</nuxt-link>
      </div>
    </div>
    <div class="inner-content flex justify-center items-center">
      <div class="register-box bg-second p-4 rounded-md">
        <div class="title text-white flex justify-between items-start">
          <div>
            <h4>Register</h4>
            <!--            <p class="text-xs mt-2">user va password automatic baraye shoma generate shod</p>-->
          </div>
          <div class="bg-first text-black w-8 h-8 border-circle flex justify-center items-center">
            <p v-if="step1===true">1</p>
            <p v-if="step2===true">2</p>
            <p v-if="step3===true">3</p>
          </div>
        </div>
        <div class="inner w-full h-full mt-4">
          <form @submit.prevent="RegisterUser" class="flex h-5/6 flex-col justify-between items-center">
            <div v-if="step1===true" class="inner-form step1 flex h-5/6 flex-col justify-between items-center w-full">
              <input v-model="registerInfo.username" required
                     class="rounded w-full bg-first text-center text-black text-xs h-10" type="text" name="username"
                     placeholder="Username">
              <input v-model="registerInfo.country" required
                     class="rounded w-full bg-first text-center text-black text-xs h-10" type="text" name="Country"
                     placeholder="Country">
              <select v-model="registerInfo.gender" required name="gender" id=""
                      class="rounded w-full bg-first text-center text-black text-xs h-10">
                <option selected value="" disabled>Gender</option>
                <option value="Male">M</option>
                <option value="Female">F</option>
                <option value="Other">.</option>
              </select>
              <div class="btn-group w-full flex justify-between items-center">
                <button type="submit" class="bg-first w-32 rounded py-2">Register</button>
              </div>
            </div>
          </form>
          <form @submit.prevent="" class="flex h-5/6 flex-col justify-between items-center">
            <div v-if="step2===true" class="inner-form step2 flex h-5/6 flex-col justify-between items-center w-full">
              <div class="input-group w-full">
                <label for="password" class="text-white">Password</label>
                <input
                       class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="password"
                       name="password" placeholder="">
              </div>
              <div class="input-group w-full">
                <label for="key" class="text-white">Key</label>
                <input
                       class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key"
                       placeholder="">
              </div>
              <div class="btn-group w-full flex justify-between items-center">
                <p @click="step2=false;step1=true;" class="bg-first w-32 rounded py-2 text-center cursor-pointer">
                  Back</p>
                <p @click="step2=false;step3=true;" class="bg-first w-32 rounded py-2 text-center cursor-pointer">
                  Next</p>
              </div>
            </div>
          </form>
          <form @submit.prevent="" class="flex h-5/6 flex-col justify-between items-center">
            <div v-if="step3===true" class="inner-form step3 flex h-5/6 flex-col justify-between items-center w-full">
              <div class="input-group w-full">
                <label for="Username" class="text-white">Username</label>
                <input
                       class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text"
                       name="Username" placeholder="">
              </div>
              <div class="input-group w-full">
                <label for="password" class="text-white">Password</label>
                <input
                       class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="password"
                       name="password" placeholder="">
              </div>
              <div class="input-group w-full">
                <textarea class="rounded p-2 mt-1 w-full bg-first text-center text-black text-xs h-10"
                          name=""></textarea>
              </div>
              <div class="btn-group w-full flex justify-between items-center">
                <p @click="step3=false;step2=true;" class="bg-first w-32 rounded py-2 text-center cursor-pointer">
                  Back</p>
                <!--                <button type="submit" class="bg-first w-32 rounded py-2">Finish</button>-->
                <nuxt-link to="/Login" class="bg-first w-32 rounded py-2 flex justify-center items-center">Login
                </nuxt-link>
              </div>
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
      step1: true,
      step2: false,
      step3: false,
      registerInfo: {
        username: '',
        gender: '',
        country: '',
      }
    }
  },
  methods: {
    async RegisterUser() {
      try{
        let response = await this.$axios.post('accounts/register/', this.registerInfo);
        alert(response);
      }
      catch (err){
        console.log(err);
      }
    }
  }

}
</script>
