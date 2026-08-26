// AMBIL SEMUA BUTANG & BAHAGIAN
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

// FUNGSI TUKAR BAHAGIAN
navButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        // TUKAR KELAS AKTIF PADA BUTANG
        navButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // TUKAR PAPAR BAHAGIAN YANG BETUL
        const targetId = this.getAttribute('href').substring(1);
        sections.forEach(sec => {
            sec.classList.remove('active');
            if(sec.id === targetId) sec.classList.add('active');
        });
    });
});
