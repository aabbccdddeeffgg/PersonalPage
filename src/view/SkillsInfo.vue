<template>
    <el-card class="skills-info-card" shadow="always">
      <div class="container">
        <transition name="fade-slide-up" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <div class="skills-background" v-if="showContent">
            <div class="skills-content">
              <div class="skills-item">
                <h3 class="section-title">语言能力</h3>
                <p>CET-6 592分，具备优秀的听说读写能力，能够阅读英文文献，能够流畅使用英语进行日常交流。</p>
              </div>
              <div class="skills-item">
                <h3 class="section-title">专业技能</h3>
                <ul>
                  <li>熟练运用 office 办公软件</li>
                  <li>熟悉 C++/Python 语言</li>
                  <li>熟悉 numpy、pandas 等库</li>
                  <li>熟悉各种数据挖掘算法</li>
                  <li>熟悉神经网络结构</li>
                  <li>熟悉基本的数据结构和算法</li>
                  <li>了解 Linux 开发环境</li>
                  <li>熟悉 git 代码管理操作</li>
                  <li>掌握良好的代码语言规范</li>
                  <li>善于查找技术资料，常逛相关技术博客</li>
                  <li>熟练使用 ChatGPT 等 AI 工具</li>
                  <li>有自己的 GitHub 仓库</li>
                </ul>
              </div>
              <div class="skills-item">
                <h3 class="section-title">前端开发技能</h3>
                <ul>
                  <li>熟悉 HTML、CSS、JavaScript 前端技术</li>
                  <li>熟悉 Vue 框架</li>
                  <li>熟悉 Element 库</li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
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
  .skills-info-card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  .container {
    display: flex;
    justify-content: center;
  }
  
  .skills-background {
    background-color: #e0f2f1; /* 淡绿色背景框 */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .skills-background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.1), rgba(255,255,255,0) 70%);
    border-radius: 8px;
    z-index: 0;
  }
  
  .skills-content {
    font-size: 16px;
    position: relative;
    z-index: 1;
  }
  
  .skills-item {
    margin-bottom: 20px;
  }
  
  .section-title {
    font-size: 20px;
    font-weight: bold;
    color: #00796b;
    margin-bottom: 10px;
  }
  
  .skills-item ul {
    list-style-type: disc;
    margin: 8px 0 0 20px;
  }
  
  .skills-item li {
    margin: 4px 0;
  }
  
  /* 动画效果 */
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fade-slide-up-enter-active, .fade-slide-up-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .fade-slide-up-enter, .fade-slide-up-leave-to /* .fade-slide-up-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(20px);
  }
  </style>
  