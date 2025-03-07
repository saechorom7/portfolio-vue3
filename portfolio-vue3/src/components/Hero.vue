<script setup>
import { ref, onMounted } from 'vue';
import '/src/assets/styles/hero.css';

const text = ref(""); // 타이핑될 텍스트
const fullText = "Hello! I'm Yujin, a developer! 💭";
let index = 0;
const isTypingDone = ref(false); // 타이핑 완료 여부

// 타이핑 효과 (커서가 항상 마지막 글자 끝에 위치)
const typeEffect = () => {
  if (index < fullText.length) {
    text.value = fullText.substring(0, index) + "<span class='cursor'>|</span>"; // 커서를 끝에 추가
    index++;
    setTimeout(typeEffect, 100);
  } else {
    // 타이핑이 끝난 후 커서만 유지
    isTypingDone.value = true;
    text.value = fullText + "<span class='cursor'>|</span>";
  }
};

// 한 글자씩 순차적으로 bold가 되는 애니메이션
const animateText = (element) => {
  if (!element) return;

  const text = element.innerText;
  element.innerHTML = ""; // 기존 텍스트 비우기

  let spans = [];
  for (let char of text) {
    let span = document.createElement("span");
    span.innerText = char === " " ? "\u00A0" : char; // 공백을 &nbsp;로 대체
    span.style.fontWeight = "normal";
    span.style.transition = "font-weight 0.3s ease-in-out";
    element.appendChild(span);
    spans.push(span);
  }

  let currentIndex = 0;

  setTimeout(() => {  // ⏳ 3초 후 애니메이션 시작
    const interval = setInterval(() => {
      if (currentIndex < spans.length) {
        spans[currentIndex].style.fontWeight = "bold";
        currentIndex++;
      } else {
        clearInterval(interval); // 모든 글자가 bold가 되면 멈춤
      }
    }, 100); // 150ms 간격으로 변경
  }, 2500); // ⏳ 3초 대기 후 시작
};

// 컴포넌트가 마운트될 때 실행
onMounted(() => {
  setTimeout(typeEffect, 2500);
  animateText(document.getElementById("animatedText"));
  animateText(document.getElementById("animatedText2"));
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
      <h1 class="typing" v-html="text"></h1>
      <p id="animatedText" class="animation-text">I'm a front-end developer who loves cute and charming designs! (oﾟvﾟ)ノ</p>
      <p id="animatedText2" class="animation-text">I strive to create UI/UX that gives users a comfortable and enjoyable experience! ::&gt;_&lt;::</p>

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