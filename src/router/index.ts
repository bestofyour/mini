import type {App} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type  {Router} from 'vue-router'

const router:Router  = createRouter({
    history: createWebHistory(),
    routes: [],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
})


function resetRouter (router: Router) {
    router.beforeEach((to, from , next) => {
        console.log(to, from);
        next()
    })

}

function useRouter(app:App) {
    app.use(router)
    resetRouter(router)
}

export {useRouter}
