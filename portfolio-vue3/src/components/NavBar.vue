<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
      <h1 class="logo">🐰 YUJIN</h1>
      
      <!-- 햄버거 버튼 (모바일용) -->
      <button class="menu-toggle" @click="toggleMenu">☰</button>

      <ul :class="['nav-links', { 'active': isMenuOpen }]">
        <li><a href="#hero" @click="toggleMenu">🏠 홈</a></li>
        <li><a href="#about" @click="toggleMenu">💖 소개</a></li>
        <li><a href="#skills" @click="toggleMenu">✨ 기술</a></li>
        <li><a href="#projects" @click="toggleMenu">🎨 프로젝트</a></li>
        <li><a href="#contact" @click="toggleMenu">📞 연락처</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* 기본 네비게이션 스타일 */
.navbar {
  position: fixed;
  width: 100%;
  top: -80px;
  left: 0;
  background: transparent;
  border-radius: 0px 0px 20px 20px;
  padding: 15px 0;
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out, padding 0.3s ease-in-out;
  z-index: 1000;
}

.navbar.scrolled {
  transform: translateY(70px);
  background: #FFB6C1;
  padding: 10px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 40px;
}

/* 네비게이션 메뉴 */
.nav-links {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  background: #FF69B4;
  padding: 10px 15px;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  background: #FF1493;
}

/* 햄버거 메뉴 버튼 (모바일용) */
.menu-toggle {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: #5B3A29;
}

/* 반응형 스타일 */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 60px;
    right: 0px;
    gap: 0px;
    background: #FFB6C1;
    flex-direction: row;
    width: 100%;
    text-align: center;
    padding: 10px 0px;
    border-radius: 0px 0px 20px 20px;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links ul {
    margin: 10px 0;
  }

  .nav-links li {
    padding: 10px 0;
  }
}
</style>
