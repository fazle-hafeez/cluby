



<template>

<div class="q-page">
    <div class="row " style="height: 100vh;" >
        <div class="col-md-6 col-sm-12 col-xs-12  background-color flex  justify-center"
         style="height: fit-content; " :class="$q.screen.lt.md ? '':'m-118'" >
            <div class="row " >
                <div class="col-12  mx-w-490" >
                    <div class="q-px-lg mx-w-490 flex items-center q-py-xl" style="">
                        <div class="" :class="$q.screen.lt.md ? 'q-mb-lg':'q-mb-xl'">
                            <div class="text-white heading-style q-ma-none" :class="$q.screen.lt.md ? 'heading-styleld':'heading-style'">
                                Welcome to Clubby : 
                                
                            </div>
                            <div class="text-white heading-style q-ma-none" :class="$q.screen.lt.md ? 'heading-styleld':'heading-style'">
                                The only app your club will ever need. 
                            </div>

                        </div>

                        <div class="q-card rounded-8 q-mb-md  q-py-sm" v-for="avatarcard ,i in allcards" :key="i">
                            <div class="q-card__section q-card__section--vert">
                                <div class="q-item q-item-type row no-wrap q-pa-none">
                                    <div class="q-item__section column q-item__section--side justify-center q-item__section--avatar">
                                        <div class="q-icon" aria-hidden="true" role="presentation" style="width: 70px;">
                                            <q-img :src="avatarcard.img"  style="width: 70px; height: 70px;"/>
                                        </div>

                                    </div>
                                    <div class="q-item__section column q-item__section--main justify-center">
                                        <div class=" font-ssp600 text-grey-9 t" style="">
                                         <span style="font-size:18px">  {{ avatarcard.text }}</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div> <!--the end of card-->
                    </div>

                </div>

            </div>
        </div>

        <!--///////////////////////////////////////////////////////////////////////////////////-->
        <div class="col-md-6 col-sm-12 col-xs-12 self-center " :class="$q.screen.lt.md ? 'order-first':'order-last'">
            <div class="row">
                <q-form action="" class="q-form full-width self-center">
                    <div class="col-12">
                        <div class="col-md-6 col-sm-12 col-xs-12 self-center order-first">
                            <q-form>
                                <div class="row">
                                    <div class="col-12 self-center">
                                        <div class="q-px-lg mx-w-490">
                                            <div class="clubby-icon-height">
                                                <div class="q-img q-img--menu q-mt-lg">
                                                    <div style="padding-bottom: 21%;"></div>
                                                    <div class="q-img__container absolute-full">
                                                        <img class="q-img__image q-img__image--with-transition q-img__image--loaded" loading="lazy" fetchpriority="auto" aria-hidden="true" draggable="false" src="https://www.clubby.me/Clubbylogo.svg" style="object-fit: cover; object-position: 50% 50%;">
                                                    </div>

                                                    <div class="q-img__content absolute-full q-anchor--skip"></div>

                                                </div>

                                            </div>


                                            <h4 class=" font-SSP700  text-weight-bold " style="font-size:26px;opacity: 0.7;padding-top: .5px;">Create an account</h4>
                                            <div style="margin-bottom: 1px;">
                                                <p class="text-grey-9 f-18 font-ssp600 " style="font-size: 18px;" >Choose a username</p>
                                            </div>

                                            <div class="q-mb-lg">
                                                <q-input
                                                type="text"
                                                    filled
                                                    v-model="form.name"
                                                    label="Mr.Hafeez"

                                                />
                                            </div>
                                            <div style="">
                                                <p class="text-grey-9 f-18 font-ssp600 " style="font-size: 19px;" > Email Address</p>
                                            </div>
                                            <div class="q-mb-lg">
                                                <q-input
                                                type="text"
                                                    filled
                                                    v-model="form.email"
                                                    label="hafeez@gmail.com"

                                                />
                                            </div>
                                            <div style="margin-bottom: 1px;">
                                                <p class="text-grey-9 f-18 font-ssp600 " style="font-size: 19px;" > Password</p>
                                            </div>
                                            <div class="q-mb-lg">
                                                <q-input
                                                type="password"
                                                    filled
                                                    v-model="form.pass"
                                                    label="password"

                                                />
                                            </div>
                                            <div class="f-16" data-v-4e76b2f8="">By signing up for clubby you are agreeing to the <button class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--rectangle text-primary q-btn--actionable q-focusable q-hoverable q-pa-none text-lowercase text-underline" tabindex="0" type="button" data-v-4e76b2f8=""><span class="q-focus-helper"></span><span class="q-btn__content text-center col items-center q-anchor--skip justify-center row"><span class="q-pb-xs text-blue-10 f-16 font-ssp600" data-v-4e76b2f8="">terms of service</span></span></button></div>

                                            <div class="q-mt-lg" data-v-4e76b2f8=""><q-btn @click.prevent=" signupfunc" class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable q-btn full-width text-capitalize q-pa-sm f-18 rounded-8 background-color text-white" tabindex="0" type="submit" data-v-4e76b2f8=""><span class="q-focus-helper"></span><span class="q-btn__content text-center col items-center q-anchor--skip justify-center row"><span class="block">Sign Up</span></span><!----></q-btn></div>
                                            <q-btn flat dense to="/login" class="q-mt-lg q-pl-xs" data-v-4e76b2f8=""><a  class="sign-up hoverclass" data-v-4e76b2f8=""><p class="text-grey-8 f-16 font-ssp600 text-lowercase" data-v-4e76b2f8=""> Already have an account? <span class="text-blue-10 text-capitalize" data-v-4e76b2f8="" > Sign in</span></p></a></q-btn>
                                            <div class="flex" data-v-4e76b2f8=""><hr class="q-mt-md" data-v-4e76b2f8="" style="width: 40%;"><div class="text-bold text-body1 q-pa-none q-ma-none self-center" data-v-4e76b2f8="">or</div><hr class="q-mt-md" data-v-4e76b2f8="" style="width: 40%;"></div>
                                            <div class="q-mt-lg q-mb-xl" data-v-4e76b2f8=""><button class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--actionable q-focusable q-hoverable text-capitalize login-google text-bold full-width q-pa-md rounded-8 bg-grey-3" tabindex="0" type="button" data-v-4e76b2f8=""><span class="q-focus-helper"></span><span class="q-btn__content text-center col items-center q-anchor--skip justify-center row"><span class="q-icon" aria-hidden="true" role="presentation" data-v-4e76b2f8=""><img src="/icons/Google.svg"></span><a class="text-capitalize google-text q-pl-sm f-16 font-ssp600" data-v-4e76b2f8="">Sign up with google</a></span></button></div>
                                        </div>

                                    </div>

                                </div>
                            </q-form>

                        </div>
                    </div>

                </q-form>
            </div>
        </div>
    </div>
</div>
</template>


<script setup>
import {reactive, ref} from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { onMounted } from 'vue';
const router = useRouter();
const $q = useQuasar();
const form = reactive({
    name:null,
    email:'',
    pass:null
});
const allcards = ref([
    {
        img:'https://www.clubby.me/icons/bucket.svg',
        text : ' Make sure all your members know when and where your meetings and events are with the calendar feature '

    },
    {
        img:'https://www.clubby.me/icons/Feedback.svg',
        text : '  Keep in touch and build community with the club chat feature  '

    },
    {
        img:'https://www.clubby.me/icons/Coins.svg',
        text : '  Track and organize your clubs funds with the budget feature  '

    }
]);

async function signupfunc() {
    try {
       if(form.name=='' && form.email==''&&form.pass==''){
        alert('please fill all the field first');
       }
       else{
        let storedata = await axios.post('http://localhost:3000/student', {
            name: form.name,
            email: form.email,
            password: form.pass
        });
        
        localStorage.setItem('user-info', JSON.stringify(storedata));
        if(storedata.status===201){
         router.push('/home');
        emptyinput();

        }

       }
    } catch (error) {
        console.error('Error during signup:', error);
    }
}

function emptyinput(){
    form.name='';
    form.email='';
    form.pass='';
}

onMounted (()=>{

let user= localStorage.getItem('user-info');
console.log('user')
if(user){
  router.push('/home');
}
});
</script>


<style scoped>
input::placeholder{
    font-size: 20px;
}
.m-118{
margin-top: 118px;
}
.q-img {
    position: relative;
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
}
/* .hoverclass:hover{
    background-color: lightblue !important;
    outline: none !important;
    border: none !important;
} */
.clubby-icon-height {
    height: 50px;
    width: 200px;
}

.mx-w-490 {
    max-width: 490px;
    margin: 0 auto;
}
.heading-style {
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
}
.heading-styleld {
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
}
.f-18 {
    font-size: 18px;
}

</style>