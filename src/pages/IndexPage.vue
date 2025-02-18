<template>
  <q-page class="">
    <div>
      <Header />
    </div>
    <main class="q-col-gutter-lg   row  " style="" :class="$q.screen.gt.md ? 'forrow-gt-lg q-py-lg': 'q-px-lg q-mt-xl q-pt-xl '">
      <div class="col-12 q-pa-none " v-if="$q.screen.lt.md" >
        <div class="row q-px-sm justify-between full-width q-pt-sm" >
        <div class="col-6 q-pl-lg  ">
          <q-btn @click="drawerLeft=!drawerLeft"  color="white" text-color="blue" 
          icon="arrow_forward_ios" style="width: 40px;height: 40px; border-radius: 8px;"/>
        <q-drawer
        v-model="drawerLeft"
        show-if-above
        :width="300"
        elevated
        class="bg-grey-4"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-md">
            <Drawerleft />
          </div>
        </q-scroll-area>
      </q-drawer>
        </div>
        <div class="col-6 flex justify-end q-md  ">
          <q-btn size=""   @click="drawerRight = ! drawerRight" class="flex justify-center "
           color="white" text-color="blue" 
            style="width: 39px;height: 40px; border-radius: 8px;">
            <q-icon name="arrow_back_ios" class="q-pa-none" style="margin-right: -8.5px;"></q-icon>
            </q-btn>
          <q-drawer
        side="right"
        v-model="drawerRight"
        show-if-above
        :width="300"
        elevated
        class="bg-grey-4"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-md">
            <Drawerright />
          </div>
        </q-scroll-area>
      </q-drawer>
        </div>
      </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 " style="padding-left: 24px;padding-right: 0px;"
        v-show="$q.screen.gt.sm">
        <Drawerleft />
      </div>
      <div class="col-md-6 col-lg-7 col-sm-12 col-xs-12">
        <div class="row bg-white rounded-10">
          <div class="col-md-12 col-sm-12 col-xs-12 text-center">
            <div class=" bg-purple-light rounded-10 q-py-lg q-px-sm" :class="$q.screen.lt.sm ? 'q-ma-md': 'q-ma-lg'">
              <div class="bg-grey-5 circle">
                <img src="https://www.clubby.me/icons/Cluby-C.svg" class="overflow-hidden"
                  style="height: 100px; width: 100px; border-radius: 100px;">
              </div>
              <div class="text-center">
               <p class=" font-ssp600 q-ma-none text-black" style="font-size: 26px;margin-top: 7px;">Hafeez</p>
                <div class="  text-grey-8 text-xl font-ssp600">Created by fazal hafeez</div>
                <div class="q-py-md">
                  <span class="  text-black font-ssp600" 
                  style="font-weight: 900;font-size: 16px;font-family: 'Source Sans Pro', sans-serif;">133a5S</span>
                    <q-btn
                      class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--rectangle q-btn--rounded q-btn--actionable q-focusable q-hoverable q-btn--fab-mini q-btn--dense rounded-6"
                      type="button"><span class="q-focus-helper"></span><span
                       class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                       <i class="q-icon notranslate material-icons" aria-hidden="true"
                       role="img">content_copy</i></span></q-btn>
                  </div>
                <div class="row justify-center no-wrap" >
                  <q-btn no-caps  @click="share=true" flat class="  bg-white" icon="share"
                   style="border-radius: 6px;font-size: 13px ;" >
                    <p class="font-ssp700 text-bold q-ma-none" style="margin-left: 12px; font-size: 13px" v-if="$q.screen.gt.sm">Share Club</p></q-btn>   
                   <q-btn no-caps @click="leave=true" flat class="  bg-black " icon="img:https://www.clubby.me/icons/exit.svg "
                   style="border-radius: 7px; font-size: 13px; opacity: 0.9;" 
                   :class="$q.screen.lt.sm ? 'maargin-sm':'margin-inlin8-5'">
                    <span class="text-white font-ssp600"
                     style="padding-left: 12px;" v-if="$q.screen.gt.sm">Leave</span></q-btn>   
                    <q-btn flat @click="edite=true"
                      class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable q-ml-smtext-purple bg-white q-py-sm text-bold text-capitalize q-pt-sm rounded-6"
                      type="button" style="font-size: 13px; border-radius: 5.5px; opacity: 0.8;"><span class="q-focus-helper"></span><span
                      class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
                      <i class="q-icon  notranslate material-icons" aria-hidden="true"
                      role="img">border_color</i><span class="block" v-if="$q.screen.gt.sm" style="padding-left: 12px;">Edit Club</span></span></q-btn>
                </div>
              </div>

            </div>

          </div>

        </div>

        <q-card class="no-wrap q-px-none q-mt-lg q-px-md  shadow-0 " style="border-radius: 10px;"
         :class="$q.screen.lt.md ? 'q-py-sm':'q-py-md'">
          <div class="flex  items-center">
            <div class="flex justify-center items-center  bg-grey-3 " 
            style="width: 41px; height: 40px; margin-right: 16px; border-radius: 50%; margin-left: 7.5px;">
              <q-img src="https://www.clubby.me/icons/Cluby-C.svg" style="width: 37.5px;" />
            </div>


            <div class="q-item__section column q-item__section--main justify-center ">
              <div class="bg-grey-3  " style="border-radius: 8px;">
                <input v-model="text" placeholder="Announcement" 
                 class="bg-grey-3 no-outline no-border full-width " type="text"
                  style="border-radius: 8px; padding-left: 14px; padding-block: 17.5px;"/>
              </div>
            </div>
            <div class="q-ml-sm q-mr-sm" v-if="$q.screen.gt.xs">
              <q-btn class="bg-black  rounded-2 q-px-md" style="border-radius: 8px;padding-block: 13px; opacity: 0.9;">
                <span class="text-white text-capitalize font-ssp600" style="font-size: 14px; letter-spacing: 0.1px;">publish</span>
              </q-btn>
            </div>
          </div>
          <div class="flex items-center no-wrap " style="margin-top: -2px; padding-inline: 6px;">
            <div class="">
              <div class=" " v-if="$q.screen.gt.md">
                <span class="f-16 font-ssp600 text-grey-9" style="font-size: 16px;"> Relate announcement to </span>
              </div>
            </div>
            <q-space />
            <div class="main q-space flex  "
              :class="$q.screen.gt.md ? 'justify-end' : $q.screen.gt.sm ? 'justify-end' : 'justify-end'">
              <div class="" v-show="$q.screen.lt.md">
                <q-btn flat class="q-px-xs" v-if="$q.screen.gt.xs">
                  <q-avatar>
                    <div style="border-radius: 50%;width: 20px;">
                      <q-img src="https://www.clubby.me/icons/goal.svg" />
                    </div>
                  </q-avatar>
                </q-btn>


                <q-btn flat class="q-px-xs" v-if="$q.screen.gt.xs">
                  <q-avatar>
                    <div style="border-radius: 50%;width: 20px;">
                      <q-img src="https://www.clubby.me/icons/jul-17.svg" />
                    </div>
                  </q-avatar>
                </q-btn>

                <q-btn flat class="q-px-xs" v-if="$q.screen.gt.xs">
                  <q-avatar>
                    <div style="border-radius: 50%;font-size: 13px;">
                      <q-icon name="notifications" />
                    </div>
                  </q-avatar>
                </q-btn>

              
                

              </div>
              <div v-if="$q.screen.gt.sm" class="q-mt-md " style="margin-right: 2px;">
                <q-btn flat class=" " style="width:fit-content;border-radius:6px;height: 38px; padding-inline: 11px;">
                  <q-avatar class="" style="margin-top: -17px;">
                    <div style="width: 23px;padding-top: 14px; " class="" >
                      <q-img src="https://www.clubby.me/icons/goal.svg" />
                    </div>
                  </q-avatar>
                  <div class="text-capitalize q-pr-sm text-grey-9" 
                  style="font-size: 14px; margin-top: -4px;">budget Goal</div>
                </q-btn>

                <q-btn flat class="q-px-xs " style="width: fit-content;border-radius:6px;height: 38px;">
                  <q-avatar class="" style="margin-top: -18px;">
                    <div style="width: 23px;padding-top: 15px;" class="flex items-center" >
                      <q-img src="https://www.clubby.me/icons/jul-17.svg" />
                    </div>
                  </q-avatar>
                  <div class="text-capitalize q-pr-sm text-grey-9" style="font-size: 14px;margin-top: -2px;">Upcoming Event</div>
                </q-btn>

                <q-btn no-caps flat class="q-px-sm " style="width: fit-content;border-radius:6px;height: 38px;">
                  <q-avatar class="" style="margin-top: -10px;">
                    <q-icon  name="notifications" style="font-size: 24px;"/>
                  </q-avatar>
                  <div class=" q-pr-sm text-grey-9" style="font-size: 14px; margin-top: -10px;">No members 
                    will be notified
                  </div>
                </q-btn>
              </div>

            </div>
            <div>

            </div>

          </div>

        </q-card>
        <q-card class="q-mt-md q-py-md  shadow-0 q-mb-xl" :class="$q.screen.lt.sm ? 'q-px-md':'q-px-lg'" style="border-radius: 13px;">
          <div class="flex  items-center no-wrap" :class="$q.screen.lt.sm ? 'justify-between':'justify-between'">
            
              <div class="font-ssp600 text-grey-9" style="font-size:16px">Announcements</div>
            
            <div class="flex no-wrap mainbuttondiv" style="width:fit-content;">
              <q-btn no-caps flat class=" no-wrap bg-grey-3 class= text-bold"  style="border-radius: 8px;"
               icon="img:https://clubby.me/icons/new.svg" :class="$q.screen.gt.xs ? 'q-mr-md img-width' :'q-mr-sm img-widthlt'"  >
               <div class="font-ssp600  text-bold texthide"  style="font-size: 15px;padding-left: 12px;">New</div>
              </q-btn>
                
              <q-btn no-caps flat class=" no-wrap bg-grey-3 "  style="border-radius: 8px;"
               icon="img:https://clubby.me/icons/poplur.svg" :class="$q.screen.gt.xs ? 'q-mr-md img-width' :'q-mr-sm img-widthlt'"  >
               <div class="font-ssp600  text-grey-8 texthide"  style="font-size: 15px;padding-left: 12px;">
                Populer </div>
              </q-btn>


            </div>

          </div>


        </q-card>

      </div>
      <div class="col-md-3 col-xs-12" v-if="$q.screen.gt.sm">
        <Drawerright />

      </div>

    </main>


    <q-dialog v-model="share" @hide="onDialogHide">
    <q-card class="q-dialog-plugin bg-grey-4" style="border-radius: 13px; width: 450px; padding: 6px;">
        <q-card-section class="q-pa-none">
            <div class="flex justify-between bg-white q-px-sm q-py-sm" style="border-top-left-radius: 10px;border-top-right-radius: 10px;">
              <div  class="font-ssp600 text-grey-9" style="font-size: 21px;" :class="$q.screen.lt.sm ? 'q-pl-sm':' '">Share to  friends</div>
              <div class=" cursor-pointer" @click="share=false" :class="$q.screen.lt.sm ? 'q-pr-sm':' q-pr-md'">
                <div class="q-pa-none bg-grey-4 flex justify-center"  
                style="font-size: 20px;border-radius: 50%; width: 25px;height:30px;" >X</div>
              </div>
            </div> 
            <div class="">
              <div class="" :class="$q.screen.lt.sm ? '':'q-px-xl'">
              <div class="text-center font-ssp600 f-16  q-mt-md text-grey-9" style=""
              :class="$q.screen.lt.sm ? '':'q-px-xl'">Select how do you want to share
                Hafeez Club</div>
            </div>
            <div class="flex  no-wrap "  :class="$q.screen.lt.sm ? 'q-my-md':'justify-center q-my-lg'">
              <q-btn flat style="height:fit-content;" no-caps class="bg-white q-mr-sm q-py-xs">
                <div class="column  justify-center items-center">
                  <q-icon color="blue" size="md"  name="message" style="margin-top: 10px;" />
                  <p class="q-pt-xs text-blue" style="" :class="$q.screen.lt.sm ? 'f-18':'f-20'">SMS</p>
                </div>
              </q-btn>

              <q-btn flat style="height:fit-content;" class="bg-white q-mr-sm q-py-xs" no-caps>
                <div class="column  items-center justify-center">
                  <q-icon color="blue" size="md" name="mail"  style="margin-top: 10px;" />
                  <p class="q-pt-xs text-blue" style="" :class="$q.screen.lt.sm ? 'f-18':'f-20'" >Email</p>
                </div>
              </q-btn>

              <q-btn flat style="height: fit-content;" no-caps class="bg-white q-py-xs">
                <div class="column  justify-center items-center">
                  <q-icon color="blue" size="md" name="qr_code_2"  style="margin-top: 10px;"/>
                  <p class="q-pt-xs text-blue" style="" :class="$q.screen.lt.sm ? 'f-18':'f-20'">QR Code</p>
                </div>
              </q-btn>


            </div>
            </div>
        </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="leave" @hide="onDialogHide">
    <q-card class="q-dialog-plugin q-pa-md " style="border-radius: 13px; width:420px;">
        <q-card-section>
            <p class="font-ssp600 text-grey-9 text-center" style="font-size: 25px;">Leave Hafeez</p>
            <div class="q-my-lg">
             <p class="font-ssp600 text-grey-8 text-center" style="font-size: 15px;">Are you sure want to leave <span class="text-black text-bold">Hafeez</span></p>
           </div>
           <div class="flex q-mt-xl" :class="$q.screen.lt.sm ? 'justify-center ' :'justify-start'">
            <q-btn no-caps label="Confirm" @click="logoutfunc" class=" text-white background-color font-ssp600" flat 
             style="border-radius: 6px; font-size: 18px;" :class="$q.screen.lt.sm ? 'q-px-lg':'q-px-xl'" />
            <q-btn no-caps label="Cancel" @click="leave=false" class=" text-white bg-white  q-ml-md font-ssp600 text-grey-6" :class="$q.screen.lt.sm ? 'q-px-lg':'q-px-xl'" 
             flat style="border-radius: 6px; font-size: 18px;" />

           </div>
        </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog v-model="edite" @hide="onDialogHide">
    <q-card class="q-dialog-plugin " :class="$q.screen.lt.sm ? 'q-px-lg q-py-lg':'q-pa-lg'"
    style="border-radius: 13px; width: 500px;">
        <q-card-section class="q-pa-none">
           <div class="flex justify-between bg-white items-center q-mb-md" >
             <p class="font-ssp600 text-grey-9 q-ma-none" style="font-size: 24px;">Club Settings</p>
             <q-btn no-caps flat  class="bg-grey-3 text-grey-8"  icon="delete" > 
              <span class="q-ml-sm text-grey-8" v-if="$q.screen.gt.sm">Delete Club</span>
             </q-btn>
           </div>
           <hr>
           <div class="q-mt-md font-ssp600 text-grey-9" style="font-size: 18px;">Club Icon</div>
           <div class="q-mt-md">
            <div  style="width: 105px; height: 105px; border-radius: 50%; background:lightpink;"></div>

           </div>

           <div class="q-mt-md font-ssp600 text-grey-9" style="font-size: 18px;">
            Club Name

           </div>
           <div class="q-mt-md">
            <q-input filled v-model="text" label="Hafeez" stack-label :dense="dense" class="col"  placeholder="Hafeez"/>
           </div>
           <div class="q-mt-md font-ssp600 text-grey-9" style="font-size:19px;">
            Club Description
           </div>
           <div class="q-mt-md">
            <q-input
           v-model="text"
          filled
          type="textarea"
          class="col"
          />
           </div>
           <div class="q-mt-md font-ssp600 text-grey-9" style="font-size: 18px;">
            Goal Color
           </div>
           <div class="q-mt-md flex justify-center">
           <div class=" q-mr-xs q-mb-sm" v-for="clor,i in maincolor" :key="i"
            style="width: 45px;height: 45px; border: 5px solid lightgray; border-radius: 50%; box-shadow: inset;" >
            <q-btn :color="clor.color"  class="b-50 full-width full-height "  />
           </div>
           </div>
           <div class="flex justify-between q-mt-md items-center">
            <div class="font-ssp600 text-grey-9" style="font-size: 18px;">
              Show Budget to all members
            </div>
            <div>
              <q-toggle size="sm" v-model="shape" val="sm" l />
            </div>
           </div>
           <div class="flex q-my-md">
            <q-btn no-caps flat class=" text-white q-px-xl background-color font-ssp600  q-mr-sm " label="Save" style="font-size: 18px;border-radius: 8px;"/>
            <q-btn no-caps flat class="q-px-xl font-ssp600 text-grey-9" label="Cancel " style="font-size: 18px;border-radius: 8px;"/>
           </div>
        </q-card-section>
    </q-card>
  </q-dialog>

  </q-page>
</template>

<script setup>
import Drawerleft from 'src/components/Drawerleft.vue'
import Drawerright from 'src/components/Drawerright.vue'
import Header from 'src/components/Header.vue';
import { ref } from 'vue';
// import axios from 'axios'; 
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const value = ref(false)
const drawerLeft = ref(false)
const drawerRight = ref(false)
const router = useRouter();
const share = ref(false);
const leave = ref(false);
const edite = ref(false);
const shape = ref(false);
const maincolor=ref([
  {
    color:'black'
  },
  {
    color:'blue'
  },
  {
    color:'lightblue'
  },
  {
    color:'lightblue2'
  },
  {
    color:'yellow'
  },
  {
    color:'green'
  },
  {
    color:'red'
  },
  {
    color:'orange'
  }
])

// onMounted(async () => {
//   try {
//     let response = await axios.get('http://localhost:3000/student'); 
//     let students = response.data;
//     console.log('home :', students);
//     let presentemailindatabase= students.some(students=>students.email);
//     console.log('fjkfjdfkdfdf', presentemailindatabase);
//     let prepass=students.some(students=>students.password);
//     const userExists = students.every(student => student.email === presentemailindatabase && student.password===prepass);

//     if (!userExists) {
//       router.push('/SignupPage'); 
//     }
//     else{
//       router.push('/home')
//     }

//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// });

function logoutfunc(){
  leave.value=false;
  localStorage.clear();
  router.push('/SignupPage')
}
onMounted(() => {
  let userExists = localStorage.getItem('user-info');
  if (!userExists) {
    router.push('/SignupPage');
  }


});
</script>
<style scoped>
.f-20{
  font-size: 20px;
}
.f-18{
  font-size: 18px;
  /* font-weight: 700; */
}
.img-width{
  font-size: 14px;
}
.img-widthlt{
  font-size: 13px;
}
.black{
  background: black;
}.blue{
  background: blue;
}.lightblue{
  background: rgb(79, 79, 247);
}
.lightblue2{
  background: rgb(147, 147, 241);
}
.yellow{
  background: yellow;
}.orange{
  background: orange;
}.red{
  background: red;
}.green{
  background: green;
}

.q-item__section--side>.q-icon {
  font-size: 26px;
  margin: 0;
  padding: 0;
}

:deep(.q-item__section--side) {
  color: #757575;
  align-items: flex-start;
  padding-right: 0px;
  width: auto;
  min-width: 0;
  max-width: 100%;
}
.margin-inlin8-5{
  margin-inline:8.5px;
}
.maargin-sm{
  margin-inline: 4px;
}
.width-arrow {
  width: 20px;
  height: 20;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lh-24 {
  line-height: 24px !important;
}

.q-item__section--side>.q-avatar {
  font-size: 40px;
}
input::placeholder{
  font-size: 14px;
  padding-left: 1px;
  letter-spacing: 0.1px;
  padding-top: 10px;
}

.circle {
  border: 3px solid;
  padding: 8px;
  display: inline-flex;
  border-radius: 100px;
  width: auto;
  height: auto;
}

.bg-purple-foreground {
  background-color: #cdc0e9 !important;
}

.purple {
  border-color: #4d22b2 !important;
}

.q-col-gutter-lg {
  margin-top: -24px;
}

@media screen  and (min-width:425px){
.texthide{
  display: block;
}

  
}
@media screen  and (max-width:425px){
.texthide{
  display: none;
}

  
}
</style>
