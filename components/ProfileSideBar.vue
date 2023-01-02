<template>
  <div class="profile-sideBar-wrapper bg-second p-3 rounded">
    <div class="inner">
      <div class="title flex justify-between items-center mb-3">
        <div class="account col-span-2 flex justify-start items-center text-sm">
          <div class="user-img bg-white h-11 w-11 border-circle">
          </div>
          <div class="user-name ml-2 text-white">
            <p>Alexandarian Bunnicci</p>
          </div>
        </div>
        <div>
          <button class="text-white">Edit</button>
        </div>
      </div>
      <div class="box bg-first p-3 rounded">
        <p>Change Password</p>
        <form class="flex justify-center items-center flex-col w-full text-center mt-2">
          <input type="text" name="LastPassword" placeholder="Last Password">
          <input type="text" name="NewPassword" placeholder="New Password">
          <input type="text" name="ConfirmNewPassword" placeholder="Confirm New Password">
          <button class="bg-second w-32 text-xs py-2 text-white rounded">Submit</button>
        </form>
      </div>
      <div class="box bg-first p-3 rounded">
        <p>MQL5 Verification</p>
        <p class="text-xs">vase ersal signal in form ro por konin va ersal konin sabr konin
          ta admin verify kone.</p>
        <form class="flex justify-center items-center flex-col w-full text-center mt-2">
          <div class="input-group flex justify-between items-center w-full bg-second rounded mb-2 px-2">
            <input type="text" name="MQL5Link" placeholder="MQL5 Link" class="bg-transparent">
            <button class="bg-first w-24 text-xs py-1 rounded">Paste</button>
          </div>
          <input type="text" name="BrokerName" placeholder="Broker Name (Meta Trader)">
          <input type="text" name="BrokerServer" placeholder="Broker Server">
          <input type="text" name="AccountNumber" placeholder="Account Number">
          <input type="text" name="InvestorPassword" placeholder="Investor Password">
          <div class="checkbox-group mb-3 flex justify-between items-center w-full text-xs">
            <div class="flex justify-start items-center w-2/4">
              <input type="radio" name="MetaTrader">
              <label for="MetaTrader4">Meta Trader 4</label>
            </div>
            <div class="flex justify-start items-center w-2/4">
              <input type="radio" name="MetaTrader">
              <label for="MetaTrader5">Meta Trader 5</label>
            </div>
          </div>
          <div class="file-profile flex justify-between items-center bg-second w-full h-10 rounded px-2 mb-2">
            <div>
              <p class="text-xs text-white">Identity Document ( Front & Back )</p>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center">
                <label for="front" class="bg-first w-20 text-xs rounded cursor-pointer p-2 mx-1">Send Front</label>
                <input type="file" id="front">
              </div>
              <div class="flex justify-center items-center">
                <label for="back" class="bg-first w-20 text-xs rounded cursor-pointer p-2 mx-1">Send Back</label>
                <input type="file" id="back">
              </div>
            </div>
          </div>
          <button class="bg-second w-32 text-xs py-2 text-white rounded">Submit</button>
        </form>
      </div>
      <div class="box bg-first p-3 rounded">
        <p>Referral Verification</p>
        <p class="text-xs">vase ersal signal in form ro por konin va ersal konin sabr konin
          ta admin verify kone.</p>
        <p class="text-xs mt-3">Dar che broker haei hesab darid ?</p>
        <form class="flex justify-center items-center flex-col w-full text-center mt-2">
          <div class="input-group flex justify-between items-center w-full bg-second rounded mb-2 px-2">
            <input type="text" name="MQL5Link" placeholder="MQL5 Link" class="bg-transparent">
            <button class="bg-first w-24 text-xs py-1 rounded">Paste</button>
          </div>
          <input type="text" name="BrokerName" placeholder="Broker Name (Meta Trader)">
          <input type="text" name="BrokerServer" placeholder="Broker Server">
          <input type="text" name="AccountNumber" placeholder="Account Number">
          <input type="text" name="InvestorPassword" placeholder="Investor Password">
          <div class="checkbox-group mb-3 flex justify-between items-center w-full text-xs">
            <div class="flex justify-start items-center w-2/4">
              <input type="radio" name="MetaTrader">
              <label for="MetaTrader4">Meta Trader 4</label>
            </div>
            <div class="flex justify-start items-center w-2/4">
              <input type="radio" name="MetaTrader">
              <label for="MetaTrader5">Meta Trader 5</label>
            </div>
          </div>
          <div class="file-profile flex justify-between items-center bg-second w-full h-10 rounded px-2 mb-2">
            <div>
              <p class="text-xs text-white">Identity Document ( Front & Back )</p>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex justify-center items-center">
                <label for="front" class="bg-first w-20 text-xs rounded cursor-pointer p-2 mx-1">Send Front</label>
                <input type="file" id="front">
              </div>
              <div class="flex justify-center items-center">
                <label for="back" class="bg-first w-20 text-xs rounded cursor-pointer p-2 mx-1">Send Back</label>
                <input type="file" id="back">
              </div>
            </div>
          </div>
          <button class="bg-second w-32 text-xs py-2 text-white rounded">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSideBar"
}
</script>

<style scoped>

</style>
