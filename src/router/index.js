import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('../components/Login.vue')
    },
    {
        path: '/register', 
        name: 'register',
        meta: { title: '注册页面' },
        component: () => import('../components/Register.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    { path: '/', redirect: '/home' },
]

// 本地所有的页面
export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: { title: '区域信息',roles: ['admin', 'user'] },
        component: () => import('../views/Home.vue'),
    },
    garden: {
        path: 'garden',
        name: 'garden',
        meta: { title: '园区详情',roles: ['admin', 'user'] },
        component: () => import('../views/Garden.vue'),
    },
    exhibition: {
        path: 'exhibition',
        name: 'exhibition',
        meta: { title: '花卉展示',roles: ['admin', 'user'] },
        component: () => import('../views/Exhibition.vue'),
    },
    recognition: {
        path: 'recognition',
        name: 'recognition',
        meta: { title: '花卉识别',roles: ['admin', 'user'] },
        component: () => import('../views/Recognition.vue'),
    },
    proposal: {
        path: 'proposal',
        name: 'proposal',
        meta: { title: '种植建议',roles: ['admin', 'user'] },
        component: () => import('../views/Proposal.vue'),
    },
    bigdata: {
        path: 'bigdata',
        name: 'bigdata',
        meta: { title: '大数据中心',roles: ['admin', 'user'] },
        component: () => import('../views/BigData.vue'),
    },
    monitor: {
        path: 'monitor',
        name: 'monitor',
        meta: { title: '花卉监测',roles: ['admin', 'user'] },
        component: () => import('../views/Monitor.vue'),
    },
    admin: {
        path: 'admin',
        name: 'admin',
        meta: { title: '系统管理',roles: ['admin'] },
        component: () => import('../views/Admin.vue'),
    },
    t1: {
        path: 't1',
        name: 't1',
        meta: { title: '表格',roles: ['admin', 'user'] },
        component: () => import('../views/T1.vue'),
    },
    password: {
        path: 'password',
        name: 'password',
        meta: { title: '修改密码',roles: ['admin', 'user'] },
        component: () => import('../views/Password.vue'),
    },
    msg: {
        path: 'msg',
        name: 'msg',
        meta: { title: '通知消息',roles: ['admin', 'user'] },
        component: () => import('../views/Msg.vue'),
    },
    userinfo: {
        path: 'userinfo',
        name: 'userinfo',
        meta: { title: '用户信息',roles: ['admin', 'user'] },
        component: () => import('../views/UserInfo.vue'),
    },
}

const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router