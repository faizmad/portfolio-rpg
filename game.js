// ============================================================
//  FAIZ AHMAD — GUILD HALL PORTFOLIO (Phaser 3)
//  Indoor museum/guild concept — single room exploration
// ============================================================

const DIALOGS = {
    welcome: {
        title: "Guild Notice Board",
        pages: [`
            <h3>Welcome, Adventurer!</h3>
            <p>You have entered the <span style="color:#f0e040">Guild of Faiz Ahmad</span>.</p><br>
            <p>Walk around and interact with the exhibits to learn about the guild master's journey.</p><br>
            <p>📋 <span style="color:#88ccff">Portrait Frame</span> — About the guild master</p>
            <p>⚔️ <span style="color:#ff6666">Battle Records</span> — Work experience</p>
            <p>🗺️ <span style="color:#66cc66">Quest Log</span> — Completed projects</p>
            <p>🛡️ <span style="color:#aa66ff">Armory</span> — Skills & equipment</p>
            <p>📜 <span style="color:#ccaa33">Ancient Scroll</span> — Research & publications</p>
            <p>💌 <span style="color:#ff88aa">Message Board</span> — Contact info</p>
        `]
    },
    about: {
        title: "Portrait of the Guild Master",
        pages: [`
            <h3>Faiz Ahmad</h3>
            <p><span style="color:#88ccff">Computer Science Student</span> at <span style="color:#f0e040">Bina Nusantara University</span></p>
            <p>📍 Bekasi, Jawa Barat, Indonesia</p><br>
            <p>Specializing in <span style="color:#f0e040">Software Engineering</span> and <span style="color:#f0e040">Databases</span>.</p><br>
            <p>A skilled craftsman who develops and maintains software products with focus on clean code, scalable architecture, and user-centered design.</p><br>
            <p>Battle-tested with hands-on experience building <span style="color:#66cc66">production-grade software</span> actively wielded in the real world.</p><br>
            <p>Master of relational & non-relational databases — from data modeling to query optimization.</p><br>
            <p style="color:#88ccff">"Passionate about solving real-world problems through technology."</p>
        `]
    },
    experience: {
        title: "⚔️ Battle Records",
        pages: [`
            <h3>Campaign History</h3>
            <div class="exp-item">
                <div class="exp-role">Oracle Software Engineer</div>
                <div class="exp-company">⚔️ Traveloka Guild</div>
                <div class="exp-date">Sep 2025 – Feb 2026 · 6 months · Internship</div>
                <div class="exp-date">📍 Tangerang Selatan, Banten</div>
                <div class="exp-desc">Mastered the arts of Oracle E-Business Suite and Oracle Database systems.</div>
                <div style="margin-top:6px"><span class="tag">Oracle EBS</span><span class="tag">Oracle DB</span></div>
            </div>
        `, `
            <div class="exp-item">
                <div class="exp-role">Information Technology Developer</div>
                <div class="exp-company">⚔️ PT TEMAS Tbk. Guild</div>
                <div class="exp-date">Feb 2025 – Sep 2025 · 8 months · Internship</div>
                <div class="exp-date">📍 Jakarta Utara, Indonesia</div>
                <div class="exp-desc">Fullstack warrior — wielded Go (Golang) for backend combat and Vue.js + Quasar for frontend spellcasting. Fought alongside a Scrum battalion and mastered system planning arts.</div>
                <div style="margin-top:6px"><span class="tag">Go</span><span class="tag">Vue.js</span><span class="tag">Quasar</span><span class="tag">Scrum</span></div>
            </div>
        `]
    },
    projects: {
        title: "🗺️ Quest Log",
        pages: [`
            <h3>Completed Quests</h3>
            <div class="pcard">
                <div class="pname">🏗️ Internal Apps — PT TEMAS</div>
                <div class="pdate">Feb 2025 – Present | Rank: S</div>
                <div class="pdesc">• Invoice Management with LOA<br>• IT Ticketing System<br>• Access Management System</div>
                <div style="margin-top:6px"><span class="tag">Go</span><span class="tag">Vue.js</span><span class="tag">Quasar</span><span class="tag">Trunk-based Git</span></div>
            </div>
            <div class="pcard">
                <div class="pname">❄️ Data Engineering — Snowflake</div>
                <div class="pdate">Dec 2024 | Rank: A</div>
                <div class="pdesc">DDL structure in Snowflake, ETL pipeline, Power BI dashboards.</div>
                <div style="margin-top:6px"><span class="tag">Snowflake</span><span class="tag">DDL</span><span class="tag">Power BI</span></div>
            </div>
        `, `
            <div class="pcard">
                <div class="pname">📊 Sales Performance Dashboard</div>
                <div class="pdate">Oct 2024 | Rank: A</div>
                <div class="pdesc">Interactive Power BI dashboard for sales analysis and trend identification.</div>
                <div style="margin-top:6px"><span class="tag">Power BI</span><span class="tag">DAX</span></div>
            </div>
            <div class="pcard">
                <div class="pname">🎮 Personality Test + Gamification</div>
                <div class="pdate">Feb – Jun 2024 · BINUS | Rank: A</div>
                <div class="pdesc">Party Leader. RPG-style personality test with butterfly-effect mechanics. Figma prototyping, Python/PHP backend, HTML/CSS frontend.</div>
                <div style="margin-top:6px"><span class="tag">Python</span><span class="tag">PHP</span><span class="tag">Figma</span><span class="tag">Team Lead</span></div>
            </div>
            <div class="pcard">
                <div class="pname">🛒 E-commerce Data Analysis</div>
                <div class="pdate">Mar – May 2024 · BINUS | Rank: B+</div>
                <div class="pdesc">Naive Bayes product classification + automated restock recommendations.</div>
                <div style="margin-top:6px"><span class="tag">Python</span><span class="tag">ML</span><span class="tag">Naive Bayes</span></div>
            </div>
        `]
    },
    skills: {
        title: "🛡️ Armory — Equipment & Skills",
        pages: [`
            <h3>Equipped Skills</h3>
            <div class="sgroup"><div class="slabel">⚔️ Backend Weapons</div><span class="tag">Go (Golang)</span><span class="tag">Python</span><span class="tag">PHP</span></div>
            <div class="sgroup"><div class="slabel">🛡️ Frontend Shields</div><span class="tag">Vue.js</span><span class="tag">Quasar</span><span class="tag">HTML</span><span class="tag">CSS</span></div>
            <div class="sgroup"><div class="slabel">🗄️ Database Artifacts</div><span class="tag">Oracle DB</span><span class="tag">Oracle EBS</span><span class="tag">Snowflake</span><span class="tag">SQL</span><span class="tag">Data Modeling</span></div>
        `, `
            <div class="sgroup"><div class="slabel">📊 Analytics Magic</div><span class="tag">Power BI</span><span class="tag">DAX</span><span class="tag">Data Analysis</span><span class="tag">Machine Learning</span></div>
            <div class="sgroup"><div class="slabel">🔧 Tools & Relics</div><span class="tag">Git</span><span class="tag">Scrum</span><span class="tag">Figma</span><span class="tag">Trunk-based Dev</span></div>
            <div class="sgroup"><div class="slabel">🧠 Passive Abilities</div><span class="tag">Project Management</span><span class="tag">Leadership</span><span class="tag">Problem Solving</span><span class="tag">Research</span></div>
        `]
    },
    publication: {
        title: "📜 Ancient Scroll — Research",
        pages: [`
            <h3>Published Tome</h3>
            <div class="pcard">
                <div class="pname" style="font-size:.42rem;line-height:2">The Influence of Social Media on Voter Behavior, Public Opinion, and Partisan Tendencies during Election Campaigns in Indonesia</div>
                <div class="pdate">IEEE · iSemantic 2024 · Nov 28, 2024</div>
                <div class="pdesc">A legendary systematic literature review examining social media's influence on voter behavior during Indonesian elections. Presented before the iSemantic 2024 council.</div>
                <div style="margin-top:6px"><span class="tag" style="border-color:#66cc66;color:#66cc66">📜 Published & Presented</span></div>
            </div>
        `]
    },
    contact: {
        title: "💌 Message Board",
        pages: [`
            <h3>Send a Message to the Guild Master</h3>
            <p>Open to new quests and adventures!</p><br>
            <a href="https://www.linkedin.com/in/faiz-ahmad-8427b5329/" target="_blank" class="clink">🔗 LinkedIn — Faiz Ahmad</a>
            <a href="mailto:faiz.ahmad@binus.ac.id" class="clink">📧 faiz.ahmad@binus.ac.id</a>
            <a href="https://github.com/faizmad" target="_blank" class="clink">🐙 GitHub — faizmad</a>
            <br><p style="color:#555;font-size:.32rem;margin-top:10px">Thanks for visiting the guild!</p>
        `]
    }
};

// ---- Texture generation -------------------------------------------
function gen(scene) {
    function draw(key, w, h, fn) {
        const c = document.createElement('canvas'); c.width=w; c.height=h;
        const x = c.getContext('2d'); x.imageSmoothingEnabled=false; fn(x);
        scene.textures.addCanvas(key, c);
    }

    // Floor tile (wooden plank)
    draw('floor', 16, 16, x => {
        x.fillStyle='#5a3e28'; x.fillRect(0,0,16,16);
        x.fillStyle='#6b4a30'; x.fillRect(0,0,7,16); x.fillRect(9,0,7,16);
        x.fillStyle='#4a3220'; x.fillRect(7,0,2,16); // plank gap
        x.fillStyle='#7a5838'; // highlights
        x.fillRect(2,3,3,1); x.fillRect(11,8,3,1); x.fillRect(3,12,2,1); x.fillRect(12,2,2,1);
        x.fillStyle='#4a3020'; // knots
        x.fillRect(4,7,2,2); x.fillRect(12,13,2,2);
    });

    // Floor variant
    draw('floor2', 16, 16, x => {
        x.fillStyle='#5e4230'; x.fillRect(0,0,16,16);
        x.fillStyle='#6e4e34'; x.fillRect(0,0,16,7);
        x.fillStyle='#4e3624'; x.fillRect(0,7,16,2);
        x.fillStyle='#7e5a3c'; x.fillRect(5,2,3,1); x.fillRect(10,10,3,1);
    });

    // Carpet (red)
    draw('carpet', 16, 16, x => {
        x.fillStyle='#882222'; x.fillRect(0,0,16,16);
        x.fillStyle='#aa3333'; x.fillRect(1,1,14,14);
        x.fillStyle='#cc4444'; x.fillRect(2,2,12,12);
        x.fillStyle='#f0e040'; // gold trim
        x.fillRect(0,0,16,1); x.fillRect(0,15,16,1); x.fillRect(0,0,1,16); x.fillRect(15,0,1,16);
    });

    // Wall (stone)
    draw('wall', 16, 16, x => {
        x.fillStyle='#3a3a4a'; x.fillRect(0,0,16,16);
        x.fillStyle='#444458'; x.fillRect(1,1,6,6); x.fillRect(9,1,6,6); x.fillRect(1,9,6,6); x.fillRect(9,9,6,6);
        x.fillStyle='#2e2e3e'; x.fillRect(0,7,16,2); x.fillRect(7,0,2,16);
        x.fillStyle='#4e4e62'; x.fillRect(2,2,3,3); x.fillRect(10,10,3,3);
    });

    // Wall top (darker)
    draw('wall_top', 16, 16, x => {
        x.fillStyle='#2a2a3a'; x.fillRect(0,0,16,16);
        x.fillStyle='#333348'; x.fillRect(1,1,6,6); x.fillRect(9,1,6,6);
        x.fillStyle='#222236'; x.fillRect(0,7,16,2); x.fillRect(7,0,2,16);
    });

    // Wall banner (exhibit markers)
    function drawBanner(key, color, icon) {
        draw(key, 16, 24, x => {
            x.fillStyle='#8b6c42'; x.fillRect(6,0,4,4); // pole
            x.fillStyle=color; x.fillRect(2,3,12,18);
            x.fillStyle='rgba(0,0,0,0.2)'; x.fillRect(2,3,4,18);
            x.fillStyle='#f0e040'; x.fillRect(2,3,12,1); x.fillRect(2,3,1,18); x.fillRect(13,3,1,18);
            // bottom fringe
            x.fillRect(3,20,2,2); x.fillRect(7,20,2,2); x.fillRect(11,20,2,2);
            // icon text
            x.fillStyle='#fff'; x.font='bold 8px sans-serif'; x.fillText(icon, 4, 15);
        });
    }
    drawBanner('banner_about', '#2244aa', '👤');
    drawBanner('banner_exp', '#aa2222', '⚔');
    drawBanner('banner_proj', '#228833', '📋');
    drawBanner('banner_skill', '#6633aa', '🛡');
    drawBanner('banner_pub', '#aa7722', '📜');
    drawBanner('banner_contact', '#aa3366', '💌');

    // Exhibit stand / pedestal
    draw('pedestal', 24, 16, x => {
        x.fillStyle='#6b5232'; x.fillRect(2,4,20,12);
        x.fillStyle='#8b6c42'; x.fillRect(4,6,16,8);
        x.fillStyle='#a07848'; x.fillRect(6,8,12,4);
        x.fillStyle='#f0e040'; x.fillRect(2,4,20,2); // gold trim
    });

    // Table
    draw('table', 32, 20, x => {
        x.fillStyle='#5a3e28'; x.fillRect(0,4,32,12);
        x.fillStyle='#6b4a30'; x.fillRect(2,6,28,8);
        x.fillStyle='#7a5838'; x.fillRect(4,8,24,4);
        x.fillStyle='#4a3220'; x.fillRect(4,16,4,4); x.fillRect(24,16,4,4); // legs
        // items on table
        x.fillStyle='#88ccff'; x.fillRect(8,2,4,4); // book
        x.fillStyle='#6699cc'; x.fillRect(8,2,1,4);
        x.fillStyle='#cc9933'; x.fillRect(20,1,3,5); // candle
        x.fillStyle='#ff8844'; x.fillRect(21,0,1,2); // flame
    });

    // Bookshelf
    draw('bookshelf', 32, 32, x => {
        x.fillStyle='#4a2810'; x.fillRect(0,0,32,32);
        x.fillStyle='#5a3818'; x.fillRect(2,2,28,28);
        // shelves
        x.fillStyle='#4a2810'; x.fillRect(0,15,32,2); x.fillRect(0,0,32,2);
        // books top row
        const colors1 = ['#cc3333','#3366cc','#33aa44','#cc9933','#8844cc','#cc6633'];
        colors1.forEach((c,i) => { x.fillStyle=c; x.fillRect(3+i*4, 3, 3, 12); });
        // books bottom row
        const colors2 = ['#44aacc','#aa3366','#66aa33','#cc8833','#3366aa','#993388'];
        colors2.forEach((c,i) => { x.fillStyle=c; x.fillRect(3+i*4, 18, 3, 12); });
    });

    // Torch (animated feel with glow)
    draw('torch', 8, 24, x => {
        x.fillStyle='#5a3318'; x.fillRect(3,10,2,14); // handle
        x.fillStyle='#8b6c42'; x.fillRect(1,8,6,4); // holder
        x.fillStyle='#ff6622'; x.fillRect(2,2,4,7); // flame
        x.fillStyle='#ffaa22'; x.fillRect(3,3,2,4);
        x.fillStyle='#ffee44'; x.fillRect(3,4,2,2);
    });

    // Armor stand
    draw('armor', 16, 28, x => {
        x.fillStyle='#444'; x.fillRect(6,20,4,8); // stand
        x.fillStyle='#666'; x.fillRect(4,18,8,4);
        // body armor
        x.fillStyle='#8888aa'; x.fillRect(3,4,10,14);
        x.fillStyle='#9999bb'; x.fillRect(5,6,6,10);
        // helmet
        x.fillStyle='#7777aa'; x.fillRect(4,0,8,6);
        x.fillStyle='#8888bb'; x.fillRect(5,1,6,4);
        x.fillStyle='#333'; x.fillRect(5,3,6,1); // visor
        // shoulders
        x.fillStyle='#8888aa'; x.fillRect(1,4,3,4); x.fillRect(12,4,3,4);
    });

    // Weapon rack
    draw('weapons', 24, 28, x => {
        x.fillStyle='#5a3318'; x.fillRect(0,0,24,4); x.fillRect(0,24,24,4); // frame
        x.fillStyle='#6b4422'; x.fillRect(2,4,2,20); x.fillRect(20,4,2,20);
        // sword
        x.fillStyle='#aaa'; x.fillRect(7,5,2,16); x.fillStyle='#cc9933'; x.fillRect(5,18,6,3);
        // axe
        x.fillStyle='#888'; x.fillRect(15,5,2,16);
        x.fillStyle='#999'; x.fillRect(13,5,6,5);
        x.fillStyle='#5a3318'; x.fillRect(15,18,2,3);
    });

    // Rug (large floor decoration)
    draw('rug', 48, 32, x => {
        x.fillStyle='#661122'; x.fillRect(0,0,48,32);
        x.fillStyle='#882233'; x.fillRect(2,2,44,28);
        x.fillStyle='#aa3344'; x.fillRect(4,4,40,24);
        // pattern
        x.fillStyle='#f0e040';
        x.fillRect(4,4,40,1); x.fillRect(4,27,40,1); x.fillRect(4,4,1,24); x.fillRect(43,4,1,24);
        x.fillRect(8,8,32,1); x.fillRect(8,23,32,1); x.fillRect(8,8,1,16); x.fillRect(39,8,1,16);
        // center diamond
        x.fillStyle='#cc9933';
        x.fillRect(22,12,4,1); x.fillRect(21,13,6,1); x.fillRect(20,14,8,4); x.fillRect(21,18,6,1); x.fillRect(22,19,4,1);
    });

    // Notice board
    draw('notice', 24, 20, x => {
        x.fillStyle='#6b4a30'; x.fillRect(0,0,24,20);
        x.fillStyle='#8b6a48'; x.fillRect(2,2,20,16);
        // papers
        x.fillStyle='#eee8d0'; x.fillRect(4,4,7,9);
        x.fillStyle='#ddd8c0'; x.fillRect(13,3,7,8);
        x.fillStyle='#eee0c0'; x.fillRect(5,12,10,4);
        // pins
        x.fillStyle='#cc3333'; x.fillRect(7,3,2,2);
        x.fillStyle='#3366cc'; x.fillRect(15,2,2,2);
        x.fillStyle='#33aa44'; x.fillRect(9,11,2,2);
    });

    // Chandelier
    draw('chandelier', 48, 24, x => {
        x.fillStyle='#8b6c42'; x.fillRect(22,0,4,6); // chain
        x.fillStyle='#aa8855'; x.fillRect(8,6,32,3); // bar
        x.fillStyle='#cc9933'; x.fillRect(6,5,36,2); // gold trim
        // candles
        [10,18,26,34].forEach(cx => {
            x.fillStyle='#eee'; x.fillRect(cx,3,3,4);
            x.fillStyle='#ff8822'; x.fillRect(cx,1,3,3);
            x.fillStyle='#ffcc44'; x.fillRect(cx+1,1,1,2);
        });
    });

    // Player spritesheet 4dir x 4frames
    draw('player_sheet', 64, 96, x => {
        for (let dir = 0; dir < 4; dir++) {
            for (let f = 0; f < 4; f++) {
                const ox=f*16, oy=dir*24, bob=(f===1||f===3)?-1:0;
                x.fillStyle='rgba(0,0,0,0.2)'; x.fillRect(ox+3,oy+22,10,2);
                x.fillStyle='#4488ff'; x.fillRect(ox+4,oy+12+bob,8,10);
                x.fillStyle='#3366cc'; x.fillRect(ox+4,oy+12+bob,3,10);
                const lo=f===1?-1:f===3?1:0;
                x.fillStyle='#335588'; x.fillRect(ox+5+lo,oy+20+bob,3,3); x.fillRect(ox+9-lo,oy+20+bob,3,3);
                x.fillStyle='#ffcc88'; x.fillRect(ox+4,oy+4+bob,8,8);
                x.fillStyle='#eebb77'; x.fillRect(ox+4,oy+4+bob,2,8);
                x.fillStyle='#2a1a0a'; x.fillRect(ox+3,oy+3+bob,10,3);
                if(dir===0){x.fillStyle='#222';x.fillRect(ox+5,oy+8+bob,2,2);x.fillRect(ox+9,oy+8+bob,2,2);x.fillStyle='#cc6644';x.fillRect(ox+7,oy+10+bob,2,1);}
                else if(dir===3){x.fillStyle='#2a1a0a';x.fillRect(ox+3,oy+3+bob,10,5);}
                else{x.fillStyle='#222';x.fillRect(dir===1?ox+5:ox+9,oy+8+bob,2,2);}
                x.fillStyle='#ffcc88';const ao=f===1?1:f===3?-1:0;
                x.fillRect(ox+2,oy+13+bob+ao,2,5);x.fillRect(ox+12,oy+13+bob-ao,2,5);
            }
        }
    });

    // Interact bubble
    draw('bubble', 16, 16, x => {
        x.fillStyle='rgba(240,224,64,0.9)';
        x.beginPath(); x.arc(8,7,6,0,Math.PI*2); x.fill();
        x.beginPath(); x.moveTo(6,12); x.lineTo(8,16); x.lineTo(10,12); x.fill();
        x.fillStyle='#1a1a2e'; x.font='bold 8px sans-serif'; x.fillText('E',4.5,10);
    });
}

// ---- Room Layout --------------------------------------------------
// Room is 30x22 tiles, TILE=32px
const COLS=30, ROWS=22, TILE=32;
const RW=COLS*TILE, RH=ROWS*TILE;

// 0=floor, 1=wall, 2=carpet, 3=wall_top
function buildRoom() {
    const m=[];
    for(let r=0;r<ROWS;r++){
        m[r]=[];
        for(let c=0;c<COLS;c++){
            if(r<3) m[r][c]=3;           // top wall (dark)
            else if(r===3) m[r][c]=1;     // wall face
            else if(r>=ROWS-1) m[r][c]=1; // bottom wall
            else if(c<=0||c>=COLS-1) m[r][c]=1; // side walls
            else m[r][c] = Math.random()<0.3 ? 0 : (Math.random()<0.5?0:((r+c)%2===0?0:0));
        }
    }
    // Carpet runner (center)
    for(let r=6;r<ROWS-3;r++) for(let c=13;c<=16;c++) m[r][c]=2;
    // Carpet at entrance
    for(let r=ROWS-3;r<ROWS-1;r++) for(let c=13;c<=16;c++) m[r][c]=2;
    return m;
}

// Exhibit positions: { type, col, row, zone, label }
const EXHIBITS = [
    // Back wall (top) - left to right
    { type:'banner_about',   c:4,  r:3.5, zone:'about',       label:'Portrait' },
    { type:'banner_exp',     c:10, r:3.5, zone:'experience',  label:'Battle Records' },
    { type:'banner_pub',     c:20, r:3.5, zone:'publication', label:'Ancient Scroll' },
    { type:'banner_contact', c:26, r:3.5, zone:'contact',     label:'Message Board' },

    // Left wall exhibits
    { type:'bookshelf', c:1.5, r:8,  zone:null, label:null },
    { type:'bookshelf', c:1.5, r:12, zone:null, label:null },
    { type:'armor',     c:1.5, r:16, zone:null, label:null },

    // Right wall exhibits
    { type:'weapons',   c:28.5, r:8,  zone:null, label:null },
    { type:'bookshelf', c:28.5, r:12, zone:null, label:null },
    { type:'armor',     c:28.5, r:16, zone:null, label:null },

    // Center exhibits with pedestals
    { type:'pedestal', c:7,  r:9,  zone:'projects', label:'Quest Log' },
    { type:'pedestal', c:23, r:9,  zone:'skills',   label:'Armory' },

    // Tables
    { type:'table', c:7,  r:15, zone:null, label:null },
    { type:'table', c:23, r:15, zone:null, label:null },

    // Notice board (center back)
    { type:'notice', c:15, r:4.2, zone:'welcome', label:'Notice Board' },
];

// ---- Phaser Scene -------------------------------------------------
class GuildScene extends Phaser.Scene {
    constructor(){ super('GuildScene'); }
    preload(){ gen(this); }

    create(){
        this.roomMap = buildRoom();

        // Draw floor
        for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++){
            const t=this.roomMap[r][c];
            let key = t===1?'wall': t===2?'carpet': t===3?'wall_top': ((r+c)%3===0?'floor2':'floor');
            this.add.image(c*TILE+TILE/2, r*TILE+TILE/2, key).setScale(TILE/16).setDepth(0);
        }

        // Large rug in center
        this.add.image(15*TILE, 12*TILE, 'rug').setScale(2.5).setDepth(1);

        // Chandeliers
        [8,22].forEach(c => {
            this.add.image(c*TILE, 6*TILE, 'chandelier').setScale(2).setDepth(2);
        });
        this.add.image(15*TILE, 10*TILE, 'chandelier').setScale(2.5).setDepth(2);

        // Torches on walls
        [3,7,12,18,23,27].forEach(c => {
            const t = this.add.image(c*TILE, 3.8*TILE, 'torch').setScale(2).setDepth(100);
            this.tweens.add({ targets:t, alpha:{from:0.8,to:1}, scaleX:{from:1.9,to:2.1}, duration:300+Math.random()*200, yoyo:true, repeat:-1 });
        });

        // Exhibits & colliders
        this.colliders = [];
        this.interactables = [];

        EXHIBITS.forEach(e => {
            const ex = e.c*TILE, ey = e.r*TILE;
            const spr = this.add.image(ex, ey, e.type).setScale(2).setDepth(ey+10);

            // Collider for furniture
            const w = spr.displayWidth, h = spr.displayHeight;
            this.colliders.push({ x:ex-w/2, y:ey-h/2, w, h });

            if(e.zone) {
                this.interactables.push({ x:ex, y:ey+20, zone:e.zone, sprite:spr });

                // Floating label
                if(e.label) {
                    this.add.text(ex, ey - spr.displayHeight/2 - 8, e.label, {
                        fontFamily:'"Press Start 2P"', fontSize:'5px', color:'#f0e040',
                        backgroundColor:'#1a1a2ecc', padding:{x:4,y:2}
                    }).setOrigin(0.5).setDepth(9000);
                }
            }
        });

        // Wall colliders (top and sides)
        this.colliders.push({ x:0, y:0, w:RW, h:4.2*TILE }); // top wall
        this.colliders.push({ x:0, y:0, w:TILE*0.8, h:RH }); // left wall
        this.colliders.push({ x:(COLS-0.8)*TILE, y:0, w:TILE, h:RH }); // right wall
        this.colliders.push({ x:0, y:(ROWS-0.8)*TILE, w:RW, h:TILE }); // bottom wall

        // Door opening at bottom center (no collider there)
        // Remove bottom wall collider segment at door
        this.colliders.pop(); // remove full bottom
        this.colliders.push({ x:0, y:(ROWS-0.8)*TILE, w:12*TILE, h:TILE }); // left of door
        this.colliders.push({ x:18*TILE, y:(ROWS-0.8)*TILE, w:12*TILE, h:TILE }); // right of door

        // Player
        const tex = this.textures.get('player_sheet');
        for(let d=0;d<4;d++) for(let f=0;f<4;f++) tex.add(d*4+f, 0, f*16, d*24, 16, 24);

        this.player = this.add.sprite(15*TILE, 18*TILE, 'player_sheet', 0).setScale(2);
        this.jumpVel = 0;
        this.jumpZ = 0; // visual jump height
        this.isJumping = false;

        this.anims.create({ key:'walk_down',  frames:[0,1,2,3].map(f=>({key:'player_sheet',frame:f})), frameRate:8, repeat:-1 });
        this.anims.create({ key:'walk_left',  frames:[4,5,6,7].map(f=>({key:'player_sheet',frame:f})), frameRate:8, repeat:-1 });
        this.anims.create({ key:'walk_right', frames:[8,9,10,11].map(f=>({key:'player_sheet',frame:f})), frameRate:8, repeat:-1 });
        this.anims.create({ key:'walk_up',    frames:[12,13,14,15].map(f=>({key:'player_sheet',frame:f})), frameRate:8, repeat:-1 });

        this.playerLabel = this.add.text(this.player.x, this.player.y-30, 'Faiz', {
            fontFamily:'"Press Start 2P"', fontSize:'6px', color:'#fff',
            shadow:{offsetX:1,offsetY:1,color:'#000',blur:0,fill:true}
        }).setOrigin(0.5);

        this.playerShadow = this.add.ellipse(this.player.x, this.player.y+16, 24, 8, 0x000000, 0.3).setDepth(0.5);

        // Bubble
        this.bubble = this.add.image(0,0,'bubble').setScale(2).setVisible(false).setDepth(9999);
        this.tweens.add({ targets:this.bubble, y:'-=5', duration:400, yoyo:true, repeat:-1, ease:'Sine.easeInOut' });

        // Camera
        this.cameras.main.setBounds(0,0,RW,RH);
        this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
        this.cameras.main.setZoom(this.getZoom());

        // Ambient lighting overlay (vignette)
        const vignette = this.add.graphics().setScrollFactor(0).setDepth(998);
        vignette.fillStyle(0x000000, 0.15);
        vignette.fillRect(0,0,this.scale.width,this.scale.height);

        // Torch glow particles
        [3,7,12,18,23,27].forEach(c => {
            for(let i=0;i<3;i++){
                const p = this.add.circle(c*TILE+Phaser.Math.Between(-8,8), 3.2*TILE, 2, 0xff8822, 0.5).setDepth(999);
                this.tweens.add({ targets:p, y:p.y-Phaser.Math.Between(10,30), alpha:0, duration:Phaser.Math.Between(800,1500), repeat:-1, delay:Phaser.Math.Between(0,1000) });
            }
        });

        // HUD
        this.add.rectangle(0,0,260,36,0x000000,0.7).setScrollFactor(0).setOrigin(0).setDepth(1000);
        this.add.text(8,5,'Faiz Ahmad',{fontFamily:'"Press Start 2P"',fontSize:'7px',color:'#f0e040'}).setScrollFactor(0).setDepth(1001);
        this.add.text(8,20,'Guild Master',{fontFamily:'"Press Start 2P"',fontSize:'4px',color:'#88ccff'}).setScrollFactor(0).setDepth(1001);

        this.hudLocBg = this.add.rectangle(this.scale.width-8,6,150,20,0x000000,0.7).setScrollFactor(0).setOrigin(1,0).setDepth(1000);
        this.hudLoc = this.add.text(this.scale.width-14,10,'Guild Hall',{fontFamily:'"Press Start 2P"',fontSize:'5px',color:'#aaa'}).setScrollFactor(0).setOrigin(1,0).setDepth(1001);

        // Jump indicator
        this.jumpHud = this.add.text(this.scale.width/2, this.scale.height-20, '', {
            fontFamily:'"Press Start 2P"', fontSize:'5px', color:'#88ccff'
        }).setScrollFactor(0).setOrigin(0.5).setDepth(1001);

        // Input
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys('W,A,S,D');
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.eKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        this.dialogOpen = false;
        this.nearestExhibit = null;

        this.eKey.on('down', () => this.handleInteract());
        this.escKey.on('down', () => { if(this.dialogOpen) closeDialogUI(); });
        this.spaceKey.on('down', () => {
            if(this.dialogOpen) { closeDialogUI(); return; }
            this.jump();
        });

        // Mobile
        this.mobileDir={up:false,down:false,left:false,right:false};
        document.querySelectorAll('.mc-btn').forEach(b=>{
            const d=b.dataset.d;
            b.addEventListener('touchstart',e=>{e.preventDefault();this.mobileDir[d]=true;});
            b.addEventListener('touchend',e=>{e.preventDefault();this.mobileDir[d]=false;});
        });
        const mcJ=document.getElementById('mc-jump');
        const mcE=document.getElementById('mc-interact');
        if(mcJ) mcJ.addEventListener('touchstart',e=>{e.preventDefault();this.jump();});
        if(mcE) mcE.addEventListener('touchstart',e=>{e.preventDefault();this.handleInteract();});

        this.scale.on('resize', sz => {
            this.cameras.main.setZoom(this.getZoom());
            this.hudLocBg.setPosition(sz.width-8,6);
            this.hudLoc.setPosition(sz.width-14,10);
            this.jumpHud.setPosition(sz.width/2, sz.height-20);
        });

        // Floor dust particles
        for(let i=0;i<10;i++){
            const d = this.add.circle(Phaser.Math.Between(TILE*2,RW-TILE*2), Phaser.Math.Between(TILE*5,RH-TILE*2), 1, 0xffffff, 0.15).setDepth(1);
            this.tweens.add({ targets:d, x:'+='+Phaser.Math.Between(-20,20), alpha:{from:0.05,to:0.2}, duration:Phaser.Math.Between(3000,5000), yoyo:true, repeat:-1, delay:Phaser.Math.Between(0,3000) });
        }
    }

    getZoom(){
        return Math.max(1.8, Math.min(3.5, Math.min(this.scale.width/400, this.scale.height/300)));
    }

    jump(){
        if(this.isJumping || this.dialogOpen) return;
        this.isJumping = true;
        this.jumpVel = -6;
    }

    handleInteract(){
        if(this.dialogOpen){ closeDialogUI(); return; }
        if(this.nearestExhibit){ openDialogUI(this.nearestExhibit.zone); this.dialogOpen=true; }
    }

    update(time, delta){
        if(this.dialogOpen){ this.player.anims.stop(); return; }

        const speed=110, dt=delta/1000;
        let vx=0, vy=0;

        if(this.cursors.left.isDown||this.wasd.A.isDown||this.mobileDir.left) vx=-speed;
        else if(this.cursors.right.isDown||this.wasd.D.isDown||this.mobileDir.right) vx=speed;
        if(this.cursors.up.isDown||this.wasd.W.isDown||this.mobileDir.up) vy=-speed;
        else if(this.cursors.down.isDown||this.wasd.S.isDown||this.mobileDir.down) vy=speed;

        if(vx&&vy){vx*=0.707;vy*=0.707;}

        let nx = Phaser.Math.Clamp(this.player.x+vx*dt, TILE, RW-TILE);
        let ny = Phaser.Math.Clamp(this.player.y+vy*dt, TILE*4, RH-TILE);

        // Collision (skip during jump for slight freedom)
        if(!this.isJumping || this.jumpZ > -10) {
            if(!this.isCol(nx,ny)){ this.player.x=nx; this.player.y=ny; }
            else if(!this.isCol(nx,this.player.y)) this.player.x=nx;
            else if(!this.isCol(this.player.x,ny)) this.player.y=ny;
        } else {
            this.player.x=nx; this.player.y=ny;
        }

        // Jump physics
        if(this.isJumping){
            this.jumpZ += this.jumpVel;
            this.jumpVel += 0.35; // gravity
            if(this.jumpZ >= 0){ this.jumpZ=0; this.isJumping=false; this.jumpVel=0; }
        }

        // Apply jump visual offset
        this.player.setY(this.player.y);
        const visualY = this.player.y + this.jumpZ;

        // Anim
        if(vx||vy){
            if(Math.abs(vy)>=Math.abs(vx)) this.player.play(vy<0?'walk_up':'walk_down',true);
            else this.player.play(vx<0?'walk_left':'walk_right',true);
        } else this.player.anims.stop();

        // Depth & visual
        this.player.setDepth(this.player.y+20);
        this.player.y = this.player.y; // keep actual y for collision
        // offset sprite visually for jump
        this.player.setPosition(this.player.x, visualY);

        this.playerLabel.setPosition(this.player.x, visualY-30).setDepth(this.player.depth+1);
        this.playerShadow.setPosition(this.player.x, this.player.y - this.jumpZ + 16);
        this.playerShadow.setScale(1 + this.jumpZ*0.01, 0.5 + this.jumpZ*0.005); // shadow grows when jumping

        // Reset player y for collision after visual offset
        this.player.y = this.player.y - this.jumpZ;

        // Jump HUD
        this.jumpHud.setText(this.isJumping ? '~ jumping ~' : '');

        // NPC proximity
        this.nearestExhibit = null;
        let minD = 55;
        this.interactables.forEach(n => {
            const d = Phaser.Math.Distance.Between(this.player.x, this.player.y, n.x, n.y);
            if(d<minD){ minD=d; this.nearestExhibit=n; }
        });

        if(this.nearestExhibit){
            this.bubble.setVisible(true).setPosition(this.nearestExhibit.x, this.nearestExhibit.y-30).setDepth(9999);
        } else this.bubble.setVisible(false);

        // HUD area
        const px=this.player.x, py=this.player.y;
        let loc='Guild Hall';
        if(py<7*TILE) loc='Gallery Wall';
        else if(px<8*TILE) loc='West Wing';
        else if(px>22*TILE) loc='East Wing';
        else if(py>16*TILE) loc='Entrance Hall';
        else loc='Grand Hall';
        this.hudLoc.setText(loc);
    }

    isCol(x,y){
        for(const c of this.colliders)
            if(x+8>c.x && x-8<c.x+c.w && y+4>c.y && y-12<c.y+c.h) return true;
        return false;
    }
}

// ---- Dialog UI ----------------------------------------------------
let currentZone=null, currentPage=0;

function openDialogUI(zone){
    currentZone=zone; currentPage=0;
    document.getElementById('dialog-overlay').classList.add('active');
    document.getElementById('dialog-title').textContent = DIALOGS[zone].title;
    renderPage();
}

function closeDialogUI(){
    document.getElementById('dialog-overlay').classList.remove('active');
    currentZone=null;
    if(window.gs) window.gs.dialogOpen=false;
}

function renderPage(){
    const pages=DIALOGS[currentZone].pages;
    document.getElementById('dialog-body').innerHTML=pages[currentPage];
    document.getElementById('prev-btn').style.display=currentPage>0?'inline-block':'none';
    document.getElementById('next-btn').style.display=currentPage<pages.length-1?'inline-block':'none';
    document.getElementById('page-info').textContent=pages.length>1?`${currentPage+1}/${pages.length}`:'';
}

document.getElementById('dialog-close-btn').addEventListener('click',closeDialogUI);
document.getElementById('prev-btn').addEventListener('click',()=>{if(currentPage>0){currentPage--;renderPage();}});
document.getElementById('next-btn').addEventListener('click',()=>{if(currentZone&&currentPage<DIALOGS[currentZone].pages.length-1){currentPage++;renderPage();}});
document.getElementById('dialog-overlay').addEventListener('click',e=>{if(e.target.id==='dialog-overlay')closeDialogUI();});

document.addEventListener('keydown',e=>{
    if(!currentZone)return;
    if(e.key==='Escape'){e.preventDefault();closeDialogUI();}
    if(e.key==='ArrowRight')document.getElementById('next-btn').click();
    if(e.key==='ArrowLeft')document.getElementById('prev-btn').click();
});

// ---- Boot ---------------------------------------------------------
document.getElementById('start-btn').addEventListener('click',()=>{
    document.getElementById('start-screen').classList.add('hidden');
    setTimeout(()=>document.getElementById('start-screen').style.display='none',600);

    if(window.innerWidth<=768){
        document.getElementById('mobile-controls').style.display='block';
        document.querySelector('.mc-extra').style.display='flex';
    }

    const game = new Phaser.Game({
        type:Phaser.AUTO, parent:'game-container',
        width:window.innerWidth, height:window.innerHeight,
        pixelArt:true, backgroundColor:'#1a1a2e',
        scale:{mode:Phaser.Scale.RESIZE, autoCenter:Phaser.Scale.CENTER_BOTH},
        scene:[GuildScene],
    });

    game.events.on('ready',()=>{ window.gs = game.scene.getScene('GuildScene'); });
});
