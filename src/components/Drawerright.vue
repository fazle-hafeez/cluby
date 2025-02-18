<template>
            <q-card class="shadow-0 " style="border-radius: 10px;">
          <div class=" q-px-lg q-ma-none q-pa-md">
            <p class="text-capitalize q-mb-sm q-mt-xs lh-24 f-16  text-grey-9" style="font-weight: 600;">
              about
            </p>
          </div>

        </q-card>

        <q-card class="bg-white rounded-10 shadow-0 q-mt-lg">
          <div class="q-pt-md  q-px-sm" >
            <div class="q-ma-none q-pt-xs q-pl-md  text-grey-9 font-ssp600" style="font-size: 16px;">Officers</div>
            <div class="flex  q-mt-sm" style="padding-left: 3px;">
              <div class="q-ml-sm   q-mt-xs" style="width: 46px; height:46px ;border-radius: 50%;padding: 5px;">
                <div class="bg-grey-4 flex justify-center items-center "
                  style=" border-radius: 50%; width: 40px;height: 39px;">
                  <q-img src="https://clubby.me/icons/Cluby-C.svg" class="" style="width: 29px;height: 30px;" />
                </div>
              </div>

              <div class="flex " style="margin-left: 15px;">
                <div class="  q-mr-xs" style="margin-top: 7px;"><span class="font-SSP600 text-grey-9 f-14" style="letter-spacing: 0.9;">fazal hafeez</span>
                  <div class="text-grey-7" style="margin-top: 3px; letter-spacing: .5px;">Admin</div>
                </div>
                <div style="width: 14px; height: 15.5px; padding-top: 7px; margin-left: 2px;">
                    <q-img  class="" src="https://clubby.me/icons/person-icon/admin.svg" style="width:100%; height: auto; padding: 2.565px;" />
                </div>
            </div>

            </div>

            <div class=" q-ml-sm font-ssp600 text-grey-9 "
             style=" font-size: 16px;margin-top: 21px; margin-left: 16px; margin-bottom: 24px;">
                Members (0)</div>

          </div>

        </q-card>

        <q-expansion-item class="bg-white overflow-hidden q-mt-lg q-pa-sm" style="border-radius: 10px"
          header-class="bg-white" expand-icon-class="q-ml-auto width-arrow">
          <template v-slot:header>
            <div class="flex items-center">
              <p class="text-capitalize font-ssp600 text-grey-9 q-ma-none" style="font-size: 16px; padding-left: 6px;">Upcoming
                Events</p>
              <q-img src="https://clubby.me/icons/right-arrow.svg" class="  text-grey-9 " 
              style=" margin-left: 16px; width: 16px;" />
            </div>
          </template>
          <q-card>
            <q-card-section>
              <div class="q-mt-xs">
                <div class="bg-grey-4 q-pa-md" style="border-radius: 10px;">
                  <span class="block text-center font-ssp600 text-grey-8" style="font-size: 15px;">No Upcoming Events</span>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>


        <q-card class="bg-white overflow-hidden q-mt-lg q-px-md  shadow-0" style="border-radius: 10px; padding-block:14px">
            <div class="flex items-center justify-between">
              <div class="q-mr-auto q-pl-sm">
                <span class="text-capitalize  font-ssp600 text-grey-9 " style="font-size: 16px;">budget goals</span>
              </div>
              <div class="q-pt-xs flex items-center" style="margin-right: -2px;">
                <span class="text-capitalize font-ssp600 text-grey-9" style="font-size: 16px; margin-right: -6px;">Show Public</span>
                <q-toggle v-model="value" color="primary" keep-color style="" />
              </div>
            </div>
              <div class="  q-px-sm " style="margin-top: 14px; margin-bottom: 10px;">
                <div class="bg-grey-4 q-pa-md " style="border-radius: 10px;">
                  <p class=" text-center  font-ssp600 text-grey-8 q-ma-none" style="font-size: 15px;">No Budget Goals</p>
                </div>
              </div>
        </q-card>
</template>
<script setup>
import { ref } from 'vue';
const value = ref(false)
</script>
<style scoped>
 :deep(.q-item__section--side > .q-icon) {
    font-size: 24px;
    background: rgb(235, 234, 234);
    border-radius: 50%;
    color: rgb(87, 86, 86);
    width: 24px;
    height: 24px;
    margin-right: 6px;
}

</style>