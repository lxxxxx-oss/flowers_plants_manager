<template>
  <div class="broLineChart">
      <div id="broLine" ref="myEchart"></div>
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
              let myChart = echarts.init(document.getElementById('broLine'));
              let option = {
                title:{
                  left: 'center',
                  text: '各产业产值/万吨',                 
                  textStyle: {
                    fontSize: 15
                  }
                },
                tooltip: {
                  trigger: 'axis'
                },
                legend: {
                  data: ['农业', '渔业', '牧业', '林业', '农林渔业'],
                  itemWidth: 5,
                  itemHeight: 5,
                  top: '13%',
                },
                grid: {
                  left: '3%',
                  right: '10%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis: {
                  type: 'category',
                  boundaryGap: false,
                  data: ['2016', '2017', '2018', '2019', '2020', '2021']
                },
                yAxis: {
                  type: 'value'
                },
                series: [
                  {
                    name: '农业',
                    type: 'line',
                    stack: 'Total',
                    data: [1190, 1022, 911, 834, 650, 530]
                  },
                  {
                    name: '渔业',
                    type: 'line',
                    stack: 'Total',
                    data: [1100, 992, 811, 734, 650, 530]
                  },
                  {
                    name: '牧业',
                    type: 'line',
                    stack: 'Total',
                    data: [1130, 912, 811, 794, 650, 530]
                  },
                  {
                    name: '林业',
                    type: 'line',
                    stack: 'Total',
                    data: [1190, 1022, 911, 834, 650, 530]
                  },
                  {
                    name: '农林渔业',
                    type: 'line',
                    stack: 'Total',
                    data: [1190, 1022, 911, 834, 650, 530]
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
  .broLineChart {
    height: 100%;
    width: 100%;
    margin: auto;
  }
  #broLine {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>