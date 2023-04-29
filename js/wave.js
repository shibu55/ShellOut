$(document).ready(function() {
  const canvas = document.getElementById("waveCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const waves = [
    {
      y: canvas.height - 65,
      length: 0.01,
      amplitude: 30,
      frequency: 0.01,
      color: "rgba(255, 0, 0, 0.2)"
    },
    {
      y: canvas.height - 75,
      length: 0.015,
      amplitude: 25,
      frequency: 0.015,
      color: "rgba(0, 0, 255, 0.2)"
    }
  ];

  let elapsedTime = 0;

  function drawWave(wave) {
    ctx.beginPath();
    ctx.moveTo(0, wave.y);

    for (let x = 0; x < canvas.width; x++) {
      const y =
        wave.amplitude * Math.sin(x * wave.length + wave.frequency) + wave.y;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = wave.color;
    ctx.lineWidth = 5;
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
