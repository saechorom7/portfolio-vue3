<script setup>
import { ref, onMounted } from 'vue';

const text = ref("");
const fullText = "안녕하세요! 저는 개발자 유진입니다! 🎀";
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
    <!-- ✨ 별 배경 (z-index 낮게 설정) -->
    <div class="stars"></div>

    <!-- ☁️ 구름 배경 -->
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>

    <div class="hero-content">
      <h1 class="typing">{{ text }}</h1>
      <p>저는 부드럽고 몽글몽글한 디자인을 사랑하는 프론트엔드 개발자입니다! 🐰💖</p>
      <p>사용자에게 편안한 경험을 주는 UI/UX를 만들어요! ✨</p>

      <!-- 🛠️ 버튼 두 개 -->
      <div class="buttons">
        <a href="#projects" class="btn primary">🌸 프로젝트 보기</a>
        <a href="#skills" class="btn secondary">💻 기술 보기</a>
      </div>

      <!-- 🐰 귀여운 캐릭터 -->
      <div class="character">
        <img src="/src/assets/umme1.png" alt="귀여운 캐릭터" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 🎀 Hero 전체 섹션 */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #FFD1DC, #FFF0F5);
  color: #5B3A29;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

/* 🎀 타이핑 효과 */
.typing {
  font-size: 2.5rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #FF69B4;
  animation: blinkCursor 0.8s infinite;
}

@keyframes blinkCursor {
  50% { border-color: transparent; }
}

/* ☁️ 구름 애니메이션 */
.cloud {
  position: absolute;
  width: 160px;
  height: 90px;
  background: #ffffff;
  border-radius: 50px;
  opacity: 0.8;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  z-index: 1; /* 🔥 z-index 수정 */
  animation: float 6s infinite alternate ease-in-out;
}

.cloud1 {
  top: 15%;
  left: 5%;
  animation-duration: 5s;
}

.cloud2 {
  top: 55%;
  right: 5%;
  animation-duration: 6s;
}

@keyframes float {
  0% { transform: translateY(0px); }
  100% { transform: translateY(20px); }
}

/* ✨ 별 배경 */
.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('/src/assets/umme1.png') repeat;
  opacity: 0.3;
  z-index: 0; /* ⭐ 배경이 버튼을 덮지 않도록 수정 */
  animation: twinkle 3s infinite alternate;
}

@keyframes twinkle {
  0% { opacity: 0.3; }
  100% { opacity: 0.6; }
}

/* 🎀 버튼 스타일 */
.buttons {
  margin-top: 20px;
  position: relative;
  z-index: 10; /* 🔥 버튼이 배경보다 위에 위치하도록 설정 */
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 1.2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.primary {
  background: #FF69B4;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.primary:hover {
  background: #FF1493;
  transform: scale(1.05);
}

.secondary {
  background: #FFD1DC;
  color: #5B3A29;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.secondary:hover {
  background: #FFC0CB;
  transform: scale(1.05);
}

/* 🐰 귀여운 캐릭터 */
.character {
  margin-top: 30px;
  position: relative;
  z-index: 10; /* 🔥 버튼과 동일한 z-index 적용 */
}

.character img {
  width: 120px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* 🎀 반응형 스타일 */
@media (max-width: 768px) {
  .hero {
    height: auto;
    padding: 100px 20px;
  }

  .typing {
    font-size: 1.8rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .btn {
    font-size: 1rem;
    padding: 10px 20px;
  }

  .character img {
    width: 90px;
  }
}
</style>
