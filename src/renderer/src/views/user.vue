<template>
  <!-- 弹窗 -->
  <el-drawer v-model="newUserVisible" :show-close="false" modal-class="mymodal">
    <template #header="{ close }">
      <h4>新增用户</h4>
      <el-button type="danger" @click="close">
        <template #icon>
          <i class="i-ion-ios-close-circle" />
        </template>
        取消
      </el-button>
    </template>
    <el-form :model="userform">
      <el-space fill>
        <el-alert :closable="false">
          <p>基本信息</p>
        </el-alert>
        <el-form-item label="账号">
          <el-input v-model="userform.phone" type="tel" placeholder="请输入手机号" clearable />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="userform.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
      </el-space>
      <el-space fill>
        <el-alert :closable="false">
          <p>签到信息</p>
        </el-alert>
        <el-form-item label="省市">
          <el-cascader
            :props="{
              label: 'name',
              children: 'children',
              value: 'name'
            }"
            :options="pcas"
            @change="dzchange"
            v-model="userform.default_pc"
            clearable
            filterable
            placeholder="请选择省市"
          />
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="userform.address" placeholder="签到地址(包括省市)" />
        </el-form-item>
        <el-form-item label="经度">
          <el-input v-model="userform.longitude" placeholder="经度" />
        </el-form-item>
        <el-form-item label="纬度">
          <el-input v-model="userform.latitude" placeholder="纬度" />
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="userform.type" placeholder="打卡类型">
            <el-option label="上班" value="START" />
            <el-option label="下班" value="END" />
          </el-select>
        </el-form-item>
        <el-form-item label="设备">
          <el-select v-model="userform.device" placeholder="登录设备">
            <el-option label="安卓 Huawei Mate 40 Pro" value="Android" />
            <el-option label="苹果 IPhone 12 Pro" value="Ios" />
          </el-select>
        </el-form-item>
      </el-space>
    </el-form>
    <template #footer>
      <el-row :gutter="20">
        <el-space wrap>
          <el-button type="success" @click="newUserVisible = true">
            <template #icon>
              <i class="i-ion-location" />
            </template>
            地理位置
          </el-button>
          <el-button type="primary" @click="dzchange">
            <template #icon>
              <i class="i-ic-round-person-add-alt" />
            </template>
            添加
          </el-button>
        </el-space>
      </el-row>
    </template>
  </el-drawer>
  <!-- 弹窗end -->
  <el-card shadow="hover">
    <template #header>
      <el-row :gutter="20">
        <el-col :span="6"> 用户列表 </el-col>
        <el-col :span="6" :offset="12">
          <el-button type="primary" @click="newUserVisible = true">
            <template #icon>
              <i class="i-ic-round-person-add-alt" />
            </template>
            新增用户
          </el-button>
        </el-col>
      </el-row>
    </template>
    <el-table :data="tableData" height="250" style="width: 100%">
      <el-table-column type="selection" width="36" align="center" />
      <el-table-column prop="headImg" label="头像" align="center">
        <template #default="scope">
          <el-avatar :size="30" :src="scope.row.headImg" />
        </template>
      </el-table-column>
      <el-table-column prop="userId" label="用户ID" align="center" width="95" />
      <el-table-column prop="moguNo" label="蘑菇号" align="center" width="100" />
      <el-table-column prop="name" label="姓名" align="center" />
      <el-table-column prop="phone" label="手机号" align="center" width="105" />
      <el-table-column prop="school" label="学校" align="center" />

      <el-table-column prop="address" label="签到地址" show-overflow-tooltip />
    </el-table>
    <el-pagination
      small
      background
      layout="prev, pager, next"
      total-text="总数"
      :total="50"
      class="mt-4 float-right mb-3"
    />
  </el-card>
  <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import { pcas } from '../config/pc-code.js'

const newUserVisible = ref(false)

const userform = reactive({
  default_pc: '',
  phone: '',
  password: '',
  country: '中国',
  province: '',
  city: '',
  address: '',
  longitude: '',
  latitude: '',
  description: '',
  type: 'START',
  device: ''
})

const dzchange = (value) => {
  userform.province = value[0]
  userform.city = value[1]
}

const tableData = [
  {
    headImg: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    userId: '103817460',
    moguNo: '6197939',
    name: '张三',
    phone: '1325201400',
    school: '武汉大学',
    address: '中国湖北省武汉市江夏区东湖开发区华工园三路1号'
  },
  {
    headImg: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    userId: '103817460',
    moguNo: '6197939',
    name: '张三',
    phone: '1325201400',
    school: '武汉大学',
    address: '中国湖北省武汉市江夏区东湖开发区华工园三路1号'
  },
  {
    headImg: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    userId: '103817460',
    moguNo: '6197939',
    name: '张三',
    phone: '1325201400',
    school: '武汉大学',
    address: '中国湖北省武汉市江夏区东湖开发区华工园三路1号'
  },
  ,
  {
    headImg: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    userId: '103817460',
    moguNo: '6197939',
    name: '张三',
    phone: '1325201400',
    school: '武汉大学',
    address: '中国湖北省武汉市江夏区东湖开发区华工园三路1号'
  },
  ,
  {
    headImg: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    userId: '103817460',
    moguNo: '6197939',
    name: '张三',
    phone: '1325201400',
    school: '武汉大学',
    address: '中国湖北省武汉市江夏区东湖开发区华工园三路1号'
  }
]
</script>
