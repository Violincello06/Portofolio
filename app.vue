<template>
  <div class="portfolio-root">
    <!-- Welcome Preloader -->
    <div
      v-if="!isPreloaderHidden"
      class="welcome-preloader"
      :class="{ loaded: isPreloaderLoaded }"
    >
      <div class="preloader-inner">
        <div class="preloader-badge">
          <span class="status-dot"></span>
          <span class="mono-label">About Me</span>
        </div>
        <h2 class="preloader-title">
          <span class="preloader-greeting">Who Am I?</span>
          <span class="preloader-name">{{ profile.firstName }} {{ profile.lastName }}</span>
        </h2>
        <div class="preloader-progress-track">
          <div class="preloader-progress-bar" :style="{ width: preloaderProgress + '%' }"></div>
        </div>
        <div class="preloader-footer">
          <span class="mono-label preloader-status">{{ preloaderStatus }}</span>
          <span class="mono-label preloader-count">{{ preloaderProgress }}%</span>
        </div>
      </div>
    </div>

    <!-- Ambient Animated Aurora Mesh Background -->
    <div class="ambient-aurora-bg" aria-hidden="true">
      <div class="aurora-orb aurora-orb-1"></div>
      <div class="aurora-orb aurora-orb-2"></div>
      <div class="aurora-orb aurora-orb-3"></div>
      <div class="aurora-grid"></div>
    </div>

    <!-- Header / Navigation -->
    <header class="navbar">
      <div class="nav-left">
        <a href="#cv" class="cv-link">
          <span class="status-dot"></span>
          <span class="cv-text">CV</span>
        </a>
      </div>
      <nav class="nav-right">
        <a href="#work" class="nav-item">Work</a>
        <a href="#about" class="nav-item">About</a>
        <a href="#contact" class="nav-item">Contact</a>
      </nav>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="hero-section" id="hero">
        <div class="hero-top-tag">
          <span class="mono-label">{{ profile.role }} — {{ profile.location }}</span>
        </div>

        <div class="hero-main-layout">
          <div class="hero-title-wrap">
            <h1 class="hero-name">
              <span class="first-name" id="heroFirstName" ref="heroFirstNameRef">
                <span class="name-chars-wrap">
                  <template v-for="(char, index) in firstNameChars" :key="index">
                    <span v-if="char === ' '" class="char-step char-space">&nbsp;</span>
                    <span v-else class="char-step" :data-char="char">{{ char }}</span>
                  </template>
                </span>
                <a
                  href="#contact"
                  class="pixel-walking-character"
                  id="pixelWalker"
                  ref="pixelWalkerRef"
                  title="Click to Say Hello!"
                >
                  <span class="pixel-speech-bubble">
                    <span class="bubble-text">Hallo :]</span> <span class="wave-emoji">👋</span>
                  </span>
                  <span class="pixel-avatar-art">
                    <svg class="pixel-svg" viewBox="0 0 24 26" width="34" height="37" shape-rendering="crispEdges">
                      <!-- Left Leg -->
                      <g class="pixel-leg-left">
                        <rect x="7" y="21" width="4" height="3" fill="#0D0D10" />
                        <rect x="7" y="24" width="3" height="2" fill="#222228" />
                      </g>
                      <!-- Right Leg -->
                      <g class="pixel-leg-right">
                        <rect x="13" y="21" width="4" height="3" fill="#0D0D10" />
                        <rect x="14" y="24" width="3" height="2" fill="#222228" />
                      </g>
                      <!-- Body -->
                      <rect x="6" y="14" width="12" height="7" fill="#141418" />
                      <rect x="9" y="14" width="6" height="4" fill="#FFFFFF" />
                      <rect x="11" y="15" width="2" height="5" fill="#CB2957" />
                      <!-- Left Arm -->
                      <rect x="4" y="14" width="2" height="6" fill="#141418" />
                      <rect x="4" y="20" width="2" height="2" fill="#F5C09B" />
                      <!-- Head & Neck -->
                      <rect x="10" y="13" width="4" height="1" fill="#E2A984" />
                      <rect x="7" y="5" width="10" height="8" fill="#F5C09B" />
                      <!-- Cheeks -->
                      <rect x="7" y="10" width="2" height="1" fill="#FF6584" />
                      <rect x="15" y="10" width="2" height="1" fill="#FF6584" />
                      <!-- Eyes -->
                      <rect x="9" y="8" width="2" height="2" fill="#111111" />
                      <rect x="9" y="8" width="1" height="1" fill="#FFFFFF" />
                      <rect x="13" y="8" width="2" height="2" fill="#111111" />
                      <rect x="13" y="8" width="1" height="1" fill="#FFFFFF" />
                      <!-- Smile -->
                      <rect x="11" y="11" width="2" height="1" fill="#9E5A44" />
                      <!-- Hair -->
                      <rect x="6" y="2" width="12" height="3" fill="#111116" />
                      <rect x="5" y="4" width="3" height="5" fill="#111116" />
                      <rect x="16" y="4" width="3" height="5" fill="#111116" />
                      <rect x="8" y="5" width="3" height="2" fill="#111116" />
                      <rect x="13" y="5" width="3" height="2" fill="#111116" />
                      <rect x="11" y="2" width="2" height="2" fill="#282834" />
                      <!-- Waving Arm -->
                      <g class="pixel-waving-arm">
                        <rect x="17" y="13" width="3" height="2" fill="#141418" />
                        <rect x="19" y="10" width="2" height="3" fill="#141418" />
                        <rect x="19" y="7" width="3" height="3" fill="#F5C09B" />
                        <rect x="20" y="5" width="2" height="2" fill="#F5C09B" />
                      </g>
                    </svg>
                  </span>
                </a>
              </span>
              <span class="last-name">{{ profile.lastName }}</span>
            </h1>
          </div>

          <!-- Interactive 3D Monitor Container -->
          <div class="hero-3d-wrapper" id="hero3dContainer" ref="hero3dContainerRef">
            <div class="monitor-3d" id="monitor3D" ref="monitor3DRef">
              <!-- Glow -->
              <div class="monitor-glow"></div>
              <!-- Bezel -->
              <div class="monitor-bezel">
                <div class="monitor-camera"></div>
                <!-- Screen -->
                <div class="monitor-screen">
                  <div class="screen-header">
                    <div class="screen-controls">
                      <span class="ctrl-dot close"></span>
                      <span class="ctrl-dot min"></span>
                      <span class="ctrl-dot max"></span>
                    </div>
                    <div class="screen-title">
                      <span class="screen-pulse-dot"></span>
                      violincello_os ~ /nuxt3-hub
                    </div>
                    <div class="screen-badge">ONLINE {{ systemTime }}</div>
                  </div>

                  <div class="screen-apps">
                    <!-- GitHub -->
                    <a href="https://github.com/Violincello06" target="_blank" rel="noopener noreferrer" class="app-card github-app" title="Visit GitHub Profile">
                      <div class="app-icon-box">
                        <svg class="app-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </div>
                      <div class="app-details">
                        <span class="app-name">GitHub</span>
                        <span class="app-meta">@Violincello06</span>
                      </div>
                      <span class="app-action-arrow">↗</span>
                    </a>

                    <!-- LinkedIn -->
                    <a href="https://www.linkedin.com/in/violincello" target="_blank" rel="noopener noreferrer" class="app-card linkedin-app" title="Visit LinkedIn Profile">
                      <div class="app-icon-box">
                        <svg class="app-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </div>
                      <div class="app-details">
                        <span class="app-name">LinkedIn</span>
                        <span class="app-meta">Ralip Pranaja</span>
                      </div>
                      <span class="app-action-arrow">↗</span>
                    </a>

                    <!-- Instagram -->
                    <a href="https://instagram.com/ollecniloiv" target="_blank" rel="noopener noreferrer" class="app-card instagram-app" title="Visit Instagram Profile">
                      <div class="app-icon-box">
                        <svg class="app-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div class="app-details">
                        <span class="app-name">Instagram</span>
                        <span class="app-meta">@ollecniloiv</span>
                      </div>
                      <span class="app-action-arrow">↗</span>
                    </a>
                  </div>

                  <div class="screen-footer-status">
                    <span class="prompt-arrow">&gt;</span> Nuxt 3 Full-Stack Engine Active
                  </div>
                </div>
              </div>
              <!-- Stand -->
              <div class="monitor-stand-neck"></div>
              <div class="monitor-stand-base"></div>
            </div>
          </div>
        </div>

        <div class="hero-bottom-meta">
          <p class="hero-tagline">{{ profile.tagline }}</p>
          <div class="hero-year">© {{ profile.year }}</div>
        </div>
      </section>

      <!-- Selected Work Section -->
      <section class="work-section" id="work">
        <!-- Filter Pills -->
        <div class="filter-bar">
          <button
            v-for="filter in filters"
            :key="filter.id"
            class="filter-pill"
            :class="{ active: activeFilter === filter.id }"
            @click="setFilter(filter.id)"
          >
            {{ filter.label }}
          </button>
        </div>

        <div class="section-meta-header">
          <span class="mono-label">Selected Work</span>
          <span class="mono-label">2025–2026</span>
        </div>

        <div class="projects-list">
          <a
            v-for="project in filteredProjects"
            :key="project.id"
            :href="project.link"
            class="project-item"
            :data-category="project.filter_tag"
            :target="project.link.startsWith('http') ? '_blank' : null"
            :rel="project.link.startsWith('http') ? 'noopener noreferrer' : null"
          >
            <div class="project-header-row">
              <div class="project-left">
                <span class="project-num">{{ project.id }}</span>
                <div class="project-info">
                  <h3 class="project-title">{{ project.title }}</h3>
                  <span class="project-category">{{ project.category }}</span>
                </div>
              </div>
              <div class="project-right">
                <span class="project-year">{{ project.year }}</span>
                <span class="project-action-arrow">↗</span>
              </div>
            </div>

            <div class="project-preview-box">
              <div class="image-placeholder">
                <img
                  v-if="project.preview_image"
                  :src="project.preview_image"
                  :alt="project.title + ' Preview'"
                  class="preview-img"
                />
                <div class="placeholder-guide">
                  <span class="guide-status-dot"></span>
                  <span class="guide-title">{{ project.preview_image ? 'PROJECT PREVIEW' : 'UPCOMING PROJECT' }}</span>
                  <span class="guide-subtitle">{{ project.category }}</span>
                </div>
                <div class="preview-hover-tag">
                  <span>{{ project.link.startsWith('http') ? 'Open Live Website ↗' : 'View Details ↗' }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <!-- About Section -->
      <section class="about-section" id="about">
        <div class="about-header">
          <span class="mono-label">About</span>
        </div>

        <div class="about-grid">
          <div class="about-image-wrapper">
            <div class="about-portrait-placeholder">
              <img :src="profile.avatar" :alt="profile.firstName + ' ' + profile.lastName" class="about-portrait-img" />
              <div class="placeholder-guide">
                <span>{{ profile.firstName }} {{ profile.lastName }}</span>
              </div>
            </div>
          </div>

          <div class="about-content">
            <h2 class="about-lead">{{ profile.bio_lead }}</h2>
            <p class="about-bio">{{ profile.bio_detail }}</p>

            <div class="about-stats-grid">
              <div v-for="(stat, idx) in stats" :key="idx" class="stat-item">
                <span class="stat-number">{{ stat.number }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section" id="contact">
        <div class="contact-header">
          <span class="mono-label">Get in touch</span>
        </div>

        <div class="contact-email-container">
          <a
            :href="'mailto:' + profile.email"
            class="giant-email"
            id="emailLink"
            :title="'Click to copy ' + profile.email"
            @click.prevent="copyEmail"
          >
            {{ profile.email }}
          </a>
          <span class="copy-tooltip" id="copyTooltip" :style="{ color: isCopied ? 'var(--accent-neon)' : '' }">
            {{ copyTooltipText }}
          </span>
        </div>

        <div class="contact-socials">
          <a
            v-for="(social, idx) in socials"
            :key="idx"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            {{ social.name }}
          </a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-left">
        <span class="mono-label">{{ profile.firstName }} {{ profile.lastName }} — Portfolio (Nuxt 3)</span>
      </div>
      <div class="footer-right">
        <span class="mono-label">{{ profile.city }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Profile & Portfolio Data
const profile = ref({
  role: 'FullStack Web Developer',
  location: 'Indonesia',
  firstName: 'Ralip Pranaja',
  lastName: 'Violincello',
  tagline: 'A Web Developer Care About The Projects and Clean Code',
  year: new Date().getFullYear(),
  email: 'pranaja0852@gmail.com',
  city: 'Solo, Indonesia',
  avatar: '/preview_project/me.png',
  bio_lead: 'Hi! My name is Ralip Pranaja Violincello, and I am a Full-Stack Developer. I began delving into the world of programming while studying Computer Engineering at Universitas Muhammadiyah PKU Surakarta.',
  bio_detail: 'From Indonesia To International, I am always working hard to make my dream come true. I have experience with a variety of technologies and frameworks, including Nuxt 3, Vue.js, React, Node.js, Express, MongoDB, and MySQL.'
})

const stats = ref([
  { number: '2+', label: 'Years active' },
  { number: '1+', label: 'Projects' },
  { number: '1', label: 'Continents' }
])

const filters = ref([
  { id: 'all', label: 'All Projects' },
  { id: 'brand-identity', label: 'Web App & Brand' },
  { id: 'ui-design', label: 'UI/UX Design' }
])

const projects = ref([
  {
    id: '01',
    title: 'Website SnapGear',
    category: 'Website Layanan Penyewaan Kamera',
    year: '2026',
    preview_image: '/preview_project/snapgear.png',
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
])

const socials = ref([
  { name: 'Instagram', url: 'https://instagram.com/ollecniloiv' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/violincello' },
  { name: 'Github', url: 'https://github.com/Violincello06' }
])

// Reactive States
const activeFilter = ref('all')
const preloaderProgress = ref(0)
const preloaderStatus = ref('INITIALIZING SYSTEM...')
const isPreloaderLoaded = ref(false)
const isPreloaderHidden = ref(false)
const copyTooltipText = ref('Click to copy')
const isCopied = ref(false)
const systemTime = ref('')

const heroFirstNameRef = ref(null)
const pixelWalkerRef = ref(null)
const hero3dContainerRef = ref(null)
const monitor3DRef = ref(null)

// Computed
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects.value
  return projects.value.filter((p) => p.filter_tag === activeFilter.value)
})

const firstNameChars = computed(() => {
  return (profile.value.firstName || '').split('')
})

// Methods
const setFilter = (id) => {
  activeFilter.value = id
}

const copyEmail = () => {
  const email = profile.value.email
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      isCopied.value = true
      copyTooltipText.value = 'Copied to clipboard! ✨'
      setTimeout(() => {
        copyTooltipText.value = 'Click to copy'
        isCopied.value = false
      }, 2500)
    }).catch(() => {
      window.location.href = `mailto:${email}`
    })
  } else {
    window.location.href = `mailto:${email}`
  }
}

const updateClock = () => {
  const now = new Date()
  systemTime.value = now.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

// Preloader Sequence
const startPreloader = () => {
  if (import.meta.server) return
  document.body.classList.add('preloader-active')
  let progress = 0
  const interval = setInterval(() => {
    progress += 2
    preloaderProgress.value = Math.min(progress, 100)

    if (preloaderProgress.value < 35) {
      preloaderStatus.value = 'INITIALIZING NUXT 3 ENGINE...'
    } else if (preloaderProgress.value < 70) {
      preloaderStatus.value = 'COMPILING 3D ASSETS...'
    } else if (preloaderProgress.value < 99) {
      preloaderStatus.value = 'PREPARING WORKSPACE...'
    } else {
      preloaderStatus.value = 'WELCOME [ 200 OK ]'
    }

    if (progress >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        isPreloaderLoaded.value = true
        document.body.classList.remove('preloader-active')
        setTimeout(() => {
          isPreloaderHidden.value = true
        }, 750)
      }, 200)
    }
  }, 36)
}

// 3D Monitor Physics
const init3DMonitor = () => {
  const monitor = monitor3DRef.value || document.getElementById('monitor3D')
  const container = hero3dContainerRef.value || document.getElementById('hero3dContainer')
  if (!monitor || !container) return

  let targetRotateX = 4
  let targetRotateY = -8
  let currentRotateX = 4
  let currentRotateY = -8
  let isHovered = false

  window.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) / (window.innerWidth / 2)
    const deltaY = (e.clientY - centerY) / (window.innerHeight / 2)

    targetRotateY = deltaX * 18 - 4
    targetRotateX = -deltaY * 16 + 3
  })

  window.addEventListener('mouseleave', () => {
    targetRotateX = 3
    targetRotateY = -6
  })

  container.addEventListener('mouseenter', () => {
    isHovered = true
  })

  container.addEventListener('mouseleave', () => {
    isHovered = false
  })

  function animateMonitor() {
    requestAnimationFrame(animateMonitor)
    currentRotateX += (targetRotateX - currentRotateX) * 0.08
    currentRotateY += (targetRotateY - currentRotateY) * 0.08

    const time = Date.now() * 0.0018
    const floatY = Math.sin(time) * 4

    monitor.style.transform = `
      perspective(1200px)
      rotateX(${currentRotateX}deg)
      rotateY(${currentRotateY}deg)
      translateY(${floatY}px)
      ${isHovered ? 'scale3d(1.03, 1.03, 1.03)' : 'scale3d(1, 1, 1)'}
    `
  }

  animateMonitor()
}

// Pixel Character Walking Engine
const initPixelWalker = () => {
  const walker = pixelWalkerRef.value || document.getElementById('pixelWalker')
  const container = heroFirstNameRef.value || document.getElementById('heroFirstName')
  if (!walker || !container) return

  const avatarArt = walker.querySelector('.pixel-avatar-art')
  const charSpans = container.querySelectorAll('.char-step')
  if (charSpans.length === 0) return

  let posX = 0
  let posY = 0
  let targetY = 0
  let direction = 1
  let speed = 0.95
  let isHovered = false
  let pauseTimer = 0
  let stepCycle = 0

  const letterHeightMap = {
    R: 1.0,
    a: 0.64,
    l: 1.0,
    i: 0.82,
    p: 0.64,
    P: 1.0,
    r: 0.64,
    n: 0.64,
    j: 0.82
  }

  walker.addEventListener('mouseenter', () => (isHovered = true))
  walker.addEventListener('mouseleave', () => (isHovered = false))

  function updateWalker() {
    requestAnimationFrame(updateWalker)

    const walkerWidth = walker.offsetWidth || 34
    const maxDist = Math.max(0, container.clientWidth - walkerWidth)
    const fontSize = parseFloat(window.getComputedStyle(container).fontSize) || 70

    if (!isHovered) {
      if (pauseTimer > 0) {
        pauseTimer--
      } else {
        posX += speed * direction
        stepCycle += 0.22

        if (posX >= maxDist) {
          posX = maxDist
          direction = -1
          pauseTimer = 110
          if (avatarArt) avatarArt.style.transform = 'scaleX(1)'
        } else if (posX <= 0) {
          posX = 0
          direction = 1
          pauseTimer = 110
          if (avatarArt) avatarArt.style.transform = 'scaleX(1)'
        } else {
          if (avatarArt) {
            avatarArt.style.transform = direction === 1 ? 'scaleX(1)' : 'scaleX(-1)'
          }
        }
      }
    }

    const footX = posX + walkerWidth / 2
    let currentChar = 'R'
    let isOverSpace = false
    let spaceRatio = 0

    for (let i = 0; i < charSpans.length; i++) {
      const span = charSpans[i]
      const spanLeft = span.offsetLeft
      const spanRight = spanLeft + span.offsetWidth

      if (footX >= spanLeft && footX <= spanRight) {
        if (span.classList.contains('char-space')) {
          isOverSpace = true
          spaceRatio = (footX - spanLeft) / Math.max(1, span.offsetWidth)
        } else {
          currentChar = span.getAttribute('data-char') || 'a'
        }
        break
      }
    }

    const heightRatio = letterHeightMap[currentChar] !== undefined ? letterHeightMap[currentChar] : 0.64
    let calculatedDrop = (1.0 - heightRatio) * (fontSize * 0.48)

    if (isOverSpace) {
      const jumpHeight = fontSize * 0.32
      const jumpArc = Math.sin(spaceRatio * Math.PI) * jumpHeight
      calculatedDrop = fontSize * 0.24 - jumpArc
    }

    const isWalking = pauseTimer <= 0 && !isHovered
    const stepBounce = isWalking ? Math.abs(Math.sin(stepCycle)) * (fontSize * 0.045) : 0

    targetY = calculatedDrop - stepBounce
    posY += (targetY - posY) * 0.24

    walker.style.transform = `translate3d(${posX}px, ${posY}px, 0)`
  }

  updateWalker()
}

// Falling Code Cursor
const initFallingCursor = () => {
  if (import.meta.server) return

  const canvas = document.createElement('canvas')
  canvas.className = 'code-trail-canvas'
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)
  let dpr = Math.min(window.devicePixelRatio || 1, 2)

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)
  }

  resize()
  window.addEventListener('resize', resize)

  const fileItems = [
    '✨ app.vue',
    '⚡ nuxt.config.ts',
    '🎨 main.css',
    '📦 package.json',
    '🚀 deploy.sh',
    '🗄️ schema.sql',
    '📝 README.md'
  ]

  const codeItems = [
    '<template>',
    '<script setup>',
    'useSeoMeta()',
    'ref()',
    'computed()',
    'defineNuxtConfig',
    '===',
    '200 OK',
    '010101',
    'Nuxt 3',
    'Vue.js'
  ]

  const colorPalette = [
    '#CB2957',
    '#00DC82', // Nuxt emerald
    '#42B883', // Vue emerald
    '#00F0FF',
    '#FF5E89',
    '#FFE600',
    '#A78BFA',
    '#EEEEEE'
  ]

  const particles = []
  const maxParticles = 20
  let lastX = null
  let lastY = null
  let isLoopRunning = false

  class CodeParticle {
    constructor(x, y, isBurst = false) {
      this.x = x
      this.y = y

      const isFile = Math.random() < 0.25
      this.isFile = isFile
      this.text = isFile
        ? fileItems[Math.floor(Math.random() * fileItems.length)]
        : codeItems[Math.floor(Math.random() * codeItems.length)]

      this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)]

      const angle = isBurst ? Math.random() * Math.PI * 2 : Math.random() * Math.PI - Math.PI / 2
      const speed = isBurst ? Math.random() * 3.0 + 1.5 : Math.random() * 1.5 + 0.6

      this.vx = Math.cos(angle) * speed
      this.vy = isBurst ? Math.sin(angle) * speed : -Math.random() * 1.4 - 0.4

      this.gravity = Math.random() * 0.05 + 0.12
      this.swayAngle = Math.random() * Math.PI * 2
      this.swaySpeed = 0.05
      this.swayWidth = 0.5

      this.rotation = (Math.random() - 0.5) * 0.15
      this.spin = (Math.random() - 0.5) * 0.01

      this.fontSize = isFile ? 9 : Math.random() * 2 + 8.5
      this.alpha = 1
      this.decay = isBurst ? Math.random() * 0.025 + 0.04 : Math.random() * 0.028 + 0.042
    }

    update() {
      this.vy += this.gravity
      this.vx *= 0.95
      this.swayAngle += this.swaySpeed

      this.x += this.vx + Math.sin(this.swayAngle) * this.swayWidth
      this.y += this.vy

      this.rotation += this.spin
      this.alpha -= this.decay
    }

    draw(context) {
      if (this.alpha <= 0) return

      context.save()
      context.translate(this.x, this.y)
      context.rotate(this.rotation)
      context.globalAlpha = Math.max(0, this.alpha)

      context.font = `${this.isFile ? '600' : '500'} ${this.fontSize}px "JetBrains Mono", monospace, sans-serif`
      const textMetrics = context.measureText(this.text)
      const textWidth = textMetrics.width
      const paddingX = this.isFile ? 5 : 2
      const paddingY = this.isFile ? 2 : 1
      const boxWidth = textWidth + paddingX * 2
      const boxHeight = this.fontSize + paddingY * 2

      if (this.isFile) {
        context.fillStyle = 'rgba(10, 10, 14, 0.9)'
        context.strokeStyle = this.color
        context.lineWidth = 1

        const r = 3
        const bx = -boxWidth / 2
        const by = -boxHeight / 2
        context.beginPath()
        context.moveTo(bx + r, by)
        context.lineTo(bx + boxWidth - r, by)
        context.quadraticCurveTo(bx + boxWidth, by, bx + boxWidth, by + r)
        context.lineTo(bx + boxWidth, by + boxHeight - r)
        context.quadraticCurveTo(bx + boxWidth, by + boxHeight, bx + boxWidth - r, by + boxHeight)
        context.lineTo(bx + r, by + boxHeight)
        context.quadraticCurveTo(bx, by + boxHeight, bx, by + boxHeight - r)
        context.lineTo(bx, by + r)
        context.quadraticCurveTo(bx, by, bx + r, by)
        context.closePath()
        context.fill()
        context.stroke()

        context.fillStyle = '#FFFFFF'
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(this.text, 0, 0)
      } else {
        context.fillStyle = this.color
        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillText(this.text, 0, 0)
      }

      context.restore()
    }
  }

  function addParticle(x, y, isBurst = false) {
    if (particles.length < maxParticles) {
      const jitterX = (Math.random() - 0.5) * 6
      const jitterY = (Math.random() - 0.5) * 6
      particles.push(new CodeParticle(x + jitterX, y + jitterY, isBurst))
      startLoop()
    }
  }

  function startLoop() {
    if (!isLoopRunning && particles.length > 0) {
      isLoopRunning = true
      requestAnimationFrame(animate)
    }
  }

  let lastSpawn = 0
  function handleMove(clientX, clientY) {
    const now = Date.now()
    if (lastX === null || lastY === null) {
      lastX = clientX
      lastY = clientY
      addParticle(clientX, clientY)
      lastSpawn = now
      return
    }

    const dx = clientX - lastX
    const dy = clientY - lastY
    const dist = Math.hypot(dx, dy)

    if (dist > 45 || (now - lastSpawn > 140 && dist > 10)) {
      addParticle(clientX, clientY)
      lastSpawn = now
      lastX = clientX
      lastY = clientY
    }
  }

  window.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY))
  window.addEventListener(
    'touchmove',
    (e) => {
      if (e.touches.length > 0) handleMove(e.touches[0].clientX, e.touches[0].clientY)
    },
    { passive: true }
  )

  window.addEventListener('click', (e) => {
    for (let i = 0; i < 4; i++) addParticle(e.clientX, e.clientY, true)
  })

  window.addEventListener('mouseleave', () => {
    lastX = null
    lastY = null
  })

  function animate() {
    ctx.clearRect(0, 0, width, height)

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]
      p.update()
      p.draw(ctx)
      if (p.alpha <= 0 || p.y > height + 40) {
        particles.splice(i, 1)
      }
    }

    if (particles.length > 0) {
      requestAnimationFrame(animate)
    } else {
      isLoopRunning = false
    }
  }
}

onMounted(() => {
  startPreloader()
  updateClock()
  setInterval(updateClock, 1000)

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href')
      if (targetId === '#' || targetId.length < 2) return
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })

  // Subsystems
  init3DMonitor()
  initFallingCursor()
  initPixelWalker()
})
</script>

<style>
/* Scoped or global enhancements if needed */
</style>
