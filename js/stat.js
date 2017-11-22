'use strict';

var histogramParameters = {
  initialX: 150,
  initialYName: 260,
  initialYScore: 80,
  initialY: 0,
  height: 150,
  width: 40,
  indent: 90,
  colorPlayer: 'rgba(255, 0, 0, 1)'
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomArbitrary = function (min, max) {
  return Math.random() * (max - min) + min;
};

var drawPlot = function (ctx, time, step, index) {
  ctx.fillRect(histogramParameters.initialX + histogramParameters.indent * index, histogramParameters.initialY, histogramParameters.width, time * step);
};

var writeScores = function (ctx, time, name, index) {
  ctx.fillStyle = '#000000';
  ctx.fillText(Math.round(time), histogramParameters.initialX + histogramParameters.indent * index, histogramParameters.initialYScore);
  ctx.fillText(name, histogramParameters.initialX + histogramParameters.indent * index, histogramParameters.initialYName);
};

window.renderStatistics = function (ctx, names, times) {
  var gradient = ctx.createLinearGradient(100, 10, 420, 270);
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(1, '#dddddd');

  ctx.shadowColor = '#000000';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 0;
  ctx.fillStyle = gradient;
  ctx.fillRect(100, 10, 420, 270);
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 170, 40);
  ctx.fillText('Список результатов:', 170, 60);

  var step = histogramParameters.height / getMaxElement(times);
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = names[i] === 'Вы' ? histogramParameters.colorPlayer : 'rgba(0, 0, 255, ' + getRandomArbitrary(0.2, 1) + ')';
    histogramParameters.initialYScore = Math.round(235 - times[i] * step);
    histogramParameters.initialY = Math.round(240 - times[i] * step);
    drawPlot(ctx, times[i], step, i);
    writeScores(ctx, times[i], names[i], i);
  }
};
