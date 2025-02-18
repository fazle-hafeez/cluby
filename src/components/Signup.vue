<template>
    <q-page>
        <div class="row bg-grey-3 position-relative landingp items-center justify-center " >
            <div class=" col-md-9 self-center items-center bg-grey-3 " >
                <div class=" row justify-center   column text-center " :class="$q.screen.lt.md ?'q-py-sm q-px-md':'q-py-lg q-px-lg'">
                    <div class="q-px-lg  column q-mx-auto  col-md-6" :class="$q.screen.lt.sm ?'q-pt-md ':''">
                        <img src="	https://www.clubby.me/icons/clubby-full-logo.svg" alt="" 
                        class="  responsive " style="width: 820px; height: auto;" :class="$q.screen.lt.md ?'':'lage-img-pt'" />     
                    </div>
                    <div class="main-text-color font-ssp700 letter-space-3 padding-top-for-bestapp  q-pb-sm">
                       <span class="" style="font-size: clamp(1.375rem, 1.222rem + 0.765vw, 2.25rem);"> #1 BEST APP FOR CLUBS</span>
                    </div>
                    <div
                     class=" text-black font-ssp700 
                      text-weight-bolder" :class="$q.screen.lt.sm ? 'font-ssp700 fs-30 q-px-lg lh-3':' q-px-md f-60 lh-70 letter-space--3 margin-top-signup '"
                      >
                        Sign up today to get started with
                    </div>
                    <div class="font-ssp700 main-text-color " :class="$q.screen.lt.sm ? 'fs-40':'f-64'" >
                        clubby!
                    </div>

                   
                    <div class="  flex justify-center ">
                        <span class="text-grey-9"
                        :class="containerclasses" >
                        Welcome to Clubby: The only app your club will ever need. Keep in touch and build community with
                            the many great features.</span>
                    </div>
                    <div class="q-mt-lg " :class="$q.screen.lt.sm ? 'q-px-md flex q-gutter-y-md justify-center':'flex justify-center'">
                        
                        <q-btn to="/SignupPage" style=" background: linear-gradient(146.39deg, #0070B2 -.65%, #0079B6 13.32%, #0092C3 36.57%, #00A3CB 84.07%);" 
                        class=" rounded-10  py-8 background-color text-white font-SS400 " type="button"
                        :class="$q.screen.lt.sm ? 'q-px-xl fs-15s':'px-70 px-both f-18 q-mr-md'">
                        <span class="q-focus-helper"></span>
                        <span class="text-capitalize q-btn__content text-center col items-center q-anchor--skip justify-center row"><span class="block">Sign Up</span></span></q-btn>
                        <q-btn to="/login" 
                        class="text-grey-9 no-outline bg-white rounded-10  py-8  font-SS400 text-capitalize" 
                         type="button" :class="$q.screen.lt.sm ? 'q-px-xl q-ml-md fs-15s':'f-18 px-70 px-both'">
                        <span class="q-focus-helper"></span><span class="q-btn__content text-center col items-center q-anchor--skip justify-center row"><span class="block">Login</span></span></q-btn>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>
<script setup>
import {ref} from 'vue'
import { useQuasar } from 'quasar';
import { onMounted } from 'vue';
import { computed } from 'vue'
const $q = useQuasar();
//:class="$q.screen.gt.md || md ? ' ': $q.screen.lt.md ?'':$q.screen.lt.sm ? '':''"

const containerclasses = computed(()=>{
    if($q.screen.gt.md){
        return  'f-20 padding-80 q-px-xl q-pt-md justify-center';
    }
     if($q.screen.md){
        return 'f-20 padding-80 q-px-xl q-pt-md justify-center';
    }
     if($q.screen.sm){
       return 'f-20 q-px-xl text-center q-mx-lg';
    }
     if($q.screen.xs){
        return '  fs-15 q-pt-lg q-px-sm q-mx-none';
    }
    else{
        return '';
    }
});

</script>
<style scoped>
.padding-80{
padding-inline: 120px;

}
.fs-30{
    font-size: 30px;
}
.fs-40{
    font-size:40px 
}
.fs-15s{
    font-size: 18px;
    font-weight: 600;
}
.fs-15{
    font-size: 15px;
}
.lage-img-pt{
    padding-top:34px;
}
.padding-top-for-bestapp{
    padding-top: 23px;
}
.margin-top-signup{
    margin-top: 15px;
}
.px-both{
    padding-inline: 70px;

}

.largepadding-forrow{
    padding-top: 300px;
}
</style>