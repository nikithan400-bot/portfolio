document.addEventListener('DOMContentLoaded', () => {

    // ---------------- Buttons ----------------
    const resumeBtn = document.querySelector('.primary');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            window.location.href = "resume.html";
        });
    }

    const heroContactBtn = document.querySelector('.btn.outline');
    if (heroContactBtn) {
        heroContactBtn.addEventListener('click', () => {
            window.location.href = "contact.html";
        });
    }

    const navbarContactBtn = document.querySelector('.btn-contact');
    if (navbarContactBtn) {
        navbarContactBtn.addEventListener('click', () => {
            window.location.href = "contact.html";
        });
    }

    // ---------------- Snow Effect ----------------
    // Only if .snow-container exists
    const snowContainer = document.querySelector('.snow-container');

    if (snowContainer) {
        const totalBalls = 60;
        for (let i = 0; i < totalBalls; i++) {
            const ball = document.createElement('div');
            ball.classList.add('snow-ball');

            // Random horizontal start
            ball.style.left = Math.random() * 100 + 'vw';

            // Random size
            const size = Math.random() * 4 + 3;
            ball.style.width = size + 'px';
            ball.style.height = size + 'px';

            // Random duration and delay
            const duration = Math.random() * 10 + 8; // 8s to 18s
            ball.style.animationDuration = duration + 's';
            ball.style.animationDelay = Math.random() * 10 + 's';

            snowContainer.appendChild(ball);
        }
    }

    // ---------------- Profile Dropdown ----------------
    const profileToggle = document.getElementById("profileToggle");
    const profileDropdown = document.getElementById("profileDropdown");

    if (profileToggle && profileDropdown) {
        profileToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle("active");
        });

        document.addEventListener("click", () => {
            profileDropdown.classList.remove("active");
        });
    }
});
