'use strict';


var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILIES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 137)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;


var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizards = [];

var getRandomElement = function (parameterArray) {
  return parameterArray[Math.floor(Math.random() * parameterArray.length)];
};

var generateWizardsData = function (numberOfWizards) {
  for (var i = 0; i < numberOfWizards; i++) {
    wizards[i] = {
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_FAMILIES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS)
    };
  }
};

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeSetupWindow();
  }
};

var openSetupWindow = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closeSetupWindow = function () {
  setupWindow.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var submitForm = function () {
  setupWizardForm.submit();
};

generateWizardsData(4);

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
var wizardList = document.querySelector('.setup-similar-list');
wizardList.appendChild(fragment);

var setupWindow = document.querySelector('.setup');
var wizardSetup = document.querySelector('.setup-similar');
wizardSetup.classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setupWindow.querySelector('.setup-close');
var setupSubmit = setupWindow.querySelector('.setup-submit');
var setupWizardForm = setupWindow.querySelector('.setup-wizard-form');

setupOpen.addEventListener('click', openSetupWindow);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetupWindow();
  }
});

setupClose.addEventListener('click', closeSetupWindow);

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetupWindow();
  }
});

setupSubmit.addEventListener('click', function () {
  submitForm();
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    submitForm();
  }
});
