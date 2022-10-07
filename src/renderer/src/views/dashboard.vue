<script setup>
import * as echarts from 'echarts'
import { onMounted, onUnmounted } from 'vue'
import Footer from '../components/footer.vue'
let myChart = null
onMounted(() => {
  myChart = echarts.init(document.getElementById('zoom'))
  // 指定图表的配置项和数据
  const option = {
    title: {
      text: '统计折线图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['新增用户', '定时任务', '报告数据']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['2022-10-1', '2022-10-2', '2022-10-3', '2022-10-4', '2022-10-5']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '新增用户',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0, 0, 0, 0, 1]
      },
      {
        name: '定时任务',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0, 0, 0, 1, 2]
      },
      {
        name: '报告数据',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0, 0, 1, 1, 2]
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
})

onUnmounted(() => {
  myChart.dispose()
})
</script>
<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card shadow="hover">
        <template #header>
          <span class="border-l-4 border-cyan-900 pl-1">用户数</span>
        </template>
        1<small>人</small>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        <template #header>
          <span class="border-l-4 border-cyan-900 pl-1">任务数</span>
        </template>
        2<small>个</small>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        <template #header>
          <span class="border-l-4 border-cyan-900 pl-1">报告数</span>
        </template>
        2<small>条</small>
      </el-card>
    </el-col>
  </el-row>
  <el-card class="mt-3" shadow="hover">
    <div id="zoom"></div>
  </el-card>
  <Footer></Footer>
</template>
<style lang="less" scoped>
#zoom {
  min-height: 300px;
}
</style>
