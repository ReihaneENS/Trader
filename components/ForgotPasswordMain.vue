<template>
  <div class="login-wrapper pt-4">
    <div class="title h-16 bg-second rounded">
    </div>
    <div class="inner-content flex justify-center items-center">
      <div class="login-box forget-box bg-second p-4 rounded-md">
        <div class="title text-white flex justify-between items-start">
          <div>
            <h4>Forget Password</h4>
            <p class="text-xs mt-2">Lotfan key 18 taei ra vared konid</p>
            <p class="text-xs mt-4">Key ra vared konid</p>
          </div>
        </div>
        <div class="inner forget-inner w-full h-5/6 mt-4">
          <form @submit.prevent="" class="flex h-full flex-col justify-between items-center">
            <div class="input-group w-full flex justify-center items-center flex-wrap">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
            </div>
            <div class="input-group w-full flex justify-center items-center flex-wrap">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
            </div>
            <div class="input-group w-full flex justify-center items-center flex-wrap">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
              <input class="rounded mt-1 w-full bg-first text-center text-black text-xs h-10" type="text" name="key" placeholder="Key">
            </div>
            <div class="btn-group w-full flex justify-between items-center">
              <nuxt-link to="/ForgotPassword" class="text-white">Forgot Password</nuxt-link>
              <button class="bg-first w-32 rounded py-2">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
