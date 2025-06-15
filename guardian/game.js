class GuardianGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // 言語設定
        this.currentLanguage = localStorage.getItem('guardianLanguage') || 'ja';
        this.translations = {
            ja: {
                title: 'ガーディアン',
                subtitle: '地球防衛軍',
                description: '地球連邦軍ガーディアン部隊<br>宇宙防衛ミッション',
                status: 'ステータス',
                score: 'スコア',
                timeLeft: '残り時間',
                mission: 'ミッション',
                earthDefense: '地球防衛',
                controls: '操作方法',
                moveLeft: '← → : レーザー砲移動',
                shoot: 'スペース : レーザー発射',
                restart: 'R : ゲーム再開',
                missionGoals: 'ミッション目標',
                goal1: '• 地球に落下する物体を撃墜',
                goal2: '• ⚠️ スペースプレーンは絶対撃墜禁止！',
                goal3: '• スペースプレーンは着陸させる',
                goal4: '• 180秒間地球を守り抜く',
                enemyInfo: '敵情報',
                spaceDebris: '宇宙ゴミ',
                brokenSatellite: '壊れた衛星',
                fireball: '隕石',
                ufo: 'UFO',
                spacePlane: 'スペースプレーン',
                ufoMothership: 'UFO母艦',
                spaceColony: 'スペースコロニー',
                asteroid: '小惑星',
                shootingProhibited: '撃墜禁止！着陸',
                missionComplete: 'ミッション完了',
                missionFailed: 'ミッション失敗',
                excellent: 'ミッション完了！素晴らしい！',
                complete: 'ミッション完了！',
                failed: 'ミッション失敗！',
                finalScore: '最終スコア',
                restartMission: '🚀 再ミッション開始',
                spacePlaneDestroyed: 'スペースプレーンを撃墜しました！ミッション失敗！',
                scoreReachedLimit: 'スコアが-10000に達しました',
                scoreExcellent: 'スコア100000達成！素晴らしい！'
            },
            en: {
                title: 'GUARDIAN',
                subtitle: 'EARTH DEFENSE FORCE',
                description: 'Earth Federation Guardian Unit<br>Space Defense Mission',
                status: 'Status',
                score: 'Score',
                timeLeft: 'Time Left',
                mission: 'Mission',
                earthDefense: 'Earth Defense',
                controls: 'Controls',
                moveLeft: '← → : Move Laser Cannon',
                shoot: 'Space : Fire Laser',
                restart: 'R : Restart Game',
                missionGoals: 'Mission Goals',
                goal1: '• Destroy falling objects',
                goal2: '• ⚠️ DO NOT destroy Space Planes!',
                goal3: '• Let Space Planes land safely',
                goal4: '• Defend Earth for 180 seconds',
                enemyInfo: 'Enemy Info',
                spaceDebris: 'Space Debris',
                brokenSatellite: 'Broken Satellite',
                fireball: 'Meteorite',
                ufo: 'UFO',
                spacePlane: 'Space Plane',
                ufoMothership: 'UFO Mothership',
                spaceColony: 'Space Colony',
                asteroid: 'Asteroid',
                shootingProhibited: 'Shooting Prohibited! Landing',
                missionComplete: 'MISSION COMPLETE',
                missionFailed: 'MISSION FAILED',
                excellent: 'Mission Complete! Excellent!',
                complete: 'Mission Complete!',
                failed: 'Mission Failed!',
                finalScore: 'Final Score',
                restartMission: '🚀 Restart Mission',
                spacePlaneDestroyed: 'Space Plane destroyed! Mission Failed!',
                scoreReachedLimit: 'Score reached -10000',
                scoreExcellent: 'Score 100000 achieved! Excellent!'
            },
            fr: {
                title: 'GARDIEN',
                subtitle: 'FORCE DE DÉFENSE TERRESTRE',
                description: 'Unité Gardien Fédération Terrestre<br>Mission Défense Spatiale',
                status: 'Statut',
                score: 'Score',
                timeLeft: 'Temps Restant',
                mission: 'Mission',
                earthDefense: 'Défense Terrestre',
                controls: 'Contrôles',
                moveLeft: '← → : Déplacer Canon Laser',
                shoot: 'Espace : Tirer Laser',
                restart: 'R : Redémarrer Jeu',
                missionGoals: 'Objectifs Mission',
                goal1: '• Détruire objets tombants',
                goal2: '• ⚠️ NE PAS détruire Avions Spatiaux!',
                goal3: '• Laisser atterrir Avions Spatiaux',
                goal4: '• Défendre Terre 180 secondes',
                enemyInfo: 'Info Ennemis',
                spaceDebris: 'Débris Spatiaux',
                brokenSatellite: 'Satellite Cassé',
                fireball: 'Météorite',
                ufo: 'OVNI',
                spacePlane: 'Avion Spatial',
                ufoMothership: 'Vaisseau-Mère OVNI',
                spaceColony: 'Colonie Spatiale',
                asteroid: 'Astéroïde',
                shootingProhibited: 'Tir Interdit! Atterrissage',
                missionComplete: 'MISSION ACCOMPLIE',
                missionFailed: 'MISSION ÉCHOUÉE',
                excellent: 'Mission Accomplie! Excellent!',
                complete: 'Mission Accomplie!',
                failed: 'Mission Échouée!',
                finalScore: 'Score Final',
                restartMission: '🚀 Redémarrer Mission',
                spacePlaneDestroyed: 'Avion Spatial détruit! Mission Échouée!',
                scoreReachedLimit: 'Score atteint -10000',
                scoreExcellent: 'Score 100000 atteint! Excellent!'
            },
            es: {
                title: 'GUARDIÁN',
                subtitle: 'FUERZA DE DEFENSA TERRESTRE',
                description: 'Unidad Guardián Federación Terrestre<br>Misión Defensa Espacial',
                status: 'Estado',
                score: 'Puntuación',
                timeLeft: 'Tiempo Restante',
                mission: 'Misión',
                earthDefense: 'Defensa Terrestre',
                controls: 'Controles',
                moveLeft: '← → : Mover Cañón Láser',
                shoot: 'Espacio : Disparar Láser',
                restart: 'R : Reiniciar Juego',
                missionGoals: 'Objetivos Misión',
                goal1: '• Destruir objetos cayendo',
                goal2: '• ⚠️ ¡NO destruir Aviones Espaciales!',
                goal3: '• Dejar aterrizar Aviones Espaciales',
                goal4: '• Defender Tierra 180 segundos',
                enemyInfo: 'Info Enemigos',
                spaceDebris: 'Basura Espacial',
                brokenSatellite: 'Satélite Roto',
                fireball: 'Meteorito',
                ufo: 'OVNI',
                spacePlane: 'Avión Espacial',
                ufoMothership: 'Nave Madre OVNI',
                spaceColony: 'Colonia Espacial',
                asteroid: 'Asteroide',
                shootingProhibited: '¡Disparo Prohibido! Aterrizaje',
                missionComplete: 'MISIÓN COMPLETADA',
                missionFailed: 'MISIÓN FALLIDA',
                excellent: '¡Misión Completada! ¡Excelente!',
                complete: '¡Misión Completada!',
                failed: '¡Misión Fallida!',
                finalScore: 'Puntuación Final',
                restartMission: '🚀 Reiniciar Misión',
                spacePlaneDestroyed: '¡Avión Espacial destruido! ¡Misión Fallida!',
                scoreReachedLimit: 'Puntuación alcanzó -10000',
                scoreExcellent: '¡Puntuación 100000 alcanzada! ¡Excelente!'
            },
            de: {
                title: 'WÄCHTER',
                subtitle: 'ERDVERTEIDIGUNGSKRAFT',
                description: 'Erdföderations-Wächter-Einheit<br>Weltraumverteidigungsmission',
                status: 'Status',
                score: 'Punkte',
                timeLeft: 'Verbleibende Zeit',
                mission: 'Mission',
                earthDefense: 'Erdverteidigung',
                controls: 'Steuerung',
                moveLeft: '← → : Laserkanone bewegen',
                shoot: 'Leertaste : Laser feuern',
                restart: 'R : Spiel neustarten',
                missionGoals: 'Missionsziele',
                goal1: '• Fallende Objekte zerstören',
                goal2: '• ⚠️ Raumflugzeuge NICHT zerstören!',
                goal3: '• Raumflugzeuge landen lassen',
                goal4: '• Erde 180 Sekunden verteidigen',
                enemyInfo: 'Feind-Info',
                spaceDebris: 'Weltraummüll',
                brokenSatellite: 'Defekter Satellit',
                fireball: 'Meteorit',
                ufo: 'UFO',
                spacePlane: 'Raumflugzeug',
                ufoMothership: 'UFO-Mutterschiff',
                spaceColony: 'Weltraumkolonie',
                asteroid: 'Asteroid',
                shootingProhibited: 'Schießen verboten! Landung',
                missionComplete: 'MISSION ERFOLGREICH',
                missionFailed: 'MISSION GESCHEITERT',
                excellent: 'Mission erfolgreich! Ausgezeichnet!',
                complete: 'Mission erfolgreich!',
                failed: 'Mission gescheitert!',
                finalScore: 'Endpunktzahl',
                restartMission: '🚀 Mission neustarten',
                spacePlaneDestroyed: 'Raumflugzeug zerstört! Mission gescheitert!',
                scoreReachedLimit: 'Punkte erreichten -10000',
                scoreExcellent: 'Punkte 100000 erreicht! Ausgezeichnet!'
            },
            zh: {
                title: '守护者',
                subtitle: '地球防卫军',
                description: '地球联邦守护者部队<br>太空防卫任务',
                status: '状态',
                score: '得分',
                timeLeft: '剩余时间',
                mission: '任务',
                earthDefense: '地球防卫',
                controls: '操作',
                moveLeft: '← → : 移动激光炮',
                shoot: '空格 : 发射激光',
                restart: 'R : 重新开始',
                missionGoals: '任务目标',
                goal1: '• 摧毁坠落物体',
                goal2: '• ⚠️ 绝对不要摧毁太空飞机！',
                goal3: '• 让太空飞机安全着陆',
                goal4: '• 防守地球180秒',
                enemyInfo: '敌人信息',
                spaceDebris: '太空垃圾',
                brokenSatellite: '损坏卫星',
                fireball: '陨石',
                ufo: 'UFO',
                spacePlane: '太空飞机',
                ufoMothership: 'UFO母舰',
                spaceColony: '太空殖民地',
                asteroid: '小行星',
                shootingProhibited: '禁止射击！着陆',
                missionComplete: '任务完成',
                missionFailed: '任务失败',
                excellent: '任务完成！出色！',
                complete: '任务完成！',
                failed: '任务失败！',
                finalScore: '最终得分',
                restartMission: '🚀 重新开始任务',
                spacePlaneDestroyed: '太空飞机被摧毁！任务失败！',
                scoreReachedLimit: '得分达到-10000',
                scoreExcellent: '得分100000达成！出色！'
            },
            ru: {
                title: 'СТРАЖ',
                subtitle: 'СИЛЫ ОБОРОНЫ ЗЕМЛИ',
                description: 'Отряд Стражей Земной Федерации<br>Миссия Космической Обороны',
                status: 'Статус',
                score: 'Очки',
                timeLeft: 'Осталось времени',
                mission: 'Миссия',
                earthDefense: 'Оборона Земли',
                controls: 'Управление',
                moveLeft: '← → : Двигать лазерную пушку',
                shoot: 'Пробел : Стрелять лазером',
                restart: 'R : Перезапустить игру',
                missionGoals: 'Цели миссии',
                goal1: '• Уничтожить падающие объекты',
                goal2: '• ⚠️ НЕ уничтожать космические самолеты!',
                goal3: '• Дать космическим самолетам приземлиться',
                goal4: '• Защищать Землю 180 секунд',
                enemyInfo: 'Информация о врагах',
                spaceDebris: 'Космический мусор',
                brokenSatellite: 'Сломанный спутник',
                fireball: 'Метеорит',
                ufo: 'НЛО',
                spacePlane: 'Космический самолет',
                ufoMothership: 'Материнский корабль НЛО',
                spaceColony: 'Космическая колония',
                asteroid: 'Астероид',
                shootingProhibited: 'Стрельба запрещена! Посадка',
                missionComplete: 'МИССИЯ ВЫПОЛНЕНА',
                missionFailed: 'МИССИЯ ПРОВАЛЕНА',
                excellent: 'Миссия выполнена! Отлично!',
                complete: 'Миссия выполнена!',
                failed: 'Миссия провалена!',
                finalScore: 'Финальный счет',
                restartMission: '🚀 Перезапустить миссию',
                spacePlaneDestroyed: 'Космический самолет уничтожен! Миссия провалена!',
                scoreReachedLimit: 'Счет достиг -10000',
                scoreExcellent: 'Счет 100000 достигнут! Отлично!'
            }
        };
        
        this.init();
    }
    
    t(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
    
    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('guardianLanguage', lang);
        // UI更新を確実に実行
        setTimeout(() => {
            this.updateUI();
        }, 50);
    }
    
    updateUI() {
        // data-i18n属性を持つ要素を更新
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            // 要素の種類と内容に応じて適切に更新
            switch(key) {
                case 'title':
                    element.innerHTML = `🛡️ ${translation} 🛡️`;
                    break;
                case 'subtitle':
                    element.textContent = `- ${translation} -`;
                    break;
                case 'description':
                    element.innerHTML = translation;
                    break;
                case 'status':
                    element.innerHTML = `📊 ${translation}`;
                    break;
                case 'controls':
                    element.innerHTML = `🎮 ${translation}`;
                    break;
                case 'missionGoals':
                    element.innerHTML = `🎯 ${translation}`;
                    break;
                case 'enemyInfo':
                    element.innerHTML = `📊 ${translation}`;
                    break;
                case 'score':
                case 'timeLeft':
                case 'mission':
                    element.textContent = `${translation}:`;
                    break;
                case 'spacePlane':
                    element.innerHTML = `⚠️ ${translation}`;
                    break;
                case 'shootingProhibited':
                    element.textContent = `${translation}:+10000`;
                    break;
                case 'restartMission':
                    element.textContent = translation;
                    break;
                case 'finalScore':
                    element.textContent = translation;
                    break;
                default:
                    element.textContent = translation;
                    break;
            }
        });
        
        // 強制的にページを再描画
        document.body.style.display = 'none';
        document.body.offsetHeight; // トリガー
        document.body.style.display = '';
    }
    
    init() {
        this.canvas.width = 800;
        this.canvas.height = window.innerHeight;
        
        // ゲーム状態
        this.gameRunning = false;
        this.gameTime = 180; // 180秒に変更
        this.score = 0;
        this.gameStartTime = 0;
        
        // プレイヤー（レーザー砲）
        this.player = {
            x: this.canvas.width / 2,
            y: this.canvas.height - 100,
            width: 60,
            height: 40,
            speed: 4
        };
        
        // レーザー
        this.lasers = [];
        this.laserSpeed = 12;
        this.laserCooldown = 0;
        
        // 敵オブジェクト
        this.enemies = [];
        this.enemySpawnTimer = 0;
        this.spacePlaneTimer = 0; // スペースプレーン専用タイマー
        
        // 敵の種類定義
        this.enemyTypes = {
            spaceDebris: { name: '宇宙ゴミ', hp: 1, reward: 10, color: '#444444', size: 20, emoji: '🗑️' },
            satellite: { name: '壊れた衛星', hp: 2, reward: 20, color: '#888888', size: 25, emoji: '🛰️' },
            fireball: { name: '火球', hp: 1, reward: 20, color: '#ff4500', size: 20, emoji: '☄️' },
            ufo: { name: 'UFO', hp: 2, reward: 100, color: '#00ff00', size: 30, emoji: '🛸' },
            spacePlane: { name: 'スペースプレーン', hp: 1, reward: 0, color: '#0066cc', size: 35, emoji: '✈️' },
            ufoMothership: { name: 'UFO母艦', hp: 50, reward: 5000, color: '#ff00ff', size: 200, emoji: '🚀' },
            spaceColony: { name: 'スペースコロニー', hp: 50, reward: 5000, color: '#ffffff', size: 240, emoji: '🏭', shape: 'circle' },
            asteroid: { name: '小惑星', hp: 100, reward: 10000, color: '#666666', size: 320, emoji: '🪨', shape: 'star' }
        };
        
        // パーティクル効果
        this.particles = [];
        
        // 入力状態
        this.keys = {};
        
        this.initializeEventListeners();
        this.startGame();
    }
    
    initializeEventListeners() {
        // キーボードイベント
        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            if (e.code === 'Space') {
                e.preventDefault();
                this.fireLaser();
            }
            
            if (e.code === 'KeyR' && !this.gameRunning) {
                this.restartGame();
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
        
        // ウィンドウリサイズ対応
        window.addEventListener('resize', () => {
            this.canvas.width = 800;
            this.canvas.height = window.innerHeight;
            this.player.x = Math.min(this.player.x, this.canvas.width - this.player.width);
            this.player.y = this.canvas.height - 100;
        });
    }
    
    startGame() {
        this.gameRunning = true;
        this.gameStartTime = Date.now();
        this.score = 0;
        this.gameTime = 120;
        this.enemies = [];
        this.lasers = [];
        this.particles = [];
        this.spacePlaneTimer = 0; // スペースプレーンタイマーもリセット
        this.player.x = this.canvas.width / 2;
        this.player.y = this.canvas.height - 100;
        
        document.getElementById('gameOver').style.display = 'none';
        
        this.gameLoop();
    }
    
    gameLoop() {
        if (!this.gameRunning) return;
        
        this.update();
        this.render();
        
        requestAnimationFrame(() => this.gameLoop());
    }
    
    update() {
        // 時間更新
        const currentTime = Date.now();
        const elapsedTime = (currentTime - this.gameStartTime) / 1000;
        this.gameTime = Math.max(0, 120 - elapsedTime);
        
        // ゲーム終了判定
        if (this.gameTime <= 0) {
            // スコアに応じて結果を判定
            if (this.score >= 50000) {
                this.endGame('ミッション完了！素晴らしい！', 'excellent');
            } else if (this.score >= 10000) {
                this.endGame('ミッション完了！', 'complete');
            } else {
                this.endGame('ミッション失敗！', 'failed');
            }
            return;
        }
        
        // スコアが100000を超えたらクリア
        if (this.score >= 100000) {
            this.endGame('スコア100000達成！素晴らしい！', 'excellent');
            return;
        }
        
        if (this.score <= -10000) {
            this.endGame('スコアが-10000に達しました', 'failed');
            return;
        }
        
        // プレイヤー移動
        this.updatePlayer();
        
        // レーザー更新
        this.updateLasers();
        
        // 敵生成・更新
        this.updateEnemies();
        
        // 衝突判定
        this.checkCollisions();
        
        // パーティクル更新
        this.updateParticles();
        
        // UI更新
        this.updateUI();
        
        // クールダウン更新
        if (this.laserCooldown > 0) this.laserCooldown--;
    }
    
    updatePlayer() {
        // 左右移動
        if (this.keys['ArrowLeft'] || this.keys['KeyA']) {
            this.player.x = Math.max(0, this.player.x - this.player.speed);
        }
        if (this.keys['ArrowRight'] || this.keys['KeyD']) {
            this.player.x = Math.min(this.canvas.width - this.player.width, this.player.x + this.player.speed);
        }
    }
    
    fireLaser() {
        if (this.laserCooldown <= 0 && this.gameRunning) {
            this.lasers.push({
                x: this.player.x + this.player.width / 2 - 2,
                y: this.player.y,
                width: 4,
                height: 20
            });
            this.laserCooldown = 8; // クールダウン
        }
    }
    
    updateLasers() {
        this.lasers = this.lasers.filter(laser => {
            laser.y -= this.laserSpeed;
            return laser.y > -laser.height;
        });
    }
    
    updateEnemies() {
        // スペースプレーンタイマー更新
        this.spacePlaneTimer++;
        
        // 敵生成 - 同時に3つまで（ただし大型敵がいる場合は1つまで）
        this.enemySpawnTimer++;
        const hasBossEnemy = this.enemies.some(enemy => 
            enemy.type === 'ufoMothership' || enemy.type === 'spaceColony' || enemy.type === 'asteroid'
        );
        const maxEnemies = hasBossEnemy ? 1 : 3;
        
        if (this.enemySpawnTimer >= 30 && this.enemies.length < maxEnemies) {
            this.spawnEnemy();
            this.enemySpawnTimer = 0;
        }
        
        // 敵移動・削除
        this.enemies = this.enemies.filter(enemy => {
            enemy.y += enemy.speed;
            
            // 地面に到達した場合
            if (enemy.y > this.canvas.height) {
                if (enemy.type === 'spacePlane') {
                    // スペースプレーンが地上に到達した場合は+10000ポイント
                    this.score += 10000;
                } else {
                    // その他の敵は報酬分マイナス
                    this.score -= Math.abs(enemy.reward);
                    this.createExplosion(enemy.x, enemy.y, '#ff0000');
                }
                return false;
            }
            
            return true;
        });
    }
    
    spawnEnemy() {
        const remainingTime = this.gameTime;
        let enemyType;
        
        // スペースプレーンは30秒おきに1機のみ出現（1800フレーム = 30秒）
        const shouldSpawnSpacePlane = this.spacePlaneTimer >= 1800 && 
                                     !this.enemies.some(enemy => enemy.type === 'spacePlane');
        
        if (shouldSpawnSpacePlane) {
            enemyType = 'spacePlane';
            this.spacePlaneTimer = 0; // タイマーリセット
        } else {
            // 最後の60秒で強敵出現
            if (remainingTime <= 60) {
                const bossTypes = ['ufoMothership', 'spaceColony', 'asteroid'];
                const normalTypes = ['spaceDebris', 'satellite', 'fireball', 'ufo'];
                
                // 30%の確率で強敵、70%で通常敵
                if (Math.random() < 0.3) {
                    enemyType = bossTypes[Math.floor(Math.random() * bossTypes.length)];
                } else {
                    enemyType = normalTypes[Math.floor(Math.random() * normalTypes.length)];
                }
            } else {
                // 通常時間帯（スペースプレーンを除く）
                const normalTypes = ['spaceDebris', 'satellite', 'fireball', 'ufo'];
                enemyType = normalTypes[Math.floor(Math.random() * normalTypes.length)];
            }
        }
        
        const type = this.enemyTypes[enemyType];
        
        // 強敵の場合は速度を1/4に、スペースプレーンは1/2に
        let speed;
        if (enemyType === 'ufoMothership' || enemyType === 'spaceColony' || enemyType === 'asteroid') {
            speed = (Math.random() * 2 + 1) * 0.25; // 通常の1/4の速度
        } else if (enemyType === 'spacePlane') {
            speed = (Math.random() * 2 + 1) * 0.5; // 通常の1/2の速度
        } else {
            speed = Math.random() * 2 + 1; // 通常速度
        }
        
        const enemy = {
            x: Math.random() * (this.canvas.width - type.size),
            y: -type.size,
            width: type.size,
            height: type.size,
            speed: speed,
            hp: type.hp,
            maxHp: type.hp,
            reward: type.reward,
            type: enemyType,
            color: type.color,
            emoji: type.emoji,
            name: type.name
        };
        
        this.enemies.push(enemy);
    }
    
    checkCollisions() {
        // レーザーと敵の衝突
        for (let i = this.lasers.length - 1; i >= 0; i--) {
            const laser = this.lasers[i];
            
            for (let j = this.enemies.length - 1; j >= 0; j--) {
                const enemy = this.enemies[j];
                
                if (this.isColliding(laser, enemy)) {
                    // レーザー削除
                    this.lasers.splice(i, 1);
                    
                    // 敵にダメージ
                    enemy.hp--;
                    
                    // スペースプレーンを撃った場合の処理
                    if (enemy.type === 'spacePlane') {
                        // スペースプレーン破壊でゲームオーバー
                        this.endGame('スペースプレーンを撃墜しました！ミッション失敗！', 'failed');
                        return;
                    }
                    
                    // 敵破壊判定
                    if (enemy.hp <= 0) {
                        this.score += enemy.reward;
                        this.createExplosion(enemy.x + enemy.width/2, enemy.y + enemy.height/2, enemy.color);
                        this.enemies.splice(j, 1);
                    } else {
                        // ダメージエフェクト
                        this.createHitEffect(enemy.x + enemy.width/2, enemy.y + enemy.height/2);
                    }
                    
                    break;
                }
            }
        }
    }
    
    isColliding(rect1, rect2) {
        // スペースコロニーの場合は円形当たり判定
        if (rect2.type === 'spaceColony') {
            const centerX = rect2.x + rect2.width / 2;
            const centerY = rect2.y + rect2.height / 2;
            const radius = rect2.width / 2;
            
            // レーザーの中心点
            const laserCenterX = rect1.x + rect1.width / 2;
            const laserCenterY = rect1.y + rect1.height / 2;
            
            // 円と点の距離判定
            const distance = Math.sqrt(
                Math.pow(laserCenterX - centerX, 2) + 
                Math.pow(laserCenterY - centerY, 2)
            );
            
            return distance <= radius;
        }
        
        // 小惑星の場合は星型当たり判定（円形で近似）
        if (rect2.type === 'asteroid') {
            const centerX = rect2.x + rect2.width / 2;
            const centerY = rect2.y + rect2.height / 2;
            const radius = rect2.width / 2.5; // 星型なので少し小さめの半径
            
            // レーザーの中心点
            const laserCenterX = rect1.x + rect1.width / 2;
            const laserCenterY = rect1.y + rect1.height / 2;
            
            // 円と点の距離判定
            const distance = Math.sqrt(
                Math.pow(laserCenterX - centerX, 2) + 
                Math.pow(laserCenterY - centerY, 2)
            );
            
            return distance <= radius;
        }
        
        // 通常の矩形当たり判定
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }
    
    createExplosion(x, y, color) {
        for (let i = 0; i < 15; i++) {
            this.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                life: 30,
                maxLife: 30,
                color: color,
                size: Math.random() * 5 + 2
            });
        }
    }
    
    createHitEffect(x, y) {
        for (let i = 0; i < 5; i++) {
            this.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                life: 15,
                maxLife: 15,
                color: '#ffff00',
                size: Math.random() * 3 + 1
            });
        }
    }
    
    updateParticles() {
        this.particles = this.particles.filter(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life--;
            particle.vx *= 0.98;
            particle.vy *= 0.98;
            return particle.life > 0;
        });
    }
    
    render() {
        // 背景クリア
        this.ctx.fillStyle = 'rgba(0, 4, 40, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 星空背景
        this.renderStars();
        
        // プレイヤー描画
        this.renderPlayer();
        
        // レーザー描画
        this.renderLasers();
        
        // 敵描画
        this.renderEnemies();
        
        // パーティクル描画
        this.renderParticles();
        
        // 地球描画
        this.renderEarth();
    }
    
    renderStars() {
        this.ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 100; i++) {
            const x = (i * 37) % this.canvas.width;
            const y = (i * 73) % this.canvas.height;
            const size = Math.sin(Date.now() * 0.001 + i) * 0.5 + 1;
            this.ctx.fillRect(x, y, size, size);
        }
    }
    
    renderPlayer() {
        // レーザー砲本体（トリコロール）
        const playerWidth = this.player.width / 3;
        
        // 青色部分
        this.ctx.fillStyle = '#0055cc';
        this.ctx.fillRect(this.player.x, this.player.y, playerWidth, this.player.height);
        
        // 白色部分
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(this.player.x + playerWidth, this.player.y, playerWidth, this.player.height);
        
        // 赤色部分
        this.ctx.fillStyle = '#cc0000';
        this.ctx.fillRect(this.player.x + playerWidth * 2, this.player.y, playerWidth, this.player.height);
        
        // 砲身（グレー）
        this.ctx.fillStyle = '#666666';
        this.ctx.fillRect(this.player.x + this.player.width/2 - 5, this.player.y - 20, 10, 20);
        
        // エフェクト（トリコロール枠）
        this.ctx.strokeStyle = '#0055cc';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.player.x - 2, this.player.y - 2, playerWidth + 4, this.player.height + 4);
        
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.strokeRect(this.player.x + playerWidth - 2, this.player.y - 2, playerWidth + 4, this.player.height + 4);
        
        this.ctx.strokeStyle = '#cc0000';
        this.ctx.strokeRect(this.player.x + playerWidth * 2 - 2, this.player.y - 2, playerWidth + 4, this.player.height + 4);
    }
    
    renderLasers() {
        this.ctx.fillStyle = '#00ffff';
        this.ctx.shadowColor = '#00ffff';
        this.ctx.shadowBlur = 10;
        
        this.lasers.forEach(laser => {
            this.ctx.fillRect(laser.x, laser.y, laser.width, laser.height);
        });
        
        this.ctx.shadowBlur = 0;
    }
    
    drawStar(ctx, x, y, radius, spikes, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let step = Math.PI / spikes;
        
        ctx.beginPath();
        ctx.moveTo(x, y - radius);
        
        for (let i = 0; i < spikes; i++) {
            // 外側の点
            let outerX = x + Math.cos(rot) * radius;
            let outerY = y + Math.sin(rot) * radius;
            ctx.lineTo(outerX, outerY);
            rot += step;
            
            // 内側の点
            let innerX = x + Math.cos(rot) * innerRadius;
            let innerY = y + Math.sin(rot) * innerRadius;
            ctx.lineTo(innerX, innerY);
            rot += step;
        }
        
        ctx.lineTo(x, y - radius);
        ctx.closePath();
    }
    
    renderEnemies() {
        this.enemies.forEach(enemy => {
            // 大型敵の場合は特別なエフェクト
            const isBossEnemy = enemy.type === 'ufoMothership' || enemy.type === 'spaceColony' || enemy.type === 'asteroid';
            
            if (isBossEnemy) {
                // 大型敵の影エフェクト
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                if (enemy.type === 'spaceColony') {
                    // 円形の影
                    this.ctx.beginPath();
                    this.ctx.arc(enemy.x + enemy.width/2 + 10, enemy.y + enemy.height/2 + 10, enemy.width/2, 0, Math.PI * 2);
                    this.ctx.fill();
                } else if (enemy.type === 'asteroid') {
                    // 星型の影
                    this.drawStar(this.ctx, enemy.x + enemy.width/2 + 10, enemy.y + enemy.height/2 + 10, enemy.width/2, 8, enemy.width/4);
                    this.ctx.fill();
                } else {
                    this.ctx.fillRect(enemy.x + 10, enemy.y + 10, enemy.width, enemy.height);
                }
                
                // 大型敵の光るエフェクト
                this.ctx.shadowColor = enemy.color;
                this.ctx.shadowBlur = 20;
            }
            
            // 敵本体
            this.ctx.fillStyle = enemy.color;
            if (enemy.type === 'spaceColony') {
                // スペースコロニーは円形で描画
                this.ctx.beginPath();
                this.ctx.arc(enemy.x + enemy.width/2, enemy.y + enemy.height/2, enemy.width/2, 0, Math.PI * 2);
                this.ctx.fill();
                
                // シリンダーっぽい効果（グラデーション）
                const gradient = this.ctx.createRadialGradient(
                    enemy.x + enemy.width/2, enemy.y + enemy.height/2, 0,
                    enemy.x + enemy.width/2, enemy.y + enemy.height/2, enemy.width/2
                );
                gradient.addColorStop(0, '#ffffff');
                gradient.addColorStop(0.3, '#f0f0f0');
                gradient.addColorStop(0.7, '#e0e0e0');
                gradient.addColorStop(1, '#cccccc');
                
                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(enemy.x + enemy.width/2, enemy.y + enemy.height/2, enemy.width/2, 0, Math.PI * 2);
                this.ctx.fill();
                
                // 円形の枠線
                this.ctx.strokeStyle = '#dddddd';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.arc(enemy.x + enemy.width/2, enemy.y + enemy.height/2, enemy.width/2, 0, Math.PI * 2);
                this.ctx.stroke();
            } else if (enemy.type === 'asteroid') {
                // 小惑星は星型で描画
                const centerX = enemy.x + enemy.width/2;
                const centerY = enemy.y + enemy.height/2;
                const outerRadius = enemy.width/2;
                const innerRadius = enemy.width/4;
                
                // 立体感のあるグラデーション
                const gradient = this.ctx.createRadialGradient(
                    centerX - outerRadius/3, centerY - outerRadius/3, 0,
                    centerX, centerY, outerRadius
                );
                gradient.addColorStop(0, '#aaaaaa');
                gradient.addColorStop(0.4, enemy.color);
                gradient.addColorStop(1, '#333333');
                
                this.ctx.fillStyle = gradient;
                this.drawStar(this.ctx, centerX, centerY, outerRadius, 8, innerRadius);
                this.ctx.fill();
                
                // 星型の枠線
                this.ctx.strokeStyle = '#999999';
                this.ctx.lineWidth = 2;
                this.drawStar(this.ctx, centerX, centerY, outerRadius, 8, innerRadius);
                this.ctx.stroke();
                
                // 追加の立体効果（ハイライト）
                this.ctx.fillStyle = '#cccccc';
                this.drawStar(this.ctx, centerX - outerRadius/4, centerY - outerRadius/4, outerRadius/3, 8, innerRadius/3);
                this.ctx.fill();
            } else {
                // 他の敵は四角形
                this.ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
            }
            
            // 影とエフェクトをリセット
            this.ctx.shadowBlur = 0;
            
            // 絵文字
            this.ctx.font = `${enemy.width * 0.4}px Arial`;
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillText(enemy.emoji, enemy.x + enemy.width/2, enemy.y + enemy.height * 0.6);
            
            // HPバー（HP > 1の場合）
            if (enemy.maxHp > 1) {
                const barWidth = enemy.width;
                const barHeight = isBossEnemy ? 8 : 4;
                const hpRatio = enemy.hp / enemy.maxHp;
                
                // 背景
                this.ctx.fillStyle = '#333333';
                this.ctx.fillRect(enemy.x, enemy.y - (isBossEnemy ? 15 : 8), barWidth, barHeight);
                
                // HP
                this.ctx.fillStyle = hpRatio > 0.5 ? '#00ff00' : hpRatio > 0.25 ? '#ffff00' : '#ff0000';
                this.ctx.fillRect(enemy.x, enemy.y - (isBossEnemy ? 15 : 8), barWidth * hpRatio, barHeight);
                
                // HP数値表示（大型敵のみ）
                if (isBossEnemy) {
                    this.ctx.font = '16px Arial';
                    this.ctx.fillStyle = '#ffffff';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(`${enemy.hp}/${enemy.maxHp}`, enemy.x + enemy.width/2, enemy.y - 20);
                }
            }
            
            // 名前表示
            this.ctx.font = isBossEnemy ? '16px Arial' : '12px Arial';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.textAlign = 'center';
            const enemyName = this.t(enemy.type) || enemy.type;
            this.ctx.fillText(enemyName, enemy.x + enemy.width/2, enemy.y - (isBossEnemy ? 35 : 12));
        });
    }
    
    renderParticles() {
        this.particles.forEach(particle => {
            const alpha = particle.life / particle.maxLife;
            this.ctx.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
            this.ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
        });
    }
    
    renderEarth() {
        const earthY = this.canvas.height - 50;
        const gradient = this.ctx.createLinearGradient(0, earthY, 0, this.canvas.height);
        gradient.addColorStop(0, '#4CAF50');
        gradient.addColorStop(1, '#2E7D32');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, earthY, this.canvas.width, 50);
        
        // 地球の表面エフェクト
        this.ctx.fillStyle = '#66BB6A';
        for (let i = 0; i < this.canvas.width; i += 20) {
            this.ctx.fillRect(i, earthY, 10, 5);
        }
    }
    
    updateUI() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('score').className = this.score < 0 ? 'negative-score' : 'score';
        document.getElementById('time').textContent = Math.ceil(this.gameTime);
    }
    
    endGame(reason, result = 'failed') {
        this.gameRunning = false;
        
        const gameOverElement = document.getElementById('gameOver');
        const titleElement = document.getElementById('gameOverTitle');
        const reasonElement = document.getElementById('gameOverReason');
        const finalScoreElement = document.getElementById('finalScore');
        
        // 結果に応じて表示を変更
        if (result === 'excellent') {
            titleElement.innerHTML = `🎉 ${this.t('missionComplete')} 🎉`;
            titleElement.style.color = '#00ff00';
            titleElement.style.textShadow = '0 0 20px #00ff00';
            gameOverElement.style.borderColor = '#00ff00';
            reasonElement.textContent = this.t('excellent');
        } else if (result === 'complete') {
            titleElement.innerHTML = `🎊 ${this.t('missionComplete')} 🎊`;
            titleElement.style.color = '#00ff00';
            titleElement.style.textShadow = '0 0 20px #00ff00';
            gameOverElement.style.borderColor = '#00ff00';
            reasonElement.textContent = this.t('complete');
        } else {
            titleElement.innerHTML = `🚨 ${this.t('missionFailed')} 🚨`;
            titleElement.style.color = '#ff0000';
            titleElement.style.textShadow = '0 0 20px #ff0000';
            gameOverElement.style.borderColor = '#ff0000';
            if (reason === 'スペースプレーンを撃墜しました！ミッション失敗！') {
                reasonElement.textContent = this.t('spacePlaneDestroyed');
            } else if (reason === 'スコアが-10000に達しました') {
                reasonElement.textContent = this.t('scoreReachedLimit');
            } else if (reason === 'スコア100000達成！素晴らしい！') {
                reasonElement.textContent = this.t('scoreExcellent');
            } else {
                reasonElement.textContent = this.t('failed');
            }
        }
        
        finalScoreElement.textContent = this.score;
        gameOverElement.style.display = 'block';
        
        // 最終スコアラベルも更新
        const finalScoreLabel = document.querySelector('[data-i18n="finalScore"]');
        if (finalScoreLabel) {
            finalScoreLabel.textContent = this.t('finalScore');
        }
        
        // ボタンテキストも更新
        const restartBtn = document.querySelector('.restart-btn');
        if (restartBtn) {
            restartBtn.textContent = this.t('restartMission');
        }
    }
    
    restartGame() {
        this.startGame();
    }
}

// ゲーム開始
let game;

window.addEventListener('load', () => {
    // 保存された言語設定を復元
    const savedLang = localStorage.getItem('guardianLanguage') || 'ja';
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = savedLang;
    }
    
    // ゲーム初期化
    game = new GuardianGame();
    game.currentLanguage = savedLang;
    
    // DOM要素が完全に読み込まれてからUI更新
    setTimeout(() => {
        game.updateUI();
    }, 200);
});

// グローバル関数
function restartGame() {
    game.restartGame();
}

function changeLanguage(lang) {
    if (game) {
        game.changeLanguage(lang);
    } else {
        // ゲームがまだ初期化されていない場合は設定だけ保存
        localStorage.setItem('guardianLanguage', lang);
    }
}
