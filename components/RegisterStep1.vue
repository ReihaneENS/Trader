<template>
  <div class="register-box bg-second p-4 rounded-md">
    <div class="title text-white flex justify-between items-start">
      <div>
        <h4>Register</h4>
        <p class="text-xs mt-2">Dar in form mitavanid az tarigh 3 marhale sabt nam konid</p>
      </div>
      <div class="bg-first text-black w-8 h-8 border-circle flex justify-center items-center">
        <p>1</p>
      </div>
    </div>
    <div class="inner w-full h-full mt-4">
      <form @submit.prevent="" class="flex h-5/6 flex-col justify-between items-center">
        <input class="rounded w-full bg-first text-center text-black text-xs h-10" type="text" name="username" placeholder="Username">
        <input class="rounded w-full bg-first text-center text-black text-xs h-10" type="text" name="Country" placeholder="Country">
        <select name="gender" id="" class="rounded w-full bg-first text-center text-black text-xs h-10">
          <option selected value="" disabled>Gender</option>
          <option value="">Male</option>
          <option value="">Female</option>
          <option value="">Other</option>
        </select>
        <div class="btn-group w-full flex justify-between items-center">
          <button class="bg-first w-32 rounded py-2">Back</button>
          <button class="bg-first w-32 rounded py-2">Next</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      registerInfo:{
        username:'',
        country:'',
      }
    }
  }
}
</script>
