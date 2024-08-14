<template>
   <div class="flex">
    <SideBar />
    <div class="flex-1 p-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue'

</script>

<style>
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
</style>
