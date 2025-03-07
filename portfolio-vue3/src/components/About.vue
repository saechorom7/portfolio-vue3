<script setup>
import '../assets/styles/about.css';
import { ref, onMounted } from 'vue';

const fadeIn = ref(false);

onMounted(() => {
  setTimeout(() => {
    fadeIn.value = true;
  }, 500); // 페이지 로드 후 애니메이션 시작
});
</script>

<template>
  <div class="about-me">
    <section id="about" class="section about-section" :class="{ 'fade-in': fadeIn }">
      <div class="about-container">
        <div class="about-title">
          <h2 class="title">🩰 About Me</h2>
          <!-- 프로필 사진 -->
          <div class="profile-container">
            <img src="/src/assets/umme1.png" alt="Yujin's Profile" class="profile-img" />
          </div>
        </div>
        
        <!-- 소개글 -->
        <div class="about-text">
          <p class="intro">안녕하세요! 저는 귀여운 디자인을 사랑하는 프론트엔드 개발자 유진입니다. 🎀</p>
          <p class="goal">사용자에게 편안하고 즐거운 경험을 제공하는 UI/UX를 만드는 것이 목표예요! 🌸</p>
          <p class="interests">✨ 관심 분야: Vue.js, 애니메이션, 감성적인 디자인 ✨</p>
          <p class="hobby">💖 취미: 디지털 드로잉, 귀여운 웹사이트 탐방, 감성 카페 가기 ☕</p>
        </div>
      </div>
    </section>
    <section id="skills" class="section skills-section" :class="{ 'fade-in': fadeIn }">
      <h2>🧁 Skills</h2>
      <ul class="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Vue 3</li>
      </ul>
    </section>
  </div>
</template>