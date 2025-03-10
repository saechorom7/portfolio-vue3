<script setup>
import { ref, onMounted } from 'vue';
import '/src/assets/styles/hero.css';

const text = ref(""); // 타이핑될 텍스트를 저장하는 변수
const fullText = "Hello! I'm Yujin, a developer! 💭"; // 타이핑될 전체 문장
let index = 0;
const isTypingDone = ref(false); // 타이핑이 끝났는지 여부

// 🎀 타이핑 애니메이션 효과 (커서가 항상 마지막 글자 뒤에 위치)
const typeEffect = () => {
  if (index < fullText.length) {
    text.value = fullText.substring(0, index) + "<span class='cursor'>|</span>"; // 커서를 끝에 추가
    index++;
    setTimeout(typeEffect, 100); // 100ms 간격으로 글자 출력
  } else {
    // 타이핑이 끝난 후 커서만 유지
    isTypingDone.value = true;
    text.value = fullText + "<span class='cursor'>|</span>";
  }
};

// 🎀 텍스트 애니메이션을 위한 클래스 추가 (부드러운 등장 & 흔들리는 효과)
const applyAnimation = () => {
  const text1 = document.getElementById("animatedText");
  const text2 = document.getElementById("animatedText2");

  if (text1) text1.classList.add("cute-animation"); // 애니메이션 적용
  if (text2) text2.classList.add("cute-animation");
};

// 🎀 컴포넌트가 마운트될 때 실행 (타이핑 애니메이션 + 텍스트 애니메이션)
onMounted(() => {
  setTimeout(typeEffect, 2500); // 2.5초 후 타이핑 시작

  setTimeout(() => {
    applyAnimation(); // 3초 후 텍스트 애니메이션 실행
  }, 3000);
});
</script>

<template>
  <section id="hero" class="hero">
    <!-- 🐏 배경 이미지 -->
    <div class="umme"></div>

    <!-- ☁️ 구름 애니메이션 -->
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>

    <div class="hero-content">
      <!-- ✨ 타이핑 애니메이션 + 부드러운 등장 텍스트 -->
      <div class="text">
        <h1 class="typing" v-html="text"></h1>
        <p id="animatedText" class="animation-text">I'm a front-end developer who loves cute and charming designs! (oﾟvﾟ)ノ</p>
        <p id="animatedText2" class="animation-text">I strive to create UI/UX that gives users a comfortable and enjoyable experience! ::&gt;_&lt;::</p>
      </div>

      <!-- 🛠️ 프로젝트 & 스킬 보기 버튼 -->
      <div class="buttons">
        <a href="#projects" class="btn primary">🍨 View Projects</a>
        <a href="#skills" class="btn secondary">🧁 View Skills</a>
      </div>

      <!-- 🐏 귀여운 캐릭터 이미지 -->
      <div class="character">
        <img src="/src/assets/umme1.png" alt="귀여운 캐릭터" />
      </div>
    </div>
  </section>
</template>
