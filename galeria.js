const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const caption = document.getElementById('caption');

let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    showImage(currentIndex);
    modal.style.display = 'flex';
}

function showImage(index) {
    modalImg.classList.remove('show');
    void modalImg.offsetWidth; // força reflow
    modalImg.src = galleryItems[index].src;
    caption.textContent = `Imagem ${index + 1} de ${galleryItems.length}`;
    modalImg.classList.add('show');
}

function closeModal() {
    modal.style.display = 'none';
    modalImg.classList.remove('show');
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showImage(currentIndex);
}

// Eventos
galleryItems.forEach((img, i) => img.addEventListener('click', () => openModal(i)));
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);