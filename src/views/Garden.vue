<template>
  <div class="layout content">
      <div class="sider">
          <div>园区实时直播</div>
          <div class="live-card">
              <div class="item-card">
                  <img src="../assets/imgs/bg00.jpg" alt="" />
                  <div class="dataDet">
                      <div>空气温度</div>
                      <div class="dataNum">61.5%</div>
                      <div>空气湿度</div>
                      <div class="dataNum">71%</div>
                      <div>空气湿度</div>
                      <div class="dataNum">82%</div>
                  </div>
              </div>
              <div class="item-card">
                  <img src="../assets/imgs/bg00.jpg" alt="" />
                  <div class="dataDet">
                      <div>空气温度</div>
                      <div class="dataNum">61.5%</div>
                      <div>空气湿度</div>
                      <div class="dataNum">71%</div>
                      <div>空气湿度</div>
                      <div class="dataNum">82%</div>
                  </div>
              </div>
          </div>
          <div class="live-card">
              <div class="item-card">
                  <img src="../assets/imgs/bg00.jpg" alt="" />
                  <div class="dataDet">
                      <div>空气温度</div>
                      <div class="dataNum">61.5%</div>
                      <div>空气湿度</div>
                      <div class="dataNum">71%</div>
                      <div>空气湿度</div>
                      <div class="dataNum">82%</div>
                  </div>
              </div>
              <div class="item-card">
                  <img src="../assets/imgs/bg00.jpg" alt="" />
                  <div class="dataDet">
                      <div>空气温度</div>
                      <div class="dataNum">61.5%</div>
                      <div>空气湿度</div>
                      <div class="dataNum">71%</div>
                      <div>空气湿度</div>
                      <div class="dataNum">82%</div>
                  </div>
              </div>
          </div>
      </div>
      <Layout class="right-content">
          <div class="layout-content">
              <div class="title">园区特色</div>
              <div class="feature">所谓特色产业园区，就是指坚持 特色化、专业化、集约化、市场化、发展方向，园区产业定位明确、形成产业集聚，园区内企业与研发、服务等机构形成耦合关系，园区从功能单一的生产型园区向功能复合的产
                  业发展平台转型，园区服务功能从简单的招商服务向完善的产业生态升级，形成产业特色明显、功能布局合理、承载能力强的产业园区。 特色产业园区
                  的特点体现为“三特”
              </div>
          </div>
          <div class="layout-footer">
              <div class="title">园区收益</div>
              <line-chart></line-chart>
          </div>
      </Layout>
  </div>
</template>
<script>
  import lineChart from '../components/echarts/lineChart'
  export default {
      name: 'garden',
      data() {
          return {
            
          }
      },
      components: {
        lineChart
      },
              
  }
</script>
<style>
/* 整个主体内容 */
.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 95%;
  width: 98%;
  margin: 10px;
  padding: 10px;
  background: #fff;    
}
.layout{
  border-radius: 4px;
  color: black;
  text-align: center;
  border: 1px solid #cecece;
}
/* 左边 */
.sider{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 70%;
  background-color: #fff;
  font-size: 20px;
}
.live-card {
  display: flex;
  padding: 5px 5px 10px 5px;
  height: 100%;
  width: 100%;
}
.item-card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  margin: 0 5px 0 5px;
  height: 100%;
  width: 50%;
  color: black;
  border: 1px solid #cecece;
  border-radius: 5px;
  box-shadow: 0 1px 0 0 #cecece;
}
.item-card img {
  height: 230px;
  width: 230px;
  margin: 10px;
}
.dataDet {
  display: inline-block;
  width: 20%;
  font-size: 15px;
}
.dataNum {
  font-size: 25px;
}
/* 右边 */
.right-content {
  width: 30%;  
  background-color: #fff;
}
.layout-content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  margin: 0 10px 10px 10px;
  padding: 10px 30px 80px 30px;
  background: #fff;
  color: black;
  border: 1px solid #cecece;
  box-shadow: 0 1px 0 0 #cecece;
}
.title {
  font-size: 20px;
  font-weight: 550;
}
.feature {
  margin: 10px 0 0 0;
  font-size: 14px;
}
.layout-footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  margin: 0 10px 0 10px;
  background: #fff;
  color: black;
  border: 1px solid #cecece;
  box-shadow: 0 1px 0 0 #cecece;
}

</style>

