<template>
  <div :id="id" class="orderArea"></div>
</template>

<script>
  import * as echarts from 'echarts';
  import echartsTheme from "../../utils/westeros.json";
  
  export default {
      data(){
          return {
            id:"lineChart",
            myChart:null,
          }
      },
      mounted(){
          this.loadChart();
      },
      beforeDestroy() {
        if (!this.myChart) {
          return
        }
        this.myChart.dispose();
        this.myChart = null;
      },
      methods: {
        loadChart(){
          this.$nextTick(() => {
            echarts.registerTheme('westeros', echartsTheme)
            this.myChart = echarts.init(document.getElementById(this.id),'westeros');
            this.myChart.setOption(this.initOption());
          })
        },
        initOption(){
          let data = {
            color: ['rgb(128, 255, 125)'],
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: 'rgb(128, 255, 165)'
                }
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                // 年份
                data: ['2017', '2018', '2019', '2020', '2021', '2022']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '年收益',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                  width: 0
                },
                showSymbol: false,
                areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(128, 255, 165)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(1, 191, 236)'
                    }
                  ])
                },
                emphasis: {
                  focus: 'series'
                },
                // 年收益
                data: [40000, 232000, 100100, 260400, 190000, 304000]
              },
            ]
          }
          return data;
        },
  },
  }
</script>

<style>
.orderArea {
  height: 90%;
  width: 95%;
  margin-top: -30px;
}
</style>
