// ============================================================
//  FAIZ AHMAD — GUILD HALL PORTFOLIO
//  Kenney asset-based RPG (Tiny Dungeon + Urban Pack)
// ============================================================

/* ---- Dungeon tilemap_packed.png layout (16px, 12 cols x 11 rows) ----
   Rows 0-1: floor/wall tiles (stone, brick, cave)
   Row 2-3: walls, doors, stairs
   Row 4-5: furniture (table, bookshelf, barrel, chest, bed, etc.)
   Row 6-7: more objects (torch, potion, skull, candle, lever, etc.)
   Row 8-10: characters (4 dir walk frames), weapons, shields
*/

/* ---- Urban tilemap_packed.png layout (16px, 27 cols x 18 rows) ----
   Rows 0-5: room floor tiles (colored rooms, bathroom, kitchen)
   Rows 6-9: furniture (shelves, tables, chairs, appliances)
   Rows 10-12: more furniture, doors, windows, outdoor items
   Cols 20-26, Rows 0-17: character sprites (walk anims 4 dir)
*/

const DTILE = 16; // dungeon tile size
const UTILE = 16; // urban tile size
const DCOLS = 12; // dungeon sheet columns
const UCOLS = 27; // urban sheet columns

// Helper: get frame index from col,row in spritesheet
function dFrame(c, r) { return r * DCOLS + c; }
function uFrame(c, r) { return r * UCOLS + c; }

// ---- Resume Dialog Data -------------------------------------------
const DIALOGS = {
    welcome:{title:"Guild Notice Board",pages:[`
        <h3>Welcome, Adventurer!</h3>
        <p>You have entered the <span style="color:#f0e040">Guild of Faiz Ahmad</span>.</p><br>
        <p>Explore the hall and press <span style="color:#88ccff">E</span> near exhibits to learn about the guild master.</p><br>
        <p>🖼️ <span style="color:#88ccff">Portrait</span> — About the guild master</p>
        <p>⚔️ <span style="color:#ff6666">Battle Records</span> — Work experience</p>
        <p>📋 <span style="color:#66cc66">Quest Log</span> — Completed projects</p>
        <p>🛡️ <span style="color:#aa66ff">Armory</span> — Skills & equipment</p>
        <p>📜 <span style="color:#ccaa33">Ancient Scroll</span> — Research publication</p>
        <p>💌 <span style="color:#ff88aa">Message Board</span> — Contact info</p>
    `]},
    about:{title:"Portrait of the Guild Master",pages:[`
        <h3>Faiz Ahmad</h3>
        <p><span style="color:#88ccff">Computer Science Student</span> at <span style="color:#f0e040">Bina Nusantara University</span></p>
        <p>📍 Bekasi, Jawa Barat, Indonesia</p><br>
        <p>Specializing in <span style="color:#f0e040">Software Engineering</span> & <span style="color:#f0e040">Databases</span>.</p><br>
        <p>A skilled craftsman of software — clean code, scalable architecture, user-centered design.</p><br>
        <p>Battle-tested with <span style="color:#66cc66">production-grade software</span> actively deployed in the real world.</p><br>
        <p>Master of relational & non-relational databases — data modeling and query optimization.</p><br>
        <p style="color:#88ccff">"Passionate about solving real-world problems through technology."</p>
    `]},
    experience:{title:"⚔️ Battle Records",pages:[`
        <h3>Campaign History</h3>
        <div class="exp-item">
            <div class="exp-role">Oracle Software Engineer</div>
            <div class="exp-company">⚔️ Traveloka Guild</div>
            <div class="exp-date">Sep 2025 – Feb 2026 · 6 months · Internship</div>
            <div class="exp-date">📍 Tangerang Selatan, Banten</div>
            <div class="exp-desc">Mastered Oracle E-Business Suite and Oracle Database systems.</div>
            <div style="margin-top:6px"><span class="tag">Oracle EBS</span><span class="tag">Oracle DB</span></div>
        </div>
    `,`
        <div class="exp-item">
            <div class="exp-role">Information Technology Developer</div>
            <div class="exp-company">⚔️ PT TEMAS Tbk. Guild</div>
            <div class="exp-date">Feb 2025 – Sep 2025 · 8 months · Internship</div>
            <div class="exp-date">📍 Jakarta Utara, Indonesia</div>
            <div class="exp-desc">Fullstack warrior — Go (Golang) backend, Vue.js + Quasar frontend. System planning, business process analysis, Scrum battalion.</div>
            <div style="margin-top:6px"><span class="tag">Go</span><span class="tag">Vue.js</span><span class="tag">Quasar</span><span class="tag">Scrum</span></div>
        </div>
    `]},
    projects:{title:"🗺️ Quest Log",pages:[`
        <h3>Completed Quests</h3>
        <div class="pcard"><div class="pname">🏗️ Internal Apps — PT TEMAS</div><div class="pdate">Feb 2025 – Present | Rank: S</div>
        <div class="pdesc">• Invoice Management with LOA<br>• IT Ticketing System<br>• Access Management System</div>
        <div style="margin-top:6px"><span class="tag">Go</span><span class="tag">Vue.js</span><span class="tag">Quasar</span><span class="tag">Trunk-based Git</span></div></div>
        <div class="pcard"><div class="pname">❄️ Data Engineering — Snowflake</div><div class="pdate">Dec 2024 | Rank: A</div>
        <div class="pdesc">DDL structure in Snowflake, ETL pipeline, Power BI dashboards.</div>
        <div style="margin-top:6px"><span class="tag">Snowflake</span><span class="tag">DDL</span><span class="tag">Power BI</span></div></div>
    `,`
        <div class="pcard"><div class="pname">📊 Sales Dashboard</div><div class="pdate">Oct 2024 | Rank: A</div>
        <div class="pdesc">Interactive Power BI dashboard for sales analysis.</div>
        <div style="margin-top:6px"><span class="tag">Power BI</span><span class="tag">DAX</span></div></div>
        <div class="pcard"><div class="pname">🎮 Personality Test + Gamification</div><div class="pdate">Feb – Jun 2024 · BINUS | Rank: A</div>
        <div class="pdesc">Party Leader. RPG-style personality test with butterfly-effect mechanics.</div>
        <div style="margin-top:6px"><span class="tag">Python</span><span class="tag">PHP</span><span class="tag">Figma</span><span class="tag">Team Lead</span></div></div>
        <div class="pcard"><div class="pname">🛒 E-commerce Analysis</div><div class="pdate">Mar – May 2024 | Rank: B+</div>
        <div class="pdesc">Naive Bayes product classification + automated restock.</div>
        <div style="margin-top:6px"><span class="tag">Python</span><span class="tag">ML</span></div></div>
    `]},
    skills:{title:"🛡️ Armory",pages:[`
        <h3>Equipped Skills</h3>
        <div class="sgroup"><div class="slabel">⚔️ Backend Weapons</div><span class="tag">Go (Golang)</span><span class="tag">Python</span><span class="tag">PHP</span></div>
        <div class="sgroup"><div class="slabel">🛡️ Frontend Shields</div><span class="tag">Vue.js</span><span class="tag">Quasar</span><span class="tag">HTML</span><span class="tag">CSS</span></div>
        <div class="sgroup"><div class="slabel">🗄️ Database Artifacts</div><span class="tag">Oracle DB</span><span class="tag">Oracle EBS</span><span class="tag">Snowflake</span><span class="tag">SQL</span><span class="tag">Data Modeling</span></div>
    `,`
        <div class="sgroup"><div class="slabel">📊 Analytics Magic</div><span class="tag">Power BI</span><span class="tag">DAX</span><span class="tag">Data Analysis</span><span class="tag">Machine Learning</span></div>
        <div class="sgroup"><div class="slabel">🔧 Tools & Relics</div><span class="tag">Git</span><span class="tag">Scrum</span><span class="tag">Figma</span><span class="tag">Trunk-based Dev</span></div>
        <div class="sgroup"><div class="slabel">🧠 Passive Abilities</div><span class="tag">Project Management</span><span class="tag">Leadership</span><span class="tag">Problem Solving</span><span class="tag">Research</span></div>
    `]},
    publication:{title:"📜 Ancient Scroll",pages:[`
        <h3>Published Tome</h3>
        <div class="pcard">
            <div class="pname" style="font-size:.4rem;line-height:2">The Influence of Social Media on Voter Behavior, Public Opinion, and Partisan Tendencies during Election Campaigns in Indonesia</div>
            <div class="pdate">IEEE · iSemantic 2024 · Nov 28, 2024</div>
            <div class="pdesc">Systematic literature review on social media's influence on voter behavior during Indonesian elections. Presented at iSemantic 2024.</div>
            <div style="margin-top:6px"><span class="tag" style="border-color:#66cc66;color:#66cc66">📜 Published & Presented</span></div>
        </div>
    `]},
    contact:{title:"💌 Message Board",pages:[`
        <h3>Send a Message</h3>
        <p>The guild master is open to new quests!</p><br>
        <a href="https://www.linkedin.com/in/faiz-ahmad-8427b5329/" target="_blank" class="clink">🔗 LinkedIn — Faiz Ahmad</a>
        <a href="mailto:faiz.ahmad@binus.ac.id" class="clink">📧 faiz.ahmad@binus.ac.id</a>
        <a href="https://github.com/faizmad" target="_blank" class="clink">🐙 GitHub — faizmad</a>
        <br><p style="color:#444;font-size:.3rem;margin-top:10px">Thanks for visiting the guild!</p>
    `]}
};

// ---- Room Layout (tile indices from dungeon_tiles) ----------------
const COLS = 28, ROWS = 20, T = 32;
const RW = COLS*T, RH = ROWS*T;

// Build room tilemap using dungeon tile indices
function buildRoom() {
    const m = [];
    for (let r = 0; r < ROWS; r++) {
        m[r] = [];
        for (let c = 0; c < COLS; c++) {
            // Default: stone floor
            m[r][c] = { floor: dFrame(0,0), obj: -1 };

            // Walls (top 3 rows)
            if (r < 2) m[r][c].floor = dFrame(4,0); // dark wall top
            if (r === 2) m[r][c].floor = dFrame(4,1); // wall face
            // Side walls
            if (r >= 2 && (c === 0 || c === COLS-1)) m[r][c].floor = dFrame(4,1);
            // Bottom wall
            if (r === ROWS-1) m[r][c].floor = dFrame(4,0);

            // Floor variety
            if (r >= 3 && r < ROWS-1 && c > 0 && c < COLS-1) {
                // Checkered stone floor
                m[r][c].floor = (r+c)%2===0 ? dFrame(0,0) : dFrame(1,0);
                // Center red carpet area
                if (c >= 12 && c <= 15 && r >= 4 && r < ROWS-2) {
                    m[r][c].floor = dFrame(2,0); // lighter stone as carpet
                }
            }
        }
    }
    return m;
}

// ---- Phaser Scene -------------------------------------------------
class GuildScene extends Phaser.Scene {
    constructor() { super('GuildScene'); }

    preload() {
        this.load.spritesheet('dungeon', 'assets/dungeon_tiles.png', { frameWidth:16, frameHeight:16 });
        this.load.spritesheet('urban', 'assets/urban_tiles.png', { frameWidth:16, frameHeight:16 });
    }

    create() {
        const room = buildRoom();

        // Draw floor tiles
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const ti = room[r][c].floor;
                this.add.image(c*T+T/2, r*T+T/2, 'dungeon', ti).setScale(T/16).setDepth(0);
            }
        }

        // ---- Decorative wall tiles on top row ----
        for (let c = 0; c < COLS; c++) {
            // Top dark wall
            this.add.image(c*T+T/2, T/2, 'dungeon', dFrame(5,0)).setScale(T/16).setDepth(0);
            this.add.image(c*T+T/2, T+T/2, 'dungeon', dFrame(5,1)).setScale(T/16).setDepth(0);
            // Wall face
            this.add.image(c*T+T/2, 2*T+T/2, 'dungeon', dFrame(3,1)).setScale(T/16).setDepth(0);
        }

        this.colliders = [];
        this.interactables = [];

        // Top wall collider
        this.colliders.push({x:0,y:0,w:RW,h:3.2*T});
        // Side walls
        this.colliders.push({x:0,y:0,w:T*0.7,h:RH});
        this.colliders.push({x:(COLS-0.7)*T,y:0,w:T,h:RH});
        // Bottom wall (with door gap)
        this.colliders.push({x:0,y:(ROWS-0.7)*T,w:11*T,h:T});
        this.colliders.push({x:17*T,y:(ROWS-0.7)*T,w:11*T,h:T});

        // ---- Place furniture & objects from dungeon tileset ----

        // Bookshelves along walls (dungeon frame: col 6-7, row 4 = bookshelf)
        const shelfFrame = dFrame(6,4);
        const shelfFrame2 = dFrame(7,4);
        // Left wall bookshelves
        [5,7,9,11].forEach(r => {
            const s = this.add.image(1.5*T, r*T, 'dungeon', shelfFrame).setScale(2).setDepth(r*T);
            this.colliders.push({x:0.5*T, y:r*T-T, w:2*T, h:1.5*T});
        });
        // Right wall bookshelves
        [5,7,9,11].forEach(r => {
            this.add.image((COLS-1.5)*T, r*T, 'dungeon', shelfFrame2).setScale(2).setDepth(r*T);
            this.colliders.push({x:(COLS-2.5)*T, y:r*T-T, w:2*T, h:1.5*T});
        });

        // Tables (dungeon frame: col 4, row 4)
        const tableFrame = dFrame(4,4);
        [[6,8],[6,14],[21,8],[21,14]].forEach(([c,r]) => {
            this.add.image(c*T, r*T, 'dungeon', tableFrame).setScale(2).setDepth(r*T);
            this.colliders.push({x:c*T-T, y:r*T-T*0.8, w:2*T, h:1.5*T});
        });

        // Barrels (dungeon frame: col 8, row 4)
        const barrelFrame = dFrame(8,4);
        [[2.5,16],[25.5,16],[2.5,14],[25.5,14]].forEach(([c,r]) => {
            this.add.image(c*T, r*T, 'dungeon', barrelFrame).setScale(2).setDepth(r*T);
            this.colliders.push({x:c*T-T, y:r*T-T, w:1.5*T, h:1.5*T});
        });

        // Chests (dungeon frame: col 9, row 4)
        const chestFrame = dFrame(9,4);
        this.add.image(5*T, 4*T, 'dungeon', chestFrame).setScale(2).setDepth(4*T);
        this.colliders.push({x:4*T, y:3.2*T, w:2*T, h:1.5*T});
        this.add.image(23*T, 4*T, 'dungeon', chestFrame).setScale(2).setDepth(4*T);
        this.colliders.push({x:22*T, y:3.2*T, w:2*T, h:1.5*T});

        // Torches on walls (dungeon frame: col 0, row 6 = torch)
        const torchFrame = dFrame(0,6);
        [4,8,12,16,20,24].forEach(c => {
            const torch = this.add.image(c*T, 2.5*T, 'dungeon', torchFrame).setScale(2).setDepth(100);
            // Flicker effect
            this.tweens.add({targets:torch, alpha:{from:0.8,to:1}, scaleX:{from:1.9,to:2.1}, duration:250+Math.random()*200, yoyo:true, repeat:-1});
        });

        // Torch glow (light circles)
        [4,8,12,16,20,24].forEach(c => {
            const glow = this.add.circle(c*T, 2.8*T, 30, 0xff8822, 0.08).setDepth(1);
            this.tweens.add({targets:glow, alpha:{from:0.05,to:0.12}, radius:{from:28,to:35}, duration:400, yoyo:true, repeat:-1});
            // Particles
            for (let i = 0; i < 2; i++) {
                const p = this.add.circle(c*T + Phaser.Math.Between(-6,6), 2.3*T, 1.5, 0xff8822, 0.6).setDepth(999);
                this.tweens.add({targets:p, y:p.y-Phaser.Math.Between(15,35), alpha:0, duration:Phaser.Math.Between(600,1200), repeat:-1, delay:Phaser.Math.Between(0,800)});
            }
        });

        // ---- Exhibit NPCs (characters from dungeon tileset) ----
        // Dungeon characters start around row 8: knight, mage, etc.
        // Row 8: frames 0-3 walk down, 4-7 some npcs
        // Let's use different character frames as NPCs near exhibits

        const npcData = [
            // {frame, x(tiles), y(tiles), zone, label}
            {frame: dFrame(0,8),  x:9,  y:4.5, zone:'about',       label:'Portrait'},
            {frame: dFrame(4,8),  x:4,  y:6,   zone:'experience',  label:'Battle Records'},
            {frame: dFrame(8,8),  x:10, y:11,  zone:'projects',    label:'Quest Log'},
            {frame: dFrame(0,9),  x:18, y:11,  zone:'skills',      label:'Armory'},
            {frame: dFrame(4,9),  x:19, y:4.5, zone:'publication', label:'Ancient Scroll'},
            {frame: dFrame(8,9),  x:24, y:6,   zone:'contact',     label:'Message Board'},
            {frame: dFrame(0,10), x:14, y:17,  zone:'welcome',     label:'Notice Board'},
        ];

        npcData.forEach(n => {
            const nx = n.x*T, ny = n.y*T;
            const npc = this.add.image(nx, ny, 'dungeon', n.frame).setScale(2).setDepth(ny+10);
            // Idle bobbing
            this.tweens.add({targets:npc, y:ny-3, duration:800+Math.random()*400, yoyo:true, repeat:-1, ease:'Sine.easeInOut'});
            this.interactables.push({x:nx, y:ny, zone:n.zone, sprite:npc});

            // Label
            this.add.text(nx, ny - 22, n.label, {
                fontFamily:'"Press Start 2P"', fontSize:'4px', color:'#f0e040',
                backgroundColor:'#0f0e17cc', padding:{x:3,y:2}
            }).setOrigin(0.5).setDepth(9000);
        });

        // ---- Additional decorative objects ----
        // Skulls/potions on tables (dungeon row 6)
        const potionFrame = dFrame(1,6);
        const skullFrame = dFrame(3,6);
        this.add.image(6*T+4, 7.7*T, 'dungeon', potionFrame).setScale(1.5).setDepth(8*T);
        this.add.image(21*T-4, 7.7*T, 'dungeon', skullFrame).setScale(1.5).setDepth(8*T);
        this.add.image(6*T+4, 13.7*T, 'dungeon', skullFrame).setScale(1.5).setDepth(14*T);
        this.add.image(21*T-4, 13.7*T, 'dungeon', potionFrame).setScale(1.5).setDepth(14*T);

        // Weapons on wall (dungeon row 7: swords/shields)
        [dFrame(0,7), dFrame(1,7), dFrame(2,7), dFrame(3,7)].forEach((f,i) => {
            this.add.image((11+i*2)*T, 2.5*T, 'dungeon', f).setScale(2).setDepth(100);
        });

        // ---- Player (using urban character - row 0-3, cols 20-23 = walk anims) ----
        // Urban character: cols 20-23 have 4 walk frames, rows cycle through directions
        // Let's use the character at col 20-23 row 0-3 for 4-directional walking

        // Actually, let's look at what we have: urban cols 20-26 have characters
        // Each character has 4 frames in a row, across 4 rows for 4 directions
        // Character 1: col 20-23, rows 0-3 (down, right?, up?, left?)

        // For simplicity, use the first character set
        const playerFrames = {
            down:  [uFrame(20,0), uFrame(21,0), uFrame(22,0), uFrame(23,0)],
            left:  [uFrame(20,2), uFrame(21,2), uFrame(22,2), uFrame(23,2)],
            right: [uFrame(20,6), uFrame(21,6), uFrame(22,6), uFrame(23,6)],
            up:    [uFrame(20,4), uFrame(21,4), uFrame(22,4), uFrame(23,4)],
        };

        this.player = this.add.sprite(14*T, 16*T, 'urban', playerFrames.down[0]).setScale(2);

        this.anims.create({key:'p_down',  frames:playerFrames.down.map(f=>({key:'urban',frame:f})),  frameRate:8, repeat:-1});
        this.anims.create({key:'p_left',  frames:playerFrames.left.map(f=>({key:'urban',frame:f})),  frameRate:8, repeat:-1});
        this.anims.create({key:'p_right', frames:playerFrames.right.map(f=>({key:'urban',frame:f})), frameRate:8, repeat:-1});
        this.anims.create({key:'p_up',    frames:playerFrames.up.map(f=>({key:'urban',frame:f})),    frameRate:8, repeat:-1});

        this.playerLabel = this.add.text(this.player.x, this.player.y-24, 'Faiz', {
            fontFamily:'"Press Start 2P"', fontSize:'5px', color:'#fff',
            shadow:{offsetX:1,offsetY:1,color:'#000',blur:0,fill:true}
        }).setOrigin(0.5);

        this.playerShadow = this.add.ellipse(this.player.x, this.player.y+14, 20, 7, 0x000000, 0.35).setDepth(0.5);

        // Jump state
        this.jumpZ = 0;
        this.jumpVel = 0;
        this.isJumping = false;
        this.groundY = this.player.y;

        // Interact bubble (using dungeon tile)
        this.bubble = this.add.image(0,0,'dungeon', dFrame(2,6)).setScale(2).setVisible(false).setDepth(9999);
        this.tweens.add({targets:this.bubble, y:'-=5', duration:400, yoyo:true, repeat:-1, ease:'Sine.easeInOut'});

        // Camera
        this.cameras.main.setBounds(0,0,RW,RH);
        this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
        this.cameras.main.setZoom(this.getZoom());

        // Ambient dust
        for (let i = 0; i < 15; i++) {
            const d = this.add.circle(Phaser.Math.Between(T*2,RW-T*2), Phaser.Math.Between(T*4,RH-T*2), 1, 0xffffff, 0.12).setDepth(998);
            this.tweens.add({targets:d, x:'+='+Phaser.Math.Between(-30,30), y:'+='+Phaser.Math.Between(-20,20), alpha:{from:0.05,to:0.18}, duration:Phaser.Math.Between(2500,5000), yoyo:true, repeat:-1, delay:Phaser.Math.Between(0,3000)});
        }

        // Vignette overlay
        const vig = this.add.graphics().setScrollFactor(0).setDepth(997);
        vig.fillGradientStyle(0x000000,0x000000,0x000000,0x000000, 0.3,0.3,0,0);
        vig.fillRect(0,0,this.scale.width,60);
        vig.fillGradientStyle(0x000000,0x000000,0x000000,0x000000, 0,0,0.3,0.3);
        vig.fillRect(0,this.scale.height-60,this.scale.width,60);

        // HUD
        this.add.rectangle(0,0,220,32,0x0f0e17,0.85).setScrollFactor(0).setOrigin(0).setDepth(1000);
        this.add.rectangle(0,0,220,32,0,0).setScrollFactor(0).setOrigin(0).setDepth(1000).setStrokeStyle(1,0x333348);
        this.add.text(8,5,'Faiz Ahmad',{fontFamily:'"Press Start 2P"',fontSize:'6px',color:'#f0e040'}).setScrollFactor(0).setDepth(1001);
        this.add.text(8,18,'Guild Master · BINUS',{fontFamily:'"Press Start 2P"',fontSize:'3.5px',color:'#88ccff'}).setScrollFactor(0).setDepth(1001);

        this.hudLocBg = this.add.rectangle(this.scale.width-6,4,130,20,0x0f0e17,0.85).setScrollFactor(0).setOrigin(1,0).setDepth(1000).setStrokeStyle(1,0x333348);
        this.hudLoc = this.add.text(this.scale.width-12,8,'Grand Hall',{fontFamily:'"Press Start 2P"',fontSize:'4.5px',color:'#aaa'}).setScrollFactor(0).setOrigin(1,0).setDepth(1001);

        // Interact hint at bottom
        this.hintText = this.add.text(this.scale.width/2, this.scale.height-14, '', {
            fontFamily:'"Press Start 2P"', fontSize:'4px', color:'#f0e040',
            backgroundColor:'#0f0e17cc', padding:{x:6,y:3}
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
            if (this.dialogOpen) { closeDialogUI(); return; }
            this.jump();
        });

        // Mobile
        this.mobileDir = {up:false,down:false,left:false,right:false};
        document.querySelectorAll('.mc-btn').forEach(b => {
            const d = b.dataset.d;
            b.addEventListener('touchstart', e=>{e.preventDefault();this.mobileDir[d]=true;});
            b.addEventListener('touchend', e=>{e.preventDefault();this.mobileDir[d]=false;});
        });
        const mcJ = document.getElementById('mc-jump');
        const mcE = document.getElementById('mc-interact');
        if(mcJ) mcJ.addEventListener('touchstart', e=>{e.preventDefault();this.jump();});
        if(mcE) mcE.addEventListener('touchstart', e=>{e.preventDefault();this.handleInteract();});

        this.scale.on('resize', sz => {
            this.cameras.main.setZoom(this.getZoom());
            this.hudLocBg.setPosition(sz.width-6,4);
            this.hudLoc.setPosition(sz.width-12,8);
            this.hintText.setPosition(sz.width/2, sz.height-14);
        });
    }

    getZoom() {
        return Math.max(2, Math.min(3.5, Math.min(this.scale.width/380, this.scale.height/280)));
    }

    jump() {
        if (this.isJumping || this.dialogOpen) return;
        this.isJumping = true;
        this.jumpVel = -7;
        this.groundY = this.player.y;
    }

    handleInteract() {
        if (this.dialogOpen) { closeDialogUI(); return; }
        if (this.nearestExhibit) { openDialogUI(this.nearestExhibit.zone); this.dialogOpen = true; }
    }

    update(time, delta) {
        if (this.dialogOpen) { this.player.anims.stop(); return; }

        const speed = 120, dt = delta/1000;
        let vx = 0, vy = 0;

        if (this.cursors.left.isDown||this.wasd.A.isDown||this.mobileDir.left) vx = -speed;
        else if (this.cursors.right.isDown||this.wasd.D.isDown||this.mobileDir.right) vx = speed;
        if (this.cursors.up.isDown||this.wasd.W.isDown||this.mobileDir.up) vy = -speed;
        else if (this.cursors.down.isDown||this.wasd.S.isDown||this.mobileDir.down) vy = speed;

        if (vx && vy) { vx *= 0.707; vy *= 0.707; }

        // Move (ground position)
        let nx = Phaser.Math.Clamp(this.groundY !== undefined ? this.player.x + vx*dt : this.player.x, T, RW-T);
        let ny = Phaser.Math.Clamp(this.groundY + vy*dt, T*3.5, (ROWS-1)*T);

        if (!this.isCol(nx, ny)) { this.player.x = nx; this.groundY = ny; }
        else if (!this.isCol(nx, this.groundY)) { this.player.x = nx; }
        else if (!this.isCol(this.player.x, ny)) { this.groundY = ny; }

        // Jump physics
        if (this.isJumping) {
            this.jumpZ += this.jumpVel;
            this.jumpVel += 0.4;
            if (this.jumpZ >= 0) { this.jumpZ = 0; this.isJumping = false; this.jumpVel = 0; }
        }

        // Visual position (ground + jump offset)
        this.player.setPosition(this.player.x, this.groundY + this.jumpZ);

        // Animations
        if (vx || vy) {
            if (Math.abs(vy) >= Math.abs(vx)) this.player.play(vy < 0 ? 'p_up' : 'p_down', true);
            else this.player.play(vx < 0 ? 'p_left' : 'p_right', true);
        } else this.player.anims.stop();

        // Depth
        this.player.setDepth(this.groundY + 20);
        this.playerLabel.setPosition(this.player.x, this.groundY + this.jumpZ - 24).setDepth(this.groundY + 21);
        this.playerShadow.setPosition(this.player.x, this.groundY + 14).setDepth(this.groundY - 1);
        // Shadow scales with jump height
        const shadowScale = 1 + Math.abs(this.jumpZ) * 0.008;
        this.playerShadow.setScale(shadowScale, 0.4 + Math.abs(this.jumpZ) * 0.003);
        this.playerShadow.setAlpha(0.35 - Math.abs(this.jumpZ) * 0.005);

        // Nearest exhibit
        this.nearestExhibit = null;
        let minD = 50;
        this.interactables.forEach(n => {
            const d = Phaser.Math.Distance.Between(this.player.x, this.groundY, n.x, n.y);
            if (d < minD) { minD = d; this.nearestExhibit = n; }
        });

        if (this.nearestExhibit) {
            this.bubble.setVisible(true).setPosition(this.nearestExhibit.x, this.nearestExhibit.y - 26).setDepth(9999);
            this.hintText.setText('Press E to interact');
        } else {
            this.bubble.setVisible(false);
            this.hintText.setText(this.isJumping ? '~ jumping ~' : '');
        }

        // HUD location
        const px = this.player.x, py = this.groundY;
        let loc = 'Grand Hall';
        if (py < 6*T) loc = 'Gallery Wall';
        else if (px < 6*T) loc = 'West Wing';
        else if (px > 22*T) loc = 'East Wing';
        else if (py > 15*T) loc = 'Entrance Hall';
        this.hudLoc.setText(loc);
    }

    isCol(x, y) {
        for (const c of this.colliders)
            if (x+8>c.x && x-8<c.x+c.w && y+4>c.y && y-10<c.y+c.h) return true;
        return false;
    }
}

// ---- Dialog UI (same as before) -----------------------------------
let currentZone = null, currentPage = 0;

function openDialogUI(zone) {
    currentZone = zone; currentPage = 0;
    document.getElementById('dialog-overlay').classList.add('active');
    document.getElementById('dialog-title').textContent = DIALOGS[zone].title;
    renderPage();
}

function closeDialogUI() {
    document.getElementById('dialog-overlay').classList.remove('active');
    currentZone = null;
    if (window.gs) window.gs.dialogOpen = false;
}

function renderPage() {
    const pages = DIALOGS[currentZone].pages;
    document.getElementById('dialog-body').innerHTML = pages[currentPage];
    document.getElementById('prev-btn').style.display = currentPage > 0 ? 'inline-block' : 'none';
    document.getElementById('next-btn').style.display = currentPage < pages.length-1 ? 'inline-block' : 'none';
    document.getElementById('page-info').textContent = pages.length > 1 ? `${currentPage+1}/${pages.length}` : '';
}

document.getElementById('dialog-close-btn').addEventListener('click', closeDialogUI);
document.getElementById('prev-btn').addEventListener('click', () => { if(currentPage>0){currentPage--;renderPage();} });
document.getElementById('next-btn').addEventListener('click', () => { if(currentZone&&currentPage<DIALOGS[currentZone].pages.length-1){currentPage++;renderPage();} });
document.getElementById('dialog-overlay').addEventListener('click', e => { if(e.target.id==='dialog-overlay')closeDialogUI(); });

document.addEventListener('keydown', e => {
    if (!currentZone) return;
    if (e.key==='Escape') { e.preventDefault(); closeDialogUI(); }
    if (e.key==='ArrowRight') document.getElementById('next-btn').click();
    if (e.key==='ArrowLeft') document.getElementById('prev-btn').click();
});

// ---- Boot ---------------------------------------------------------
document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('start-screen').classList.add('hidden');
    setTimeout(() => document.getElementById('start-screen').style.display='none', 600);

    if (window.innerWidth <= 768) {
        document.getElementById('mobile-controls').style.display = 'block';
        document.querySelector('.mc-extra').style.display = 'flex';
    }

    const game = new Phaser.Game({
        type: Phaser.AUTO,
        parent: 'game-container',
        width: window.innerWidth,
        height: window.innerHeight,
        pixelArt: true,
        backgroundColor: '#0f0e17',
        scale: { mode: Phaser.Scale.RESIZE, autoCenter: Phaser.Scale.CENTER_BOTH },
        scene: [GuildScene],
    });

    game.events.on('ready', () => { window.gs = game.scene.getScene('GuildScene'); });
});
