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
          <el-button type="primary" @click="newUserVisible = true">
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
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="userId" label="用户ID" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import { pcas } from '../config/pc-code.js'

const newUserVisible = ref(false)

const userform = reactive({
  phone: '',
  password: '',
  sfcs: '',
  address: ''
})
const tableData = [
  {
    userId: '001',
    name: '测试数据',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    userId: '001',
    name: '测试数据',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    userId: '001',
    name: '测试数据',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    userId: '001',
    name: '测试数据',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
