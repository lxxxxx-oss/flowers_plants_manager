<template>
  <div id="monitor">
   <div class="moitorTitle">种植管理</div>
    <div class="soil">
      <div v-if="localCharact.soilCharact" class="soilCharact">
        <div class="soilCharactTitle">您所在地区的土壤特点：<span style="color: #FF0033;font-size: 28px">{{localCharact.soilCharact}}</span></div>
        <el-divider></el-divider>
      </div>
    </div>
    <p v-if="!localCharact.soilCharact">
      <el-button @click="setLoading" class="soilCharactTitle">还不知道所在地区的土壤特点？点击查询</el-button>
      <el-divider></el-divider>
    </p>
    
      <div>
        <div class="plantTitle">适合种植的植物有以下几种</div>
        <el-divider></el-divider>
        <div class="all">
          <div class="plantCard" v-for="item in localCharact.suitablePlant"
          :key="item.name">
            <img :src="item.url" />
            <div style="padding-top: 10px;">
              <span>{{ item.name }}</span>
              <div class="bottom card-header">
                <!-- <span class="time">{{ currentDate }}</span> -->
                <el-dropdown :hide-on-click="false" placement="bottom">
                <span class="el-dropdown-link">
                  如何种植<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item divided>播种：{{item.plantProcess.sow}}</el-dropdown-item>
                  <el-dropdown-item divided>浇水：{{item.plantProcess.purling}}</el-dropdown-item>
                  <el-dropdown-item divided>除草：{{item.plantProcess.weeding}}</el-dropdown-item>
                  <el-dropdown-item divided>温度：{{item.plantProcess.temp}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        // 这些数据都可以后端动态的传入，可以根据用户上传的位置信息个性化的推送
        localCharact: {
          soilCharact: "疏松、肥沃的沙质壤土",
          suitablePlant: [
            {
              name: '风信子',
              url: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
              plantProcess: {
                sow: "鳞茎的上端要露出盆土，种植后应放置在阳光处，并要保持盆土湿润",
                purling: "在生长期和花期要保持植株湿润。一般房间的空气湿度即可",
                weeding: "无须担心杂草问题",
                temp: "凉爽湿润"
              }
            },
            {
              name: '金樱子',
              url: 'https://www.penzai.com/uploads/img/202006/18/1592463787342314.jpg',
              plantProcess: {
                sow: "鳞茎的上端要露出盆土，种植后应放置在阳光处，并要保持盆土湿润",
                purling: "在生长期和花期要保持植株湿润。一般房间的空气湿度即可",
                weeding: "无须担心杂草问题",
                temp: "凉爽湿润"
              }
            },
            {
              name: '栀子花',
              url: 'https://ts1.cn.mm.bing.net/th/id/R-C.e4258a59692f35e8d1d7a25572be29a3?rik=HFMRjEufqMPjww&riu=http%3a%2f%2fpic1.huashichang.com%2f2016%2f0709%2f13%2f57808ff203dfd.jpg&ehk=Hw5cYvXZwJQWU4v0i5ufEAYvKPMVj0pBAgY%2baXWLYis%3d&risl=&pid=ImgRaw&r=0',
              plantProcess: {
                sow: "鳞茎的上端要露出盆土，种植后应放置在阳光处，并要保持盆土湿润",
                purling: "在生长期和花期要保持植株湿润。一般房间的空气湿度即可",
                weeding: "无须担心杂草问题",
                temp: "凉爽湿润"
              }
            },
            {
              name: '粉扑花',
              url: 'https://gd3.alicdn.com/imgextra/i2/0/TB1fdCbgEOWBKNjSZKzXXXfWFXa_!!0-item_pic.jpg_400x400.jpg',
              plantProcess: {
                sow: "鳞茎的上端要露出盆土，种植后应放置在阳光处，并要保持盆土湿润",
                purling: "在生长期和花期要保持植株湿润。一般房间的空气湿度即可",
                weeding: "无须担心杂草问题",
                temp: "凉爽湿润"
              }
            },
            {
              name: '月季花',
              url: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.9SVb4tM2oP_1XPNQMD-rhAHaFL?w=275&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              plantProcess: {
                sow: "鳞茎的上端要露出盆土，种植后应放置在阳光处，并要保持盆土湿润",
                purling: "在生长期和花期要保持植株湿润。一般房间的空气湿度即可",
                weeding: "无须担心杂草问题",
                temp: "凉爽湿润"
              }
            },
          ],
        },
        loading: false,
        // currentDate: '2021-06-01',
        lists: [] 
      }
    },
    methods: {
      // 查询所在地区的土壤信息，这里没有接口，先做个样子
      setLoading() {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style scoped>
  #monitor {
    margin: 10px;
    padding: 10px 10px 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .moitorTitle {
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
  }

  .soilCharactTitle {
    font-size: 25px;
  }
  .plantTitle {
    margin: 0 0 15px 0;
    font-size: 25px;
  }
  .all {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .plantCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 300px; */
    margin: 0 10px 15px 0;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .plantCard img{
    height: 200px;
    width: 200px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 10px;
  }
</style>