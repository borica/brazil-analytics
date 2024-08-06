<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <top-bar-menu />
    <side-menu />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBarMenu from '@/components/common/TopBarMenu.vue'
import SideMenu from '@/components/common/SideMenu.vue'
</script>

<style lang="sass"></style>
