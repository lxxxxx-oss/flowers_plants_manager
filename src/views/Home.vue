<template>
    <div class="fillcontain">
        <div class="fillcontainer" ref="fillcontainer">
           <div id="fundPosition" class="echartsPosition"></div> 
        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    import '../assets/echarts/china.js';
    import '../assets/echarts/roma.min.js';

    export default {
        name: 'home',
        data(){
          return {
            chart:null
          }
        },
        methods: {
            // 随机决定各个地区的园区数量
            randomData() {
                return Math.round(Math.random()*1000);
            },
            drawMap (id) {
            // echarts.init(),初始化数据      
            if ( this.chart &&  this.chart.dispose) { 
                this.chart.dispose(); 
            }   
            // 在该容器绘制echarts图，这里就是绘制地图
            this.chart = echarts.init(document.getElementById(id),'roma');
            this.chart.setOption({
                // 题目
                title: {
                    text: '全国各省园区个数',
                    subtext: '单位/个',
                    left: 'center'
                },
                // 提示框
                tooltip: {
                    trigger: 'item'
                },
                // 图例
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['总园区数']
                },
                // 视觉映射,将数据映射为图元
                visualMap: {
                    min: 0,
                    max: 1000,
                    left: 'left',
                    top: 'bottom',
                    text: ['高','低'], // 文本，默认为数值文本
                    calculable: true
                },
                // 右侧工具栏---> 数据总览,下载
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: {readOnly: false},
                        saveAsImage: {}
                    }
                },
                // 最关键的一个配置项,决定了图表的类型,以及图表元素的数据
                series: [
                    {
                        name: '总园区数',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data:[
                            {name: '北京',value: this.randomData() },
                            {name: '天津',value: this.randomData() },
                            {name: '上海',value: this.randomData() },
                            {name: '重庆',value: this.randomData() },
                            {name: '河北',value: this.randomData() },
                            {name: '河南',value: this.randomData() },
                            {name: '云南',value: this.randomData() },
                            {name: '辽宁',value: this.randomData() },
                            {name: '黑龙江',value: this.randomData() },
                            {name: '湖南',value: this.randomData() },
                            {name: '安徽',value: this.randomData() },
                            {name: '山东',value: this.randomData() },
                            {name: '新疆',value: this.randomData() },
                            {name: '江苏',value: this.randomData() },
                            {name: '浙江',value: this.randomData() },
                            {name: '江西',value: this.randomData() },
                            {name: '湖北',value: this.randomData() },
                            {name: '广西',value: this.randomData() },
                            {name: '甘肃',value: this.randomData() },
                            {name: '山西',value: this.randomData() },
                            {name: '内蒙古',value: this.randomData() },
                            {name: '陕西',value: this.randomData() },
                            {name: '吉林',value: this.randomData() },
                            {name: '福建',value: this.randomData() },
                            {name: '贵州',value: this.randomData() },
                            {name: '广东',value: this.randomData() },
                            {name: '青海',value: this.randomData() },
                            {name: '西藏',value: this.randomData() },
                            {name: '四川',value: this.randomData() },
                            {name: '宁夏',value: this.randomData() },
                            {name: '海南',value: this.randomData() },
                            {name: '台湾',value: this.randomData() },
                            {name: '香港',value: this.randomData() },
                            {name: '澳门',value: this.randomData() }
                        ]
                    }
                ]
            });
          }
        },
        // 触发echats绘制事件
        mounted(){
            this.$nextTick(function() {
                this.$refs.fillcontainer.style.height = (document.body.clientHeight - 160)+'px'
                this.drawMap('fundPosition');
                var that = this;
                var resizeTimer = null;
                // 保证页面在放大或缩小时，也能够动态的显示数据
                window.onresize = function() {
                    if (resizeTimer) clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(function() {
                    that.$refs.fillcontainer.style.height = (document.body.clientHeight - 160)+'px'
                    that.drawMap('fundPosition');
                    }, 100);
                }
            })
        }

    }
</script>

<style scoped>
.fillcontain{
    margin: 10px;
    padding: 10px 10px 10px 10px;
    box-sizing: border-box;
}
.fillcontainer{
    text-align:center;
    box-sizing: border-box;
}
.echartsPosition{
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10px #c9c0c0;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
}
   
</style>


