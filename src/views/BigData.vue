<template>
  <!-- 整个echarts容器 -->
  <div class="fillContainer">
    <div class="chartTitle">农业资源大数据监管平台</div>
    <div class="chartContainer">
      <div class="leftChart">
        <div class="chartBox"><pieChart></pieChart></div>
        <div class="chartBox"><barChart></barChart></div>
        <div class="chartBox"><broLineChart></broLineChart></div> 
      </div>
      <div  class="centerChart">
        <!-- 最中间的地图 -->
        <regionChart></regionChart>
      </div>
      <div class="rightChart">
        <div class="chartBox"><treemapChart></treemapChart></div>
        <div class="chartBox"><roundChart></roundChart></div>
        <div class="chartBox"><timeLineChart></timeLineChart></div>    
      </div>
    </div>
  </div>
</template>

<script>
  import regionChart from '../components/echarts/regionChart'
  import barChart from '../components/echarts/barChart'
  import pieChart from '../components/echarts/pieChart'
  import broLineChart from '../components/echarts/broLineChart'
  import treemapChart from '../components/echarts/treemapChart'
  import timeLineChart from '../components/echarts/timeLineChart'
  import roundChart from '../components/echarts/roundChart'
  export default {
    name: 'bigdata',
    components: {
      regionChart,
      pieChart,
      barChart,
      broLineChart,
      treemapChart,
      timeLineChart,
      roundChart
    }
  }
</script>

<style>
  html, body {
    height: 100%;
  }
  /* 标题 */
  .chartTitle {
    font-size: 30px;
    font-weight: 550;
    text-align: center;
  }
  .fillContainer {
    height: 100%;
    margin: 20px;
    box-shadow: 0 0 10px #d1cdcd;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
  }
  /* 展示所有图表的主体页面 */
  .chartContainer {
    display: flex;
    height: 100%;
    width: 100%;
  }
  /* 两侧的图表 */
  .leftChart,.rightChart{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
  }
  /* 每个图表的盒子 */
  .chartBox {
    height: 33%;
    width: 100%;  
    margin: 0 0 10px 0;
    border: 1px solid rgb(241, 237, 237);
    box-shadow: 1px 1px 0 1px #cecece;
  }
</style>