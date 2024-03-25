// import images as relative image path won't work with vite/vercel.
import "./_style.scss";
import AOS from 'aos';
import '../node_modules/aos/dist/aos';

// AOS
AOS.init({
  duration: 1500,
  offset: 100,
});

// const trendingSushis = [
//     'Make Sushi',
//     'Nigiri Sushi',
//     'Oshizushi',
//     'Temaki Sushi',
//     'Uramaki Sushi',
//     'Inari Sushi'
// ];

// const trendingDrinks = [
//     "Oruncha",
//     "Ofukucha",
//     "Sakura Tea",
//     "Kombu-cha",
//     "Aojiru",
//     "Mugicha",
// ]

// const cards = [
//     {
//         imgSrc: sushi12,
//         alt: "sushi-12",
//         title: "Chezu Sushi",
//         rating: "4.8",
//         price: "$21.00"
//     },
//     {
//         imgSrc: sushi11,
//         alt: "sushi-11",
//         title: "Originale Sushi",
//         rating: "4.8",
//         price: "$21.00",
//         active: true
//     },
//     {
//         imgSrc: sushi10,
//         alt: "sushi-10",
//         title: "Ramen Legendo",
//         rating: "4.8",
//         price: "$21.00"
//     }
// ];