/**
 * Ralip Pranaja Violincello - Portfolio
 * Powered by Vue.js 3 Reactive Framework
 */

const { createApp, ref, computed, onMounted } = Vue;

const app = createApp({
    setup() {
        // 1. Initial Data Source (Injected from PHP or default fallback)
        const initialData = window.__PORTFOLIO_DATA__ || {};

        const profile = ref(initialData.profile || {
            role: "FullStack Web Developer",
            location: "Indonesia",
            firstName: "Ralip Pranaja",
            lastName: "Violincello",
            tagline: "A Web Developer Care About The Projects and Clean Code",
            year: new Date().getFullYear(),
            email: "pranaja0852@gmail.com",
            city: "Solo, Indonesia",
            avatar: "preview_project/me.png",
            bio_lead: "Hi! My name is Ralip Pranaja Violincello, and I am a Full-Stack Developer.",
            bio_detail: "Experience with modern technologies including Vue.js, React, Node.js, Express, PHP, and MySQL."
        });

        const stats = ref(initialData.stats || [
            { number: '2+', label: 'Years active' },
            { number: '1+', label: 'Projects' },
            { number: '1', label: 'Continents' }
        ]);

        const filters = ref(initialData.filters || [
            { id: 'all', label: 'All Projects' },
            { id: 'brand-identity', label: 'Web App & Brand' },
            { id: 'ui-design', label: 'UI/UX Design' }
        ]);

        const projects = ref(initialData.projects || [
            {
                id: '01',
                title: 'Website SnapGear',
                category: 'Website Layanan Penyewaan Kamera',
                year: '2026',
                preview_image: 'preview_project/snapgear.png',
                filter_tag: 'brand-identity',
                link: 'https://snapgear.xo.je/'
            },
            {
                id: '02',
                title: 'Cooming Soon Project',
                category: 'Next Project Maybe With You!',
                year: '2027',
                preview_image: '',
                filter_tag: 'ui-design',
                link: '#project-2'
            }
        ]);

        const socials = ref(initialData.socials || [
            { name: 'Instagram', url: 'https://instagram.com/ollecniloiv' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/violincello' },
            { name: 'Github', url: 'https://github.com/Violincello06' }
        ]);

        // 2. Interactive Reactive States
        const activeFilter = ref('all');
        const preloaderProgress = ref(0);
        const preloaderStatus = ref('INITIALIZING SYSTEM...');
        const isPreloaderLoaded = ref(false);
        const isPreloaderHidden = ref(false);
        const copyTooltipText = ref('Click to copy');
        const isCopied = ref(false);
        const systemTime = ref('');

        // 3. Computed Properties
        const filteredProjects = computed(() => {
            if (activeFilter.value === 'all') {
                return projects.value;
            }
            return projects.value.filter(p => p.filter_tag === activeFilter.value);
        });

        const firstNameChars = computed(() => {
            return (profile.value.firstName || '').split('');
        });

        // 4. Methods
        const setFilter = (filterId) => {
            activeFilter.value = filterId;
        };

        const copyEmail = () => {
            const email = profile.value.email;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    isCopied.value = true;
                    copyTooltipText.value = 'Copied to clipboard! ✨';
                    setTimeout(() => {
                        copyTooltipText.value = 'Click to copy';
                        isCopied.value = false;
                    }, 2500);
                }).catch(() => {
                    window.location.href = `mailto:${email}`;
                });
            } else {
                window.location.href = `mailto:${email}`;
            }
        };

        const updateClock = () => {
            const now = new Date();
            systemTime.value = now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        };

        // 5. Preloader Sequence
        const startPreloader = () => {
            document.body.classList.add('preloader-active');
            let progress = 0;
            const interval = setInterval(() => {
                progress += 2;
                preloaderProgress.value = Math.min(progress, 100);

                if (preloaderProgress.value < 35) {
                    preloaderStatus.value = 'INITIALIZING VUE 3 ENGINE...';
                } else if (preloaderProgress.value < 70) {
                    preloaderStatus.value = 'COMPILING 3D ASSETS...';
                } else if (preloaderProgress.value < 99) {
                    preloaderStatus.value = 'PREPARING WORKSPACE...';
                } else {
                    preloaderStatus.value = 'WELCOME [ 200 OK ]';
                }

                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        isPreloaderLoaded.value = true;
                        document.body.classList.remove('preloader-active');

                        setTimeout(() => {
                            isPreloaderHidden.value = true;
                        }, 750);
                    }, 200);
                }
            }, 36);
        };

        // 6. Lifecycle: Mount Subsystems
        onMounted(() => {
            startPreloader();
            updateClock();
            setInterval(updateClock, 1000);

            // Smooth Scroll for Internal Anchors
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#' || targetId.length < 2) return;
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            // Initialize Animation Subsystems
            init3DMonitorPhysics();
            initFallingCodeCursor();
            initPixelWalkingPhysics();
        });

        return {
            profile,
            stats,
            filters,
            projects,
            socials,
            activeFilter,
            filteredProjects,
            firstNameChars,
            preloaderProgress,
            preloaderStatus,
            isPreloaderLoaded,
            isPreloaderHidden,
            copyTooltipText,
            isCopied,
            systemTime,
            setFilter,
            copyEmail
        };
    }
});

// Mount Vue 3 App
app.mount('#app');

/**
 * Dynamic Pixel Character Walking Engine (Follows Letter Heights & Jumps Gaps)
 */
function initPixelWalkingPhysics() {
    const walker = document.getElementById('pixelWalker');
    const container = document.getElementById('heroFirstName');
    if (!walker || !container) return;

    const avatarArt = walker.querySelector('.pixel-avatar-art');
    const charSpans = container.querySelectorAll('.char-step');
    if (charSpans.length === 0) return;

    let posX = 0;
    let posY = 0;
    let targetY = 0;
    let direction = 1; // 1 = right, -1 = left
    let speed = 0.95;
    let isHovered = false;
    let pauseTimer = 0;
    let stepCycle = 0;

    // Relative height profile per character in Space Grotesk (1.0 = Cap/Ascender, 0.64 = x-height)
    const letterHeightMap = {
        'R': 1.0,
        'a': 0.64,
        'l': 1.0,
        'i': 0.82,
        'p': 0.64,
        'P': 1.0,
        'r': 0.64,
        'n': 0.64,
        'j': 0.82
    };

    walker.addEventListener('mouseenter', () => isHovered = true);
    walker.addEventListener('mouseleave', () => isHovered = false);

    function updateWalkerPhysics() {
        requestAnimationFrame(updateWalkerPhysics);

        const walkerWidth = walker.offsetWidth || 34;
        const maxDist = Math.max(0, container.clientWidth - walkerWidth);
        const fontSize = parseFloat(window.getComputedStyle(container).fontSize) || 70;

        if (!isHovered) {
            if (pauseTimer > 0) {
                pauseTimer--;
            } else {
                posX += speed * direction;
                stepCycle += 0.22;

                if (posX >= maxDist) {
                    posX = maxDist;
                    direction = -1;
                    pauseTimer = 110;
                    if (avatarArt) avatarArt.style.transform = 'scaleX(1)';
                } else if (posX <= 0) {
                    posX = 0;
                    direction = 1;
                    pauseTimer = 110;
                    if (avatarArt) avatarArt.style.transform = 'scaleX(1)';
                } else {
                    if (avatarArt) {
                        avatarArt.style.transform = direction === 1 ? 'scaleX(1)' : 'scaleX(-1)';
                    }
                }
            }
        }

        const footX = posX + walkerWidth / 2;
        let currentChar = 'R';
        let isOverSpace = false;
        let spaceRatio = 0;

        for (let i = 0; i < charSpans.length; i++) {
            const span = charSpans[i];
            const spanLeft = span.offsetLeft;
            const spanRight = spanLeft + span.offsetWidth;

            if (footX >= spanLeft && footX <= spanRight) {
                if (span.classList.contains('char-space')) {
                    isOverSpace = true;
                    spaceRatio = (footX - spanLeft) / Math.max(1, span.offsetWidth);
                } else {
                    currentChar = span.getAttribute('data-char') || 'a';
                }
                break;
            }
        }

        const heightRatio = letterHeightMap[currentChar] !== undefined ? letterHeightMap[currentChar] : 0.64;
        let calculatedDrop = (1.0 - heightRatio) * (fontSize * 0.48);

        if (isOverSpace) {
            const jumpHeight = fontSize * 0.32;
            const jumpArc = Math.sin(spaceRatio * Math.PI) * jumpHeight;
            calculatedDrop = (fontSize * 0.24) - jumpArc;
        }

        const isWalking = pauseTimer <= 0 && !isHovered;
        const stepBounce = isWalking ? Math.abs(Math.sin(stepCycle)) * (fontSize * 0.045) : 0;

        targetY = calculatedDrop - stepBounce;
        posY += (targetY - posY) * 0.24;

        walker.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    }

    updateWalkerPhysics();
}

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

    window.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
        const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

        targetRotateY = deltaX * 18 - 4;
        targetRotateX = -deltaY * 16 + 3;
    });

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

    function animateMonitor() {
        requestAnimationFrame(animateMonitor);

        currentRotateX += (targetRotateX - currentRotateX) * 0.08;
        currentRotateY += (targetRotateY - currentRotateY) * 0.08;

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

    const fileItems = [
        '⚡ App.vue',
        '🐘 app.php',
        '🎨 style.css',
        '⚡ api.ts',
        '📦 package.json',
        '⚙️ .env',
        '🚀 deploy.sh',
        '🗄️ schema.sql',
        '📝 README.md'
    ];

    const codeItems = [
        '<template>',
        'ref()',
        'computed()',
        'v-for',
        'v-if',
        'createApp()',
        '$_POST',
        '<?php',
        'return true;',
        'git push',
        '===',
        '200 OK',
        '010101',
        '<div>',
        'console.log()',
        'Vue.js 3'
    ];

    const colorPalette = [
        '#CB2957', // Signature neon crimson
        '#42B883', // Vue Emerald Green
        '#00FF9D', // Terminal matrix emerald
        '#00F0FF', // Cyber cyan
        '#FF5E89', // Neon rose
        '#FFE600', // Warning yellow
        '#A78BFA', // Violet
        '#EEEEEE'  // Crisp white
    ];

    const particles = [];
    const maxParticles = 20;

    let lastX = null;
    let lastY = null;
    let isLoopRunning = false;

    class CodeParticle {
        constructor(x, y, isBurst = false) {
            this.x = x;
            this.y = y;

            const isFile = Math.random() < 0.25;
            this.isFile = isFile;
            this.text = isFile
                ? fileItems[Math.floor(Math.random() * fileItems.length)]
                : codeItems[Math.floor(Math.random() * codeItems.length)];

            this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

            const angle = isBurst
                ? Math.random() * Math.PI * 2
                : (Math.random() * Math.PI - Math.PI / 2);

            const speed = isBurst
                ? (Math.random() * 3.0 + 1.5)
                : (Math.random() * 1.5 + 0.6);

            this.vx = Math.cos(angle) * speed;
            this.vy = isBurst ? Math.sin(angle) * speed : -Math.random() * 1.4 - 0.4;

            this.gravity = Math.random() * 0.05 + 0.12;
            this.swayAngle = Math.random() * Math.PI * 2;
            this.swaySpeed = 0.05;
            this.swayWidth = 0.5;

            this.rotation = (Math.random() - 0.5) * 0.15;
            this.spin = (Math.random() - 0.5) * 0.01;

            this.fontSize = isFile ? 9 : (Math.random() * 2 + 8.5);
            this.alpha = 1;
            this.decay = isBurst
                ? (Math.random() * 0.025 + 0.04)
                : (Math.random() * 0.028 + 0.042);
        }

        update() {
            this.vy += this.gravity;
            this.vx *= 0.95;
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
                context.fillStyle = 'rgba(10, 10, 14, 0.9)';
                context.strokeStyle = this.color;
                context.lineWidth = 1;

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

                context.fillStyle = '#FFFFFF';
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(this.text, 0, 0);
            } else {
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
            const jitterX = (Math.random() - 0.5) * 6;
            const jitterY = (Math.random() - 0.5) * 6;
            particles.push(new CodeParticle(x + jitterX, y + jitterY, isBurst));
            startLoopIfNeeded();
        }
    }

    function startLoopIfNeeded() {
        if (!isLoopRunning && particles.length > 0) {
            isLoopRunning = true;
            requestAnimationFrame(animateFallingCode);
        }
    }

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

        if (dist > 45 || (now - lastSpawnTime > 140 && dist > 10)) {
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

    window.addEventListener('click', (e) => {
        for (let i = 0; i < 4; i++) {
            addParticle(e.clientX, e.clientY, true);
        }
    });

    window.addEventListener('mouseleave', () => {
        lastX = null;
        lastY = null;
    });

    function animateFallingCode() {
        ctx.clearRect(0, 0, width, height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw(ctx);

            if (p.alpha <= 0 || p.y > height + 40) {
                particles.splice(i, 1);
            }
        }

        if (particles.length > 0) {
            requestAnimationFrame(animateFallingCode);
        } else {
            isLoopRunning = false;
        }
    }
}
