<template>
  <v-chart :id="chartId" :option="option" style="min-width: 300px; min-height: 300px" autoresize />
</template>

<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import type { ComposeOption } from 'echarts/core'
import type { BarSeriesOption } from 'echarts/charts'
import type { GridComponentOption } from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type SimpleSeriesDataInterface from '@/interfaces/chart/SimpleSeriesDataInterface'

use([GridComponent, TooltipComponent, PieChart, CanvasRenderer])

type EChartsOption = ComposeOption<GridComponentOption | BarSeriesOption>

const props = defineProps({
  assetDataUrl: {
    type: String,
    required: true
  }
})

const data: SimpleSeriesDataInterface[] = await import(`../../${props.assetDataUrl}`)

const seriesData = computed(() => {
  if (!data.default) return []
  return (
    data.default.map((row: SimpleSeriesDataInterface) => ({ value: row.value, name: row.label })) ||
    []
  )
})

const chartId = uuidv4()
const option = ref({
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      type: 'pie',
      data: seriesData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
} as EChartsOption)
</script>

<style scoped lang="sass"></style>
