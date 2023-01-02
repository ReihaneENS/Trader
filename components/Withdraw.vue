<template>
  <div class="deposit-wrapper bg-first p-3 w-11/12 rounded">
    <div class="title pb-2 flex justify-between items-center">
      <p class="text-lg">Withdrawal</p>
      <p class="text-sm">Minimum Deposit 5.00$</p>
    </div>
    <div class="content mt-3">
      <div class="h-14 flex justify-start items-end border-b border-dashed border-black pb-2">
        <div class="flex justify-center items-end">
          <img class="w-9 h-9 border-circle" :src="require(`~/assets/images/icons/iPad Pro 11in – 282.png`)"
               alt="">
<!--          <img class="w-5 h-5 border-circle" :src="require(`~/assets/images/icons/iPad Pro 11in – 282.png`)"
               alt="">-->
        </div>
        <div class="ml-3">
          <p class="text-sm">USDT</p>
          <p class="text-xs">USD Tether</p>
        </div>
      </div>
      <div class="h-14 flex justify-start mb-2 items-end border-b border-dashed border-black pb-2">
        <p>Withdrawal Amount</p>
      </div>
      <div class="bg-second h-12 w-full rounded flex justify-between items-center px-3">
        <input type="text" placeholder="Account Number" class="w-full focus:outline-none h-full border-0 bg-transparent text-white text-xs">
        <button class="bg-first w-24 h-8 rounded text-xs">Paste</button>
      </div>
      <p class="py-2 text-xs">Commision in bardasht daramad az shoma kasr mishavad</p>
      <div class="w-full flex justify-center items-center">
        <button class="bg-second mt-3 w-32 py-2 text-white text-xs rounded">Send Request</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

