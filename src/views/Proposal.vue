<template>
  <div class="location">
    <el-button type="text" @click="open">点击获取当前您的位置信息</el-button>
    <!-- 经度 -->
    <div>经度:{{lng}}</div>
    <!-- 纬度 -->
    <div>纬度:{{lat}}</div>
  </div>
</template>

<script>
  import myBMap from "../utils/myBMap";
  export default{
    data() {
      return{
        // 经纬度
        lng: '',
        lat: ''
      }
    },
    methods: {
        open() {
          this.$confirm('是否允许获取您当前的位置信息', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.getLocation();
            this.$message({
              type: 'success',
              message: '获取成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '获取失败'
            });          
          });
        },
        getLocation() {
          //Toast("如长时间未获取办理区域请手动选择");
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
        },
    }
  }

</script>

<style>
  .location {
    height: 100%;
    width: 100%;
    margin: 10px;
    padding: 10px;
    font-size: 35px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>