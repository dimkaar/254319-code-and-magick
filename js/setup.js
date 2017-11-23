'use strict';

var setupWindow = document.querySelector('.setup');
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardList = document.querySelector('.setup-similar-list');
var wizardSetup = document.querySelector('.setup-similar');
var fragment = document.createDocumentFragment();
var wizards = [];

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardFamilies = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 137)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (wizardParametrArray) {
  return wizardParametrArray[Math.floor(Math.random() * wizardParametrArray.length)];
};

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: getRandomElement(wizardNames) + ' ' + getRandomElement(wizardFamilies),
    coatColor: getRandomElement(coatColors),
    eyesColor: getRandomElement(eyesColors)
  };
}

for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));

}
wizardList.appendChild(fragment);

setupWindow.classList.remove('hidden');
wizardSetup.classList.remove('hidden');
