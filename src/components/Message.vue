<template>
    <div>
        <Header />
    </div>
    <main class="q-col-gutter-lg  q-my-lg row q-px-lg" v-if="$q.screen.gt.sm">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 " style="">
            <q-expansion-item class="bg-white "
             style="border: 9px solid white; border-radius: 11px;padding-left:0px;padding-right: 4px; padding-block: 2px;">
                <template v-slot:header>
                    <q-item-section>
                        <p class="font-ssp600 text-grey-9 q-ma-none" style="margin-inline:4px;
                        font-size:16px; margin-top: -2px;"> Club Messages</p>
                    </q-item-section>
                </template>

                <q-card class="bg-grey-4" style="border-top: 1px solid white;">
                    <q-card-section>
                        <div class="flex items-center">
                            <div class="q-mr-md flex justify-center items-center"
                                style="padding-top: 1px; width: 40px;height:40px; border-radius: 50%; border: 2px solid palevioletred; padding: 4px;">
                                <q-img src="https://www.clubby.me/icons/Cluby-C.svg" class=""
                                    style="width:30px; height: auto; border-radius: 50%;" />
                            </div>
                            <div style="font-weight: 510; font-size: 17px; opacity: 0.8;">Hafeez</div>
                        </div>
                    </q-card-section>
                </q-card>
            </q-expansion-item>


            <q-expansion-item class="bg-white q-mt-lg"
             style="border: 9px solid white; border-radius: 11px;padding-left:0px;padding-right: 4px; padding-block: 2px;">
                <template v-slot:header>
                    <q-item-section>
                        <span class="font-ssp600 text-grey-9 " style="margin-inline:4px;
                        font-size: 16px; margin-top: -2px;;"> Officer Messages</span>
                    </q-item-section>
                </template>

                <q-card class="bg-grey-4" style="border-top: 1px solid white;">
                    <q-card-section>
                        <div class="flex items-center">
                            <div class="q-mr-md flex justify-center items-center"
                                style="padding-top: 1px; width: 40px;height:40px; border-radius: 50%; border: 2px solid palevioletred; padding: 4px;">
                                <q-img src="https://www.clubby.me/icons/Cluby-C.svg" class=""
                                    style="width:30px; height: auto; border-radius: 50%;" />
                            </div>
                            <div  style="font-weight: 510; font-size: 17px; opacity: 0.8;">Hafeez</div>
                        </div>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </div>

        <div class=" col-md-6 col-lg-7 col-sm-12 col-xs-12 shadow-0" style="padding-left: 24px;padding-right: 0px; height: 20vh;">
            <div class="bg-white rounded-10 shadow-none">
            <div class="flex bg-grey-4 items-center " style="padding-top: 3px;padding-left: 11px;padding-bottom: 6px;">
            <div class=" " style="width: 50px; height:50px ;border-radius: 50%;padding: 5px;">
                <div class="q-ml-sm border flex justify-center items-center rounded bg-grey-5"
                  style=" border-radius: 50%; width: 43px;height: 43px;">
                  <q-img src="https://clubby.me/icons/Cluby-C.svg" class=" " style="width: 34px;height: 35px;" />
                </div>
              </div>

              <div class=" font-ssp600 q-pt-xs text-grey-9" style="font-size: 20px; margin-left: 22px;">Hafeez</div>
         </div>

        <div class="flex  q-pl-sm " style="padding-top: 386px; padding-bottom: 16px;">
            <div class="q-ml-sm  " style="width:50px; height:50px ;border-radius: 50%;padding: 5px; margin-top: -5px;">
                <div class="  flex justify-center  bg-grey-3"
                  style=" border-radius: 50%; width: 45px;height: 47px; padding-top: 9px;">
                  <q-img src="https://clubby.me/icons/Cluby-C.svg" class="" style="width: 31px;height: 32px;" />
                </div>
              </div>

              <div class="" style="padding-left: 14.5px;">
                <q-icon class="text-grey-9 q-icon notranslate material-icons " name="add" style="font-size: 32px;font-family: Material Icons;
    font-weight: 450; padding-top: 10px;"/>
              </div>
              <div class="col" style="padding-left: 20px;">
                <q-input class="bg-grey-4 rounded-10 " v-model="text" placeholder="Type Message Here" style="padding-left: 12px;" />
              </div>
              <div class="q-ml-sm" style="padding: 1pxs;">
                <q-btn no-caps  class=" background-color  q-px-md text-white" label="Send"
               style="font-size: 18px;border-radius: 8px; margin-right: 20px; padding-block: 11.5px;"/>
              </div>

        </div>




            </div>
        </div>

            <div class="col-md-3 col-xs-12 ">
                <q-card class="bg-white rounded-10 shadow-0 ">
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


        <q-card class="bg-white overflow-hidden q-mt-lg q-pa-md shadow-0" style="border-radius: 10px">
            <div class="flex items-center justify-between">
              <div class="q-mr-auto " style="margin-top: 4px;">
                <p class="  q-pl-sm font-ssp700 text-grey-9 q-ma-none" style="font-size: 16px; ">
                    Active Poll</p>
              </div>
              
            </div>
              <div class=" q-mt-md q-px-sm ">
                <div class="bg-grey-4 " style="border-radius: 10px;padding: 20px;">
                  <span class="block text-center font-ssp600 text-grey-9 q-pl-md"
                   style="font-size: 16px;">No Active Polls</span>
                </div>
              </div>
        </q-card>



        <q-card class="bg-white overflow-hidden q-mt-lg q-pa-md shadow-0" style="border-radius: 10px">
            <div class="flex items-center justify-between">
              <div class="q-mr-auto " style="margin-top: 4px;">
                <span class="text-capitalize  font-ssp700 q-pl-sm text-grey-9" style="font-size: 16px;">Message Media</span>
              </div>
              
            </div>
              <div class="  q-px-sm " style="margin-top: 20px;">
                <div class="bg-grey-4 " style="border-radius: 10px;padding: 20px;">
                  <span class="block text-center font-ssp600 text-grey-9 q-pl-md" 
                  style="font-size: 16px;" >No Media</span>
                </div>
              </div>
        </q-card>

            </div>

    </main>

</template>
<script setup>
import Header from './Header.vue';

</script>
<style scoped>
:deep(.q-item__section--side > .q-icon) {
    font-size: 24px;
    background: rgb(235, 234, 234);
    border-radius: 50%;
    color: rgb(87, 86, 86);
    width: 24px;
    height: 24px;
}
.font-SSP600, .font-ssp600 {
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: 600;
}
:deep(.q-item, .q-item-type, .row, .no-wrap, .q-item--clickable, .q-link, .cursor-pointer, .q-focusable, .q-hoverable)
{
    min-height: 48px; 
     padding: 8px 10px; 
    color: inherit;
    transition: color 0.3s, background-color 0.3s;
}
.q-item {
    min-height: 48px;
    padding: 8px 0px;
    /* margin-inline:20px; */
    color: inherit;
    transition: color 0.3s, background-color 0.3s;
}
</style>