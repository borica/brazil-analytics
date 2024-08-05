<template>
  <v-chart :id="chartId" :option="option" style="min-width: 300px; min-height: 300px" autoresize />
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import type { ComposeOption } from 'echarts/core'
import type { BarSeriesOption } from 'echarts/charts'
import type { GridComponentOption } from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'

use([GridComponent, LineChart, TooltipComponent, CanvasRenderer])

type EChartsOption = ComposeOption<GridComponentOption | BarSeriesOption>

const props = defineProps({
  assetDataUrl: {
    type: String,
    required: true
  }
})

const data = await import(`../../${props.assetDataUrl}`)

const xAxis = computed(() => {
  if (!data.default) return []
  return data.default.map((row: any) => row.label) || []
})

const yAxis = computed(() => {
  if (!data.default) return []
  return data.default.map((row: any) => row.value) || []
})

const chartId = uuidv4()
const option = ref({
  xAxis: {
    type: 'category',
    data: xAxis.value || []
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {
    trigger: 'axis'
  },
  series: [
    {
      data: yAxis.value || [],
      type: 'line',
      itemStyle: {
        color: '#40b448'
      }
    }
  ]
} as EChartsOption)
</script>

<style scoped lang="sass"></style>
