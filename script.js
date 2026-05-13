document.addEventListener('DOMContentLoaded', () => {
    // Modal Elementləri
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactBtn");
    const span = document.querySelector(".close-btn");

    // Modalı Aç
    btn.onclick = () => {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    // Modalı Bağla (X)
    span.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Modalı Bağla (Kənara klik)
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Səhifə daxili hamar keçid
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
// MƏQALƏ DATA BAZASI
const articlesData = {
    "gui-dizayn": {
        title: "Müasir GUI Dizayn Standartları",
        category: "Dizayn & UX",
        date: "13 May, 2026",
        content: `
            <p>İstifadəçi interfeyslərinin hazırlanmasında tətbiq edilən son trendlər və WPF texnologiyaları...</p>
            <h2>Niyə UX önəmlidir?</h2>
            <p>7 illik təcrübəm göstərir ki, proqram nə qədər güclü olsa da, istifadəçi onu rahat işlədə bilmirsə, uğursuzdur...</p>
            <p>Burada məqalənin davamı gələcək...</p>
        `
    },
    "sql-analytics": {
        title: "Böyük Verilənlərdə SQL-in Rolu",
        category: "Data Analitika",
        date: "10 May, 2026",
        content: "<p>Data analitika sahəsində optimallaşdırılmış sorğuların əhəmiyyəti...</p>"
    }
};

