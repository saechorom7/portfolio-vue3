<script setup>
import './assets/style.css';
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
  </div>
</template>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
  font-size: 1rem;
}
</style>
