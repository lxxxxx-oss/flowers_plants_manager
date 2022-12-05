<template>
  <div>
    <!-- 卡片视图 -->
    <el-card class="userCard">
      <!-- 搜索与添加区域 -->
      <el-row :gutter="30">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList" class="search">
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 用户列表区域 -->
      <el-table :data="userList" border stripe class="infoList">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="权限" prop="role_name"></el-table-column>
        <el-table-column label="操作" width="120px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button
              @click="showEditDialog(scope.row.id)"
              type="primary"
              icon="el-icon-edit"
              size="mini"
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              @click="removeUserById(scope.row.id)"
              type="danger"
              icon="el-icon-delete"
              size="mini"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      ></el-pagination>
    </el-card>

    <!-- 修改用户的对话框 -->
    <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="45%" @close="editDialogClosed">
      <!-- 内容主体区域 -->
      <el-form ref="editFormRef" :model="editForm" :rules="editFormRules" label-width="70px">
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model="editForm.username" disabled></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <!-- 手机 -->
        <el-form-item prop="mobile" label="手机">
          <el-input v-model="editForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        // 当前的页数
        pagenum: 1,
        // 当前每页显示的数据数
        pagesize: 2
      },
      userList: [],
      total: 0,
      // 查询到的用户信息对象
      editForm: {},
      // 控制分配角色对话框的显示与隐藏
      setRoleDialogVisible: false,
      // 所有角色的数据列表
      rolesList: [],
      // 已选中的角色id
      selectRoleId: ''
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    // 获取用户数据列表
    getUserList() {
      // 这里数据是固定的,后面与后端联调可以在这里访问后端接口
      this.userList = [
        {
          id: 1,
          username: 'Lesedi',
          email: '2238428563@qq.com',
          mobile: '17723415716',
          role_name: '超级管理员'
        },
        {
          id: 2,
          username: 'Annie',
          email: '3113947887@qq.com',
          mobile: '13091928883',
          role_name: '普通用户'
        },
      ]
      this.total =  this.userList.length
    },
    // 监听pageSize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getUserList()
    },
    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getUserList()
    },
    // 点击按钮编辑当前用户
    editUser() {
      this.$refs.editFormRef.validate(async valid => {
        // console.log(valid)
        if (!valid) return 0
        const { data: res } = await this.$http.put(
          'users/' + this.editForm.id,
          { email: this.editForm.email, mobile: this.editForm.mobile }
        )
        if (res.meta.status !== 200) {
          return this.$message.error('修改用户失败！')
        }
        this.$message.success('更新用户信息成功！')
        // console.log(res)
        // 隐藏添加用户的对话框
        this.editDialogVisible = false
        // 重新获取用户列表数据
        this.getUserList()
      })
    },
    // 根据 id 值删除当前用户
    async removeUserById(id) {
      // 弹窗询问用户是否删除
      // await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).catch(err => err)
      this.userList.splice(id, 1)
      // 如果用户确认删除，则返回值为字符串confirm
      // console.log(res)
      if (result !== 'confirm') {
        return this.$message.info('已取消了删除！')
      }
      const { data: res } = await this.$http.delete('users/' + id)
      if (res.meta.status !== 200) {
        return this.$message.error('删除用户失败！')
      }
      this.$message.success('用户信息成功删除！')
      this.getUserList()
    },
  }
}
</script>

<style  scoped>
.userCard {
  margin: 10px;
}
.search {
  margin: 0 0 20px 0;
}
.infoList{
  margin: 0 0 20px 0;
}
</style>
