<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
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

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-2" :width="240">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-for="link in links1" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links2" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-xs" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const links1 = ref([
  { icon: 'mdi-skull-outline', text: 'BI da Morte' },
  { icon: 'mdi-account-tie', text: 'Mandatos Presidenciais' },
  { icon: 'mdi-map', text: 'Demográfico' }
])

const links2 = ref([
  { icon: 'mdi-circle', text: 'TBD' },
  { icon: 'mdi-square', text: 'TBD' },
  { icon: 'mdi-triangle', text: 'TBD' },
  { icon: 'mdi-hexagon', text: 'TBD' }
])
</script>

<style lang="sass">
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0, 0, 0, .24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
