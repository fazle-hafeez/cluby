<template>
 <div >
          <q-btn class="background-color full-width q-py-none shadow-0" flat @click="dialogRef=true"
          style="border-radius: 10px; padding-block: 1.5px;">
            <div class="flex items-center no-wrap " style="margin-left: -9px;">
              <q-avatar>
                <q-img src="https://www.clubby.me/icons/join.svg" color="white" style="width: 27px; margin-right: 3px;" />
              </q-avatar>
              <p class=" q-ma-none text-white text-capitalize font-ssp600 " 
              style=" font-size: 16px; ">join club</p>
            </div>
          </q-btn>
        </div>

     <q-dialog v-model="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin q-pa-md" style="border-radius: 13px; width: 520px;">
        <q-card-section>
            <p class="font-ssp600 text-grey-9" style="font-size: 25px;">join Club</p>
            <hr>
            <div class="q-mt-lg">
             <p class="font-ssp600 text-grey-9" style="font-size: 18px;">Club Code</p>
             <div class="col">
                <q-input filled v-model="text"  />
             </div>

            </div>
        <div class="q-my-md" >
        <q-btn class="q-px-xl" color="primary" label="join" @click="dialogRef=false" />
        <q-btn class="q-px-xl text-black q-ml-md"  color="white" label="Cancel" @click="dialogRef=false" />
      </div>
        </q-card-section>
      
      
    </q-card>
  </q-dialog>

        <div class="q-mt-lg">
          <q-btn class="bg-white full-width  " to="/new" flat style="border-radius: 10px; padding-block: 4px;">
            <div class="flex  items-center" style="margin-left: -8px;">
              <q-avatar class="" style="margin-top: -4px;">
                <i class="q-icon  notranslate material-icons" aria-hidden="true" role="img"
                  style="font-size: 27px; padding-top: 2px; font-weight: 500; margin-left: -2px; opacity: 0.8;">add</i>
              </q-avatar>
              <span class="text-black text-capitalize font-ssp600"
                style="font-size: 15.5px;letter-spacing: 0.4px;word-spacing: -1px ;margin-top: 1px; padding: 1px;">create <span
                  class="text-lowercase">a</span> club</span>
            </div>
          </q-btn>
        </div>

        <div class="q-mt-lg">
            <q-expansion-item class="bg-white "
             style="border: 9px solid white; border-radius: 13px;padding-left:0px;padding-right: 4px; padding-block: 2px;">
                <template v-slot:header>
                    <q-item-section>
                        <span class="font-ssp600 text-grey-9 " style="margin-inline:4px;
                        font-size: 16px;margin-top: -2px;"> Your Clubs</span>
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

        </div>
</template>
<script setup>
import { ref } from 'vue';
const dialogRef= ref(false);

</script>
<style >

.q-item__section--side > .q-icon {
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
    padding: 8px 10px;
    /* margin-inline:20px; */
    color: inherit;
    transition: color 0.3s, background-color 0.3s;
}

</style>