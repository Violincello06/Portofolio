<?php
// Configuration & Profile Data
$siteTitle = "Violincello - FullStack Developer";

$profile = [
    'role' => "FullStack Web Developer",
    'location' => "Indonesia",
    'firstName' => "Ralip Pranaja",
    'lastName' => "Violincello",
    'tagline' => "A Web Developer Care About The Projects and Clean Code",
    'year' => date('Y'),
    'email' => "pranaja0852@gmail.com",
    'city' => "Solo, Indonesia",
    'avatar' => "preview_project/me.png",
    'bio_lead' => "Hi! My name is Ralip Pranaja Violincello, and I am a Full-Stack Developer. I began delving into the world of programming while studying Computer Engineering at Universitas Muhammadiyah PKU Surakarta.",
    'bio_detail' => "From Indonesia To International, I am always working hard to make my dream come true. I have experience with a variety of technologies and frameworks, including React, Node.js, Express, MongoDB, and MySQL."
];

$stats = [
    ['number' => '2+', 'label' => 'Years active'],
    ['number' => '1+', 'label' => 'Projects'],
    ['number' => '1',  'label' => 'Continents']
];

$filters = [
    ['id' => 'all', 'label' => 'Projects', 'active' => true]
];

$projects = [
    [
        'id' => '01',
        'title' => 'Website SnapGear',
        'category' => 'Website Layanan Penyewaan Kamera',
        'year' => '2026',
        'preview_image' => 'preview_project/snapgear.png',
        'filter_tag' => 'brand-identity',
        'link' => 'http://localhost/uts-web-ralipp/index.php'
    ],
    [
        'id' => '02',
        'title' => 'Cooming Soon Project',
        'category' => 'Next Project Maybe With You!',
        'year' => '2027',
        'preview_image' => '',
        'filter_tag' => 'ui-design',
        'link' => '#project-2'
    ]
];

$socials = [
    ['name' => 'Instagram', 'url' => 'https://instagram.com/ollecniloiv'],
    ['name' => 'LinkedIn', 'url' => 'https://linkedin.com'],
    ['name' => 'Github', 'url' => 'https://github.com/Violincello06']
];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($siteTitle); ?></title>
    <!-- Google Fonts: Space Grotesk (Headings), Space Mono (Monospace details), Plus Jakarta Sans (Body) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="index.css?v=<?= time(); ?>">
</head>

<body>

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
                <span class="mono-label"><?= htmlspecialchars($profile['role']); ?> — <?= htmlspecialchars($profile['location']); ?></span>
            </div>

            <div class="hero-main-layout">
                <div class="hero-title-wrap">
                    <h1 class="hero-name">
                        <span class="first-name"><?= htmlspecialchars($profile['firstName']); ?></span>
                        <span class="last-name"><?= htmlspecialchars($profile['lastName']); ?></span>
                    </h1>
                </div>

                <!-- Interactive 3D Monitor Container -->
                <div class="hero-3d-wrapper" id="hero3dContainer">
                    <div class="monitor-3d" id="monitor3D">
                        <!-- Floating Neon Glow -->
                        <div class="monitor-glow"></div>
                        
                        <!-- Monitor Frame & Bezel -->
                        <div class="monitor-bezel">
                            <div class="monitor-camera"></div>

                            <!-- Screen Display -->
                            <div class="monitor-screen">
                                <!-- Screen Header -->
                                <div class="screen-header">
                                    <div class="screen-controls">
                                        <span class="ctrl-dot close"></span>
                                        <span class="ctrl-dot min"></span>
                                        <span class="ctrl-dot max"></span>
                                    </div>
                                    <div class="screen-title">
                                        <span class="screen-pulse-dot"></span>
                                        violincello_os ~ /social-hub
                                    </div>
                                    <div class="screen-badge">ONLINE</div>
                                </div>

                                <!-- Screen Apps Grid -->
                                <div class="screen-apps">
                                    <!-- GitHub App -->
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

                                    <!-- LinkedIn App -->
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="app-card linkedin-app" title="Visit LinkedIn Profile">
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

                                    <!-- Instagram App -->
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

                                <!-- Screen Footer -->
                                <div class="screen-footer-status">
                                    <span class="prompt-arrow">&gt;</span> Click any card to launch link
                                </div>
                            </div>
                        </div>

                        <!-- Monitor Stand -->
                        <div class="monitor-stand-neck"></div>
                        <div class="monitor-stand-base"></div>
                    </div>
                </div>
            </div>

            <div class="hero-bottom-meta">
                <p class="hero-tagline"><?= htmlspecialchars($profile['tagline']); ?></p>
                <div class="hero-year">© <?= htmlspecialchars($profile['year']); ?></div>
            </div>
        </section>

        <!-- Selected Work Section -->
        <section class="work-section" id="work">
            <!-- Filter Pills -->
            <div class="filter-bar">
                <?php foreach ($filters as $filter): ?>
                    <button class="filter-pill <?= $filter['active'] ? 'active' : ''; ?>" data-filter="<?= htmlspecialchars($filter['id']); ?>">
                        <?= htmlspecialchars($filter['label']); ?>
                    </button>
                <?php endforeach; ?>
            </div>

            <!-- Section Meta Header -->
            <div class="section-meta-header">
                <span class="mono-label">Selected Work</span>
                <span class="mono-label">2025–2026</span>
            </div>

            <!-- Projects Table / List -->
            <div class="projects-list">
                <?php foreach ($projects as $project): ?>
                    <a href="<?= htmlspecialchars($project['link']); ?>" class="project-item" data-category="<?= htmlspecialchars($project['filter_tag']); ?>" <?= (strpos($project['link'], 'http') === 0) ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>>
                        <div class="project-left">
                            <span class="project-num"><?= htmlspecialchars($project['id']); ?></span>
                            <div class="project-info">
                                <h3 class="project-title"><?= htmlspecialchars($project['title']); ?></h3>
                                <span class="project-category"><?= htmlspecialchars($project['category']); ?></span>
                            </div>
                        </div>
                        <div class="project-right">
                            <span class="project-year"><?= htmlspecialchars($project['year']); ?></span>
                        </div>
                        <!-- Hover Preview Container -->
                        <div class="project-preview-box">
                            <div class="image-placeholder">
                                <img src="<?= htmlspecialchars($project['preview_image']); ?>" alt="<?= htmlspecialchars($project['title']); ?> Preview" class="preview-img">
                                <div class="placeholder-guide">
                                    <span>Preview Image</span>
                                </div>
                            </div>
                        </div>
                    </a>
                <?php endforeach; ?>
            </div>
        </section>

        <!-- About Section -->
        <section class="about-section" id="about">
            <div class="about-header">
                <span class="mono-label">About</span>
            </div>

            <div class="about-grid">
                <!-- Left: Portrait Image Box -->
                <div class="about-image-wrapper">
                    <div class="about-portrait-placeholder">
                        <img src="<?= htmlspecialchars($profile['avatar']); ?>" alt="<?= htmlspecialchars($profile['firstName'] . ' ' . $profile['lastName']); ?>" class="about-portrait-img">
                        <div class="placeholder-guide">
                            <span><?= htmlspecialchars($profile['firstName'] . ' ' . $profile['lastName']); ?></span>
                        </div>
                    </div>
                </div>

                <!-- Right: Text Content & Stats -->
                <div class="about-content">
                    <h2 class="about-lead">
                        <?= htmlspecialchars($profile['bio_lead']); ?>
                    </h2>
                    <p class="about-bio">
                        <?= htmlspecialchars($profile['bio_detail']); ?>
                    </p>

                    <!-- Stats Counter Grid -->
                    <div class="about-stats-grid">
                        <?php foreach ($stats as $stat): ?>
                            <div class="stat-item">
                                <span class="stat-number"><?= htmlspecialchars($stat['number']); ?></span>
                                <span class="stat-label"><?= htmlspecialchars($stat['label']); ?></span>
                            </div>
                        <?php endforeach; ?>
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
                <a href="mailto:<?= htmlspecialchars($profile['email']); ?>" class="giant-email" id="emailLink" title="Click to copy email">
                    <?= htmlspecialchars($profile['email']); ?>
                </a>
                <span class="copy-tooltip" id="copyTooltip">Click to copy</span>
            </div>

            <div class="contact-socials">
                <?php foreach ($socials as $social): ?>
                    <a href="<?= htmlspecialchars($social['url']); ?>" target="_blank" rel="noopener noreferrer" class="social-link">
                        <?= htmlspecialchars($social['name']); ?>
                    </a>
                <?php endforeach; ?>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-left">
            <span class="mono-label"><?= htmlspecialchars($profile['firstName'] . ' ' . $profile['lastName']); ?> — Portfolio</span>
        </div>
        <div class="footer-right">
            <span class="mono-label"><?= htmlspecialchars($profile['city']); ?></span>
        </div>
    </footer>

    <!-- Three.js for 3D Graphics -->
    <script src="script.js?v=<?= time(); ?>"></script>
</body>

</html>
