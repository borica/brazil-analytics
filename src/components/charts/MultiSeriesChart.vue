<template>
  <v-chart :id="chartId" :option="option" style="min-width: 300px; min-height: 300px" autoresize />
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import type { ComposeOption } from 'echarts/core'
import type { BarSeriesOption } from 'echarts/charts'
import type { GridComponentOption } from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type MultiSeriesDataInterface from '@/interfaces/chart/MultiSeriesDataInterface'

use([GridComponent, TooltipComponent, LegendComponent, BarChart, LineChart, CanvasRenderer])

type EChartsOption = ComposeOption<GridComponentOption | BarSeriesOption>

const props = defineProps({
  assetDataUrl: {
    type: String,
    required: true
  }
})

const data: MultiSeriesDataInterface = await import(`../../${props.assetDataUrl}`)

const xAxis = computed(() => {
  if (!data) return []
  return data.label || []
})

const series = computed(() => {
  if (!data) return []
  return data.series || []
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
  legend: {
    bottom: 10
  },
  series: series.value
} as EChartsOption)
</script>

<style scoped lang="sass"></style>
