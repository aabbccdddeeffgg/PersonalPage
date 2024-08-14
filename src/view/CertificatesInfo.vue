<template>
    <el-card class="honors-info-card" shadow="always">
      <div class="container">
        <transition name="fade-slide-up" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <div class="honors-background" v-if="showContent">
            <div class="honors-content">
              <div class="honors-item">
                <h3 class="certificate-title">1. 英语四级六级证书</h3>
                <img
                  class="certificate-image"
                  src="../assets/CET6.png"
                  fit="cover"
                  alt="英语四级六级证书"
                />
              </div>
              <div class="honors-item">
                <h3 class="certificate-title">2. 第十五届蓝桥杯全国软件和信息技术专业人才大赛上海赛区C/C++程序设计大学A组三等奖</h3>
                <img
                  class="certificate-image"
                  src="../assets/BlueCup.jpg"
                  fit="cover"
                  alt="蓝桥杯程序设计奖"
                />
              </div>
              <div class="honors-item">
                <h3 class="certificate-title">3. 第34次CCF计算机软件能力认证220分，排名前27.82%</h3>
                <img
                  class="certificate-image"
                  src="../assets/csp.png"
                  fit="cover"
                  alt="CCF计算机软件能力认证"
                />
              </div>
              <div class="honors-item">
                <h3 class="certificate-title">4. 2024中国国际大学生创新大赛上海大学选拔赛铜奖</h3>
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
  .honors-info-card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  .container {
    display: flex;
    justify-content: center;
  }
  
  .honors-background {
    background-color: #fff3e0; /* 淡橙色背景框 */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .honors-background::before {
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
  
  .honors-content {
    font-size: 16px;
    position: relative;
    z-index: 1;
  }
  
  .honors-item {
    margin-bottom: 20px;
  }
  
  .certificate-title {
    font-size: 18px;
    font-weight: bold;
    color: #d84315;
    margin-bottom: 10px;
  }
  
  .certificate-image {
    max-width: 100%;
    height: 550px;
    border-radius: 8px;
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
  