<template>
  <div class="barChart">
      <div id="bar" ref="myEchart"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
      data(){
          return{
          }
      },
      mounted(){
          this.init();
      },
      methods:{
          init(data) {
              let myChart = echarts.init(document.getElementById('bar'));
              let option = {
                title: {
                  text: '皮棉平均产量',
                  left: 'center',
                  textStyle: {
                    fontSize: 15
                  }
                },
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'shadow'
                  }
                },
                // 整个坐标轴的定位和大小
                grid: {
                  left: '3%',
                  right: '10%',
                  bottom: '2%',
                  containLabel: true,
                  height: '80%'
                },
                xAxis: {
                  type: 'value',
                  boundaryGap: [0, 0.01]
                },
                yAxis: {
                  type: 'category',
                  data: ['1师1团', '1师2团', '1师3团', '1师4团', '1师5团', '1师6团'],
                  // 坐标轴刻度的文字样式
                  axisLabel: {      
                    show: true,
                    textStyle: {
                      fontSize: 10,
                    }
                  }
                },
                series: [
                  {
                    name: '2011',
                    type: 'bar',
                    data: [182, 234, 294, 104, 131, 630]
                  },
                  {
                    name: '2012',
                    type: 'bar',
                    data: [125, 238, 310, 194, 141, 107]
                  }
                ]
              }

              myChart.setOption(option);
              window.addEventListener('resize', function () {
                  myChart.resize();
              });
          }

      }
  }
</script>

<style>
  .barChart {
    height: 100%;
    width: 100%;
    margin: auto;
  }
  #bar {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>