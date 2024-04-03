const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg",
    alt: "Group of Horses Running",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector('.gallery'); 
  images.forEach(image => {
    const galleryLi = document.createElement('li');
    const htmlImg = `<img src='${image.url}' alt='${image.alt}'>`;
    galleryLi.innerHTML = htmlImg;
    gallery.appendChild(galleryLi);
  });
});
