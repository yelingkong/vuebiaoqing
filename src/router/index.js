import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    // 对话框
    path: '/',
    name: 'liaotian2',
    component: () => import('../views/liaotian2.vue')
},
]
const router = new VueRouter({
    mode: "history",
    routes
})

export default router
