<script setup>
import { ref, onMounted } from 'vue';
import '/src/assets/styles/hero.css'; 

const text = ref("");
const fullText = "Hello! I'm Yujin, a developer! 🐇";
let index = 0;

const typeEffect = () => {
  if (index < fullText.length) {
    text.value += fullText[index];
    index++;
    setTimeout(typeEffect, 70);
  }
};

onMounted(() => {
  setTimeout(typeEffect, 1500);
});
</script>

<template>
  <section id="hero" class="hero">
    <!-- 🐏 umme 배경 -->
    <div class="umme"></div>

    <!-- ☁️ 구름 배경 -->
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>

    <div class="hero-content">
      <h1 class="typing">{{ text }}</h1>
      <p>I'm a front-end developer who loves cute and charming designs! (oﾟvﾟ)ノ</p>
      <p>I strive to create UI/UX that gives users a comfortable and enjoyable experience! ::&gt;_&lt;::</p>

      <!-- 🛠️ 버튼 두 개 -->
      <div class="buttons">
        <a href="#projects" class="btn primary">🍨 View Projects</a>
        <a href="#skills" class="btn secondary">🧁 View Skills</a>
      </div>

      <!-- 🐏 귀여운 캐릭터 -->
      <div class="character">
        <img src="/src/assets/umme1.png" alt="귀여운 캐릭터" />
      </div>
    </div>
  </section>
</template>