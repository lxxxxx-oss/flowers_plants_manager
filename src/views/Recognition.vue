<template>
  <div>
    <el-upload
      class="uploadImg"
      :action="uploadActionUrl"
      :on-preview="handlePreview"
      :on-success="uploadSuccess"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <!-- 渲染准备上传的图片信息 -->
    <div class="image-preview transition-box" v-for="val, index in fileList" :key="(index | val.name)">
      <img :src="val.url" />
      <!-- <div>{{index}}</div> -->
      <div class="imgInfo">
        <p>{{val.name}}</p>
        <p v-if="val.result == null">{{val.result}}</p>
      </div>
      <span class="el-icon-close deletaImg" @click="deleteImg"></span>
    </div>
    <el-button class="submitUpload" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // 上传文件的相关信息
        fileList: [
          {name: 'flower1', url: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.lg_u--tUj9CDaqLKmWUL2QHaEo?pid=ImgDet&rs=1', result: "null"},
          {name: 'flower2', url: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.xsDCY8iYFF5MoRnypGWzEgHaEK?pid=ImgDet&rs=1', result: "null"}
        ],
        // 上传至后台的地址
        uploadActionUrl: "",
      };
    },
    methods: {
      // 上传文件信息预览
      handlePreview(file) {
        console.log(file);
        // this.data.fileList.push(file)
      },
      // 上传成功
      uploadSuccess(response){
        console.log(response);
      },
      // 删除上传的图片
      deleteImg(index) {
        console.log(index);
        this.show = !this.show
        this.fileList.splice(index, 1)
      },
      // 将信息提交到服务器
      submitUpload() {
        console.log(11);
      },
    }
  }
</script>

<style>
  .uploadImg {
    margin: 10px;
  }
  .submitUpload {
    margin: 10px;
  }

  .image-preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 20px 0 10px;
    padding: 10px 10px 5px 10px;
    border: 1px solid #cecece;
    border-radius: 5px;
    font-size: 25px;
  }
  .image-preview img {
    width: 100px; 
    height: 100px;
    border-radius: 5px;
  }
  .imgInfo {
    display: flex;
    justify-content: space-between;
    width: 84%;
  }
  .deletaImg {
    position: relative;
    display: inline-block;
    display: inline;
    cursor:pointer;
    top: -45px;
    right: -10px;
    color: rgb(208, 202, 202);
  }
</style>