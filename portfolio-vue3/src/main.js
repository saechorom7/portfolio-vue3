import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app') // Vue 앱 마운트 후 실행

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