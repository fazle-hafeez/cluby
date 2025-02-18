const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/components/Signup.vue') },
      { path: '/home', component: () => import('pages/IndexPage.vue') },
      { path: '/SignupPage', component: () => import('src/components/SignupPage.vue') },
      { path: '/login', component: () => import('src/components/Loginpage.vue') },
      { path: '/Calender', component: () => import('src/components/Calender.vue') },
      { path: '/Message', component: () => import('src/components/Message.vue') },
      { path: '/new', component: () => import('src/components/Newclub.vue') },

      




    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
