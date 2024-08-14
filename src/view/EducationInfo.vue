<template>
    <el-card class="education-info-card" shadow="always">
      <div class="container">
        <div class="education-section">
          <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="education-background" v-if="showContent">
              <div class="education-content">
                <h3 class="degree">上海大学（211）</h3>
                <p class="duration">2022-09 ~ 至今</p>
                <p class="major">人工智能（本科）</p>
                <div class="highlight">
                  <p><strong>专业成绩：</strong>GPA专业前十</p>
                  <p><strong>主修课程：</strong></p>
                  <ul>
                    <li>高级语言程序设计C++</li>
                    <li>面向对象程序设计C++（3.7/4）</li>
                    <li>离散数学（3.7/4）</li>
                    <li>数据结构（3.7/4）</li>
                    <li>计算机组成原理与体系结构</li>
                    <li>数据挖掘与知识处理</li>
                    <li>运筹与优化（3.7/4）</li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>
        </div>
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
    el.style.transform = 'scale(0.9)'
  }
  
  const enter = (el, done) => {
    el.offsetHeight // trigger reflow
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    el.style.opacity = 1
    el.style.transform = 'scale(1)'
    done()
  }
  
  const leave = (el, done) => {
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
    el.style.opacity = 0
    el.style.transform = 'scale(0.9)'
    done()
  }
  </script>
  
  <style scoped>
  .education-info-card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  .container {
    display: flex;
    justify-content: center;
  }
  
  .education-section {
    max-width: 800px;
    width: 100%;
  }
  
  .education-background {
    background-color: #e0f7fa; /* 淡蓝色背景框 */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.5s ease;
  }
  
  .education-content {
    font-size: 16px;
  }
  
  .degree {
    font-size: 20px;
    font-weight: bold;
  }
  
  .duration, .major {
    margin: 8px 0;
  }
  
  .highlight {
    margin-top: 16px;
  }
  
  .highlight p {
    margin: 4px 0;
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
  