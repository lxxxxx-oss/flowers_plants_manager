<template>
  <div id="box">
		<ul>
			<li v-for="(item, index) in flowerList" :key="index">
				<!-- <img v-bind:src="item.src" alt=""> -->
        <el-image 
          :src="item.src" 
          :preview-src-list="imgList">
        </el-image>
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
            src: 'https://www.penzai.com/uploads/img/202006/18/1592463787342314.jpg',
            name: '金樱子',
            breed: '播种、扦插',
            flowerSeason: '4～6月',
            soil: '不择土壤',
            water: '喜湿润，也耐旱'
          },
          {
            src: 'https://ts1.cn.mm.bing.net/th/id/R-C.e4258a59692f35e8d1d7a25572be29a3?rik=HFMRjEufqMPjww&riu=http%3a%2f%2fpic1.huashichang.com%2f2016%2f0709%2f13%2f57808ff203dfd.jpg&ehk=Hw5cYvXZwJQWU4v0i5ufEAYvKPMVj0pBAgY%2baXWLYis%3d&risl=&pid=ImgRaw&r=0',
            name: '栀子花',
            breed: '扦插',
            flowerSeason: '5～7月',
            soil: '喜疏松肥沃的沙质酸性壤土',
            water: '喜湿润'
          },
          {
            src: 'https://ts1.cn.mm.bing.net/th/id/R-C.8aece3909967cf5cb5f66b79455d6c7a?rik=wYYsFThpZICYyw&riu=http%3a%2f%2fwww.wenphoto.com%2fuploads%2fquestions%2f20170917%2ffca3457e482bead59c916b936dc359f7.jpg&ehk=qLPGj94K1%2fYR6kHfMdt9OSstXOp72oYlqvRzwUAsIA8%3d&risl=&pid=ImgRaw&r=0',
            name: '茉莉花',
            breed: '扦插、压条',
            flowerSeason: '6～10月',
            soil: '喜富含腐殖质的微酸性沙质壤土',
            water: '喜湿润，不耐干旱'
          },
          {
            src: 'https://ts1.cn.mm.bing.net/th/id/R-C.b2b37e1fc54fbabdf80d81beffbb90e7?rik=liOzOWEu%2f8I%2bOw&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20131220%2f20131220174745-821102384.jpg&ehk=gqHKxJEWJH%2fKUTdJEOSdoFdiZbGd60QBPFz2r1funkI%3d&risl=&pid=ImgRaw&r=0',
            name: '扶桑',
            breed: '扦插',
            flowerSeason: '花期几乎全年',
            soil: '喜疏松湿润，含有机质的微酸性肥沃土壤',
            water: '喜湿润'
          },
          {
            src: 'https://gd3.alicdn.com/imgextra/i2/0/TB1fdCbgEOWBKNjSZKzXXXfWFXa_!!0-item_pic.jpg_400x400.jpg',
            name: '粉扑花',
            breed: '播种、扦插',
            flowerSeason: '由春至秋',
            soil: '喜疏松、肥沃的壤土',
            water: '喜湿润、较耐旱'
          },
          {
            src: 'https://ts1.cn.mm.bing.net/th/id/R-C.4825b7ae2a05450d38acc36a89af0bfb?rik=ARxZjzozZXPulA&riu=http%3a%2f%2fwww.xiao89.com%2fuploads%2fallimg%2f180404%2f6-1P4041G507.jpg&ehk=n9%2fYb0nMTAbhfMnuDrNUp5rOnhJ39vxyoY4USndztjY%3d&risl=&pid=ImgRaw&r=0',
            name: '文殊兰',
            breed: '分株、播种',
            flowerSeason: '5～10月',
            soil: '不择土壤，以肥沃、疏松的壤土为宜',
            water: '喜湿润，耐盐碱'
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
        ],
        // 存储所有图片的地址，用于组件的预览图片
        imgList: []
      }
    },
    created() {
      this.collectImg()
      console.log(this.imgList);
    },
    methods: {
      collectImg() {
        this.flowerList.forEach(e => {
          this.imgList.push(e.src)
        })
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