<template>
  <div class="pieChart">
      <div id="pie" ref="myEchart"></div>
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
              let myChart = echarts.init(document.getElementById('pie'));
              let option = {
                // 图例
                legend: {
                  // 大小
                  itemWidth: 10,
                  itemHeight: 10,
                  // 位置
                  width: 10,
                  heigth: 10,
                  right: '0',
                  // 间隔
                  itemGap: 5
                },
                // 把数据展示到每个子项里面 ---> 鼠标移出时展示
                tooltip: {
                  trigger: 'item',
                  formatter: '{c}'+'万吨',
                  position: [10, 10],
                  // 提示框的宽高
                  extraCssText:'width:80px;height:40px;'
                },
                series: [
                  {
                    name: '产量',
                    type: 'pie',
                    radius: [10, 50],
                    roseType: 'area',
                    data: [
                      { value: 94, name: '小麦' },
                      { value: 154, name: '玉米' },
                      { value: 677, name: '棉花' },
                      { value: 187, name: '甜菜' },
                      { value: 169, name: '西瓜 ' },
                      { value: 110, name: '冬瓜 ' }
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
  .pieChart {
    height: 100%;
    width: 100%;
    margin: auto;
  }
  #pie {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>