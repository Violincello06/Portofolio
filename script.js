document.addEventListener('DOMContentLoaded', () => {
    // 1. Filter Pills Interaction
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });

    // 2. Project Row Hover Previews
    // Hover animation is handled purely and smoothly by CSS (:hover slide-in/out)

    // 3. Dynamic Email Click to Copy with Tooltip
    const emailLink = document.getElementById('emailLink');
    const copyTooltip = document.getElementById('copyTooltip');

    if (emailLink && copyTooltip) {
        emailLink.addEventListener('click', (e) => {
            const rawHref = emailLink.getAttribute('href') || '';
            const email = rawHref.replace('mailto:', '').trim() || emailLink.textContent.trim();

            navigator.clipboard.writeText(email).then(() => {
                copyTooltip.textContent = 'Copied to clipboard!';
                copyTooltip.style.color = 'var(--accent-neon)';

                setTimeout(() => {
                    copyTooltip.textContent = 'Click to copy';
                    copyTooltip.style.color = '';
                }, 2500);
            }).catch(() => {
                // Default mailto fallback works
            });
        });
    }

    // 4. Smooth Anchor Link Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.length < 2) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. 3D Interactive Monitor Parallax Physics
    init3DMonitorPhysics();
});

/**
 * 3D Monitor Physics & Smooth Parallax Tracking
 */
function init3DMonitorPhysics() {
    const monitor = document.getElementById('monitor3D');
    const container = document.getElementById('hero3dContainer');
    if (!monitor || !container) return;

    let targetRotateX = 4;
    let targetRotateY = -8;
    let currentRotateX = 4;
    let currentRotateY = -8;
    let isHovered = false;

    // Mouse Tracking across Hero section / Window
    window.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
        const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

        // Smooth 3D tilt calculation
        targetRotateY = deltaX * 18 - 4;
        targetRotateX = -deltaY * 16 + 3;
    });

    // Reset softly on mouse leave
    window.addEventListener('mouseleave', () => {
        targetRotateX = 3;
        targetRotateY = -6;
    });

    container.addEventListener('mouseenter', () => {
        isHovered = true;
    });

    container.addEventListener('mouseleave', () => {
        isHovered = false;
    });

    // Animation Loop with Smooth Interpolation
    function animateMonitor() {
        requestAnimationFrame(animateMonitor);

        // Smooth Easing (Lerp)
        currentRotateX += (targetRotateX - currentRotateX) * 0.08;
        currentRotateY += (targetRotateY - currentRotateY) * 0.08;

        // Subtle floating idle motion
        const time = Date.now() * 0.0018;
        const floatY = Math.sin(time) * 4;

        monitor.style.transform = `
            perspective(1200px)
            rotateX(${currentRotateX}deg)
            rotateY(${currentRotateY}deg)
            translateY(${floatY}px)
            ${isHovered ? 'scale3d(1.03, 1.03, 1.03)' : 'scale3d(1, 1, 1)'}
        `;
    }

    animateMonitor();
}
