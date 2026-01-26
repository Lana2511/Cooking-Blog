import { createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import CookingBlog from "../pages/CookingBlog.vue";
import RecipeInfo from "../pages/RecipeInfo.vue";


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: CookingBlog
    },

    {
        path: '/recipes/:id',
        name: 'recipe-info',
        component: RecipeInfo
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router