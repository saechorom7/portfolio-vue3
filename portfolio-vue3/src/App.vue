<script setup>
import './assets/styles/style.css';
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

import { ref, onMounted } from 'vue';

const isLoading = ref(true); // 로딩 화면 상태

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; // 3초 후 로딩 화면 제거
  }, 2000);
});

</script>

<template>
  <div>
    <!-- 로딩 화면 -->
    <div v-if="isLoading" id="loading">
      <span>☁ 로딩 중<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></span>
    </div>

    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <footer class="footer">
      <p>🐇 Designed & Developed by 유진 | © 2025</p>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  background-color: #FFD1DC;
  color: #fffdf7;
  text-align: center;
  padding: 15px;
  font-size: 14px;
  border-radius: 20px 20px 0px 0px;
}
</style>

