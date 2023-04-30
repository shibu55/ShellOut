$(document).ready(function() {
  const canvas = document.getElementById("waveCanvas");
  const ctx = canvas.getContext("2d");
  
  const devicePixelRatio = window.devicePixelRatio || 1;
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  
  ctx.scale(devicePixelRatio, devicePixelRatio);

  const waves = [
    {
      // yellow
      y: canvas.height * 1/devicePixelRatio - 40,
      length: 0.005,
      amplitude: 30,
      frequency: 0.05,
      color: "rgba(255,248,46, 0.5)"
    },
    {
      // orange
      y: canvas.height * 1/devicePixelRatio - 50,
      length: 0.007,
      amplitude: 25,
      frequency: 0.1,
      color: "rgba(255,157,46, 0.5)"
    }
  ];

  let elapsedTime = 0;

  function drawWave(wave) {
    ctx.beginPath();
    ctx.moveTo(0, wave.y);

    for (let x = 0; x < canvas.width; x+=0.5) {
      const y =
        wave.amplitude * Math.sin(x * wave.length + wave.frequency) + wave.y;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = wave.color;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function updateWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let wave of waves) {
      wave.frequency += 0.01;
      drawWave(wave);
    }

    elapsedTime += 0.01;

    // 振幅をゆるやかに変動させる（最小値を設定して直線にならないようにする）
    waves[0].amplitude = 20 + 10 * Math.sin(elapsedTime * 0.5);
    waves[1].amplitude = 15 + 10 * Math.sin(elapsedTime * 0.5 + Math.PI / 4);

    requestAnimationFrame(updateWaves);
  }

  updateWaves();
});
