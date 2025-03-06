<template>
  <section id="projects" class="section">
    <h2>🍨 프로젝트</h2>
    <div class="project-container">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  { title: "🥛 프로젝트 1", description: "귀엽고 감성적인 Vue.js 기반 웹 애플리케이션" },
  { title: "🍥 프로젝트 2", description: "몽글몽글한 감성의 반응형 포트폴리오" }
]);
</script>

<style scoped>
.project-card {
  width: 100%;
  max-width: 400px;
  background: #FFF0F5;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: url('/cursor.cur') 13 13, auto; 
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transform: skewX(-20deg);
  transition: left 0.5s ease-in-out;
}

.project-card:hover::before {
  left: 120%;
}

.project-card:hover {
  transform: perspective(800px) rotateY(5deg) scale(1.05);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  background: #FFD1DC;
}
</style>
