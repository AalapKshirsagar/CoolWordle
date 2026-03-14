# 🟩 CoolWordle
 
A fully functional Wordle clone built with plain HTML, CSS and JavaScript — no frameworks, no installs, no terminal. Just open and play!
 
---
 
## 🎮 How to Play
 
- Guess the hidden **5-letter word** in **6 tries**
- After each guess the tiles flip and show color hints:
 
| Color | Meaning |
|-------|---------|
| 🟩 **Green** | Correct letter, correct position |
| 🟨 **Yellow** | Correct letter, wrong position |
| ⬛ **Gray** | Letter not in the word |
 
- Finish a game and hit **▶ Next Game** to instantly play again with a new random word!
 
---
 
## ✨ Features
 
- 🎲 Random word every game — 2300+ words from the NYT Wordle list
- ⌨️ Physical keyboard support — just type!
- 🟩 On-screen keyboard with live color feedback
- 💥 Tile flip animations & shake on invalid guess
- 🎉 Win bounce animation
- 📊 Stats & streak tracking (saved in your browser)
- 🗂️ Guess distribution chart
 
---
 
## 🛠️ Tech Stack
 
| | Technology |
|-|-----------|
| Structure | HTML |
| Styling | CSS |
| Logic | Vanilla JavaScript |
 
No Node.js. No npm. No frameworks. Just 3 files.
 
---
 
## 🗂️ Project Structure
 
```
coolwordle/
├── index.html   # Game structure & modals
├── style.css    # All styling & animations
└── script.js    # Game logic + 2300+ word list
```
 
--
 
Stats reset if you clear your browser data.
