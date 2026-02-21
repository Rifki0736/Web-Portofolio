// Mengambil elemen dari HTML
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Menambahkan event listener saat tombol hamburger diklik
hamburger.addEventListener('click', () => {
    // Menambah/menghapus class 'active' pada navLinks
    navLinks.classList.toggle('active');
});

// Pesan sambutan di Console (Tekan F12 di browser > Console untuk melihatnya)
console.log("Website Portofolio berhasil dimuat!");