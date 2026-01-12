import { createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import CookingBlog from "../pages/CookingBlog.vue";


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: CookingBlog
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router