// ===== GAME DATA (Resume Content) =====
const DIALOGS = {
    welcome: {
        title: "Welcome Sign",
        pages: [`
            <h3>Welcome to Faiz's World!</h3>
            <p>You've entered the portfolio realm of <span style="color:#f0e040">Faiz Ahmad</span>.</p>
            <p>Explore this world and talk to the NPCs near each building to learn about my journey!</p>
            <br>
            <p style="color:#888">Buildings to visit:</p>
            <p>🏠 <span style="color:#88ccff">About Me</span> — Who I am</p>
            <p>🏢 <span style="color:#ff6666">Experience</span> — Where I've worked</p>
            <p>🏗️ <span style="color:#66cc66">Projects</span> — What I've built</p>
            <p>⚔️ <span style="color:#aa66ff">Skills</span> — My abilities</p>
            <p>🏛️ <span style="color:#ccaa33">Research & Contact</span> — Publications & links</p>
        `]
    },
    about: {
        title: "About Me",
        pages: [`
            <h3>Faiz Ahmad</h3>
            <p><span style="color:#88ccff">Computer Science Student</span> at <span style="color:#f0e040">Bina Nusantara University</span></p>
            <p>📍 Bekasi, Jawa Barat, Indonesia</p>
            <br>
            <p>Specializing in <span style="color:#f0e040">Software Engineering</span> and <span style="color:#f0e040">Databases</span>.</p>
            <br>
            <p>Skilled in developing and maintaining software products with a focus on clean code, scalable architecture, and user-centered design.</p>
            <br>
            <p>Hands-on experience building real-world software products that are <span style="color:#66cc66">actively used in production</span>.</p>
            <br>
            <p>Experienced in managing relational and non-relational databases, including data modeling and query optimization.</p>
            <br>
            <p style="color:#88ccff">Passionate about solving real-world problems through technology and eager to contribute to impactful projects.</p>
        `]
    },
    experience: {
        title: "Experience",
        pages: [`
            <h3>Work Experience</h3>
            <div class="exp-item">
                <div class="exp-role">Oracle Software Engineer</div>
                <div class="exp-company">🏢 Traveloka</div>
                <div class="exp-date">Sep 2025 - Feb 2026 · 6 months · Internship</div>
                <div class="exp-date">📍 Tangerang Selatan, Banten</div>
                <div class="exp-desc">
                    Worked with Oracle E-Business Suite and Oracle Database systems.
                </div>
                <div style="margin-top:8px">
                    <span class="tag">Oracle E-Business Suite</span>
                    <span class="tag">Oracle Database</span>
                </div>
            </div>
        `, `
            <div class="exp-item">
                <div class="exp-role">Information Technology Developer</div>
                <div class="exp-company">🏢 PT TEMAS Tbk.</div>
                <div class="exp-date">Feb 2025 - Sep 2025 · 8 months · Internship</div>
                <div class="exp-date">📍 Jakarta Utara, Indonesia</div>
                <div class="exp-desc">
                    Fullstack developer contributing to development, maintenance, and optimization of IT systems using Go (Golang) for backend and Vue.js with Quasar framework on frontend.
                    <br><br>
                    Actively participated in system planning and business process analysis. Worked within a Scrum-based team environment and supported automated quality assurance processes.
                </div>
                <div style="margin-top:8px">
                    <span class="tag">Go (Golang)</span>
                    <span class="tag">Vue.js</span>
                    <span class="tag">Quasar</span>
                    <span class="tag">Scrum</span>
                    <span class="tag">QA</span>
                </div>
            </div>
        `]
    },
    projects: {
        title: "Projects",
        pages: [`
            <h3>Featured Projects</h3>
            <div class="project-card">
                <div class="project-name">🏗️ Internal Applications Development</div>
                <div class="project-date">Feb 2025 - Present · PT TEMAS Tbk.</div>
                <div class="project-desc">
                    Developed several internal enterprise applications:
                    <br>• Invoice Management System with LOA (Line of Approval)
                    <br>• Ticketing System for internal IT support
                    <br>• Access Management System for secure role control
                </div>
                <div style="margin-top:8px">
                    <span class="tag">Go</span>
                    <span class="tag">Vue.js</span>
                    <span class="tag">Quasar</span>
                    <span class="tag">Trunk-based Git</span>
                </div>
            </div>
        `, `
            <div class="project-card">
                <div class="project-name">❄️ Data Engineering with Snowflake</div>
                <div class="project-date">Dec 2024</div>
                <div class="project-desc">
                    Implemented robust DDL structure in Snowflake. Collected data from various sources, transformed and loaded into Snowflake for efficient storage. Used Power BI for dashboards and reports.
                </div>
                <div style="margin-top:8px">
                    <span class="tag">Snowflake</span>
                    <span class="tag">DDL</span>
                    <span class="tag">Power BI</span>
                    <span class="tag">ETL</span>
                </div>
            </div>
            <div class="project-card">
                <div class="project-name">📊 Performance Sales Dashboard</div>
                <div class="project-date">Oct 2024</div>
                <div class="project-desc">
                    Interactive Power BI dashboard for sales performance analysis. Visualizes complex sales data for identifying key trends.
                </div>
                <div style="margin-top:8px">
                    <span class="tag">Power BI</span>
                    <span class="tag">DAX</span>
                    <span class="tag">Data Modeling</span>
                </div>
            </div>
        `, `
            <div class="project-card">
                <div class="project-name">🎮 Personality Test with Gamification</div>
                <div class="project-date">Feb 2024 - Jun 2024 · BINUS University</div>
                <div class="project-desc">
                    Led development of an innovative personality test website combining RPG game elements with butterfly effect mechanics. Every choice affects subsequent questions.
                    <br><br>
                    Role: Team Lead — managed project, designed prototypes in Figma, developed backend (Python/PHP) and frontend (HTML/CSS).
                </div>
                <div style="margin-top:8px">
                    <span class="tag">Python</span>
                    <span class="tag">PHP</span>
                    <span class="tag">Figma</span>
                    <span class="tag">Team Lead</span>
                </div>
            </div>
            <div class="project-card">
                <div class="project-name">🛒 E-commerce Data Analysis</div>
                <div class="project-date">Mar 2024 - May 2024 · BINUS University</div>
                <div class="project-desc">
                    Analyzed sales data using Naive Bayes algorithm to classify products. Generated restock recommendations to improve inventory management.
                </div>
                <div style="margin-top:8px">
                    <span class="tag">Python</span>
                    <span class="tag">Naive Bayes</span>
                    <span class="tag">ML</span>
                </div>
            </div>
        `]
    },
    skills: {
        title: "Skills & Technologies",
        pages: [`
            <h3>Technical Skills</h3>
            <div class="skill-group">
                <div class="skill-label">⚔️ Backend</div>
                <span class="tag">Go (Golang)</span>
                <span class="tag">Python</span>
                <span class="tag">PHP</span>
            </div>
            <div class="skill-group">
                <div class="skill-label">🛡️ Frontend</div>
                <span class="tag">Vue.js</span>
                <span class="tag">Quasar Framework</span>
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
            </div>
            <div class="skill-group">
                <div class="skill-label">🗄️ Database & Data</div>
                <span class="tag">Oracle Database</span>
                <span class="tag">Oracle E-Business Suite</span>
                <span class="tag">Snowflake</span>
                <span class="tag">SQL / DDL</span>
                <span class="tag">Data Modeling</span>
            </div>
        `, `
            <div class="skill-group">
                <div class="skill-label">📊 Data & Analytics</div>
                <span class="tag">Power BI</span>
                <span class="tag">DAX</span>
                <span class="tag">Data Analysis</span>
                <span class="tag">Machine Learning</span>
                <span class="tag">Naive Bayes</span>
            </div>
            <div class="skill-group">
                <div class="skill-label">🔧 Tools & Methods</div>
                <span class="tag">Git</span>
                <span class="tag">Scrum</span>
                <span class="tag">Figma</span>
                <span class="tag">Trunk-based Development</span>
            </div>
            <div class="skill-group">
                <div class="skill-label">🧠 Soft Skills</div>
                <span class="tag">Project Management</span>
                <span class="tag">Team Leadership</span>
                <span class="tag">Problem Solving</span>
                <span class="tag">Research & Writing</span>
            </div>
        `]
    },
    publication: {
        title: "Research & Contact",
        pages: [`
            <h3>📜 IEEE Publication</h3>
            <div class="project-card">
                <div class="project-name" style="font-size:0.45rem;line-height:2">The Influence of Social Media on Voter Behavior, Public Opinion, and Partisan Tendencies during Election Campaigns in Indonesia: Systematic Literature Review</div>
                <div class="project-date">IEEE · iSemantic 2024 · November 28, 2024</div>
                <div class="project-desc">
                    A systematic literature review examining the influence of social media on voter behavior, public opinion, and partisan tendencies during Indonesian election campaigns.
                    <br><br>
                    Presented at the International Seminar on Application of Information and Communication Technology (iSemantic 2024).
                </div>
                <div style="margin-top:8px">
                    <span class="tag" style="border-color:#66cc66;color:#66cc66">Published & Presented</span>
                </div>
            </div>
        `, `
            <h3>📬 Get in Touch</h3>
            <p>I'm always open to discussing new opportunities!</p>
            <br>
            <a href="https://www.linkedin.com/in/faiz-ahmad-8427b5329/" target="_blank" class="contact-link">🔗 LinkedIn — Faiz Ahmad</a>
            <a href="mailto:faiz.ahmad@binus.ac.id" class="contact-link">📧 Email — faiz.ahmad@binus.ac.id</a>
            <a href="https://github.com/faizmad" target="_blank" class="contact-link">🐙 GitHub — faizmad</a>
            <br>
            <p style="color:#555;font-size:0.35rem;margin-top:12px">Thanks for exploring my world! 🎮</p>
        `]
    }
};

// Zone names for HUD
const ZONE_NAMES = {
    default: "Exploring...",
    center: "Town Center",
    about: "About District",
    experience: "Experience Quarter",
    projects: "Project Workshop",
    skills: "Skill Arena",
    publication: "Research Hall"
};

// ===== GAME ENGINE =====
const WORLD_W = 1920;
const WORLD_H = 1920;
const PLAYER_SPEED = 4;
const INTERACT_RANGE = 80;

let player = { x: 940, y: 600 };
let keys = {};
let dialogOpen = false;
let currentPage = 0;
let currentDialog = null;
let gameStarted = false;

// DOM elements
const startScreen = document.getElementById('startScreen');
const startBtn = document.getElementById('startBtn');
const gameContainer = document.getElementById('gameContainer');
const world = document.getElementById('world');
const playerEl = document.getElementById('player');
const playerSprite = document.getElementById('playerSprite');
const dialogOverlay = document.getElementById('dialogOverlay');
const dialogTitle = document.getElementById('dialogTitle');
const dialogBody = document.getElementById('dialogBody');
const dialogClose = document.getElementById('dialogClose');
const dialogPage = document.getElementById('dialogPage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const hudLocation = document.getElementById('hudLocation');
const minimapDot = document.getElementById('minimapDot');

// ===== START GAME =====
startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    gameContainer.classList.add('active');
    gameStarted = true;
    setTimeout(() => { startScreen.style.display = 'none'; }, 500);
    gameLoop();
});

// ===== INPUT =====
document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;

    if (e.key === ' ' || e.key.toLowerCase() === 'e') {
        e.preventDefault();
        if (dialogOpen) {
            closeDialog();
        } else if (gameStarted) {
            tryInteract();
        }
    }

    if (e.key === 'Escape' && dialogOpen) {
        closeDialog();
    }

    if (dialogOpen) {
        if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') nextPage();
        if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') prevPage();
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

// Mobile controls
document.querySelectorAll('.dpad-btn').forEach(btn => {
    const dir = btn.dataset.dir;
    const keyMap = { up: 'w', down: 's', left: 'a', right: 'd' };

    btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keys[keyMap[dir]] = true;
    });
    btn.addEventListener('touchend', (e) => {
        e.preventDefault();
        keys[keyMap[dir]] = false;
    });
});

document.getElementById('actionBtn').addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (dialogOpen) closeDialog();
    else tryInteract();
});

// ===== GAME LOOP =====
function gameLoop() {
    if (!gameStarted) return;
    if (!dialogOpen) {
        movePlayer();
    }
    updateCamera();
    updateMinimap();
    updateZone();
    updateInteractHints();
    requestAnimationFrame(gameLoop);
}

// ===== MOVEMENT =====
function movePlayer() {
    let dx = 0, dy = 0;
    let moving = false;

    if (keys['w'] || keys['arrowup']) { dy = -PLAYER_SPEED; moving = true; }
    if (keys['s'] || keys['arrowdown']) { dy = PLAYER_SPEED; moving = true; }
    if (keys['a'] || keys['arrowleft']) { dx = -PLAYER_SPEED; moving = true; playerEl.classList.add('face-left'); playerEl.classList.remove('face-right'); }
    if (keys['d'] || keys['arrowright']) { dx = PLAYER_SPEED; moving = true; playerEl.classList.add('face-right'); playerEl.classList.remove('face-left'); }

    // Diagonal normalization
    if (dx !== 0 && dy !== 0) {
        dx *= 0.707;
        dy *= 0.707;
    }

    let newX = player.x + dx;
    let newY = player.y + dy;

    // World bounds
    newX = Math.max(40, Math.min(WORLD_W - 40, newX));
    newY = Math.max(40, Math.min(WORLD_H - 40, newY));

    // Simple building collision
    if (!isColliding(newX, newY)) {
        player.x = newX;
        player.y = newY;
    } else if (!isColliding(newX, player.y)) {
        player.x = newX;
    } else if (!isColliding(player.x, newY)) {
        player.y = newY;
    }

    playerEl.style.left = player.x - 16 + 'px';
    playerEl.style.top = player.y - 40 + 'px';

    if (moving) {
        playerEl.classList.add('walking');
    } else {
        playerEl.classList.remove('walking');
    }
}

// ===== COLLISION =====
const BUILDINGS = [
    { x: 210, y: 270, w: 160, h: 120 },    // About
    { x: 1330, y: 270, w: 160, h: 120 },   // Experience
    { x: 1330, y: 1280, w: 160, h: 120 },  // Projects
    { x: 210, y: 1280, w: 160, h: 120 },   // Skills
    { x: 800, y: 770, w: 200, h: 140 },    // Publication (center)
];

function isColliding(x, y) {
    const px = 12;
    for (const b of BUILDINGS) {
        if (x + px > b.x && x - px < b.x + b.w &&
            y > b.y && y - 20 < b.y + b.h) {
            return true;
        }
    }
    return false;
}

// ===== CAMERA =====
function updateCamera() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let camX = vw / 2 - player.x;
    let camY = vh / 2 - player.y;

    // Clamp camera
    camX = Math.min(0, Math.max(vw - WORLD_W, camX));
    camY = Math.min(0, Math.max(vh - WORLD_H, camY));

    world.style.transform = `translate(${camX}px, ${camY}px)`;
}

// ===== MINIMAP =====
function updateMinimap() {
    const minimap = document.getElementById('minimap');
    const mw = minimap.offsetWidth;
    const mh = minimap.offsetHeight;
    const dotX = (player.x / WORLD_W) * mw;
    const dotY = (player.y / WORLD_H) * mh;
    minimapDot.style.left = dotX - 3 + 'px';
    minimapDot.style.top = dotY - 3 + 'px';
}

// ===== ZONE DETECTION =====
function updateZone() {
    let zone = 'default';
    const x = player.x, y = player.y;

    if (x < 600 && y < 600) zone = 'about';
    else if (x > 1200 && y < 600) zone = 'experience';
    else if (x > 1200 && y > 1100) zone = 'projects';
    else if (x < 600 && y > 1100) zone = 'skills';
    else if (x > 700 && x < 1200 && y > 600 && y < 1100) zone = 'publication';
    else if (x > 600 && x < 1300 && y > 400 && y < 700) zone = 'center';

    hudLocation.textContent = ZONE_NAMES[zone] || ZONE_NAMES.default;
}

// ===== INTERACTION =====
function getInteractables() {
    return document.querySelectorAll('.interactive');
}

function getNearestInteractable() {
    let nearest = null;
    let minDist = INTERACT_RANGE;

    getInteractables().forEach(el => {
        const rect = el.getBoundingClientRect();
        const worldRect = world.getBoundingClientRect();

        // Get element position in world coordinates
        const elX = el.closest('.zone')
            ? el.closest('.zone').offsetLeft + el.offsetLeft + el.offsetWidth / 2
            : el.offsetLeft + el.offsetWidth / 2;
        const elY = el.closest('.zone')
            ? el.closest('.zone').offsetTop + el.offsetTop + el.offsetHeight / 2
            : el.offsetTop + el.offsetHeight / 2;

        const dist = Math.hypot(player.x - elX, player.y - elY);
        if (dist < minDist) {
            minDist = dist;
            nearest = el;
        }
    });

    return nearest;
}

function updateInteractHints() {
    getInteractables().forEach(el => {
        const hint = el.querySelector('.interact-hint');
        if (!hint) return;

        const elX = el.closest('.zone')
            ? el.closest('.zone').offsetLeft + el.offsetLeft + el.offsetWidth / 2
            : el.offsetLeft + el.offsetWidth / 2;
        const elY = el.closest('.zone')
            ? el.closest('.zone').offsetTop + el.offsetTop + el.offsetHeight / 2
            : el.offsetTop + el.offsetHeight / 2;

        const dist = Math.hypot(player.x - elX, player.y - elY);
        hint.classList.toggle('show', dist < INTERACT_RANGE);
    });
}

function tryInteract() {
    const target = getNearestInteractable();
    if (!target) return;

    const zone = target.dataset.zone;
    if (zone && DIALOGS[zone]) {
        openDialog(zone);
    }
}

// ===== DIALOG =====
function openDialog(zone) {
    currentDialog = zone;
    currentPage = 0;
    dialogOpen = true;
    dialogOverlay.classList.add('active');
    dialogTitle.textContent = DIALOGS[zone].title;
    renderPage();
}

function closeDialog() {
    dialogOpen = false;
    dialogOverlay.classList.remove('active');
    currentDialog = null;
    // Reset movement keys to prevent stuck movement
    keys = {};
}

function renderPage() {
    const pages = DIALOGS[currentDialog].pages;
    dialogBody.innerHTML = pages[currentPage];

    const total = pages.length;
    prevBtn.style.display = currentPage > 0 ? 'block' : 'none';
    nextBtn.style.display = currentPage < total - 1 ? 'block' : 'none';
    dialogPage.textContent = total > 1 ? `${currentPage + 1} / ${total}` : '';
}

function nextPage() {
    const pages = DIALOGS[currentDialog]?.pages;
    if (pages && currentPage < pages.length - 1) {
        currentPage++;
        renderPage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
}

dialogClose.addEventListener('click', closeDialog);
prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);

dialogOverlay.addEventListener('click', (e) => {
    if (e.target === dialogOverlay) closeDialog();
});

// ===== INIT =====
playerEl.style.left = player.x - 16 + 'px';
playerEl.style.top = player.y - 40 + 'px';

// Handle window resize
window.addEventListener('resize', () => {
    if (gameStarted) updateCamera();
});
