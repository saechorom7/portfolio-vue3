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
      <div class="logo-container">
        <img  src="/src/assets/umme1.png" alt="logo" width="50px"/>
        <h1 class="logo">YUJIN</h1>
      </div>
      
      <!-- 햄버거 버튼 (모바일용) -->
      <button class="menu-toggle" @click="toggleMenu">☰</button>

      <ul :class="['nav-links', { 'active': isMenuOpen }]">
        <li><a href="#hero" @click="toggleMenu">☁️ Home</a></li>
        <li><a href="#about" @click="toggleMenu">🩰 About</a></li>
        <li><a href="#skills" @click="toggleMenu">🧁 Skill</a></li>
        <li><a href="#projects" @click="toggleMenu">🍨 Project</a></li>
        <li><a href="#contact" @click="toggleMenu">💟 Contact</a></li>
      </ul>
    </div>
  </nav>
</template>
