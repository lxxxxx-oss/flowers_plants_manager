<template>
  <div class="location">
    <el-button type="text" @click="open" class="infoBtn">点击获取当前您的位置信息</el-button>
    <el-divider></el-divider>
    <!-- 经度 -->
    <div>经度:<i style="color: rgb(106, 255, 0);margin-left: 10px;font-size: 30px;">{{lng}}</i></div>
    <!-- 纬度 -->
    <div>纬度:<i style="color: rgb(106, 255, 0);margin-left: 10px;font-size: 30px;">{{lat}}</i></div>
    <el-divider></el-divider>
    <!-- 后端返回的数据，建立的种植意见 -->
    <div class="proposal">
      <div>种植建议</div>
      <!-- 接收到了信息则对信息进行展示 -->
      <div class="plantInfo" v-if="plantProposal">
        <div>您所在地区的地理环境特点</div>
        <div>适合种植的植物</div>
        <el-divider></el-divider>
      </div>
      <!-- 还未接收到后端信息时的提示信息 -->
      <div class="plantInfo" else>
        <div>您还未上传您的位置信息哦！</div>
        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>

<script>
  import myBMap from "../utils/myBMap";
  export default{
    data() {
      return{
        // 经纬度
        lng: '',
        lat: '',
        // 后端返回的信息
        plantProposal: ''
      }
    },
    methods: {
        open() {
          this.$confirm('是否允许获取您当前的位置信息', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info'
          }).then(() => {
            this.getLocation();
            this.$message({
              type: 'success',
              message: '获取成功'
            });
          }).catch(() => {
            this.$message({
              type: 'warning',
              message: '获取失败'
            });          
          });
        },
        getLocation() {
          myBMap.init().then(() => {
            let that = this;
            let geolocation = new BMap.Geolocation(); 
            // 创建百度地理位置实例，代替 navigator.geolocation
            geolocation.getCurrentPosition(function (e) {
              if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                // 百度 geolocation 的经纬度属性不同，此处是 point.lat 而不是 coords.latitude
                let point = new BMap.Point(e.point.lng, e.point.lat);
                let gc = new BMap.Geocoder();
                gc.getLocation(point, function (res) {
                  console.log(res);
                  that.lng = parseInt(res.point.lng)
                  that.lat = parseInt(res.point.lat)
                  //需要的位置信息在这获取
                });
              } else {
                Toast("定位失败，请手动选择区域或重新定位");
                this.showloading = false;
              }
            });
          });
          // 调用方法，将经纬度信息传递给后端，同时接收后端返回的建议信息
        },
    }
  }

</script>

<style>
  .location {
    margin: 10px;
    padding: 20px;
    font-size: 25px;
    /* background-color:  rgb(106, 255, 0); */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .infoBtn {
    font-size: 30px;
    font-weight: 550;
    padding-bottom: 5px;
    border-bottom: 2px solid #cecece;
  }
  .proposal {
    margin: 20px 0 0 0;
    font-weight: 600;
  }
  .plantInfo {
    margin: 20px 0 0 0;
    font-size: 20px;
    font-weight: 500;
    color: rgb(245, 76, 76);
  }
</style>