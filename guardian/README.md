# 🛡️ GUARDIAN - Earth Defense Force 🛡️

**Version 0.9**

A multilingual space defense game where you protect Earth from falling objects while avoiding friendly spacecraft.

## 🎮 Game Overview

Guardian is a browser-based arcade-style defense game where players control a laser cannon to destroy incoming threats while protecting friendly space planes. The game features multiple languages, strategic gameplay, and escalating difficulty.

## 🌟 Features

### 🌍 Multilingual Support (7 Languages)
- 🇯🇵 **Japanese** (日本語) - Default
- 🇺🇸 **English**
- 🇫🇷 **French** (Français)
- 🇪🇸 **Spanish** (Español)
- 🇩🇪 **German** (Deutsch)
- 🇨🇳 **Chinese** (中文)
- 🇷🇺 **Russian** (Русский)

### 🎯 Game Mechanics
- **Duration**: 180 seconds (3 minutes)
- **Controls**: Arrow keys to move, Spacebar to shoot
- **Objective**: Destroy falling objects while protecting Space Planes
- **Win Conditions**: 
  - Survive 180 seconds
  - OR achieve 100,000 points
- **Lose Conditions**:
  - Destroy a Space Plane (instant game over)
  - Score drops to -10,000

### 🚀 Enemy Types

| Enemy | HP | Points | Description |
|-------|----|---------| ------------|
| 🗑️ **Space Debris** | 1 | +10 | Small, easy targets |
| 🛰️ **Broken Satellite** | 2 | +20 | Medium difficulty |
| ☄️ **Meteorite** | 1 | +20 | Fast-moving rocks |
| 🛸 **UFO** | 2 | +100 | Alien spacecraft |
| ✈️ **Space Plane** | 1 | +10,000* | **DO NOT DESTROY!** |
| 🚀 **UFO Mothership** | 50 | +5,000 | Large boss enemy |
| 🏭 **Space Colony** | 50 | +5,000 | Circular space station |
| 🪨 **Asteroid** | 100 | +10,000 | Massive star-shaped threat |

*Space Planes give +10,000 points when they land safely, but destroying them ends the game immediately.

### 🎨 Visual Features
- **Tricolor Laser Cannon**: Blue, white, and red design
- **Unique Enemy Shapes**: 
  - Circular Space Colonies with gradient effects
  - Star-shaped Asteroids with 3D appearance
  - Rectangular standard enemies
- **Dynamic Effects**: Explosions, shadows, and glowing effects for boss enemies
- **Responsive UI**: Clean, military-style interface

### ⚡ Gameplay Progression
- **0-120 seconds**: Normal enemies only (Space Debris, Satellites, Meteorites, UFOs)
- **Every 30 seconds**: Space Plane appears (must not be destroyed)
- **Last 60 seconds**: Boss enemies appear (30% chance: Mothership, Colony, Asteroid)
- **Simultaneous Enemies**: Up to 3 normal enemies, or 1 if boss is present

## 🛠️ Technical Details

### 📁 File Structure
```
guardian/
├── index.html          # Main game page
├── game.js            # Game logic and multilingual system
└── README.md          # This file
```

### 🔧 Technologies Used
- **HTML5 Canvas** for game rendering
- **Vanilla JavaScript** for game logic
- **CSS3** for styling and animations
- **LocalStorage** for language preference persistence

### 🌐 Internationalization
- Complete UI translation system using `data-i18n` attributes
- Dynamic language switching without page reload
- Persistent language settings
- Culturally appropriate translations for each language

## 🚀 Getting Started

### Prerequisites
- Modern web browser with HTML5 Canvas support
- No additional dependencies required

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd guardian
   ```

2. Open `index.html` in your web browser

3. Select your preferred language from the dropdown menu

4. Start playing!

## 🎮 How to Play

### Controls
- **← →** : Move laser cannon left/right
- **Spacebar** : Fire laser
- **R** : Restart game (when game over)

### Strategy Tips
1. **Prioritize Space Planes**: Never shoot them! Let them land safely for bonus points
2. **Focus on High-Value Targets**: UFOs and boss enemies give more points
3. **Manage Multiple Threats**: Up to 3 enemies can appear simultaneously
4. **Boss Battle Preparation**: Last 60 seconds feature powerful enemies
5. **Score Management**: Aim for 100,000 points for instant victory

### Scoring System
- **Positive Points**: Destroying enemies
- **Negative Points**: Missing enemies (they deduct their reward value)
- **Bonus Points**: Space Plane safe landings (+10,000)
- **Instant Win**: Reaching 100,000 points
- **Game Over**: Score reaching -10,000 or destroying Space Plane

## 🏆 Game Modes

### Victory Conditions
1. **Time Survival**: Complete 180 seconds
2. **Score Achievement**: Reach 100,000 points
3. **Perfect Defense**: Combination of both

### Difficulty Scaling
- **Early Game (0-120s)**: 4 enemy types, moderate pace
- **Mid Game (120-180s)**: Space Planes every 30 seconds
- **End Game (Last 60s)**: Boss enemies with high HP and rewards

## 🌟 Version History

### v0.9 (Current)
- Extended game time to 180 seconds
- Boss enemies appear in last 60 seconds
- Added 100,000 point instant win condition
- Complete 7-language support
- Enhanced visual effects and enemy designs
- Improved game balance and progression

## 🤝 Contributing

This is a single-player arcade game project. Future enhancements could include:
- Additional enemy types
- Power-ups and special weapons
- Leaderboard system
- Sound effects and music
- Mobile touch controls

## 📄 License

This project is open source. Feel free to modify and distribute.

## 🎯 Credits

**Game Design & Development**: Amazon Q Developer Game Project
**Multilingual Support**: 7 languages with cultural localization
**Art Style**: Retro arcade with modern effects

---

**Defend Earth. Protect the Innocent. Become the Guardian.** 🛡️

*Select your language and start your mission to protect Earth from the cosmic threat!*
