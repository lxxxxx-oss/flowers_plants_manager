<template>
  <div class="">
      <div id="map"  ref="myEchart" class="regionChart"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  // 需要展示哪个地区的地图，将它的JSON文件引用到这里即可，这里展示的是新疆的地图
  const regionJson = require("../../../src/assets/echarts/xinJiang.json") 
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
              let myChart = echarts.init(document.getElementById('map'));
              echarts.registerMap('region', regionJson);
              let option = {
                  tooltip: {
                      trigger: 'item',
                      formatter:  function(params) {
                          if(!params.value){
                              return '该地区暂无监控平台';
                          }
                          return params.seriesName+'<br />'+params.name+'：'+params.value+'次'
                      },
                      confine: true
                  },
                  visualMap: {
                      min: 0,
                      max: 100,
                      text: ['高', '低'],
                      realtime: false,
                      calculable: true,
                      itemWidth:10,
                      itemHeight: 70,
                      inRange: {
                          color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
                      }
                  },
                  series: [
                      {
                          name: '',
                          type: 'map',
                          // zoom: 1.4,
                          label: {
                              show: false
                          },
                          mapType: 'region', // 自定义扩展图表类型
                          itemStyle: {
                              // normal: {label: {show: true}},
                              emphasis: {label: {show: true}},
                              normal:{
                                  label: { 
                                      show: true,
                                      textStyle: {
                                          color: '#444'
                                      }
                                  },
                              }
                          },
                          data: [],
                      }
                  ]
              };

              myChart.setOption(option);
              window.addEventListener('resize', function () {
                  myChart.resize();
              });
          }

      }
  }
</script>

<style>
  .regionChart {
    height: 500px;
    width: 500px;
    margin: auto;
  }
</style>