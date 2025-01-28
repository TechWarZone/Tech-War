document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Selamat datang di War Thunder! Siap untuk bertempur, silahkan klik menu yang di atas!');
        });
    });
});
