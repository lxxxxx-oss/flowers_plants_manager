<template>
  <div class="timeLineChart">
      <div id="timeLine" ref="myEchart"></div>
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
          // 随机温度
          randomTem() {
            let base = +new Date(2021, 12, 1);
            let oneDay = 24 * 3600 * 1000;
            let data = [[base, Math.random()]];
            for (let i = 1; i < 335; i++) {
              let now = new Date((base += oneDay));
              data.push([now, Math.round((Math.random() - 0.5) * 5 + data[i - 1][1])]);
            }
            return data
          },  
          init(data) {
              let myChart = echarts.init(document.getElementById('timeLine'));
              // 接收随机温度的值
              let message = this.randomTem();
              let option = {
                tooltip: {
                  trigger: 'axis',
                  position: function (pt) {
                    return [pt[0], '10%'];
                  }
                },
                grid: {
                  height: "50%",
                  width: "80%"
                },
                title: {
                  left: 'center',
                  text: '平均温度/℃'
                },
                xAxis: {
                  type: 'time',
                  boundaryGap: false
                },
                yAxis: {
                  type: 'value',
                  boundaryGap: [0, '20%']
                },

                series: [
                  {
                    name: '平均温度',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    // 随机的温度数据
                    data: message
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
  .timeLineChart {
    height: 100%;
    width: 100%;
    margin: auto;
  }
  #timeLine {
    height: 100%;
    width: 100%;
    border: none;
  }
</style>