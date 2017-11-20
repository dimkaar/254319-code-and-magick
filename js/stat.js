'use strict';

var getMaxElement = function (arr) {
  var maxElement = 0;
  for (var i = 0; i < arr.length; i++) {
    var currentElement = arr[i];
    if (maxElement < currentElement) {
      maxElement = currentElement;
    }
  }
  return maxElement;
};

var getRandomArbitrary = function (min, max) {
  return Math.random() * (max - min) + min;
};

var drawPlot = function (obj, time, index, ctx) {
  ctx.fillRect(obj.initialX + obj.indent * index, obj.initialY, obj.width, time * obj.step);
};

var writeScores = function (obj, ctx, time, name, index) {
  ctx.fillStyle = '#000000';
  ctx.fillText(Math.round(time), obj.initialX + obj.indent * index, obj.initialYScore);
  ctx.fillText(name, obj.initialX + obj.indent * index, obj.initialYName);
};

window.renderStatistics = function (ctx, names, times) {
  var gradient = ctx.createLinearGradient(100, 10, 420, 270);
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(1, '#dddddd');

  ctx.fillStyle = '#000000';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = gradient;
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 170, 40);
  ctx.fillText('Список результатов:', 170, 60);

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
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = histogramParameters.colorPlayer;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomArbitrary(0.2, 1) + ')';
    }
    histogramParameters.step = histogramParameters.height / getMaxElement(times);
    histogramParameters.initialYScore = Math.round(235 - times[i] * histogramParameters.step);
    histogramParameters.initialY = Math.round(240 - times[i] * histogramParameters.step);
    drawPlot(histogramParameters, times[i], i, ctx);
    writeScores(histogramParameters, ctx, times[i], names[i], i);
  }
};
