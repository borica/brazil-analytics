<template>
  <div v-for="(row, key) in structure" v-bind:key="key" class="row q-mt-md q-ml-md chart-container">
    <div v-for="(structure, sKey) in row" v-bind:key="sKey" :class="`col-md-${structure.colSize}`">
      <q-card class="chart-card">
        <q-toolbar-title class="q-py-sm text-center chart-card-title">
          {{ structure.title }}
        </q-toolbar-title>
        <q-separator />
        <suspense>
          <component :is="structure.componentName" :assetDataUrl="structure.assetData" />
        </suspense>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
import homiDashboardStructure from '@/assets/jsons/dashboards/homi-dashboard.json'
import type DashboardStructureInterface from '@/interfaces/dashboard/structures/DashboardStructureInterface'

const structure = computed<DashboardStructureInterface[][]>(() =>
  homiDashboardStructure.map((row) =>
    row.map((structure) => {
      const componentName = structure.componentName
      structure.componentName = defineAsyncComponent(
        () => import(`@/components/charts/${componentName || 'Empty'}.vue`)
      )

      return structure
    })
  )
)
</script>

<style lang="sass">
.chart-card-title
  font-size: 0.8rem !important

.chart-card
  max-width: 95%
</style>
