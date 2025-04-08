// Mobil menü toggle (gelecekte eklenebilir)
document.addEventListener('DOMContentLoaded', () => {
    // İletişim formu gönderimi
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basit bir uyarı (gerçek bir backend'e bağlanabilir)
            alert(`Mesajınız alındı!\nAd: ${name}\nE-posta: ${email}\nMesaj: ${message}`);
            form.reset();
        });
    }

    // Kartlara animasyon ekleme (görünüm sırasında)
    const cards = document.querySelectorAll('.feature-card, .about-card, .download-card, .contact-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});