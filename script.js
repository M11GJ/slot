const reelSymbols = ['?', '?', '?', '?', '?'];
const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];
const resultDisplay = document.getElementById('result');

document.getElementById('spin').addEventListener('click', spinSlot);

function spinSlot() {
  const results = reels.map(reel => {
    const randomSymbol = reelSymbols[Math.floor(Math.random() * reelSymbols.length)];
    reel.textContent = randomSymbol;
    return randomSymbol;
  });
  
  if (results[0] === results[1] && results[1] === results[2]) {
    resultDisplay.textContent = '? Ÿ‚¿‚Ü‚µ‚½I ?';
  } else {
    resultDisplay.textContent = '‚à‚¤ˆê“x‚¨‚µ‚­‚¾‚³‚¢I';
  }
}