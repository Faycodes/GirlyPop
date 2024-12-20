let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides -1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slides.forEach((slides, i) => {
        slide.style.transform = `translateX(${(i - currentIndex) * 100}%)`; 
    });
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(currentIndex);

// document.addEventListener('keydown', (event) {
//     if (event.key === 'ArrowLeft') {
//         showSlide(currentIndex - 1);
//     } else if (event.key === 'ArrowRight') {
//         showSlide(currentIndex + 1);
//     }
// });


// const slider = document.querySelector('.image-slider');
// let slides = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
// const prevBtn = document.querySelector('.prevButton');
// const nextBtn = document.querySelector('.nextButton');
// let i = 0;





// function sliding(){}



// function prevButton() {
//  prevButton.addEventListener('click', () => {
//     showSlide(index - 1); 
// });
// 
//     while(i <= 0) {
//         i = images.length;
//         i--;
//         return setImg();
//     }
// };

// function nextButton() {
//     if(i >= images.length-1) {
//         i = -1;
//         i++;
//         return setImg();
//     }
// };







// function setImg() {
//     return slider.setAttribute('src', images[i]);
// } 


// let index = 0;

// const slides = document.querySelectorAll('.slide');

// function showSlide(n) {
//     if(n < 0) {
//         index = slides.length - 1;
//     } else if (n >= slides.length) {
//         index = 0;
//     } else {
//         index = n;
//     }
//     slides.forEach((slides, i) => {
//         slides.style.transform = 'translateX($(-index * 100)%)'        
//     })
// }

// 

// nextButton.addEventListener('click', () => {
//     showSlide(index + 1);
// });

// nextButton.addEventListener('click', () => {
//     showSlide(index + 1)
// });

// document.addEventListener('keydown', (e) => {
//     if(e.key === 'ArrowLeft') {
//         showSlide(index - 1);
//     } else if (e.key === 'ArrowRight') {
//         showSlide(index + 1);
//     }
// });

// showSlide(index);
