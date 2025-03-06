import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 스크롤 애니메이션 적용
const handleScroll = () => {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 초기 실행
  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener("mousemove", (e) => {
    let sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    document.body.appendChild(sparkle);

    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;

    setTimeout(() => {
        sparkle.remove();
    }, 500); // 0.5초 후 사라짐
});

app.mount('#app')
