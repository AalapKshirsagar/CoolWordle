🟩 ## CoolWordle
A fully functional Wordle clone built with plain HTML, CSS and JavaScript — no frameworks, no installs, no terminal. Just open and play!

🎮 ## How to Play

Guess the hidden 5-letter word in 6 tries
After each guess the tiles flip and show color hints:

ColorMeaning🟩 GreenCorrect letter, correct position🟨 YellowCorrect letter, wrong position⬛ GrayLetter not in the word

Finish a game and hit ▶ Next Game to instantly play again with a new random word!


✨## Features

🎲 Random word every game — 2300+ words from the NYT Wordle list
🔄 Next Game button — no page refresh needed
⌨️ Physical keyboard support — just type!
🟩 On-screen keyboard with live color feedback
💥 Tile flip animations & shake on invalid guess
🎉 Win bounce animation
📊 Stats & streak tracking (saved in your browser)
🗂️ Guess distribution chart


🛠️ ## Tech Stack
TechnologyStructureHTMLStylingCSSLogicVanilla JavaScript
No Node.js. No npm. No frameworks. Just 3 files.

   Project Structure
coolwordle/
├── index.html   # Game structure & modals
├── style.css    # All styling & animations
└── script.js    # Game logic + 2300+ word list


📊 ## Stats Tracking
Your stats are saved automatically in your browser's localStorage:

Games played
Win percentage
Current streak
Max streak
Guess distribution (1–6)
