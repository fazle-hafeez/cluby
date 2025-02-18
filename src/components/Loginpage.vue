<template>
 <q-page class="flex flex-center bg-grey-8">
    <q-form class="q-gutter-y-md column q-pa-xl shadow-20 bg-grey-8" outline style="width: 400px; height: 600;border: 1px solid black; ">  
        <q-input
        filled
        v-model="form.email"
        label=" enter your email"
      />
      <q-input
        filled
        v-model="form.pass"
        label="password"
      />
      <q-btn :loading="loadingState" @click="signinfunc" label="signin"/>
    </q-form>
 </q-page>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  email: '',
  pass: ''
});
const loadingState = ref(false);

async function signinfunc() {
  loadingState.value = true;

  try {
    const response = await axios.get('http://localhost:3000/student');
    const students = response.data;
    const user = students.find(student => student.email === form.value.email && student.password === form.value.pass);
    if (user) {
      localStorage.setItem('user-info',JSON.stringify(form.value))
      router.push('/home');
    } 
    else{
      alert('please enter the valid username and password')
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loadingState.value = false;
  }
}

 onMounted( async ()=>{
  // const response = await axios.get('http://localhost:3000/student');
  //   const students = response.data;
  //   const user = students.find(student => student.email === form.value.email && student.password === form.value.pass);
  //   if (user) {
  //     localStorage.setItem('user-info',JSON.stringify(form.value))
  //     router.push('/home');
  //   } 
  //   else{
  //     router.push('/SignupPage');
  //   }
    
//     let user = localStorage.getItem('user-info');
//     if(!user){
//         router.push('/SignupPage');
//     }
//     else{
//       router.push('/home')
//     }
  
 });
// onMounted(()=>{
//     let userExists = localStorage.getItem('user-info');
//     // let response = userExists.data;
//     // let exisemail = response.email;
//     // let exispass = response.password;
//     // let ffnd= response.find(response=>response.email===exisemail && response.pass===exispass);
//     // console.log('data:',ffnd)
//     if(userExists.email===form.value.email && userExists.password===form.value.pass){
//         router.push('/home');
//     }else{
//         router.push('/SignupPage');
//     }


// });
</script>
