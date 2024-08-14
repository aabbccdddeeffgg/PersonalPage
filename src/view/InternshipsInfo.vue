<template>
    <el-card class="internship-info-card" shadow="always">
      <div class="container">
        <div class="internship-section">
          <transition name="fade-slide-up" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="internship-background" v-if="showContent">
              <div class="internship-content">
                <h3 class="position">山东杨巴克斯上海分公司</h3>
                <p class="duration">2024-07 ~ 2024-08</p>
                <p class="role">前端工程师</p>
                <div class="highlight">
                  <p><strong>项目介绍：</strong>协助构建禄费项目，禄费是一个企业托管平台，主要为企业赋能，有订单、报销、员工、部门管理等主要功能。</p>
                  <p><strong>我的职责：</strong>本人作为前端，负责搭建订单管理、员工管理和费用组管理页面，构建三个弹窗组件，搭建路由，与产品后端交互过禄费货运页面，熟悉开发流程。使用技术栈是Vue3+Element Plus。</p>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <img style="width: 350px; height: 450px" src="../assets/intern.png"/>
      </div>
    </el-card>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const showContent = ref(false)
  
  onMounted(() => {
    showContent.value = true
  })
  
  const beforeEnter = (el) => {
    el.style.opacity = 0
    el.style.transform = 'translateY(20px)'
  }
  
  const enter = (el, done) => {
    el.offsetHeight // trigger reflow
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    el.style.opacity = 1
    el.style.transform = 'translateY(0)'
    done()
  }
  
  const leave = (el, done) => {
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
    el.style.opacity = 0
    el.style.transform = 'translateY(20px)'
    done()
  }
  </script>
  
  <style scoped>
  .internship-info-card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  .container {
    display: flex;
    justify-content: center;
  }
  
  .internship-section {
    max-width: 800px;
    width: 100%;
  }
  
  .internship-background {
    background-color: #e0f2f1; /* 淡绿色背景框 */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.5s ease;
  }
  
  .internship-content {
    font-size: 16px;
  }
  
  .position {
    font-size: 20px;
    font-weight: bold;
  }
  
  .duration, .role {
    margin: 8px 0;
  }
  
  .highlight {
    margin-top: 16px;
  }
  
  .highlight p {
    margin: 4px 0;
  }
  
  .highlight p strong {
    font-weight: bold;
  }
  
  .highlight ul {
    list-style-type: disc;
    margin: 8px 0 0 20px;
  }
  
  /* 动画效果 */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  