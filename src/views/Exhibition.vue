<template>
  <div id="box">
		<ul>
			<li v-for="(item, index) in flowerList" :key="index">
				<img v-bind:src="item.src" alt="">
        <!-- 名称 -->
				<h4>{{item.name}}</h4>
        <el-dropdown :hide-on-click="false" placement="bottom">
          <span class="el-dropdown-link">
            特征习性<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided>繁殖方式：{{item.breed}}</el-dropdown-item>
            <el-dropdown-item divided>花期：{{item.flowerSeason}}</el-dropdown-item>
            <el-dropdown-item divided>土壤：{{item.soil}}</el-dropdown-item>
            <el-dropdown-item divided>水份：{{item.water}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 特征、习性 -->
			</li>
		</ul>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        // 这里数据是固定的，后期可以根据后台数据动态改变
        flowerList:[
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },{
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },{
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },{
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },{
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
          {
            src: 'https://www.penzai.com/uploads/img/202008/16/1597546867333298.jpeg',
            name: '风信子',
            breed: '分球',
            flowerSeason: '3～4月',
            soil: '喜疏松、肥沃的沙质壤土',
            water: '喜湿润'
          },
        ]
      }
    }
  }
</script>

<style>
  #box {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px;
    padding: 10px;
    /* background-color: red; */
  }
	#box ul{
		display: flex;
		flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
    /* background-color: red; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}
	#box li{
		padding: 5px;
		list-style: none;
    width: 16.65%;
		/* margin: 15px 15px 0 10px; */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

	}
	#box img{
		width: 200px;
		height: 150px;
	}
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 10px;
  }
</style>