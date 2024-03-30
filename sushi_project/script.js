// import images as relative image path won't work with vite/vercel.
import "./_style.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

// AOS
AOS.init({
  duration: 1500,
  offset: 100,
});