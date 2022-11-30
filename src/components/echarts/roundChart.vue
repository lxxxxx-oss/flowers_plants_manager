<template>
  <div class="roundChart">
      <div id="round" ref="myEchart"></div>
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
              let myChart = echarts.init(document.getElementById('round'));
              let option = {
                polar: {
                  radius: [30, '80%']
                },
                radiusAxis: {
                  max: 20123
                },
                angleAxis: {
                  type: 'category',
                  data: ['喀什市', '图木舒克市', '博乐市', '和田市', '昆玉市'],
                  startAngle: 75
                },
                tooltip: {},
                series: {
                  type: 'bar',
                  data: [2022,10033,20123,9920,12304],
                  coordinateSystem: 'polar',
                  label: {
                    show: true,
                    position: 'middle',
                    formatter: '{c}'+'吨'
                  }
                }
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
  .roundChart {
    height: 100%;
    width: 100%;
    margin: auto;
  }
  #round {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>