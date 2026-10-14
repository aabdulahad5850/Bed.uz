window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('box107');
        document.body.classList.add('start-hero-anim');
    }, 900);
});

const loadButtons = document.querySelectorAll('.load-btn');

loadButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const originalText = btn.getAttribute('data-text');
        btn.textContent = 'Loading...';
        btn.disabled = true;
        
        setTimeout(function() {
            btn.textContent = originalText;
            btn.disabled = false;
        }, 2500);
    });
});

const heartButtons = document.querySelectorAll('.heart-btn');

heartButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btn.classList.toggle('active-heart');
    });
});

let studioState = {
    colorName: 'Natural Oak Bed',
    sizeName: '160x200 cm',
    basePrice: 950,
};

const colorBtns = document.querySelectorAll('.color-option');
const sizeBtns = document.querySelectorAll('.size-option');
const studioImage = document.getElementById('studioImage');
const studioTag = document.getElementById('studioTag');
const studioPrice = document.getElementById('studioPrice');

colorBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        colorBtns.forEach(function(b) { b.classList.remove('box70'); });
        btn.classList.add('box70');
        studioState.colorName = btn.textContent;
        studioState.currentImg = btn.getAttribute('data-img');
        studioImage.src = studioState.currentImg;
        studioTag.textContent = studioState.colorName + ' • ' + studioState.sizeName;
    });
});

sizeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        sizeBtns.forEach(function(b) { b.classList.remove('box70'); });
        btn.classList.add('box70');
        studioState.sizeName = btn.getAttribute('data-size') + ' cm';
        studioState.basePrice = parseInt(btn.getAttribute('data-price'));
        studioPrice.textContent = '$' + studioState.basePrice;
        studioTag.textContent = studioState.colorName + ' • ' + studioState.sizeName;
    });
});