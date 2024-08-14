<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <span class="text-2xl font-bold text-white">个人主页</span>
    </div>
    <el-menu :default-active="activeMenu" class="sidebar-menu" @select="handleSelect">
      <el-menu-item index="1">基本信息</el-menu-item>
      <el-menu-item index="2">教育信息</el-menu-item>
      <el-menu-item index="3">项目经验</el-menu-item>
      <el-menu-item index="4">实习经验</el-menu-item>
      <el-menu-item index="5">技能特长</el-menu-item>
      <el-menu-item index="6">荣誉证书</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeMenu = ref('1')
const router = useRouter()

const handleSelect = (index) => {
  switch(index) {
    case '1':
      router.push(`/`);
      break;
    case '2':
      router.push(`/education`);
      break;
    case '3':
      router.push(`/projects`);
      break;
    case '4':
      router.push(`/internships`);
      break;
    case '5':
      router.push(`/skills`);
      break;
    case '6':
      router.push(`/certificates`);
      break;
    default: 
      break;
  }
}

</script>

<style scoped>
.sidebar {
  width: 250px;
  background: linear-gradient(180deg, #2d3436, #636e72);
  color: #dfe6e9;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.sidebar-header {
  padding: 20px;
  border-bottom: 2px solid #dfe6e9;
  text-align: center;
}

.sidebar-menu {
  flex: 1;
  padding: 20px;
  background: rgba(0, 0, 0, 0.1);
}

.sidebar-menu .el-menu-item {
  color: #dfe6e9;
  font-size: 16px;
}

.sidebar-menu .el-menu-item.is-active {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}
</style>
