<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import '/src/assets/styles/navbar.css'; 

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="['navbar', { 'scrolled': isScrolled || isMenuOpen }]">
    <div class="container">
      <h1 class="logo">🐇 YUJIN</h1>
      
      <!-- 햄버거 버튼 (모바일용) -->
      <button class="menu-toggle" @click="toggleMenu">☰</button>

      <ul :class="['nav-links', { 'active': isMenuOpen }]">
        <li><a href="#hero" @click="toggleMenu">🐇 홈</a></li>
        <li><a href="#about" @click="toggleMenu">🩰 소개</a></li>
        <li><a href="#skills" @click="toggleMenu">🧁 기술</a></li>
        <li><a href="#projects" @click="toggleMenu">🍨 프로젝트</a></li>
        <li><a href="#contact" @click="toggleMenu">💟 연락처</a></li>
      </ul>
    </div>
  </nav>
</template>
