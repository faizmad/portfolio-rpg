// ============================================================
//  FAIZ AHMAD — RPG PORTFOLIO  (Phaser 3 + procedural sprites)
// ============================================================

// ---- Resume Data --------------------------------------------------
const DIALOGS = {
    welcome: {
        title: "Welcome Sign",
        pages: [`
            <h3>Welcome to Faiz's World!</h3>
            <p>Explore this world and talk to NPCs near buildings!</p><br>
            <p>🏠 <span style="color:#88ccff">About Me</span> — Who I am</p>
            <p>🏢 <span style="color:#ff6666">Experience</span> — Where I've worked</p>
            <p>🏗️ <span style="color:#66cc66">Projects</span> — What I've built</p>
            <p>⚔️ <span style="color:#aa66ff">Skills</span> — My abilities</p>
            <p>🏛️ <span style="color:#ccaa33">Research & Contact</span> — Publication & links</p>
        `]
    },
    about: {
        title: "About Me",
        pages: [`
            <h3>Faiz Ahmad</h3>
            <p><span style="color:#88ccff">Computer Science Student</span> at <span style="color:#f0e040">Bina Nusantara University</span></p>
            <p>📍 Bekasi, Jawa Barat, Indonesia</p><br>
            <p>Specializing in <span style="color:#f0e040">Software Engineering</span> and <span style="color:#f0e040">Databases</span>.</p><br>
            <p>Skilled in developing and maintaining software products with a focus on clean code, scalable architecture, and user-centered design.</p><br>
            <p>Hands-on experience building real-world software products <span style="color:#66cc66">actively used in production</span>.</p><br>
            <p>Experienced in relational & non-relational databases, data modeling, and query optimization.</p><br>
            <p style="color:#88ccff">Passionate about solving real-world problems through technology.</p>
        `]
    },
    experience: {
        title: "Experience",
        pages: [`
            <h3>Work Experience</h3>
            <div class="exp-item">
                <div class="exp-role">Oracle Software Engineer</div>
                <div class="exp-company">🏢 Traveloka</div>
                <div class="exp-date">Sep 2025 – Feb 2026 · 6 months · Internship</div>
                <div class="exp-date">📍 Tangerang Selatan, Banten</div>
                <div class="exp-desc">Worked with Oracle E-Business Suite and Oracle Database systems.</div>
                <div style="margin-top:6px"><span class="tag">Oracle EBS</span><span class="tag">Oracle DB</span></div>
            </div>
        `, `
            <div class="exp-item">
                <div class="exp-role">Information Technology Developer</div>
                <div class="exp-company">🏢 PT TEMAS Tbk.</div>
                <div class="exp-date">Feb 2025 – Sep 2025 · 8 months · Internship</div>
                <div class="exp-date">📍 Jakarta Utara, Indonesia</div>
                <div class="exp-desc">Fullstack developer — Go (Golang) backend, Vue.js + Quasar frontend. Participated in system planning, business process analysis, Scrum team, and automated QA.</div>
                <div style="margin-top:6px"><span class="tag">Go</span><span class="tag">Vue.js</span><span class="tag">Quasar</span><span class="tag">Scrum</span></div>
            </div>
        `]
    },
    projects: {
        title: "Projects",
        pages: [`
            <h3>Featured Projects</h3>
            <div class="pcard">
                <div class="pname">🏗️ Internal Apps — PT TEMAS</div>
                <div class="pdate">Feb 2025 – Present</div>
                <div class="pdesc">• Invoice Management with LOA<br>• IT Ticketing System<br>• Access Management System</div>
                <div style="margin-top:6px"><span class="tag">Go</span><span class="tag">Vue.js</span><span class="tag">Quasar</span><span class="tag">Trunk-based Git</span></div>
            </div>
            <div class="pcard">
                <div class="pname">❄️ Data Engineering — Snowflake</div>
                <div class="pdate">Dec 2024</div>
                <div class="pdesc">DDL structure in Snowflake, ETL pipeline, Power BI dashboards.</div>
                <div style="margin-top:6px"><span class="tag">Snowflake</span><span class="tag">DDL</span><span class="tag">Power BI</span></div>
            </div>
        `, `
            <div class="pcard">
                <div class="pname">📊 Sales Performance Dashboard</div>
                <div class="pdate">Oct 2024</div>
                <div class="pdesc">Interactive Power BI dashboard for sales analysis and trend identification.</div>
                <div style="margin-top:6px"><span class="tag">Power BI</span><span class="tag">DAX</span></div>
            </div>
            <div class="pcard">
                <div class="pname">🎮 Personality Test + Gamification</div>
                <div class="pdate">Feb – Jun 2024 · BINUS</div>
                <div class="pdesc">Team Lead. RPG-style personality test with butterfly-effect mechanics. Figma prototyping, Python/PHP backend, HTML/CSS frontend.</div>
                <div style="margin-top:6px"><span class="tag">Python</span><span class="tag">PHP</span><span class="tag">Figma</span><span class="tag">Team Lead</span></div>
            </div>
            <div class="pcard">
                <div class="pname">🛒 E-commerce Data Analysis</div>
                <div class="pdate">Mar – May 2024 · BINUS</div>
                <div class="pdesc">Naive Bayes product classification + automated restock recommendations.</div>
                <div style="margin-top:6px"><span class="tag">Python</span><span class="tag">ML</span><span class="tag">Naive Bayes</span></div>
            </div>
        `]
    },
    skills: {
        title: "Skills & Tech",
        pages: [`
            <h3>Technical Skills</h3>
            <div class="sgroup"><div class="slabel">⚔️ Backend</div><span class="tag">Go (Golang)</span><span class="tag">Python</span><span class="tag">PHP</span></div>
            <div class="sgroup"><div class="slabel">🛡️ Frontend</div><span class="tag">Vue.js</span><span class="tag">Quasar</span><span class="tag">HTML</span><span class="tag">CSS</span></div>
            <div class="sgroup"><div class="slabel">🗄️ Database</div><span class="tag">Oracle DB</span><span class="tag">Oracle EBS</span><span class="tag">Snowflake</span><span class="tag">SQL</span><span class="tag">Data Modeling</span></div>
        `, `
            <div class="sgroup"><div class="slabel">📊 Analytics</div><span class="tag">Power BI</span><span class="tag">DAX</span><span class="tag">Data Analysis</span><span class="tag">Machine Learning</span></div>
            <div class="sgroup"><div class="slabel">🔧 Tools</div><span class="tag">Git</span><span class="tag">Scrum</span><span class="tag">Figma</span><span class="tag">Trunk-based Dev</span></div>
            <div class="sgroup"><div class="slabel">🧠 Soft Skills</div><span class="tag">Project Management</span><span class="tag">Leadership</span><span class="tag">Problem Solving</span><span class="tag">Research</span></div>
        `]
    },
    publication: {
        title: "Research & Contact",
        pages: [`
            <h3>📜 IEEE Publication</h3>
            <div class="pcard">
                <div class="pname" style="font-size:0.42rem;line-height:2">The Influence of Social Media on Voter Behavior, Public Opinion, and Partisan Tendencies during Election Campaigns in Indonesia</div>
                <div class="pdate">IEEE · iSemantic 2024 · Nov 28, 2024</div>
                <div class="pdesc">Systematic literature review on social media's influence on voter behavior during Indonesian elections. Presented at iSemantic 2024.</div>
                <div style="margin-top:6px"><span class="tag" style="border-color:#66cc66;color:#66cc66">Published & Presented</span></div>
            </div>
        `, `
            <h3>📬 Contact</h3>
            <p>Open to new opportunities!</p><br>
            <a href="https://www.linkedin.com/in/faiz-ahmad-8427b5329/" target="_blank" class="clink">🔗 LinkedIn — Faiz Ahmad</a>
            <a href="mailto:faiz.ahmad@binus.ac.id" class="clink">📧 faiz.ahmad@binus.ac.id</a>
            <a href="https://github.com/faizmad" target="_blank" class="clink">🐙 GitHub — faizmad</a>
            <br><p style="color:#555;font-size:0.32rem;margin-top:10px">Thanks for exploring my world!</p>
        `]
    }
};

// ---- Sprite Generator (pixel art via offscreen canvas) -----------
function generateTextures(scene) {
    function draw(key, w, h, fn) {
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        const ctx = c.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        fn(ctx, w, h);
        scene.textures.addCanvas(key, c);
    }

    // Grass tile
    draw('tile_grass', 16, 16, (ctx) => {
        ctx.fillStyle = '#3a7a2a'; ctx.fillRect(0,0,16,16);
        ctx.fillStyle = '#4a8a3a';
        for (let i = 0; i < 8; i++) ctx.fillRect(Math.random()*14|0, Math.random()*14|0, 2, 2);
        ctx.fillStyle = '#2e6e22';
        for (let i = 0; i < 4; i++) ctx.fillRect(Math.random()*14|0, Math.random()*14|0, 2, 1);
    });

    draw('tile_grass_dark', 16, 16, (ctx) => {
        ctx.fillStyle = '#2d6a1e'; ctx.fillRect(0,0,16,16);
        ctx.fillStyle = '#3a7a2a';
        for (let i = 0; i < 6; i++) ctx.fillRect(Math.random()*14|0, Math.random()*14|0, 2, 2);
    });

    draw('tile_path', 16, 16, (ctx) => {
        ctx.fillStyle = '#c4a86b'; ctx.fillRect(0,0,16,16);
        ctx.fillStyle = '#b89858';
        for (let i = 0; i < 5; i++) ctx.fillRect(Math.random()*14|0, Math.random()*14|0, 3, 2);
        ctx.fillStyle = '#d0b878';
        for (let i = 0; i < 3; i++) ctx.fillRect(Math.random()*14|0, Math.random()*14|0, 2, 2);
    });

    draw('tile_water', 16, 16, (ctx) => {
        ctx.fillStyle = '#1a4a8a'; ctx.fillRect(0,0,16,16);
        ctx.fillStyle = '#2266aa';
        ctx.fillRect(2,4,5,1); ctx.fillRect(9,8,5,1); ctx.fillRect(3,12,4,1);
    });

    ['#ff4466','#ffaa22','#ff66cc','#44aaff'].forEach((color,i) => {
        draw('flower_'+i, 16, 16, (ctx) => {
            ctx.fillStyle = '#3a7a2a'; ctx.fillRect(0,0,16,16);
            ctx.fillStyle = '#4a8a3a';
            for (let j = 0; j < 4; j++) ctx.fillRect(Math.random()*14|0, Math.random()*14|0, 2, 2);
            ctx.fillStyle = '#2a6a1a'; ctx.fillRect(7,8,2,5);
            ctx.fillStyle = color;
            ctx.fillRect(5,5,6,5); ctx.fillRect(7,4,2,1); ctx.fillRect(7,10,2,1);
            ctx.fillRect(4,7,1,2); ctx.fillRect(11,7,1,2);
            ctx.fillStyle = '#ffe066'; ctx.fillRect(7,7,2,2);
        });
    });

    // Tree
    draw('tree', 32, 48, (ctx) => {
        ctx.fillStyle = '#5a3318'; ctx.fillRect(12,30,8,18);
        ctx.fillStyle = '#6b4422'; ctx.fillRect(14,30,4,18);
        ctx.fillStyle = '#1a6a0a'; ctx.fillRect(4,14,24,18); ctx.fillRect(8,8,16,6); ctx.fillRect(2,18,28,10);
        ctx.fillStyle = '#228812'; ctx.fillRect(6,10,20,16); ctx.fillRect(10,6,12,6);
        ctx.fillStyle = '#2aaa1a'; ctx.fillRect(8,12,16,10); ctx.fillRect(12,8,8,4);
        ctx.fillStyle = '#44cc33'; ctx.fillRect(10,10,4,3); ctx.fillRect(18,14,3,2);
        ctx.fillStyle = 'rgba(0,0,0,0.2)'; ctx.fillRect(6,44,20,4);
    });

    draw('tree_big', 48, 64, (ctx) => {
        ctx.fillStyle = '#4a2810'; ctx.fillRect(18,40,12,24);
        ctx.fillStyle = '#5a3818'; ctx.fillRect(20,40,8,24);
        ctx.fillStyle = '#145008'; ctx.fillRect(4,16,40,28); ctx.fillRect(10,8,28,10);
        ctx.fillStyle = '#1a6a0a'; ctx.fillRect(6,12,36,26); ctx.fillRect(14,6,20,8);
        ctx.fillStyle = '#228812'; ctx.fillRect(10,14,28,18); ctx.fillRect(16,8,16,8);
        ctx.fillStyle = '#2aaa1a'; ctx.fillRect(14,16,20,12); ctx.fillRect(18,10,12,6);
        ctx.fillStyle = '#44cc33'; ctx.fillRect(16,14,6,4); ctx.fillRect(28,18,4,3);
        ctx.fillStyle = 'rgba(0,0,0,0.15)'; ctx.fillRect(8,58,32,6);
    });

    // Buildings
    function drawBuilding(key, roofColor, roofDark, wallColor, wallDark) {
        draw(key, 80, 80, (ctx) => {
            ctx.fillStyle = wallColor; ctx.fillRect(8,30,64,42);
            ctx.fillStyle = wallDark; ctx.fillRect(8,30,64,2); ctx.fillRect(8,30,2,42); ctx.fillRect(70,30,2,42);
            ctx.fillStyle = 'rgba(0,0,0,0.05)';
            for (let y = 34; y < 68; y += 8) ctx.fillRect(10,y,60,1);
            ctx.fillStyle = '#88ccff'; ctx.fillRect(16,40,14,12); ctx.fillRect(50,40,14,12);
            ctx.fillStyle = '#aaddff'; ctx.fillRect(18,42,4,8); ctx.fillRect(52,42,4,8);
            ctx.fillStyle = wallDark; ctx.fillRect(15,39,16,1); ctx.fillRect(15,52,16,1); ctx.fillRect(49,39,16,1); ctx.fillRect(49,52,16,1);
            ctx.fillStyle = '#3a2210'; ctx.fillRect(32,50,16,22);
            ctx.fillStyle = '#5a3a1e'; ctx.fillRect(34,52,12,20);
            ctx.fillStyle = '#cc9933'; ctx.fillRect(42,60,3,3);
            ctx.fillStyle = roofColor;
            ctx.beginPath(); ctx.moveTo(0,32); ctx.lineTo(40,2); ctx.lineTo(80,32); ctx.fill();
            ctx.fillStyle = roofDark;
            ctx.beginPath(); ctx.moveTo(0,32); ctx.lineTo(40,2); ctx.lineTo(40,32); ctx.fill();
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            for (let y = 8; y < 32; y += 5) ctx.fillRect(0,y,80,1);
            ctx.fillStyle = 'rgba(0,0,0,0.15)'; ctx.fillRect(4,72,72,6);
        });
    }

    drawBuilding('bld_about', '#3366cc','#2244aa','#ddd4c0','#b8a890');
    drawBuilding('bld_exp',   '#cc3333','#aa2222','#e0d8c8','#bbb098');
    drawBuilding('bld_proj',  '#33aa44','#228833','#d8d4c4','#b0a890');
    drawBuilding('bld_skill', '#8844cc','#6633aa','#dcd0e0','#b8a8c8');

    // Center building (larger)
    draw('bld_center', 112, 96, (ctx) => {
        ctx.fillStyle = '#e0d8c0'; ctx.fillRect(8,38,96,50);
        ctx.fillStyle = '#c8b898'; ctx.fillRect(8,38,96,2); ctx.fillRect(8,38,2,50); ctx.fillRect(102,38,2,50);
        ctx.fillStyle = '#b8a878'; ctx.fillRect(18,38,6,50); ctx.fillRect(88,38,6,50);
        ctx.fillStyle = '#c8b888'; ctx.fillRect(20,38,2,50); ctx.fillRect(90,38,2,50);
        ctx.fillStyle = '#88ccff'; ctx.fillRect(28,48,16,14); ctx.fillRect(68,48,16,14);
        ctx.fillStyle = '#aaddff'; ctx.fillRect(30,50,5,10); ctx.fillRect(70,50,5,10);
        ctx.fillStyle = '#3a2210'; ctx.fillRect(44,54,24,34);
        ctx.fillStyle = '#5a3a1e'; ctx.fillRect(46,56,20,32);
        ctx.fillStyle = '#cc9933'; ctx.fillRect(60,68,3,3);
        ctx.fillStyle = '#3a2210';
        ctx.beginPath(); ctx.arc(56,56,12,Math.PI,0); ctx.fill();
        ctx.fillStyle = '#5a3a1e';
        ctx.beginPath(); ctx.arc(56,56,10,Math.PI,0); ctx.fill();
        ctx.fillStyle = '#cc9933';
        ctx.beginPath(); ctx.moveTo(0,40); ctx.lineTo(56,4); ctx.lineTo(112,40); ctx.fill();
        ctx.fillStyle = '#aa7722';
        ctx.beginPath(); ctx.moveTo(0,40); ctx.lineTo(56,4); ctx.lineTo(56,40); ctx.fill();
        ctx.fillStyle = '#f0e040'; ctx.fillRect(52,2,8,6);
        ctx.fillStyle = 'rgba(0,0,0,0.12)'; ctx.fillRect(4,88,104,6);
    });

    // Player spritesheet (4 frames x 4 directions)
    draw('player_sheet', 64, 96, (ctx) => {
        for (let dir = 0; dir < 4; dir++) {
            for (let frame = 0; frame < 4; frame++) {
                const ox = frame * 16, oy = dir * 24;
                const bobY = (frame === 1 || frame === 3) ? -1 : 0;
                ctx.fillStyle = 'rgba(0,0,0,0.2)'; ctx.fillRect(ox+3, oy+22, 10, 2);
                ctx.fillStyle = '#4488ff'; ctx.fillRect(ox+4, oy+12+bobY, 8, 10);
                ctx.fillStyle = '#3366cc'; ctx.fillRect(ox+4, oy+12+bobY, 3, 10);
                const legOff = frame === 1 ? -1 : frame === 3 ? 1 : 0;
                ctx.fillStyle = '#335588';
                ctx.fillRect(ox+5+legOff, oy+20+bobY, 3, 3);
                ctx.fillRect(ox+9-legOff, oy+20+bobY, 3, 3);
                ctx.fillStyle = '#ffcc88'; ctx.fillRect(ox+4, oy+4+bobY, 8, 8);
                ctx.fillStyle = '#eebb77'; ctx.fillRect(ox+4, oy+4+bobY, 2, 8);
                ctx.fillStyle = '#2a1a0a'; ctx.fillRect(ox+3, oy+3+bobY, 10, 3);
                if (dir === 0) {
                    ctx.fillStyle = '#222'; ctx.fillRect(ox+5, oy+8+bobY, 2, 2); ctx.fillRect(ox+9, oy+8+bobY, 2, 2);
                    ctx.fillStyle = '#cc6644'; ctx.fillRect(ox+7, oy+10+bobY, 2, 1);
                } else if (dir === 3) {
                    ctx.fillStyle = '#2a1a0a'; ctx.fillRect(ox+3, oy+3+bobY, 10, 5);
                } else {
                    const ex = dir === 1 ? ox+5 : ox+9;
                    ctx.fillStyle = '#222'; ctx.fillRect(ex, oy+8+bobY, 2, 2);
                }
                ctx.fillStyle = '#ffcc88';
                const armOff = frame === 1 ? 1 : frame === 3 ? -1 : 0;
                ctx.fillRect(ox+2, oy+13+bobY+armOff, 2, 5);
                ctx.fillRect(ox+12, oy+13+bobY-armOff, 2, 5);
            }
        }
    });

    // NPCs
    function drawNPC(key, bodyColor, shadeColor, hairColor) {
        draw(key, 16, 24, (ctx) => {
            ctx.fillStyle = 'rgba(0,0,0,0.2)'; ctx.fillRect(3,22,10,2);
            ctx.fillStyle = bodyColor; ctx.fillRect(4,12,8,10);
            ctx.fillStyle = shadeColor; ctx.fillRect(4,12,3,10);
            ctx.fillStyle = '#335555'; ctx.fillRect(5,20,3,3); ctx.fillRect(9,20,3,3);
            ctx.fillStyle = '#ffcc88'; ctx.fillRect(4,4,8,8);
            ctx.fillStyle = '#eebb77'; ctx.fillRect(4,4,2,8);
            ctx.fillStyle = hairColor; ctx.fillRect(3,3,10,3);
            ctx.fillStyle = '#222'; ctx.fillRect(5,8,2,2); ctx.fillRect(9,8,2,2);
            ctx.fillStyle = '#cc6644'; ctx.fillRect(7,10,2,1);
            ctx.fillStyle = '#ffcc88'; ctx.fillRect(2,13,2,5); ctx.fillRect(12,13,2,5);
        });
    }

    drawNPC('npc_about',  '#3366cc','#2244aa','#884422');
    drawNPC('npc_exp',    '#cc3333','#aa2222','#1a1a1a');
    drawNPC('npc_proj',   '#33aa44','#228833','#663300');
    drawNPC('npc_skill',  '#8844cc','#6633aa','#ccaa00');
    drawNPC('npc_center', '#cc9933','#aa7722','#2a1a1a');

    // Signpost
    draw('signpost', 16, 24, (ctx) => {
        ctx.fillStyle = '#5a3318'; ctx.fillRect(6,10,4,14);
        ctx.fillStyle = '#c4a050'; ctx.fillRect(1,2,14,10);
        ctx.fillStyle = '#a08030'; ctx.fillRect(1,2,14,1); ctx.fillRect(1,11,14,1);
        ctx.fillRect(1,2,1,10); ctx.fillRect(14,2,1,10);
        ctx.fillStyle = '#3a2510'; ctx.font = '7px sans-serif'; ctx.fillText('!', 6, 10);
    });

    // Interact bubble
    draw('bubble', 16, 16, (ctx) => {
        ctx.fillStyle = 'rgba(240,224,64,0.9)';
        ctx.beginPath(); ctx.arc(8,7,6,0,Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.moveTo(6,12); ctx.lineTo(8,16); ctx.lineTo(10,12); ctx.fill();
        ctx.fillStyle = '#1a1a2e'; ctx.font = 'bold 8px sans-serif'; ctx.fillText('E', 4.5, 10);
    });

    // Fence
    draw('fence', 16, 16, (ctx) => {
        ctx.fillStyle = '#8b6c42'; ctx.fillRect(0,6,16,4); ctx.fillRect(0,12,16,2);
        ctx.fillStyle = '#a07848'; ctx.fillRect(1,2,3,12); ctx.fillRect(12,2,3,12);
        ctx.fillStyle = '#6b5232'; ctx.fillRect(1,2,3,1); ctx.fillRect(12,2,3,1);
    });

    // Well
    draw('well', 32, 32, (ctx) => {
        ctx.fillStyle = '#888'; ctx.fillRect(4,16,24,12);
        ctx.fillStyle = '#aaa'; ctx.fillRect(6,18,20,8);
        ctx.fillStyle = '#1a4a8a'; ctx.fillRect(8,20,16,4);
        ctx.fillStyle = '#5a3318'; ctx.fillRect(4,6,2,12); ctx.fillRect(26,6,2,12);
        ctx.fillStyle = '#8b6c42'; ctx.fillRect(2,4,28,4);
        ctx.fillStyle = 'rgba(0,0,0,0.15)'; ctx.fillRect(6,28,20,3);
    });

    // Lamp
    draw('lamp', 8, 32, (ctx) => {
        ctx.fillStyle = '#444'; ctx.fillRect(3,10,2,22);
        ctx.fillStyle = '#555'; ctx.fillRect(1,8,6,3);
        ctx.fillStyle = '#ffee88'; ctx.fillRect(1,4,6,5);
        ctx.fillStyle = '#fff8cc'; ctx.fillRect(2,5,4,3);
    });
}

// ---- Tilemap ------------------------------------------------------
const MAP_COLS = 40, MAP_ROWS = 40, TILE = 32;
const WORLD_W = MAP_COLS * TILE, WORLD_H = MAP_ROWS * TILE;

function buildMap() {
    const map = [];
    for (let r = 0; r < MAP_ROWS; r++) {
        map[r] = [];
        for (let c = 0; c < MAP_COLS; c++) {
            if (r < 2 || r >= MAP_ROWS-2 || c < 2 || c >= MAP_COLS-2) map[r][c] = 1;
            else map[r][c] = Math.random() < 0.06 ? 1 : 0;
        }
    }

    function hPath(r, c1, c2) { for (let c = c1; c <= c2; c++) { map[r][c] = 2; if (r+1<MAP_ROWS) map[r+1][c] = 2; } }
    function vPath(c, r1, r2) { for (let r = r1; r <= r2; r++) { map[r][c] = 2; if (c+1<MAP_COLS) map[r][c+1] = 2; } }

    hPath(19, 4, 35); vPath(19, 4, 35);
    hPath(9, 6, 19); hPath(9, 19, 33);
    hPath(30, 6, 19); hPath(30, 19, 33);
    vPath(8, 9, 19); vPath(31, 9, 19);
    vPath(8, 19, 30); vPath(31, 19, 30);

    for (let r = 33; r <= 36; r++)
        for (let c = 12; c <= 17; c++) {
            if ((r===33||r===36) && (c===12||c===17)) continue;
            map[r][c] = 3;
        }

    [[5,5],[5,14],[6,25],[7,34],[14,4],[14,35],[25,4],[25,35],[34,24],[34,30],[15,15],[24,24],[12,28],[27,11]].forEach(([r,c]) => {
        if (map[r][c] === 0) map[r][c] = 4 + (Math.random()*4|0);
    });

    return map;
}

// ---- Phaser Scene -------------------------------------------------
class GameScene extends Phaser.Scene {
    constructor() { super('GameScene'); }
    preload() { generateTextures(this); }

    create() {
        this.mapData = buildMap();

        // Tiles
        for (let r = 0; r < MAP_ROWS; r++) {
            for (let c = 0; c < MAP_COLS; c++) {
                const t = this.mapData[r][c];
                let key = t===1?'tile_grass_dark': t===2?'tile_path': t===3?'tile_water': t>=4?'flower_'+(t-4): 'tile_grass';
                this.add.image(c*TILE+TILE/2, r*TILE+TILE/2, key).setScale(TILE/16).setDepth(0);
            }
        }

        // Colliders
        this.colliders = [];

        // Trees
        const treePos = [
            [1,1],[1,5],[1,12],[1,20],[1,28],[1,36],[3,1],[3,38],[6,1],[6,38],
            [10,1],[10,38],[15,1],[15,38],[22,1],[22,38],[28,1],[28,38],
            [33,1],[33,38],[37,1],[37,5],[37,15],[37,25],[37,34],[37,38],
            [1,38],[5,16],[5,23],[13,13],[13,26],[26,13],[26,26],[34,5],[34,34],
            [16,3],[16,36],[23,3],[23,36],
        ];
        treePos.forEach(([r,c]) => {
            const big = Math.random() < 0.3;
            const t = this.add.image(c*TILE+TILE/2, r*TILE+(big?-8:0), big?'tree_big':'tree');
            t.setScale(2); t.setDepth(r*TILE+30);
            this.colliders.push({ x:c*TILE, y:r*TILE-8, w:40, h:40 });
        });

        // Fences
        for (let c = 3; c <= 37; c++) {
            if (this.mapData[2][c] !== 2 && this.mapData[3][c] !== 2 && Math.random() < 0.3) {
                this.add.image(c*TILE+TILE/2, 2*TILE+TILE/2, 'fence').setScale(2).setDepth(2*TILE);
            }
        }

        // Well
        this.add.image(17*TILE, 23*TILE, 'well').setScale(2).setDepth(23*TILE);
        this.colliders.push({ x:16*TILE-16, y:22*TILE-16, w:64, h:64 });

        // Lamps
        [[19,6],[19,14],[19,25],[19,33],[10,19],[15,19],[24,19],[29,19]].forEach(([r,c]) => {
            this.add.image(c*TILE+TILE/2, r*TILE, 'lamp').setScale(2).setDepth(r*TILE);
        });

        // Buildings
        const bldData = [
            { key:'bld_about',  r:5,  c:6,  zone:'about',     npcKey:'npc_about',  npcR:8, npcC:8 },
            { key:'bld_exp',    r:5,  c:28, zone:'experience', npcKey:'npc_exp',    npcR:8, npcC:30 },
            { key:'bld_proj',   r:26, c:28, zone:'projects',   npcKey:'npc_proj',   npcR:29,npcC:30 },
            { key:'bld_skill',  r:26, c:6,  zone:'skills',     npcKey:'npc_skill',  npcR:29,npcC:8 },
        ];

        this.buildings = [];
        bldData.forEach(b => {
            const bx = b.c*TILE+TILE, by = b.r*TILE+TILE;
            this.add.image(bx, by, b.key).setScale(2.5).setDepth(by+40);
            this.colliders.push({ x:bx-100, y:by-60, w:200, h:140 });
            this.buildings.push({ ...b, x:bx, y:by });
            this.add.text(bx, by+80, b.zone.toUpperCase(), {
                fontFamily:'"Press Start 2P"', fontSize:'8px', color:'#f0e040',
                backgroundColor:'#1a1a2ecc', padding:{x:6,y:3}
            }).setOrigin(0.5).setDepth(by+100);
        });

        // Center building
        const cbx = 20*TILE, cby = 17*TILE;
        this.add.image(cbx, cby, 'bld_center').setScale(2.5).setDepth(cby+40);
        this.colliders.push({ x:cbx-140, y:cby-80, w:280, h:180 });
        this.add.text(cbx, cby+100, 'RESEARCH & CONTACT', {
            fontFamily:'"Press Start 2P"', fontSize:'7px', color:'#f0e040',
            backgroundColor:'#1a1a2ecc', padding:{x:6,y:3}
        }).setOrigin(0.5).setDepth(cby+100);

        // NPCs
        this.npcs = [];
        bldData.concat([{ npcKey:'npc_center', npcR:20, npcC:20, zone:'publication' }]).forEach(b => {
            const nx = b.npcC*TILE+TILE/2, ny = b.npcR*TILE+TILE/2;
            const npc = this.add.image(nx, ny, b.npcKey).setScale(2).setDepth(ny+10);
            npc.zone = b.zone;
            this.tweens.add({ targets:npc, y:ny-3, duration:800, yoyo:true, repeat:-1, ease:'Sine.easeInOut' });
            this.npcs.push({ sprite:npc, x:nx, y:ny, zone:b.zone });
        });

        // Signpost
        const spx = 20*TILE+TILE/2, spy = 14*TILE;
        this.add.image(spx, spy, 'signpost').setScale(2).setDepth(spy+10);
        this.npcs.push({ sprite:null, x:spx, y:spy, zone:'welcome' });

        // Player
        const tex = this.textures.get('player_sheet');
        for (let dir = 0; dir < 4; dir++)
            for (let f = 0; f < 4; f++)
                tex.add(dir*4+f, 0, f*16, dir*24, 16, 24);

        this.player = this.add.sprite(20*TILE, 14*TILE-64, 'player_sheet', 0).setScale(2);

        this.anims.create({ key:'walk_down',  frames:[{key:'player_sheet',frame:0},{key:'player_sheet',frame:1},{key:'player_sheet',frame:2},{key:'player_sheet',frame:3}], frameRate:8, repeat:-1 });
        this.anims.create({ key:'walk_left',  frames:[{key:'player_sheet',frame:4},{key:'player_sheet',frame:5},{key:'player_sheet',frame:6},{key:'player_sheet',frame:7}], frameRate:8, repeat:-1 });
        this.anims.create({ key:'walk_right', frames:[{key:'player_sheet',frame:8},{key:'player_sheet',frame:9},{key:'player_sheet',frame:10},{key:'player_sheet',frame:11}], frameRate:8, repeat:-1 });
        this.anims.create({ key:'walk_up',    frames:[{key:'player_sheet',frame:12},{key:'player_sheet',frame:13},{key:'player_sheet',frame:14},{key:'player_sheet',frame:15}], frameRate:8, repeat:-1 });

        this.playerLabel = this.add.text(this.player.x, this.player.y-28, 'Faiz', {
            fontFamily:'"Press Start 2P"', fontSize:'6px', color:'#fff',
            shadow:{offsetX:1,offsetY:1,color:'#000',blur:0,fill:true}
        }).setOrigin(0.5);

        // Bubble
        this.bubble = this.add.image(0,0,'bubble').setScale(2).setVisible(false);
        this.tweens.add({ targets:this.bubble, y:'-=6', duration:500, yoyo:true, repeat:-1, ease:'Sine.easeInOut' });

        // Camera
        this.cameras.main.setBounds(0,0,WORLD_W,WORLD_H);
        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
        this.cameras.main.setZoom(this.getZoom());

        // HUD
        this.add.rectangle(0,0,300,40,0x000000,0.6).setScrollFactor(0).setOrigin(0).setDepth(1000);
        this.add.text(10,6,'Faiz Ahmad',{fontFamily:'"Press Start 2P"',fontSize:'8px',color:'#f0e040'}).setScrollFactor(0).setDepth(1001);
        this.add.text(10,22,'Software Engineer',{fontFamily:'"Press Start 2P"',fontSize:'5px',color:'#88ccff'}).setScrollFactor(0).setDepth(1001);

        this.hudLocBg = this.add.rectangle(this.scale.width-10,10,160,22,0x000000,0.6).setScrollFactor(0).setOrigin(1,0).setDepth(1000);
        this.hudLoc = this.add.text(this.scale.width-18,14,'Town Center',{fontFamily:'"Press Start 2P"',fontSize:'6px',color:'#aaa'}).setScrollFactor(0).setOrigin(1,0).setDepth(1001);

        // Minimap
        this.minimapGfx = this.add.graphics().setScrollFactor(0).setDepth(1000);
        this.minimapX = this.scale.width - 130;
        this.minimapY = this.scale.height - 130;

        // Input
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys('W,A,S,D');
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.eKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        this.dialogOpen = false;
        this.nearestNPC = null;

        this.spaceKey.on('down', () => this.handleInteract());
        this.eKey.on('down', () => this.handleInteract());
        this.escKey.on('down', () => { if (this.dialogOpen) closeDialogUI(); });

        // Mobile
        this.mobileDir = { up:false, down:false, left:false, right:false };
        document.querySelectorAll('.mc-btn').forEach(btn => {
            const d = btn.dataset.d;
            btn.addEventListener('touchstart', e => { e.preventDefault(); this.mobileDir[d]=true; });
            btn.addEventListener('touchend', e => { e.preventDefault(); this.mobileDir[d]=false; });
        });
        document.getElementById('mc-action').addEventListener('touchstart', e => { e.preventDefault(); this.handleInteract(); });

        // Fireflies
        for (let i = 0; i < 25; i++) {
            const ff = this.add.circle(Phaser.Math.Between(0,WORLD_W), Phaser.Math.Between(0,WORLD_H), 2, 0xffee88, 0.6).setDepth(999);
            this.tweens.add({
                targets:ff, alpha:{from:0.2,to:0.8},
                x:'+='+Phaser.Math.Between(-60,60), y:'+='+Phaser.Math.Between(-60,60),
                duration:Phaser.Math.Between(2000,4000), yoyo:true, repeat:-1,
                ease:'Sine.easeInOut', delay:Phaser.Math.Between(0,2000)
            });
        }

        // Resize handler
        this.scale.on('resize', sz => {
            this.cameras.main.setZoom(this.getZoom());
            this.minimapX = sz.width-130; this.minimapY = sz.height-130;
            this.hudLocBg.setPosition(sz.width-10,10);
            this.hudLoc.setPosition(sz.width-18,14);
        });
    }

    getZoom() {
        return Math.max(1.5, Math.min(3, Math.min(this.scale.width/480, this.scale.height/360)));
    }

    handleInteract() {
        if (this.dialogOpen) { closeDialogUI(); return; }
        if (this.nearestNPC) { openDialogUI(this.nearestNPC.zone); this.dialogOpen = true; }
    }

    update(time, delta) {
        if (this.dialogOpen) { this.player.anims.stop(); return; }

        const speed = 120, dt = delta/1000;
        let vx = 0, vy = 0;

        if (this.cursors.left.isDown||this.wasd.A.isDown||this.mobileDir.left) vx = -speed;
        else if (this.cursors.right.isDown||this.wasd.D.isDown||this.mobileDir.right) vx = speed;
        if (this.cursors.up.isDown||this.wasd.W.isDown||this.mobileDir.up) vy = -speed;
        else if (this.cursors.down.isDown||this.wasd.S.isDown||this.mobileDir.down) vy = speed;

        if (vx&&vy) { vx*=0.707; vy*=0.707; }

        let nx = Phaser.Math.Clamp(this.player.x+vx*dt, 24, WORLD_W-24);
        let ny = Phaser.Math.Clamp(this.player.y+vy*dt, 24, WORLD_H-24);

        if (!this.isColliding(nx,ny)) { this.player.x=nx; this.player.y=ny; }
        else if (!this.isColliding(nx,this.player.y)) this.player.x=nx;
        else if (!this.isColliding(this.player.x,ny)) this.player.y=ny;

        // Water block
        const tc = Math.floor(this.player.x/TILE), tr = Math.floor(this.player.y/TILE);
        if (tr>=0&&tr<MAP_ROWS&&tc>=0&&tc<MAP_COLS && this.mapData[tr][tc]===3) {
            this.player.x -= vx*dt; this.player.y -= vy*dt;
        }

        // Anim
        if (vx||vy) {
            if (Math.abs(vy)>=Math.abs(vx)) this.player.play(vy<0?'walk_up':'walk_down',true);
            else this.player.play(vx<0?'walk_left':'walk_right',true);
        } else this.player.anims.stop();

        this.player.setDepth(this.player.y+20);
        this.playerLabel.setPosition(this.player.x, this.player.y-28).setDepth(this.player.y+21);

        // NPC proximity
        this.nearestNPC = null;
        let minD = 70;
        this.npcs.forEach(n => {
            const d = Phaser.Math.Distance.Between(this.player.x, this.player.y, n.x, n.y);
            if (d < minD) { minD = d; this.nearestNPC = n; }
        });

        if (this.nearestNPC) {
            this.bubble.setVisible(true).setPosition(this.nearestNPC.x, this.nearestNPC.y-40).setDepth(9999);
        } else this.bubble.setVisible(false);

        // HUD loc
        const px=this.player.x, py=this.player.y;
        let loc='Exploring...';
        if (px<WORLD_W*0.35&&py<WORLD_H*0.35) loc='About District';
        else if (px>WORLD_W*0.65&&py<WORLD_H*0.35) loc='Experience Quarter';
        else if (px>WORLD_W*0.65&&py>WORLD_H*0.65) loc='Project Workshop';
        else if (px<WORLD_W*0.35&&py>WORLD_H*0.65) loc='Skill Arena';
        else if (px>WORLD_W*0.35&&px<WORLD_W*0.65&&py>WORLD_H*0.35&&py<WORLD_H*0.6) loc='Research Hall';
        else if (px>WORLD_W*0.3&&px<WORLD_W*0.7&&py>WORLD_H*0.25&&py<WORLD_H*0.45) loc='Town Center';
        this.hudLoc.setText(loc);

        // Minimap
        const g=this.minimapGfx, mx=this.minimapX, my=this.minimapY, mw=110, mh=110;
        g.clear();
        g.fillStyle(0x000000,0.65); g.fillRect(mx,my,mw,mh);
        g.lineStyle(1,0x555555); g.strokeRect(mx,my,mw,mh);
        [{x:0.2,y:0.18,c:0x3366cc},{x:0.78,y:0.18,c:0xcc3333},{x:0.78,y:0.78,c:0x33aa44},{x:0.2,y:0.78,c:0x8844cc},{x:0.5,y:0.45,c:0xcc9933}].forEach(m=>{
            g.fillStyle(m.c,0.8); g.fillRect(mx+m.x*mw-3,my+m.y*mh-3,6,6);
        });
        g.fillStyle(0xf0e040,1); g.fillCircle(mx+(this.player.x/WORLD_W)*mw, my+(this.player.y/WORLD_H)*mh, 3);
    }

    isColliding(x,y) {
        for (const c of this.colliders)
            if (x>c.x && x<c.x+c.w && y>c.y && y<c.y+c.h) return true;
        return false;
    }
}

// ---- Dialog UI ----------------------------------------------------
let currentZone = null, currentPage = 0;

function openDialogUI(zone) {
    currentZone = zone; currentPage = 0;
    document.getElementById('dialog-overlay').classList.add('active');
    document.getElementById('dialog-title').textContent = DIALOGS[zone].title;
    renderDialogPage();
}

function closeDialogUI() {
    document.getElementById('dialog-overlay').classList.remove('active');
    currentZone = null;
    if (window.gameScene) window.gameScene.dialogOpen = false;
}

function renderDialogPage() {
    const pages = DIALOGS[currentZone].pages;
    document.getElementById('dialog-body').innerHTML = pages[currentPage];
    document.getElementById('prev-btn').style.display = currentPage > 0 ? 'inline-block' : 'none';
    document.getElementById('next-btn').style.display = currentPage < pages.length-1 ? 'inline-block' : 'none';
    document.getElementById('page-info').textContent = pages.length > 1 ? `${currentPage+1}/${pages.length}` : '';
}

document.getElementById('dialog-close-btn').addEventListener('click', closeDialogUI);
document.getElementById('prev-btn').addEventListener('click', () => { if (currentPage>0){currentPage--;renderDialogPage();} });
document.getElementById('next-btn').addEventListener('click', () => { if (currentZone&&currentPage<DIALOGS[currentZone].pages.length-1){currentPage++;renderDialogPage();} });
document.getElementById('dialog-overlay').addEventListener('click', e => { if (e.target.id==='dialog-overlay') closeDialogUI(); });

document.addEventListener('keydown', e => {
    if (!currentZone) return;
    if (e.key==='Escape'||e.key===' ') { e.preventDefault(); closeDialogUI(); }
    if (e.key==='ArrowRight') document.getElementById('next-btn').click();
    if (e.key==='ArrowLeft') document.getElementById('prev-btn').click();
});

// ---- Boot ---------------------------------------------------------
document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('start-screen').classList.add('hidden');
    setTimeout(() => document.getElementById('start-screen').style.display='none', 600);

    if (window.innerWidth <= 768) {
        document.getElementById('mobile-controls').style.display = 'block';
        document.getElementById('mc-action').style.display = 'block';
    }

    const game = new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'game-container',
        width: window.innerWidth,
        height: window.innerHeight,
        pixelArt: true,
        backgroundColor: '#1a3a1a',
        scale: { mode: Phaser.Scale.RESIZE, autoCenter: Phaser.Scale.CENTER_BOTH },
        scene: [GameScene],
    });

    game.events.on('ready', () => { window.gameScene = game.scene.getScene('GameScene'); });
});
