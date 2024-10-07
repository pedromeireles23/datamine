const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark' 
    : 'fa-solid fa-bars';
}
document.querySelectorAll('.accordion-header').forEach((accordionHeader) => {
  accordionHeader.addEventListener('click', () => {
    const accordionContent = accordionHeader.nextElementSibling;
    const accordionIcon = accordionHeader.querySelector('.accordion-icon img');

    // Fechar outros acordeões
    document.querySelectorAll('.accordion-content').forEach((content) => {
      if (content !== accordionContent) {
        content.style.maxHeight = '0';
        content.classList.remove('open');
        // Troca o ícone de volta para a seta para a direita
        content.previousElementSibling.querySelector('.accordion-icon img').src = 'images/arrow-right01.png';
      }
    });

    // Abrir ou fechar o conteúdo do acordeão
    if (accordionContent.style.maxHeight === '0px' || !accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      accordionContent.classList.add('open');
      // Troca o ícone para a seta para baixo
      accordionIcon.src = 'images/arrow-down.png';
    } else {
      accordionContent.style.maxHeight = '0';
      accordionContent.classList.remove('open');
      // Troca o ícone de volta para a seta para a direita
      accordionIcon.src = 'images/arrow-right01.png';
    }
  });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots[i].classList.remove('active');
    });
    dots[currentIndex].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

function currentSlide(index) {
    currentIndex = index - 1;
    showSlide(currentIndex);
}

showSlide(currentIndex);

let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Rola para baixo - esconde o header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Rola para cima - mostra o header
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
    });
    
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function navigateToSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("carrousel-slide");
      let dots = document.getElementsByClassName("carrousel-dot");
    
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
    