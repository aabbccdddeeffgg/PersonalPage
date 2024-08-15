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
      <el-menu-item index="7"><el-link href="https://github.com/aabbccdddeeffgg/PersonalPage.git" target="blank" style="color: burlywood; font-size: 0.98rem; line-height: 1.4rem">Project Link</el-link></el-menu-item>
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
      router.push(`/PersonalPage`);
      break;
    case '2':
      router.push(`/PersonalPage/education`);
      break;
    case '3':
      router.push(`/PersonalPage/projects`);
      break;
    case '4':
      router.push(`/PersonalPage/internships`);
      break;
    case '5':
      router.push(`/PersonalPage/skills`);
      break;
    case '6':
      router.push(`/PersonalPage/certificates`);
      break;
    case '7':
      window.location.href = 'https://github.com/aabbccdddeeffgg/PersonalPage.git';
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

.github-link {
  color: blueviolet; /* 文字颜色 */
  font-size: 1.03rem; /* 字体大小 */
  line-height: 1.5rem; /* 行高 */
  text-decoration: none; /* 移除下划线 */
  padding: 0 10px; /* 内边距 */
}

.github-link:hover {
  text-decoration: underline; /* 鼠标悬浮时添加下划线 */
}
</style>
