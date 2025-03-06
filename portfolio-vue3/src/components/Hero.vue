<script setup>
import { ref, onMounted } from 'vue';

const text = ref(""); // 초기 상태를 빈 문자열로 설정
const fullText = "안녕하세요, 저는 유진입니다! 👋";
let index = 0;

const typeEffect = () => {
  if (index < fullText.length) {
    text.value += fullText[index];
    index++;
    setTimeout(typeEffect, 100); // 타이핑 속도 조절
  }
};

onMounted(() => {
  setTimeout(typeEffect, 500); // 애니메이션 시작 지연 (자연스러운 등장 효과)
});
</script>

<template>
  <section id="hero" class="hero">
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>
    <div class="hero-content">
      <h1 class="typing">{{ text }}</h1>
      <p>프론트엔드 개발자로 성장 중입니다 🚀</p>
      <a href="#projects" class="btn">🌸 프로젝트 보러가기</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #FFD1DC, #FFF0F5);
  color: #5B3A29;
  padding: 80px 20px 0; /* 네비게이션 바 안 가리도록 조정 */
}

.hero-content {
  max-width: 800px;
  padding: 20px;
}

.typing {
  font-size: 2.7rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #FF69B4;
  animation: blinkCursor 0.8s infinite;
}

/* 커서 깜빡이는 효과 */
@keyframes blinkCursor {
  50% { border-color: transparent; }
}

/* 구름 애니메이션 */
.cloud {
  position: absolute;
  width: 150px;
  height: 80px;
  background: #fff;
  border-radius: 50px;
  opacity: 0.8;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  z-index: -1;
  animation: float 5s infinite alternate ease-in-out;
}

.cloud1 {
  top: 20%;
  left: 10%;
  animation-duration: 6s;
}

.cloud2 {
  top: 50%;
  right: 10%;
  animation-duration: 7s;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(20px);
  }
}

/* 반응형 적용 */
@media (max-width: 768px) {
  .hero {
    height: auto;
    padding: 100px 20px;
  }

  .typing {
    font-size: 1.7rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .btn {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}
</style>

