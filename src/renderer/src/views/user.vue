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
          <el-button type="primary" @click="addUserAction">
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
  <!-- 用户信息 -->
  <el-drawer
    v-model="userInfo"
    :show-close="false"
    modal-class="mymodal"
    size="100%"
    direction="ttb"
  >
    <template #header="{ close }">
      <h4>用户详情</h4>
      <el-button type="danger" @click="close">
        <template #icon>
          <i class="i-ion-ios-close-circle" />
        </template>
        取消
      </el-button>
    </template>
    <template #default>
      <el-descriptions title="基本信息" border column="3">
        <el-descriptions-item label="用户ID">{{ actionUser.userId }}</el-descriptions-item>
        <el-descriptions-item label="蘑菇号">{{ actionUser.moguNo }}</el-descriptions-item>
        <el-descriptions-item label="身份">{{ actionUser.userType }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ actionUser.nikeName }}</el-descriptions-item>
        <el-descriptions-item label="性别">{{ actionUser.gender }}</el-descriptions-item>
        <el-descriptions-item label="学号">{{ actionUser.studentNumber }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ actionUser.phone }}</el-descriptions-item>
        <el-descriptions-item label="密码">{{ actionUser.password }}</el-descriptions-item>
        <el-descriptions-item label="学校">{{ actionUser.schoolName }}</el-descriptions-item>
        <el-descriptions-item label="学院">{{ actionUser.depName }}</el-descriptions-item>
        <el-descriptions-item label="专业">{{ actionUser.majorName }}</el-descriptions-item>
        <el-descriptions-item label="班级">{{ actionUser.className }}</el-descriptions-item>
      </el-descriptions>
    </template>
  </el-drawer>
  <!-- 用户信息end -->
  <el-card shadow="hover">
    <template #header>
      <el-form :inline="true" :model="queryfrom">
        <el-row>
          <el-col :span="7">
            <el-form-item label="姓名:" label-width="auto">
              <el-input v-model="queryfrom.name" placeholder="姓名" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号:">
              <el-input v-model="queryfrom.phone" placeholder="手机号" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="test">
              <template #icon>
                <i class="i-ic-outline-manage-search" />
              </template>
              查询
            </el-button>
          </el-col>
          <el-col :span="5">
            <el-button type="primary" @click="newUserVisible = true">
              <template #icon>
                <i class="i-ic-round-person-add-alt" />
              </template>
              新增用户
            </el-button>
          </el-col>
        </el-row>
      </el-form>
    </template>
    <el-table :data="userData" height="250" style="width: 100%">
      <el-table-column type="selection" width="36" align="center" />
      <el-table-column prop="userId" sortable label="用户ID" align="center" width="95" />
      <el-table-column prop="moguNo" label="蘑菇号" align="center" width="100" />
      <el-table-column prop="headImg" label="姓名" align="center">
        <template #default="scope">
          <div class="flex items-center">
            <el-avatar :size="26" :src="scope.row.headImg" />
            <span class="ml-2">{{ scope.row.nikeName }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号" align="center" width="105" />
      <el-table-column prop="gender" label="性别" align="center" />
      <el-table-column
        prop="schoolName"
        label="学校"
        show-overflow-tooltip
        width="128"
        align="center"
      />
      <el-table-column prop="address" label="签到地址" show-overflow-tooltip width="120" />
      <el-table-column fixed="right" label="操作" align="center" width="100">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="test(scope.row)"> 详情 </el-button>
          <el-divider direction="vertical" />
          <el-button link type="primary" size="small">更多</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      small
      background
      layout="prev, pager, next"
      :total="50"
      class="justify-end mt-4"
    />
  </el-card>
  <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import { pcas } from '../config/pc-code.js'
import { login } from '../api/userAPI.js'
import { decryptUserInfo } from '../utils/index.js'
import { imgUrl } from '../config/index.js'
import { db } from '../db/index.js'
import { liveQuery } from 'dexie'
import { useObservable } from '@vueuse/rxjs'
const newUserVisible = ref(false)
const userInfo = ref(false)
const actionUser = ref()

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

const queryfrom = reactive({
  name: '',
  phone: ''
})

const dzchange = (value) => {
  userform.province = value[0]
  userform.city = value[1]
}

function addUserAction() {
  login(userform.phone, userform.password)
    .then(function (res) {
      saveData(res.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}
function test(scope) {
  actionUser.value = scope
  userInfo.value = true
}

const userData = useObservable(liveQuery(() => db.user.toArray()))

async function saveData(res) {
  try {
    const id = await db.user.add({
      // 用户ID，蘑菇号，头像,手机号，密码，昵称，性别,用户类型,token,学校名称，院系，专业，班级,学号
      // ,userId,moguNo,headImg,phone,password,nikeName,gender,userType,token,schoolName,depName,majorName,className,studentNumber
      userId: res.data.userId, // userId
      moguNo: res.data.moguNo, // 蘑菇号
      headImg: imgUrl + decryptUserInfo(res.data.headImg), // 头像
      phone: userform.phone, // 手机号
      password: userform.password, //密码
      nikeName: decryptUserInfo(res.data.nikeName), // 名字
      gender: res.data.gender == 1 ? '男' : '女', // 性别
      userType: res.data.userType,
      token: res.data.token,
      schoolName: decryptUserInfo(res.data.orgJson.schoolName),
      depName: decryptUserInfo(res.data.orgJson.depName),
      majorName: decryptUserInfo(res.data.orgJson.majorName),
      className: decryptUserInfo(res.data.orgJson.className),
      studentNumber: decryptUserInfo(res.data.orgJson.studentNumber)
    })
    console.log(id)
    ElMessage({
      message: '添加成功!',
      type: 'success'
    })
    newUserVisible.value = false
  } catch {
    ElMessage({
      message: '添加失败!',
      type: 'error'
    })
  }
}
</script>
