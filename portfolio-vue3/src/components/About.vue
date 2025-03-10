<script setup>
import '../assets/styles/about.css';
import { ref, onMounted } from 'vue';

const activePage = ref(0); // 0 = 첫 번째 소개, 1 = 두 번째 소개

const changePage = (direction) => {
  if (direction === "next" && activePage.value < 1) {
    activePage.value++;
  } else if (direction === "prev" && activePage.value > 0) {
    activePage.value--;
  }
};

// 스크롤 이벤트 감지해서 자동 전환
const handleScroll = (event) => {
  if (event.deltaY > 0 && activePage.value < 1) {
    activePage.value++;
  } else if (event.deltaY < 0 && activePage.value > 0) {
    activePage.value--;
  }
};

onMounted(() => {
  window.addEventListener("wheel", handleScroll);
});
</script>

<template>
  <div class="about-me">
    <section id="about" class="section about-section">
      <div class="about-container">
        <div class="about-title">
          <h2 class="title">🩰 About Me</h2>
          <div class="profile-container">
            <img src="/src/assets/umme1.png" alt="Yujin's Profile" class="profile-img" />
          </div>
        </div>

        <!-- 소개글 (스크롤 시 전환) -->
        <div class="about-content" :class="{ 'page-two': activePage === 1 }">
          <!-- 첫 번째 소개 페이지 -->
          <div class="about-text first">
            <p class="intro fade-in-text">Hello! I'm Yujin, a developer! Nice to meet you ;3<br>
              <span class="twinkle-effect">cute, user-friendly designs!</span>
            </p>
            <p class="goal fade-in-text">My goal is to create UI/UX that offers a comfy and joyful experience for users!</p>
          </div>

          <!-- 두 번째 소개 페이지 -->
          <div class="about-text second">
            <p class="interests fade-in-text">Interests: <span class="twinkle-effect">Vue.js, JavaScript, HTML/CSS, design</span></p>
            <p class="hobby fade-in-text">Hobbies: <span class="twinkle-effect">Exploring designs, cute websites, and cozy streets</span></p>
          </div>
        </div>

        <!-- 페이지 이동 버튼 -->
        <div class="nav-buttons">
          <button v-if="activePage > 0" @click="changePage('prev')" class="arrow-btn">↑</button>
          <button v-if="activePage < 1" @click="changePage('next')" class="arrow-btn">↓</button>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="section skills-section">
      <h2>🧁 Skills</h2>
      <div class="skills-wrapper">
        <ul class="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Vue 3</li>
        </ul>
      </div>
    </section>
  </div>
</template>
