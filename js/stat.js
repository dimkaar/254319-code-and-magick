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

var drawHistogram = function (obj, times, names, ctx, maxElement) {
  for (var i = 0; i < times.length; i++) {
    var step = obj.histogramHeight / maxElement;
    obj.initialY = Math.round(240 - times[i] * step);
    if (names[i] === 'Вы') {
      ctx.fillStyle = obj.colorPlayer;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomArbitrary(0.2, 1) + ')';
    }
    ctx.fillRect(obj.initialX + obj.indent * i, obj.initialY, obj.histogramWidth, times[i] * step);

    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(times[i]), obj.initialX + obj.indent * i, obj.initialYScore);
    ctx.fillText(names[i], obj.initialX + obj.indent * i, obj.initialYName);
  }
};

window.renderStatistics = function (ctx, names, times) {
  var gradient = ctx.createLinearGradient(100, 10, 420, 270);
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(1, '#dddddd');

  ctx.fillStyle = gradient;
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 170, 30);
  ctx.fillText('Список результатов:', 170, 50);

  var histogramParameters = {
    initialX: 150,
    initialYName: 260,
    initialYScore: 80,
    initialY: 0,
    histogramHeight: 150,
    histogramWidth: 40,
    indent: 90,
    colorPlayer: 'rgba(255, 0, 0, 1)'
  };

  drawHistogram(histogramParameters, times, names, ctx, getMaxElement(times));
};
