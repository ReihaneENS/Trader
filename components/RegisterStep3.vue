<template>
  <div class="register-box bg-second p-4 rounded-md">
    <div class="title text-white flex justify-between items-start">
      <div>
        <h4>Register</h4>
        <p class="text-xs mt-2">user va password automatic baraye shoma generate shod</p>
      </div>
      <div class="bg-first text-black w-8 h-8 border-circle flex justify-center items-center">
        <p>3</p>
      </div>
    </div>
    <div class="inner w-full h-full mt-4">
      <form @submit.prevent="" class="flex h-5/6 flex-col justify-between items-center">
        <div class="input-group w-full">
          <label for="Username" class="text-white">Username</label>
          <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="Username" placeholder="">
        </div>
        <div class="input-group w-full">
          <label for="password" class="text-white">Password</label>
          <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="password" name="password" placeholder="">
        </div>
        <div class="input-group w-full">
          <textarea class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" name=""></textarea>
        </div>
        <div class="btn-group w-full flex justify-between items-center">
          <button class="bg-first w-32 rounded py-2">Finish</button>
          <nuxt-link to="/Login" class="bg-first w-32 rounded py-2 flex justify-center items-center">Login</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>
