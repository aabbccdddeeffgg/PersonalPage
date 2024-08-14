<template>
    <el-card class="project-info-card" shadow="always">
      <div class="container">
        <div class="project-section">
          <transition name="fade-slide-up" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="project-background" v-if="showContent">
              <div class="project-content">
                <div class="project-item">
                  <h3 class="project-title">金庸武侠小说人物知识图谱构建</h3>
                  <p class="project-duration">2024-04 ~ 2024-05</p>
                  <p class="project-role">参与者</p>
                  <p class="project-description"><strong>项目介绍：</strong>以金庸的《倚天屠龙记》为数据，构建人物关系知识图谱。</p>
                  <p class="project-responsibilities"><strong>我的职责：</strong>负责人物实体抽取（使用 thulac 库），参与人物关系抽取（使用预训练的模型如 Bert 以及根据规则的两种抽取方式），参与构建 RDF 三元组并导入 neo4j 图数据库实现知识图谱绘制。</p>
                </div>
                <div class="project-item">
                  <h3 class="project-title">大语言模型 Llama3-8B-Instruct 微调</h3>
                  <p class="project-duration">2024-06 ~ 2024-07</p>
                  <p class="project-role">参与者</p>
                  <p class="project-description"><strong>项目介绍：</strong>针对 KDD Cup 中的购物知识推理赛道微调大模型，以提升购物知识的推理能力。</p>
                  <p class="project-responsibilities"><strong>我的职责：</strong>负责扩充数据集，参与 lora 微调（包括概念理解，函数编写和参数微调），参与思维链尝试以及 prompt 微调。</p>
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
  .project-info-card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  .container {
    display: flex;
    justify-content: center;
  }
  
  .project-section {
    max-width: 800px;
    width: 100%;
  }
  
  .project-background {
    background-color: #e8f5e9; /* 淡绿色背景框 */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .project-content {
    font-size: 16px;
  }
  
  .project-item {
    margin-bottom: 20px;
  }
  
  .project-title {
    font-size: 20px;
    font-weight: bold;
  }
  
  .project-duration, .project-role {
    margin: 8px 0;
  }
  
  .project-description, .project-responsibilities {
    margin-top: 16px;
  }
  
  .project-description strong, .project-responsibilities strong {
    font-weight: bold;
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
  