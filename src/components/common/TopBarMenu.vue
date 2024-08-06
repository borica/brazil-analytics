<template>
  <q-header elevated class="bg-green-11 text-green-8 q-py-xs" height-hint="58">
    <q-toolbar>
      <q-btn flat dense round aria-label="Menu" icon="mdi-menu" @click="toggleLeftDrawer" />

      <div class="row q-ml-lg">
        <q-img src="@/assets/images/brazil-flag.png" height="auto" width="30px" />
        <q-toolbar-title shrink class="text-weight-bold"> Brazil Analytics </q-toolbar-title>
      </div>

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn round dense flat color="green-8" icon="mdi-apps">
          <q-tooltip>Apps</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script setup lang="ts">
import { useNavigation } from '@/composables/navigationComposable'

const { toggleSideMenuStatus } = useNavigation()
function toggleLeftDrawer() {
  toggleSideMenuStatus()
}
</script>
<style scoped lang="sass"></style>
