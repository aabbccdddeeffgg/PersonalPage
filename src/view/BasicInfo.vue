<template>
    <el-card class="basic-info-card" style="height: 400px">
      <div class="container">
        <div class="info-section">
          <div class="info-header">
            <h2 class="info-title">基本信息</h2>
            <p class="slogan">展现真实自我，让每一刻更精彩！</p>
          </div>
          <el-form label-width="120px" label-position="top">
            <el-row :gutter="20">
              <el-col :span="8" class="form-item-col">
                <el-form-item label="姓名" class="text-base font-semibold">
                  <span>{{ formData.name }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8" class="form-item-col">
                <el-form-item label="性别" class="text-base font-semibold">
                  <span>{{ formData.gender }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8" class="form-item-col">
                <el-form-item label="年龄" class="text-base font-semibold">
                  <span>{{ age }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8" class="form-item-col">
                <el-form-item label="联系方式" class="text-base font-semibold">
                  <span>{{ formData.contact }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8" class="form-item-col">
                <el-form-item label="电子邮箱" class="text-base font-semibold">
                  <span>{{ formData.email }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8" class="form-item-col">
                <el-form-item label="地址" class="text-base font-semibold">
                  <span>{{ formData.address }}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="photo-section">
          <img
            class="profile-photo"
            src="..\assets\myPhote.jpg"
          />
        </div>
      </div>
      <!-- 装饰性元素 -->
      <div class="decorative-elements">
        <div class="decorative-line"></div>
        <div class="decorative-circle"></div>
        <div class="decorative-triangle"></div>
      </div>
    </el-card>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import dayjs from 'dayjs'
  
  const formData = ref({
    name: '王彦琪',
    gender: '男',
    dob: '2004-05-30', // 原出生日期数据
    contact: '18016293563',
    email: '18016293563@163.com',
    address: '上海市徐汇区'
  })
  
  // 计算年龄的函数
  const calculateAge = (dob) => {
    return dayjs().diff(dayjs(dob), 'year')
  }
  
  // 计算年龄
  const age = computed(() => calculateAge(formData.value.dob))
  </script>
  
  <style scoped>
  .basic-info-card {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #f0f0f0, #ffffff);
    border: 1px solid #ddd;
    position: relative;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  
  .info-section {
    flex: 2;
    position: relative;
  }
  
  .info-header {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .info-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
  
  .info-subtitle {
    font-size: 14px;
    color: #666;
  }
  
  .slogan {
    font-size: 16px;
    font-weight: bold;
    color: #3498db;
    margin-top: 10px;
    text-align: center;
  }
  
  .photo-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .profile-photo {
    width: 150px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #3498db;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .profile-photo:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
  
  .photo-description {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  
  .photo-caption {
    font-size: 12px;
    color: #777;
    background: rgba(255, 255, 255, 0.8);
    padding: 5px;
    border-radius: 5px;
  }
  
  .form-item-col {
    display: flex;
    align-items: center;
    animation: fadeIn 1s ease-in-out;
  }
  
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
  
  /* 装饰性元素 */
  .decorative-elements {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
  }
  
  .decorative-line {
    width: 100px;
    height: 2px;
    background: rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    transform: rotate(45deg);
  }
  
  .decorative-circle {
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .decorative-triangle {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.1);
  }
  
  .decorative-text {
    font-size: 16px;
    color: #3498db;
    font-weight: bold;
    text-align: center;
  }
  </style>
  