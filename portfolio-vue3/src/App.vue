<script setup>
import './assets/style.css'; /* 스타일 연결 */
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
</script>

<template>
  <div>
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <footer class="footer">
      <p>🐰 Designed & Developed by 유진 | © 2025</p>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  background-color: #FFB6C1;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 14px;
  border-radius: 20px 20px 0px 0px;
}
</style>

