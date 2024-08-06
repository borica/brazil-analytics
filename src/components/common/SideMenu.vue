<template>
  <q-drawer v-model="isSideMenuOpen" bordered class="bg-grey-2" :width="240">
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
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useNavigation } from '@/composables/navigationComposable'

const { isSideMenuOpen } = useNavigation()

const links1 = ref([
  { icon: 'mdi-skull', text: 'BI da Morte' },
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
<style scoped lang="sass"></style>
