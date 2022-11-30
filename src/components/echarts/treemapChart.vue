<template>
  <div class="treemapChart">
      <div id="treemap" ref="myEchart"></div>
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
              let myChart = echarts.init(document.getElementById('treemap'));
              let option = {
                series: [
                  {
                    type: 'treemap',
                    breadcrumb: { show: false},
                    data: [
                      {
                        name: '农业',
                        value: 120,
                        children: [
                          {
                            name: '纺织类',
                            value: 52
                          },
                          {
                            name: '食用类',
                            value: 68
                          }
                        ]
                      },
                      {
                        name: '畜牧业 ',
                        value: 151,
                        children: [
                          {
                            name: '肉产品',
                            value: 43
                          },
                          {
                            name: '羊毛',
                            value: 108
                          }
                        ]
                      },
                      {
                        name: '水产品 ',
                        value: 53
                      },
                    ]
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
  .treemapChart {
    height: 100%;
    width: 100%;
    margin: auto;
  }
  #treemap {
    width: 90%;
    height: 100%;
    border: none;
    margin: auto;
  }
</style>