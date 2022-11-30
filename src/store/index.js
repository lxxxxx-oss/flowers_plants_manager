import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-planet', // icon类型
                text: '区域信息', // 文本内容
            },
            {
                name: 'garden',
                size: 18,
                type: 'ios-albums-outline',
                text: '园区详情',
            },
            {
                name: 'recognition',
                size: 18,
                type: 'ios-aperture-outline',
                text: '花卉识别',
            },
            {
                name: 'publicity',
                size: 18,
                type: 'ios-rose-outline',
                text: '品牌宣传',
            },
            {
                name: 'retrospect',
                size: 18,
                type: 'ios-arrow-dropup',
                text: '产品追溯',
            },
            {
                name: 'bigdata',
                size: 18,
                type: 'ios-analytics-outline',
                text: '大数据中心',
            },
            {
                name: 'consult',
                size: 18,
                type: 'ios-bulb-outline',
                text: '专家咨询',
            },

            // {
            //     text: '二级菜单',
            //     type: 'ios-paper',
            //     children: [
            //         {
            //             type: 'ios-grid',
            //             name: 't1',
            //             text: '表格',
            //             // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
            //             // hidden: true,
            //         },
            //         {
            //             size: 18, // icon大小
            //             type: 'md-arrow-forward', // icon类型
            //             text: '外链',
            //             url: 'https://www.baidu.com',
            //             isExternal: true, // 外链 跳到一个外部的 URL 页面
            //         },
            //         {
            //             text: '三级菜单',
            //             type: 'ios-paper',
            //             children: [
            //                 {
            //                     type: 'ios-notifications-outline',
            //                     name: 'msg',
            //                     text: '查看消息',
            //                 },
            //                 {
            //                     type: 'md-lock',
            //                     name: 'password',
            //                     text: '修改密码',
            //                 },
            //                 {
            //                     type: 'md-person',
            //                     name: 'userinfo',
            //                     text: '基本资料',
            //                 },
            //                 {
            //                     size: 18, // icon大小
            //                     type: 'md-arrow-forward', // icon类型
            //                     text: '外链',
            //                     url: 'https://www.baidu.com',
            //                     isExternal: true, // 外链 跳到一个外部的 URL 页面
            //                 },
            //             ],
            //         },
            //     ],
            // },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store