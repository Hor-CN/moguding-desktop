<script setup>
import { AppName } from './config/index.js'
import { ref } from 'vue'

const Store = require('electron-store')
const store = new Store()
const dialogVisible = ref(true)
const ischeck = ref(false)
if (store.has('isUseDialog')) {
  dialogVisible.value = false
}
const ok = () => {
  dialogVisible.value = false
  if (!store.has('isUseDialog')) {
    store.set('isUseDialog', 'true')
  }
}

const appName = AppName
let title = ref('仪表盘')
const handleSelect = (key, keyPath) => {
  switch (key) {
    case '/':
      title.value = '仪表盘'
      break
    case '/user':
      title.value = '用户系统'
      break
    case '/tasks':
      title.value = '定时任务'
      break
    default:
      title.value = '未开发'
      break
  }
}
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="用户协议"
    width="40%"
    :close-on-click-modal="false"
    align-center
    :show-close="false"
    :destroy-on-close="true"
    modal-class="mymodal"
    class="rounded-2"
  >
    <el-scrollbar height="200px">
      欢迎使用工学云/蘑菇丁助手<br />以下为本软件使用须知，请仔细阅读。
      <ul class="list-decimal" style="padding-left: 20px !important">
        <li>本助手免费使用，付费代表你已被骗</li>
        <li>
          本软件不会收集用户信息与用户的工学云或蘑菇丁账号信息，所有与工学云或蘑菇丁相关的数据均直连工学云或蘑菇丁服务器
        </li>
        <li>
          本软件不代表工学云或蘑菇丁软件的立场，任何使用者与分享者的行为或言论也不代表本软件与本软件开发者的立场
        </li>
        <li>
          本软件仅供内部学习与交流免费使用，请勿用于违法违规的行为，使用者的任何行为与言论与本软件的开发者无关
        </li>
        <li>
          本软件部分功能经过长期测试已尽量降低使用风险，但用户还是需要自行承担一定的风险，包括但不限于:签到或实习报告数据异常、工学云或蘑菇丁账号异常、账号冻结
        </li>
        <li>本软件欢迎使用者提出建议与反馈Bug</li>
        <li>本软件与本须知最终解释权归本软件开发者</li>
        <li>如继续使用则代表您同意以上须知并自愿承担风险，祝您使用愉快。</li>
      </ul>
    </el-scrollbar>

    <template #footer>
      <span class="dialog-footer">
        <el-space wrap>
          <el-checkbox v-model="ischeck" label="不在提示" size="large" />
          <el-button type="primary" @click="ok">我已了解</el-button>
        </el-space>
      </span>
    </template>
  </el-dialog>
  <el-container
    class="container app-scrollbar rounded-lg border-1 border-gray-300 border-solid subpixel-antialiased"
  >
    <el-container>
      <el-aside width="181px" class="bg-white opacity-96 border-gray-300 border-r-1">
        <div class="h-12 font-medium text-center leading-12" style="-webkit-app-region: drag">
          {{ appName }}
        </div>
        <el-input placeholder="搜索" disabled class="bg-light-100 m-2 mx-4" style="width: 148px">
          <template #prefix>
            <i class="i-ic-baseline-search"></i>
          </template>
        </el-input>
        <div class="w-full overflow-hidden" style="height: 346px">
          <el-scrollbar noresize class="px-4">
            <el-menu
              class="bg-transparent border-none"
              @select="handleSelect"
              router
              default-active="/"
            >
              <el-menu-item index="/">
                <i class="i-ic-sharp-local-fire-department text-size-5 mr-2" />
                <span>仪表盘</span>
              </el-menu-item>
              <el-menu-item index="/user">
                <i class="i-ic-sharp-people-outline text-size-5 mr-2" />
                <span>用户系统</span>
              </el-menu-item>
              <el-menu-item index="/tasks">
                <i class="i-ic-outline-playlist-add-check text-size-5 mr-2" />
                <span>定时任务</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="i-ic-baseline-menu-book text-size-5 mr-2" />
                <span>报告系统</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="i-ic-baseline-settings text-size-5 mr-2" />
                <span>设置</span>
              </el-menu-item>
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container>
        <el-header
          class="bg-white leading-12 border-gray-300 border-b-1 h-12! font-medium"
          style="-webkit-app-region: drag"
        >
          {{ title }}
        </el-header>
        <el-main class="main bg-light-100">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="less">
@import './assets/css/app.less';
</style>
