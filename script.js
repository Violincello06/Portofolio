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

    // 6. Interactive Falling Code & Files Cursor Trail
    initFallingCodeCursor();
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

/**
 * Interactive Falling Code & File Snippets Cursor Trail
 */
function initFallingCodeCursor() {
    // 1. Create and setup overlay Canvas
    const canvas = document.createElement('canvas');
    canvas.className = 'code-trail-canvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeCanvas() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 2. Data Pools: Files, Code Keywords, Syntax & Operators
    const fileItems = [
        '📄 index.js',
        '🐘 app.php',
        '🎨 style.css',
        '⚡ api.ts',
        '⚛️ layout.jsx',
        '📦 package.json',
        '⚙️ .env',
        '🚀 deploy.sh',
        '🗄️ schema.sql',
        '📝 README.md'
    ];

    const codeItems = [
        '</>',
        '{ ... }',
        'const',
        'let',
        'function()',
        '=> { }',
        'async',
        'await',
        '$_POST',
        '<?php',
        'return true;',
        'git push',
        'npm run dev',
        '===',
        '200 OK',
        '010101',
        '<div>',
        'console.log()',
        'import React',
        'export default'
    ];

    const colorPalette = [
        '#CB2957', // Signature neon crimson
        '#00FF9D', // Terminal matrix emerald
        '#00F0FF', // Cyber cyan
        '#FF5E89', // Neon rose
        '#FFE600', // Warning yellow
        '#A78BFA', // Violet
        '#EEEEEE'  // Crisp white
    ];

    const particles = [];
    const maxParticles = 90;

    let lastX = null;
    let lastY = null;

    class CodeParticle {
        constructor(x, y, isBurst = false) {
            this.x = x;
            this.y = y;

            const isFile = Math.random() < 0.28;
            this.isFile = isFile;
            this.text = isFile
                ? fileItems[Math.floor(Math.random() * fileItems.length)]
                : codeItems[Math.floor(Math.random() * codeItems.length)];

            this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

            // Motion & physics
            const angle = isBurst
                ? Math.random() * Math.PI * 2
                : (Math.random() * Math.PI - Math.PI / 2); // mostly upward pop then down

            const speed = isBurst
                ? (Math.random() * 4.5 + 2.0)
                : (Math.random() * 2.0 + 0.8);

            this.vx = Math.cos(angle) * speed;
            this.vy = isBurst ? Math.sin(angle) * speed : -Math.random() * 1.8 - 0.5; // slight pop up

            this.gravity = Math.random() * 0.06 + 0.12; // smooth downward fall
            this.swayAngle = Math.random() * Math.PI * 2;
            this.swaySpeed = Math.random() * 0.08 + 0.04;
            this.swayWidth = Math.random() * 0.8 + 0.3;

            this.rotation = (Math.random() - 0.5) * 0.18;
            this.spin = (Math.random() - 0.5) * 0.015;

            // Compact smaller sizes
            this.fontSize = isFile ? 9.5 : (Math.random() * 2.5 + 8.5);
            this.alpha = 1;
            // Faster fade out
            this.decay = isBurst
                ? (Math.random() * 0.02 + 0.035)
                : (Math.random() * 0.025 + 0.035);
        }

        update() {
            // Apply velocities & gravity
            this.vy += this.gravity;
            this.vx *= 0.96;
            this.swayAngle += this.swaySpeed;

            this.x += this.vx + Math.sin(this.swayAngle) * this.swayWidth;
            this.y += this.vy;

            this.rotation += this.spin;
            this.alpha -= this.decay;
        }

        draw(context) {
            if (this.alpha <= 0) return;

            context.save();
            context.translate(this.x, this.y);
            context.rotate(this.rotation);
            context.globalAlpha = Math.max(0, this.alpha);

            context.font = `${this.isFile ? '600' : '500'} ${this.fontSize}px "JetBrains Mono", monospace, sans-serif`;
            const textMetrics = context.measureText(this.text);
            const textWidth = textMetrics.width;
            const paddingX = this.isFile ? 5 : 2;
            const paddingY = this.isFile ? 2 : 1;
            const boxWidth = textWidth + paddingX * 2;
            const boxHeight = this.fontSize + paddingY * 2;

            if (this.isFile) {
                // Sleek Mini File Chip Background
                context.fillStyle = 'rgba(10, 10, 14, 0.88)';
                context.strokeStyle = this.color;
                context.lineWidth = 0.8;
                context.shadowColor = this.color;
                context.shadowBlur = 5;

                // Draw rounded file badge
                const r = 3;
                const bx = -boxWidth / 2;
                const by = -boxHeight / 2;
                context.beginPath();
                context.moveTo(bx + r, by);
                context.lineTo(bx + boxWidth - r, by);
                context.quadraticCurveTo(bx + boxWidth, by, bx + boxWidth, by + r);
                context.lineTo(bx + boxWidth, by + boxHeight - r);
                context.quadraticCurveTo(bx + boxWidth, by + boxHeight, bx + boxWidth - r, by + boxHeight);
                context.lineTo(bx + r, by + boxHeight);
                context.quadraticCurveTo(bx, by + boxHeight, bx, by + boxHeight - r);
                context.lineTo(bx, by + r);
                context.quadraticCurveTo(bx, by, bx + r, by);
                context.closePath();
                context.fill();
                context.stroke();

                // Text inside chip
                context.shadowBlur = 0;
                context.fillStyle = '#FFFFFF';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(this.text, 0, 0);
            } else {
                // Glowing Code Token Text
                context.shadowColor = this.color;
                context.shadowBlur = 6;
                context.fillStyle = this.color;
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(this.text, 0, 0);
            }

            context.restore();
        }
    }

    function addParticle(x, y, isBurst = false) {
        if (particles.length < maxParticles) {
            const jitterX = (Math.random() - 0.5) * 8;
            const jitterY = (Math.random() - 0.5) * 8;
            particles.push(new CodeParticle(x + jitterX, y + jitterY, isBurst));
        }
    }

    // 3. Pointer & Mouse Movement Tracking with Throttled Spawning
    let lastSpawnTime = 0;
    function handlePointerMove(clientX, clientY) {
        const now = Date.now();

        if (lastX === null || lastY === null) {
            lastX = clientX;
            lastY = clientY;
            addParticle(clientX, clientY);
            lastSpawnTime = now;
            return;
        }

        const dx = clientX - lastX;
        const dy = clientY - lastY;
        const dist = Math.hypot(dx, dy);

        // Spawn falling code particle on every 16px movement or time interval
        if (dist > 16 || (now - lastSpawnTime > 55 && dist > 4)) {
            addParticle(clientX, clientY);
            lastSpawnTime = now;
            lastX = clientX;
            lastY = clientY;
        }
    }

    window.addEventListener('mousemove', (e) => {
        handlePointerMove(e.clientX, e.clientY);
    });

    window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    // Burst of code tokens on click
    window.addEventListener('click', (e) => {
        for (let i = 0; i < 12; i++) {
            addParticle(e.clientX, e.clientY, true);
        }
    });

    window.addEventListener('mouseleave', () => {
        lastX = null;
        lastY = null;
    });

    // 4. Render / Animation Loop
    function animateFallingCode() {
        ctx.clearRect(0, 0, width, height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw(ctx);

            if (p.alpha <= 0 || p.y > height + 60) {
                particles.splice(i, 1);
            }
        }

        requestAnimationFrame(animateFallingCode);
    }

    animateFallingCode();
}

