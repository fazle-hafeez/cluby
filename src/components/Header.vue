<template>
<q-header class="q-header q-layout__section--marginal fixed-top shadow-5" >
      <div class="q-toolbar row no-wrap items-center  text-grey-8 bg-white" 
      :class="$q.screen.gt.md ? 'container q-py-md ':$q.screen.md ? 'q-py-sm' :'q-pl-lg q-pr-lg py-9'" >
        <img class="cursor-pointer q-mr-xl full-logo" src="https://www.clubby.me/Clubbylogo.svg" />
        <div class="flex q-pl-xl"  v-if="$q.screen.gt.sm">
          <q-btn class="main-lg q-mr-sm background-color text-white" flat to="/home" >
            <div class="flex justiy-center ">
              <q-icon name="home" class="tab__icon text-white" style="font-size: 28px;"/>
            </div>
          </q-btn>

          <q-btn class="  main-lg q-mr-sm" flat to="/Calender" >
            <div class="flex justiy-center ">
              <q-icon class="tab__icon" style="font-size: 16.5px;">
                <i class="q-icon notranslate material-icons q-tab__icon text-grey-7" aria-hidden="true" role="presentation">calendar_month</i>
              </q-icon>
            </div>
          </q-btn>

          <q-btn class="  main-lg q-mr-sm" flat  disable>
            <div class="flex justiy-center ">
              <q-icon class="tab__icon" style="font-size: 16.5px; ">
                <i class="q-icon notranslate material-icons text-grey-8" aria-hidden="true" role="presentation">account_balance_wallet</i>
              </q-icon>
            </div>
          </q-btn>

          <q-btn class="   main-lg " flat to="/Message">
            <div class="flex justiy-center ">
              <q-icon  class="tab__icon" style="font-size: 16.5px;">
                <i class="q-icon notranslate material-icons text-grey-7" aria-hidden="true" role="presentation">question_answer</i>
              </q-icon>
            </div>
          </q-btn>

        </div>
        <q-space></q-space>
        <q-btn class="q-mr-sm relative-position q-pa-sm rounded-8 bell-hover" >
          <i class="q-icon notranslate material-icons cursor-pointer" aria-hidden="true" role="presentation"  style="font-size: 28px;">
            notifications
          </i>
        </q-btn>


        <div v-if="$q.screen.lt.md" class="q-mr-sm  flex justify-center items-center main-class-gt" :class="$q.screen.gt.xs ?'q-ml-md':''" @click="final=!final"
         style="padding-top: 1px;  border-radius: 50%; border: 2px solid black; margin-right: 4px;">
            <q-img src="https://www.clubby.me/icons/Cluby-C.svg" class="bg-grey-5 main-class-lt" 
            style=" border-radius: 50%;" />


          <q-menu v-show="final" :offset="[100,10]"  style="border-radius: 13px;">
          <q-list style="width:130px; height: fit-content; border-radius: 18px;">
        <q-item clickable v-close-popup @click="onItemClick">
        <div class="column">
          
          <div class="flex no-wrap full-width">
              <q-btn  no-caps flat icon="settings" size="14px" class="text-black q-px-none  q-px-sm  flex no-wrap"><span class="q-ml-sm" style="font-size: 16px;" >Settings</span></q-btn>
            </div>
            <div class="flex no-wrap q-mt-sm">
              <q-btn  class="q-px-none q-px-sm text-negative" size="14px" flat @click="loggoutfunc" no-caps icon="logout"><span class="q-ml-sm" style="font-size: 16px;">LogOut</span></q-btn>
            </div>
        </div>
          
        </q-item>
        </q-list>
            </q-menu>
          </div>


    <q-btn-dropdown
      push
      no-caps
      @click="togglelogout"
      class="q-pa-none"
      flat
      v-if="$q.screen.gt.sm"
    >
      <template v-slot:label>
        <div class="row items-center no-wrap">
          <div class="q-mr-sm flex justify-center items-center" style="padding-top: 1px; width: 36px;height:38px; border-radius: 50%; border: 2px solid black;">
            <q-img src="https://www.clubby.me/icons/Cluby-C.svg" class="bg-grey-5" style="width:24px; height: auto; border-radius: 50%;" />
          </div>
          <div class="text-center text-black text-capitalize font-ssp600 text-grey-9"  style="  margin-left: 8px;font-size: 16px;">
           fazal hafeez
          </div>
        </div>
      </template>
      <q-list style="width:fit-content; height: fit-content;">
        <q-item clickable v-close-popup @click="onItemClick">
        <div class="column">
          
          <div class="flex no-wrap full-width">
              <q-btn  flat icon="settings" class="text-black"><span class="q-ml-md">Setting</span></q-btn>
            </div>
            <div class="flex no-wrap q-mt-sm">
              <q-btn flat @click="loggoutfunc" no-caps icon="logout"><span class="q-ml-md">LogOut</span></q-btn>
            </div>
        </div>
          
        </q-item>
        </q-list>
      </q-btn-dropdown>
      
      </div>
    </q-header>

    <q-footer v-if="$q.screen.lt.md" class="bg-white shadow-up-5">
      <div class="row">
        <div class="col-12">
          <div class="row justify-center q-pt-sm no-wrap q-pb-sm">
            <div class="col-sm-6 col-xs-12 flex  no-wrap " :class="$q.screen.lt.sm ? 'justify-between q-px-md':'justify-center'">
              <q-btn class="  background-color text-white q-px-xl" flat to="/home" :class="$q.screen.gt.xs ? 'main-lg q-mr-lg':'main-lg q-mr-smm'">
            <div class="flex justiy-center ">
              <q-icon name="home" class="tab__icon text-white" style="font-size: 28px;"/>
            </div>
          </q-btn>

          <q-btn class="  " flat to="/Calender" :class="$q.screen.gt.xs ? 'main-lg q-mr-lg':'main-lg q-mr-smm'">
            <div class="flex justiy-center ">
              <q-icon class="tab__icon" style="font-size: 16.5px;">
                <i class="q-icon notranslate material-icons q-tab__icon text-grey-7" aria-hidden="true" role="presentation">calendar_month</i>
              </q-icon>
            </div>
          </q-btn>

          <q-btn class=" " flat style="opacity: 0.7;" disable :class="$q.screen.gt.xs ? 'main-lg q-mr-lg':'main-lg q-mr-smm'">
            <div class="flex justiy-center ">
              <q-icon class="tab__icon" style="font-size: 16.5px; ">
                <i class="q-icon notranslate material-icons text-grey-7" aria-hidden="true" role="presentation">account_balance_wallet</i>
              </q-icon>
            </div>
          </q-btn>

          <q-btn class=" " flat to="/Message" :class="$q.screen.gt.xs ? 'main-lg q-mr-lg':'main-lg '">
            <div class="flex justiy-center ">
              <q-icon  class="tab__icon" style="font-size: 16.5px;">
                <i class="q-icon notranslate material-icons text-grey-7" aria-hidden="true" role="presentation">question_answer</i>
              </q-icon>
              </div>
              </q-btn>


            </div>
          </div>
        </div>
      </div>

    </q-footer>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
const router = useRouter();
const name = ref(false);
const username=ref('');
const final = ref(false);
function togglelogout(){
  name.value= !name.value;
  
}


function loggoutfunc(){
  localStorage.clear();
  router.push('/SignupPage')
}
onMounted(()=>{
  let user=localStorage.getItem('user-info');
   username.value = user.name;
})
</script>
<style scoped>
.py-9{
  padding-block: 9px;
}
.q-mr-smm{
  margin-right: 18px;
}
.main-class-gt{
  width: 36px;height:38px;
}
.main-class-lt{
  width:24px; height:24.5px;
}
@media screen and (max-width:320px) {
  .main-class-gt{
  width: 52px;height:38.5px;
}
.main-class-lt{
  width:24px; height:25.5px;
}
  
}

</style>