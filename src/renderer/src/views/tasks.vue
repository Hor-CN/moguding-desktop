<template>
  <el-empty description="description" />

  <el-drawer v-model="drawer" title="新增定时任务" modal-class="mymodal" :direction="direction">
    <span>Hi, there!</span>
  </el-drawer>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const drawer = ref(true)
const direction = ref('rtl')
</script>
<style></style>
